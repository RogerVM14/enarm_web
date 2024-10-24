import React, { useEffect, useState } from "react";
import "../css/checkout/CheckoutPage.css";
import { useNavigate } from "react-router-dom";
import PaymentOptionsContainer from "../components/checkout/PaymentOptionsContainer";
import PaymentDetailsContainer from "../components/checkout/PaymentDetailsContainer";
import {
  resetCheckoutInformation,
  selectCardInformation,
} from "../store/reducers/checkout/checkoutInformationSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  createPaymentWithCard,
  createTokenCardForPayment,
  savePaymentInformationOnDataBase,
} from "../apis/Checkout/CardPayment";
import { ROUTES } from "../constants/routes";
import PaymentLoader from "../components/loaders/PaymentLoader";
import { selectUserCheckoutInformation } from "../store/reducers/user/UserInformationSlice";
import showToast from "../utils/toasts/commonToasts";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [stepDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const { cardNumber, cvv, expirationDate } = useSelector(
    selectCardInformation
  );
  const userInfo = useSelector(selectUserCheckoutInformation);
  const { user_email, password, user_id } = userInfo;

  const getWindowWidth = () => {
    let x = window.innerWidth;
    if (x < 576) return "xs";
    if (x >= 576 && x <= 767) return "sm";
    if (x >= 768 && x <= 991) return "md";
    if (x >= 992 && x <= 1199) return "lg";
    if (x >= 1200 && x <= 1399) return "xl";
    if (x >= 1400) return "xxl";
  };

  const [width, setWidth] = useState(getWindowWidth());

  useEffect(() => {
    window.addEventListener("resize", () => {
      const x = getWindowWidth();
      setWidth(x);
    });
  }, [width]);

  const isMobile = () => {
    if (["xs", "sm", "md"].includes(width)) return true;
    if (["lg", "xl", "xxl"].includes(width)) return false;
  };

  useEffect(() => {
    dispatch(resetCheckoutInformation());
  }, []);

  const handleSubmitPaymentInformation = async () => {
    const sanitizedCardNumber = cardNumber.replace(/-/g, "");
    const [expirationMonth, expirationYear] = expirationDate.split("/");
    setLoading(true);
    const payload = {
      cardNumber: sanitizedCardNumber,
      expirationMonth: parseInt(expirationMonth, 10),
      expirationYear: parseInt(expirationYear.slice(-2), 10),
      securityCode: cvv,
      cardholderName: "APRO", //Usar APRO para pruebas
      docType: "RFC",
      docNumber: "123456789012",
    };

    createTokenCardForPayment(payload)
      .then((response) => {
        if (response.data.statusCode === 200) {
          const { payment_method_id, token } = response?.data?.body;
          const createPaymentPayload = {
            token: token,
            transactionAmount: 100,
            description: "Compra curso ENARM",
            paymentMethodId: payment_method_id,
            installments: 1,
            payerEmail: "test_user@example.com",
          };
          createPaymentWithCard(createPaymentPayload).then((response) => {
            const data = response?.data.body;
            const { status, status_detail, id } = data;
            const comissions =
              data.transaction_details.total_paid_amount -
              data.transaction_details.net_received_amount;
            if (status === "approved" && status_detail === "accredited") {
              const paymentInfo = {
                user_id: user_id,
                payment_method: "Tarjeta",
                external_order_id: id,
                total: data.transaction_details.total_paid_amount || 0,
                subtotal: data.transaction_details.net_received_amount,
                commission: comissions,
                payment_transaction_status: status,
                payment_transaction_verification: true,
              };
              savePaymentInformationOnDataBase(paymentInfo)
                .then((res) => {
                  const message = res.data.status_Message;
                  if (message === "payment transaction success") {
                    setLoading(false);
                    navigate(ROUTES.CHECKOUT_SUCCESS);
                  } else {
                    setLoading(false);
                    showToast.error("Hubo un error al intentar pagar tu curso");
                  }
                })
                .catch((err) => {
                  setLoading(false);
                  showToast.error("Hubo un error al intentar pagar tu curso");
                });
            }
            setLoading(false);
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <>
      {loading && <PaymentLoader />}
      {!isMobile() ? (
        <>
          <div className={`background-gradial ${width}`}></div>
          <div className={`checkout-container ${width}`}>
            <h1 className="bold-47">Información de Pago</h1>
            <div className="payment-container">
              <PaymentOptionsContainer size={width} isMobile={isMobile()} />

              <PaymentDetailsContainer
                size={width}
                isMobile={isMobile()}
                handleSubmitPayment={handleSubmitPaymentInformation}
                isLoading={loading}
              />
            </div>
            <button
              type="submit"
              className={`backpage-btn ${width}`}
              onClick={() => {
                navigate(-1);
              }}
            >
              <i className="material-icons">chevron_left</i>
              <span className="montse-18">Volver</span>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={`background-gradial ${width}`}></div>
          <div className={`checkout-container ${width}`}>
            {!stepDetails && (
              <h1 className={`bold-${isMobile() ? "44 text-center" : "47"}`}>
                Seleccione método de Pago
              </h1>
            )}
            <div className="payment-container-medium">
              <PaymentOptionsContainer size={width} isMobile={isMobile()} />

              <PaymentDetailsContainer size={width} isMobile={isMobile()} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CheckoutPage;

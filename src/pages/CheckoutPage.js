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
  savePaymentWithCard,
} from "../apis/Checkout/CardPayment";
import { ROUTES } from "../constants/routes";
import PaymentLoader from "../components/loaders/PaymentLoader";
import {
  selectUserCheckoutEmail,
  selectUserCheckoutInformation,
} from "../store/reducers/user/UserInformationSlice";
import showToast from "../utils/toasts/commonToasts";
import moment from "moment";
import { CONFIG } from "../constants/config";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [stepDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const { cardNumber, cvv, expirationDate, cardOwnerName } = useSelector(
    selectCardInformation
  );
  const userInfo = useSelector(selectUserCheckoutInformation);
  const { user_id } = userInfo;

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
  const user_checkout_email = useSelector(selectUserCheckoutEmail);

  const handleSubmitPaymentInformation = async () => {
    const sanitizedCardNumber = cardNumber.replace(/-/g, "");
    const [expirationMonth, expirationYear] = expirationDate.split("/");
    setLoading(true);
    const payload = {
      cardNumber: sanitizedCardNumber,
      expirationMonth: parseInt(expirationMonth, 10),
      expirationYear: parseInt(expirationYear.slice(-2), 10),
      securityCode: cvv,
      // cardholderName: cardOwnerName,
      cardholderName: "APRO", //Usar para pruebas
      docType: "RFC",
      docNumber: "123456789012",
    };

    const fechaPago = moment().format("YYYY-MM-DD");

   
    createTokenCardForPayment(payload)
      .then((response) => {
        if (response.data.statusCode === 200) {
          const { token } = response?.data?.body;
          const createPaymentPayload = {
            token: token,
            transactionAmount: CONFIG.PRICE,
            description: "Compra curso ENARM",
            installments: 1,
            payerEmail: user_checkout_email || "",
            // payerEmail: "rvm2244@gmail.com" || "",  solo pruebas
          };
          createPaymentWithCard(createPaymentPayload).then((response) => {
            const data = response?.data.body;
            const { status, status_detail, id, message, error } = data;

            if(message === "Hubo un error al generar el pago"){
              if(error === "Payer email forbidden"){
                showToast.error("Tú email es inválido para realizar la compra")
              }
            }
            if (status === "rejected") {
              setLoading(false);
              showToast.error(
                "Tu tarjeta fue rechazada, intenta con otra o espera un momento"
              );
            }
            if (status === "approved" && status_detail === "accredited") {
              const comissions =
              data.transaction_details.total_paid_amount -
              data.transaction_details.net_received_amount; 
              const paymentInfo = {
                user_id: user_id,
                payment_method: "Tarjeta",
                external_order_id: id,
                total: data.transaction_details?.total_paid_amount || 0,
                subtotal: data.transaction_details?.net_received_amount| 0,
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

              <PaymentDetailsContainer
                size={width}
                isMobile={isMobile()}
                handleSubmitPayment={handleSubmitPaymentInformation}
                isLoading={loading}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CheckoutPage;

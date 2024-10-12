import React, { useEffect, useState } from "react";
import "../css/checkout/CheckoutPage.css";
import { useNavigate } from "react-router-dom";
import PaymentOptionsContainer from "../components/checkout/PaymentOptionsContainer";
import PaymentDetailsContainer from "../components/checkout/PaymentDetailsContainer";
import { selectCardInformation } from "../store/reducers/checkout/checkoutInformationSlice";
import { useSelector } from "react-redux";
import {
  createPaymentWithCard,
  createTokenCardForPayment,
} from "../apis/Checkout/CardPayment";
import { ROUTES } from "../constants/routes";
// import { useSelector } from "react-redux";
// import { selectUserInformation } from "../store/reducers/user/UserInformationSlice";
// import { CreateNewUser, loginUser } from "../apis/auth/authApi";
// import moment from "moment";
// import { getExpirationDate } from "../utils/DateFormats";
// import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../constants/Messages";
// import { setCookie } from "../utils/auth/cookieSession";
// import { errorToast } from "../utils/toasts/commonToasts";
// import Conekta from "../components/Conekta";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [stepDetails, setStepDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const { cardNumber, cvv, expirationDate, cardOwnerName } = useSelector(
    selectCardInformation
  );

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

  const handleSubmitPaymentInformation = async () => {
    const sanitizedCardNumber = cardNumber.replace(/-/g, "");
    const [expirationMonth, expirationYear] = expirationDate.split("/");
    setLoading(true);
    const payload = {
      cardNumber: sanitizedCardNumber,
      expirationMonth: parseInt(expirationMonth, 10), // Asegurarse de que sea un número
      expirationYear: parseInt(expirationYear.slice(-2), 10), // Solo los últimos 2 dígitos del año
      securityCode: cvv,
      // cardholderName: cardOwnerName,
      cardholderName: "APRO", //Usar APRO para pruebas
      docType: "RFC",
      docNumber: "123456789012",
    };

    console.log(payload);

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
          console.log(createPaymentPayload);
          createPaymentWithCard(createPaymentPayload).then((response) => {
            console.log(response);
            const { status, status_detail } = response?.data.body;
            console.log(status, status_detail);
            if(status === "approved" && status_detail === "accredited"){
              setLoading(false);
              navigate(ROUTES.CHECKOUT_SUCCESS);
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
  return !isMobile() ? (
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
        <div className="payment-container">
          {!stepDetails ? (
            <PaymentOptionsContainer
              size={width}
              isMobile={isMobile()}
              // paymentInfoSetState={setPaymentCheckoutInfo}
            />
          ) : (
            <PaymentDetailsContainer
              size={width}
              isMobile={isMobile()}
              // handleSubmitPayment={handleSubmitPaymentInformation}
            />
          )}
        </div>
        {!stepDetails && (
          <button
            type="submit"
            className={`button-rounded-blue-48 ${width}`}
            onClick={() => {
              setStepDetails(true);
            }}
          >
            <span className="button-text">Continuar a Detalles de Compra</span>
          </button>
        )}
      </div>
    </>
  );
};

export default CheckoutPage;

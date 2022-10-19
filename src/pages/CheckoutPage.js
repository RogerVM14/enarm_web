import React, { useContext, useState } from "react";
import "../css/checkout/CheckoutPage.css";
import { useNavigate } from "react-router-dom";
import PaymentOptionsContainer from "../components/checkout/PaymentOptionsContainer";
import PaymentDetailsContainer from "../components/checkout/PaymentDetailsContainer";
import WidthContext from "../contexts/WidthContext";
import conektaHelper from "../utils/conekta/conektaUtils";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [stepDetails, setStepDetails] = useState(false);
  const size = useContext(WidthContext);
  const isMobile = () => {
    if (["xs", "sm", "md"].includes(size)) return true;
    if (["lg", "xl", "xxl"].includes(size)) return false;
  };

  const [paymentCheckoutiInfo, setPaymentCheckoutInfo] = useState({
    cardNumber: "",
    cvv: "",
    expiredDate: "",
    cardOwnerName: "",
  });

  const handleSubmitPaymentInformation = () => {
    console.log(paymentCheckoutiInfo);
    console.log(
      "CardNumberValidation ",
      conektaHelper.validateCardNumber(paymentCheckoutiInfo.cardNumber)
    );
    console.log(
      "brandValidation ",
      conektaHelper.getCardBrand(paymentCheckoutiInfo.cardNumber)
    );
    console.log(
      "CardCvcValidation ",
      conektaHelper.validateCvc(paymentCheckoutiInfo.cvv)
    );
    console.log(
      "CardExpirationDateValidation ",
      conektaHelper.validateExpirationDate(paymentCheckoutiInfo.expiredDate)
    );
  };

  return !isMobile() ? (
    <>
      <div className={`background-gradial ${size}`}></div>
      <div className={`checkout-container ${size}`}>
        <h1 className="bold-47">Información de Pago</h1>
        <div className="payment-container">
          <PaymentOptionsContainer
            size={size}
            isMobile={isMobile()}
            paymentInfoSetState={setPaymentCheckoutInfo}
          />
          <PaymentDetailsContainer
            size={size}
            isMobile={isMobile()}
            paymentInfo={paymentCheckoutiInfo}
          />
        </div>
        <button
          type="submit"
          className={`backpage-btn ${size}`}
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
      <div className={`background-gradial ${size}`}></div>
      <div className={`checkout-container ${size}`}>
        {!stepDetails && (
          <h1 className={`bold-${isMobile() ? "44 text-center" : "47"}`}>
            Seleccione método de Pago
          </h1>
        )}
        <div className="payment-container">
          {!stepDetails ? (
            <PaymentOptionsContainer
              size={size}
              isMobile={isMobile()}
              paymentInfoSetState={setPaymentCheckoutInfo}
            />
          ) : (
            <PaymentDetailsContainer
              size={size}
              isMobile={isMobile()}
              handleSubmitPayment={handleSubmitPaymentInformation}
            />
          )}
        </div>
        {!stepDetails && (
          <button
            type="submit"
            className={`button-rounded-blue-48 ${size}`}
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

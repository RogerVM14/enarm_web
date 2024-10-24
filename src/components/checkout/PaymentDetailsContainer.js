import React from "react";
import {
  currentPaymenthMethodSelected,
  selectCardInformation,
} from "../../store/reducers/checkout/checkoutInformationSlice";
import { useSelector } from "react-redux";
import PurchaseDetails from "./PurchaseDetails";
import PurchaseMessage from "./PurchaseMessage";

const PaymentDetailsContainer = (props) => {
  const { size, isMobile, handleSubmitPayment, isLoading } = props;

  const selectedPaymentMethod = useSelector(currentPaymenthMethodSelected);
  const cardInformation = useSelector(selectCardInformation);
  const { cardNumber, cvv, expirationDate, cardOwnerName } = cardInformation;
  const shouldDisabled =
    !cardNumber || !cvv || !expirationDate || !cardOwnerName;

  const regularText = () => {
    return isMobile ? "regular-14" : "regular-16";
  };

  // const mediumText = () => {
  //   return isMobile ? "medium-14" : "medium-16";
  // };

  const boldText = () => {
    return isMobile ? "bold-14" : "bold-16";
  };

  return (
    <div className={`payment-details-box ${size}`}>
      <div
        className={`details-payments ${
          isMobile ? "details-payments-medium" : ""
        }`}
      >
        <PurchaseDetails
          size={size}
          isMobile={isMobile}
          regularText={regularText}
          boldText={boldText}
        />
        <PurchaseMessage regularText={regularText} boldText={boldText} />
        {selectedPaymentMethod === "card" &&  (
          <div className={`checkout-payment ${size}`}>
            <button
              className={`button-rounded-blue-48 ${
                shouldDisabled ? "button-rounded-blue-48--disabled" : ""
              }`}
              onClick={handleSubmitPayment}
              disabled={shouldDisabled}
            >
              <span className="button-text">
                {isLoading ? "Realizando tu pago" : "Aceptar compra"}
              </span>
            </button>
            <p className="regular-12">
              Al presionar el botón Aceptar compra accedes a adquirir el curso.
              Gracias por confirmar en nuestro servicio.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentDetailsContainer;

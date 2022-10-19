import React, { useContext, useState } from "react";
import "../css/checkout/CheckoutPage.css";
import { useNavigate } from "react-router-dom";
import PaymentOptionsContainer from "../components/checkout/PaymentOptionsContainer";
import PaymentDetailsContainer from "../components/checkout/PaymentDetailsContainer";
import WidthContext from "../contexts/WidthContext";
import conektaHelper from "../utils/conekta/conektaUtils";
import { createOrder } from "../apis/conekta/conektaApi";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [stepDetails, setStepDetails] = useState(false);
  // const [cardTokenId, setCardTokenId] = useState("");
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

  const successCallback = (res) => {
    // const orderData = {
    //   ...paymentCheckoutiInfo,
    //   cardTokenId: res.id,
    //   expiryMonth: paymentCheckoutiInfo.expiredDate.substring(0, 2),
    //   expiryYear: paymentCheckoutiInfo.expiredDate.substring(
    //     3,
    //     paymentCheckoutiInfo.expiredDate.length
    //   ),
    // };
    // console.log(orderData);
    const order = createOrder(res.id);
    order.then((res) => {
      console.log(res);
    });
  };
  const errorCallback = () => {
    console.log("Todo mal");
  };

  const handleSubmitPaymentInformation = async () => {
    // conektaHelper.tokenize(
    //   "4242424242424242",
    //   "Fernado Ochoa Sanchez",
    //   "12",
    //   "2023",
    //   "123",
    //   (res) => successCallback(res),
    //   errorCallback
    // );
    conektaHelper.tokenize(
      paymentCheckoutiInfo.cardNumber,
      paymentCheckoutiInfo.cardOwnerName,
      paymentCheckoutiInfo.expiredDate.substring(0, 2),
      paymentCheckoutiInfo.expiredDate.substring(
        3,
        paymentCheckoutiInfo.expiredDate.length
      ),
      paymentCheckoutiInfo.cvv,
      (res) => successCallback(res),
      errorCallback
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
            handleSubmitPayment={handleSubmitPaymentInformation}
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

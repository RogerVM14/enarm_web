import React from "react";
import "../../css/loaders/paymentLoader.css";

const PaymentLoader = () => {
  return (
   <div className="loader-container">
     <div className="payment-loader">
      <div className="pad">
        <div className="chip"></div>
        <div className="line line1"></div>
        <div className="line line2"></div>
      </div>
      <div className="loader-text">Espera mientras tu pago se procesa</div>
    </div>
   </div>
  );
};

export default PaymentLoader;

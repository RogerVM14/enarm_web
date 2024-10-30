import React from 'react';
import greenshield from "../../../assets/icons/checkout/greenshield.png";

const PurchaseMessage = ({ regularText, boldText }) => {
  return (
    <div className="message">
      <img
        style={{ display: "block", width: "24px", height: "24px" }}
        src={greenshield}
        alt="greenshield"
      />
      <p className={`${regularText()} white`}>
        Plataforma ENARM garantiza pago seguro y acceso inmediato a los
        contenidos.
        <br />
        <br />
        Recuerda que los medios de pago aquí presentes son los únicos que
        respaldan que tu operación sea segura y exitosa.
        <br />
        <br />
        <span className={boldText()}>¡No solicitamos pagos por otros medios!</span>
      </p>
    </div>
  );
};

export default PurchaseMessage;

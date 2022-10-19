import React from "react";
import { useNavigate } from "react-router-dom";
import greenshield from "../../assets/icons/checkout/greenshield.png";

const PaymentDetailsContainer = (props) => {
  const navigate = useNavigate();

  const { size, isMobile, handleSubmitPayment } = props;

  const regularText = () => {
    return isMobile ? "regular-14" : "regular-16";
  };

  const mediumText = () => {
    return isMobile ? "medium-14" : "medium-16";
  };

  const boldText = () => {
    return isMobile ? "bold-14" : "bold-16";
  };

  return (
    <div className={`payment-details-box ${size}`}>
      <div className="details-payments">
        <div className="details">
          <div className="details__top">
            <h1 className={`medium-${isMobile ? "29 text-center" : "33"}`}>
              Detalles de compra
            </h1>
            <p className={regularText()}>
              Curso: <strong className={boldText()}>Paquete 11 meses</strong>
            </p>
            <p className={regularText()}>
              Duración: <strong className={boldText()}>11 meses</strong>
            </p>
          </div>
          <hr />
          <div className="details__calculate">
            <div>
              <span className={regularText()}>Transacción:</span>
              <span className={regularText()}>$10,000.00</span>
            </div>
            <div>
              <span className={regularText()}>Descuento:</span>
              <span className={regularText()}>- $4,000.00</span>
            </div>
            <div>
              <span className={regularText()}>Tarjeta de Regalo:</span>
              <span className={regularText()}>$0.00</span>
            </div>
          </div>
          <div className="details__total">
            <span className={boldText()}>Total:</span>
            <span className={`bold-${isMobile ? "18" : "20"}`}>$6,000.00</span>
          </div>
        </div>
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
            <span className={boldText()}>
              ¡No solicitamos pagos por otros medios!
            </span>
          </p>
        </div>
        <div className={`checkout-payment ${size}`}>
          <button
            className="button-rounded-blue-48"
            // type="submit"
            onClick={() => handleSubmitPayment()}
          >
            <span className="button-text">Aceptar compra</span>
          </button>
          <p className="regular-12">
            Al presionar el botón Aceptar compra accedes a adquirir el curso.
            Gracias por confirmar en nuestro servicio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsContainer;

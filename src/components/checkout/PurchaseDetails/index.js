import React from 'react';

const PurchaseDetails = ({ size, isMobile, regularText, boldText }) => {
  return (
    <div className="details">
      <div className="details__top">
        <h1 className={`medium-${isMobile ? "29 text-center" : "33"}`}>
          Detalles de compra
        </h1>
        <p className={regularText()}>
           <strong className={boldText()}>Paquete Curso ENARM</strong>
        </p>
        {/* <p className={regularText()}>
          Duración: <strong className={boldText()}>11 meses</strong>
        </p> */}
      </div>
      <hr />
      <div className="details__calculate">
        <div>
          <span className={regularText()}>Transacción:</span>
          <span className={regularText()}>$18,000.00</span>
        </div>
        <div>
          <span className={regularText()}>Descuento:</span>
          <span className={regularText()}>- $11,700.00</span>
        </div>
        {/* <div>
          <span className={regularText()}>Tarjeta de Regalo:</span>
          <span className={regularText()}>$0.00</span>
        </div> */}
      </div>
      <div className="details__total">
        <span className={boldText()}>Total:</span>
        <span className={`bold-${isMobile ? "18" : "20"}`}>$6,300.00</span>
      </div>
    </div>
  );
};

export default PurchaseDetails;

import React, { useState } from "react";
// import oxxopay from "../../assets/icons/checkout/oxxopay.png";
import americanexpress from "../../assets/icons/checkout/americanexpress.png";
import visa from "../../assets/icons/checkout/visa.png";
import mastercard from "../../assets/icons/checkout/mastercard.png";
import mercadoPago from "../../assets/icons/checkout/mercadopago.webp";
import CheckoutForm from "../MercadoPago/CheckoutForm";
import { useDispatch, useSelector } from "react-redux";
import {
  currentPaymenthMethodSelected,
  selectCardInformation,
  setPaymentMethod,
  updateCardInformation,
} from "../../store/reducers/checkout/checkoutInformationSlice";

const PaymentOptionsContainer = (props) => {
  const { size, isMobile } = props;

  // Redux hooks
  const dispatch = useDispatch();

  // Obtener la información desde Redux
  const selectedPaymentMethod = useSelector(currentPaymenthMethodSelected);
  const { cardNumber, cvv, expirationDate, cardOwnerName } = useSelector(
    selectCardInformation
  );

  const [showMercadoPago, setShowMercadoPago] = useState(
    selectedPaymentMethod === "mercadoPago"
  );

  const regularText = () => (isMobile ? "regular-14" : "regular-16");
  const mediumText = () => (isMobile ? "medium-14" : "medium-16");
  const boldText = () => (isMobile ? "bold-14" : "bold-16");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "cardOwnerName" && !/^[a-zA-Z\s]*$/.test(value)) {
      return; 
    }
    dispatch(updateCardInformation(name, value));
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); 
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1-"); 
    handleChange({ target: { name: "cardNumber", value: formattedValue } });
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); 
    handleChange({ target: { name: "cvv", value: value.slice(0, 4) } });
  };

  const handleExpireDateChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); 
    let formattedValue = value;
    if (value.length > 2) {
      formattedValue = `${value.slice(0, 2)}/${value.slice(2, 6)}`; 
    }
    handleChange({ target: { name: "expirationDate", value: formattedValue } });
  };

  const handlePaymentMethodChange = (event) => {
    dispatch(setPaymentMethod(event.target.value));
    setShowMercadoPago(event.target.value === "mercadoPago");
  };

  return (
    <div className={`payment-options-box ${size}`}>
      <div className="options-payments">
        {/* Otras opciones de pago */}
        <div className="payment oxxo-payment">
          <div className="payment__head">
            <div className="payment-type">
              <div className="input-span">
                <input
                  type="radio"
                  name="payment-input"
                  value="mercadoPago"
                  onChange={handlePaymentMethodChange}
                  checked={selectedPaymentMethod === "mercadoPago"}
                />
                <span className={boldText()}>Mercado Pago</span>
              </div>
              <div className="options-imgs">
                <img width={110} src={mercadoPago} alt="mercado-pago" />
              </div>
            </div>
            <p className={regularText()}>
              La plataforma de pago más confiable de Latinoamérica. Usa tus
              tarjetas de crédito y débito.
            </p>
          </div>
          {/* Renderizar el CheckoutForm solo si el usuario selecciona Mercado Pago */}
          {showMercadoPago && (
            <div className="checkout-form">
              <CheckoutForm />
            </div>
          )}
        </div>

        <div className="payment bank-payment selected">
          <div className="payment__head">
            <div className="payment-type">
              <div className="input-span">
                <input
                  type="radio"
                  name="payment-input"
                  value="card"
                  checked={selectedPaymentMethod === "card"}
                  onChange={handlePaymentMethodChange}
                />
                <span className={boldText()}>Tarjeta Bancaria</span>
              </div>
              <div className="options-imgs">
                <img src={americanexpress} alt="american-express" />
                <img src={visa} alt="visa" />
                <img src={mastercard} alt="mastercard" />
              </div>
            </div>
            <p className={regularText()}>
              Transferencias seguras o pago a crédito con tarjetas
              participantes.
            </p>
          </div>

          {/* Formulario de tarjeta bancaria */}
          {selectedPaymentMethod === "card" && (
            <div className="payment__body">
              <div className="payment-form">
                <form action="">
                  <div className="form-input">
                    <label className={mediumText()} htmlFor="cardNumber">
                      Número de Tarjeta
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={cardNumber}
                      autoComplete="off"
                      maxLength={19}
                      placeholder="1111-2222-3333-4444"
                      onChange={handleCardNumberChange}
                    />
                  </div>

                  {isMobile ? (
                    <>
                      <div className="form-input">
                        <label className={mediumText()} htmlFor="cvv">
                          Código CVV
                        </label>
                        <input
                          className="regular-14"
                          type="text"
                          name="cvv"
                          value={cvv}
                          maxLength={4}
                          placeholder="xxx"
                          onChange={handleCvvChange}
                        />
                      </div>
                      <div className="form-input">
                        <label className={mediumText()} htmlFor="expirationDate">
                          Fecha de Vencimiento
                        </label>
                        <input
                          className="regular-14"
                          type="text"
                          name="expirationDate"
                          value={expirationDate}
                          placeholder="MM/YYYY"
                          maxLength={7}
                          onChange={handleExpireDateChange}
                        />
                      </div>
                    </>
                  ) : (
                    <div className="two-input-forms">
                      <div className="form-input">
                        <label className={mediumText()} htmlFor="cvv">
                          Código CVV
                        </label>
                        <input
                          className="regular-14"
                          type="text"
                          name="cvv"
                          value={cvv}
                          autoComplete="off"
                          maxLength={4}
                          placeholder="xxx"
                          onChange={handleCvvChange}
                        />
                      </div>
                      <div className="form-input">
                        <label className={mediumText()} htmlFor="expirationDate">
                          Fecha de Vencimiento
                        </label>
                        <input
                          className="regular-14"
                          type="text"
                          name="expirationDate"
                          value={expirationDate}
                          autoComplete="off"
                          maxLength={7}
                          placeholder="MM/YYYY"
                          onChange={handleExpireDateChange}
                        />
                      </div>
                    </div>
                  )}

                  <div className="form-input">
                    <label className={mediumText()} htmlFor="cardOwnerName">
                      Nombre de Tarjetahabiente
                    </label>
                    <input
                      className="regular-14"
                      type="text"
                      autoComplete="off"
                      name="cardOwnerName"
                      value={cardOwnerName}
                      placeholder="Nombre como aparece en tarjeta"
                      onChange={handleChange}
                    />
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentOptionsContainer;

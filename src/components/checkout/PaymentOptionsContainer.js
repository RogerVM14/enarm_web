import React, { useEffect } from "react";
// import oxxopay from "../../assets/icons/checkout/oxxopay.png";
// import americanexpress from "../../assets/icons/checkout/americanexpress.png";
// import visa from "../../assets/icons/checkout/visa.png";
// import mastercard from "../../assets/icons/checkout/mastercard.png";
import Conekta from "../Conekta";

// import paypal from "../../assets/icons/checkout/paypal.png";
const PaymentOptionsContainer = (props) => {
  // const [cardNumber, setCardNumber] = useState("");
  // const [cvvCode, setCvvCode] = useState("");
  // const [expireDate, setExpireDate] = useState("");

  const { size, handleSuccesPayment } = props;
  // const { size, isMobile, paymentInfoSetState } = props;

  // const regularText = () => {
  //   return isMobile ? "regular-14" : "regular-16";
  // };

  // const mediumText = () => {
  //   return isMobile ? "medium-14" : "medium-16";
  // };

  // const boldText = () => {
  //   return isMobile ? "bold-14" : "bold-16";
  // };

  useEffect(() => {}, []);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   paymentInfoSetState((prevState) => {
  //     return {
  //       ...prevState,
  //       [name]: value,
  //     };
  //   });
  // };

  // const onlyNumberValidation = (event) => {
  //   if (!Number(event.target.value) && event.target.value !== "") return false;
  //   handleChange(event);
  //   return true;
  // };

  //Handles Functions
  //   const handleOwnerName = (name) => setCardOwnerName(name);
  //   const handleCvvNumber = (cvv) => setCvv(cvv);
  //   const handleExpireDate = (date) => setExpirationDate(date);
  //   const handleCardNumber = (cardNumber) => setCardNumber(cardNumber);

  return (
    <div className={`payment-options-box ${size}`}>
      <div className="options-payments">
        <Conekta handleSuccess = { handleSuccesPayment} />
        {/* <div className="payment oxxo-payment">
          <div className="payment__head">
            <div className="payment-type">
              <div className="input-span">
                <input type="radio" name="payment-input" id="" />
                <span className={boldText()}>Oxxo Pay</span>
              </div>
              <div className="options-imgs">
                <img src={oxxopay} alt="oxxo-pay" />
              </div>
            </div>
            <p className={regularText()}>
              Obtén un número de referencia para pagar con efectivo en tu OXXO
              más cercano.
            </p>
          </div>
        </div> */}
        {/* <div className="payment paypal-payment">
          <div className="payment__head">
            <div className="payment-type">
              <div className="input-span">
                <input type="radio" name="payment-input" id="" />
                <span className={boldText()}>PayPal</span>
              </div>
              <div className="options-imgs">
                <img src={paypal} alt="paypal" />
              </div>
            </div>
            <p className={regularText()}>
              Pagos seguros en línea. Es necesario contar con Tarjeta de
              Crédito. Cuenta de PayPal no es necesaria.
            </p>
          </div>
        </div> */}
        {/* <div className="payment bank-payment selected">
          <div className="payment__head">
            <div className="payment-type">
              <div className="input-span">
                <input type="radio" name="payment-input" id="" />
                <span className={boldText()}>Tarjeta Bancaria</span>
              </div>
              <div className="options-imgs">
                <img src={americanexpress} alt="american-express" />
                <img src={visa} alt="visa" />
                <img src={mastercard} alt="mastercard" />
              </div>
            </div>
            <p className={regularText()}>
              Transferencias seguras o pago a crédito con tarjetas particpantes.
            </p>
          </div>
          <hr
            style={{
              width: "calc(100% - 64px)",
              margin: "0 auto",
              background: "rgba(150, 172, 188, 1)",
            }}
          />
          <div className="payment__body">
            <div className="payment-form">
              <form action="">
                <div className="form-input">
                  <label className={mediumText()} htmlFor="">
                    Número de Tarjeta
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    id=""
                    value={cardNumber}
                    autoComplete="off"
                    maxLength={16}
                    placeholder="6655-8844-2233-5599"
                    onChange={(e) => {
                      if (!onlyNumberValidation(e)) return;
                      setCardNumber(e.target.value);
                      handleChange(e);
                    }}
                  />
                </div>
                {isMobile ? (
                  <>
                    <div className="form-input">
                      <label className={mediumText()} htmlFor="">
                        Código CVV
                      </label>
                      <input
                        className="regular-14"
                        type="text"
                        autoComplete="off"
                        name="cvv"
                        id=""
                        value={cvvCode}
                        maxLength={4}
                        placeholder="xxx"
                        onChange={(e) => {
                          if (!onlyNumberValidation(e)) return;
                          setCvvCode(e.target.value);
                          handleChange(e);
                        }}
                      />
                    </div>
                    <div className="form-input">
                      <label className={mediumText()} htmlFor="">
                        Fecha de Vencimiento
                      </label>
                      <input
                        className="regular-14"
                        type="text"
                        autoComplete="off"
                        name="expiredDate"
                        maxLength={5}
                        id=""
                        value={expireDate}
                        placeholder="MM/YY"
                        onChange={(e) => {
                          setExpireDate(e.target.value);
                          handleChange(e);
                        }}
                      />
                    </div>
                  </>
                ) : (
                  <div className="two-input-forms">
                    <div className="form-input">
                      <label className={mediumText()} htmlFor="">
                        Código CVV
                      </label>
                      <input
                        className="regular-14"
                        type="text"
                        name="cvv"
                        id=""
                        autoComplete="off"
                        value={cvvCode}
                        maxLength={4}
                        placeholder="xxx"
                        onChange={(e) => {
                          if (!onlyNumberValidation(e)) return;
                          setCvvCode(e.target.value);
                          handleChange(e);
                        }}
                      />
                    </div>
                    <div className="form-input">
                      <label className={mediumText()} htmlFor="">
                        Fecha de Vencimiento
                      </label>
                      <input
                        className="regular-14"
                        type="text"
                        name="expiredDate"
                        id=""
                        value={expireDate}
                        autoComplete="off"
                        maxLength={5}
                        placeholder="MM/YY"
                        onChange={(e) => {
                          setExpireDate(e.target.value);
                          handleChange(e);
                        }}
                      />
                    </div>
                  </div>
                )}
                <div className="form-input">
                  <label className={mediumText()} htmlFor="">
                    Nombre de Tarjetahabiente
                  </label>
                  <input
                    className="regular-14"
                    type="text"
                    autoComplete="off"
                    name="cardOwnerName"
                    id=""
                    placeholder="Nombre como aparece en tarjeta"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PaymentOptionsContainer;

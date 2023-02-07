import React, { useRef, useState } from "react";
import "../css/VerifyEmailCode.css";
import verifyIcon from "../assets/icons/verify-email-icon.png";
const VerifyEmailCodePage = () => {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const fields = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const handleChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
    if (event.target.value.length === 1) {
      fields.current[index + 1].current.focus();
    }
  };

  return (
    <div className="main-container">
      <div className="verify-email-container">
        <div className="verify-img">
          <img src={verifyIcon} alt="verify-icon" />
        </div>
        <div className="verify-your-email">
          <p> Verifica tú Correo Electrónico </p>
        </div>
        <div className="we-sent-message">
          <p>
            Hemos enviado un código de verificación a la cuenta de correo
            electrónico <strong> ejemplo@gmail.com</strong>. Asegúrate de
            revisar la carpeta de SPAM, en caso de no encontrarlo en tu bandeja
            principal.
          </p>
        </div>

        {/* Code Fields */}

        <div className="code-fields-container">
          {values.map((value, index) => (
            <div className="input-container">
              <input
                key={index}
                type="text"
                value={value}
                maxLength={1}
                autoComplete="new-password"
                onChange={(event) => handleChange(index, event)}
                ref={fields.current[index]}
              />
            </div>
          ))}
        </div>
        <div className="verify-button-container">
          <button> Verificar </button>
        </div>
        <div className="email-verify-footer">
          <p>Puede tomar un minuto el recibir el código.</p>
          <p>¿No haz recibido el código?</p>
          <p style={{marginTop:"10px"}}>
            <strong >Reenviar nuevo código</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailCodePage;

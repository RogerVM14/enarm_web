import React, { useRef, useState } from "react";
import "../css/VerifyEmailCode.css";
import verifyIcon from "../assets/icons/verify-email-icon.png";
import { useSelector } from "react-redux";
import { selectUserEmail } from "../store/reducers/user/UserInformationSlice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { verifyEmailCode } from "../apis/auth/authApi";
const VerifyEmailCodePage = () => {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const [isReadyToVerify, setIsReadyToVerify] = useState(false);
  const navigate = useNavigate();
  const fields = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const email = useSelector(selectUserEmail);

  const handleChange = (index, event) => {
    const newValues = [...values];
    const code = values.join("");
    newValues[index] = event.target.value;
    setValues(newValues);
    if (event.target.value.length === 1) {
      if (index + 1 < fields.current.length) {
        fields.current[index + 1].current.focus();
      }
    }
    if (code.length + 1 === 6) {
      setIsReadyToVerify(true);
    } else {
      setIsReadyToVerify(false);
    }
  };

  const handleVerifyCode = () => {
    const code = values.join("");
    // console.log(code);
    verifyEmailCode(email, code)
      .then((res) => {
        if (res.data.ResponseMetadata.HTTPStatusCode === 200) {
          navigate(ROUTES.CHECKOUT);
        }
      })
      .catch((err) => console.log(err));
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
            electrónico <strong> {email} </strong>. Asegúrate de revisar la
            carpeta de SPAM, en caso de no encontrarlo en tu bandeja principal.
          </p>
        </div>

        {/* Code Fields */}

        <div className="code-fields-container">
          {values.map((value, index) => (
            <div className="input-container" key={index}>
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
          <button disabled={!isReadyToVerify} onClick={handleVerifyCode}>
            {" "}
            Verificar{" "}
          </button>
        </div>
        <div className="email-verify-footer">
          <p>Puede tomar un minuto el recibir el código.</p>
          <p>¿No haz recibido el código?</p>
          <p style={{ marginTop: "10px" }}>
            <strong>Reenviar nuevo código</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailCodePage;

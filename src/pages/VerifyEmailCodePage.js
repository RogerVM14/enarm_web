import React, { useRef, useState, useEffect } from "react";
import "../css/VerifyEmailCode.css";
import verifyIcon from "../assets/icons/verify-email-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { selectUserCheckoutInformation, setUserInformation } from "../store/reducers/user/UserInformationSlice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { loginUser, verifyEmailCode } from "../apis/auth/authApi";
import showToast from "../utils/toasts/commonToasts";
import { selectIsGuestUser } from "../store/reducers/general/general";
import { setCookie } from "../utils/auth/cookieSession";

const VerifyEmailCodePage = () => {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const [isReadyToVerify, setIsReadyToVerify] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const isGuestUser = useSelector(selectIsGuestUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fields = useRef(
    Array.from({ length: 6 }, () => React.createRef())
  );

  const userInfo = useSelector(selectUserCheckoutInformation);
  const { user_email, user_id, password } = userInfo;

  useEffect(() => {
    fields.current[0].current.focus();
  }, []);

  const getConcatenatedValues = () =>
    fields.current.map((fieldRef) => fieldRef.current.value).join("");

  const handleChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);

    if (event.target.value.length === 1) {
      if (index + 1 < fields.current.length) {
        fields.current[index + 1].current.focus();
      }
    }

    if (newValues.every((value) => value.trim() !== "")) {
      setIsReadyToVerify(true);
    } else {
      setIsReadyToVerify(false);
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !values[index] && index > 0) {
      fields.current[index - 1].current.focus();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      fields.current[index - 1].current.focus();
    } else if (event.key === "ArrowRight" && index < fields.current.length - 1) {
      fields.current[index + 1].current.focus();
    }
  };

  const handleVerifyCode = async () => {
    setIsLoading(true);
    setErrorMessage("");
    const verifyCode = getConcatenatedValues();
    const payload = {
      user_email,
      auth_code: verifyCode,
      user_id,
    };

    try {
      const res = await verifyEmailCode(payload);
      const message = res.data.status_Message;
      if (message === "authentication expired") {
        setErrorMessage("El código es inválido o ya expiró");
      } else if (message === "authentication done") {
        setErrorMessage("");
        showToast.success("Tú correo fue verificado");
        if (isGuestUser) {
          const loginResponse = await loginUser({
            new_user_email: user_email,
            new_user_password: password,
            environment: "platform",
          });

          if (loginResponse.data.status_Message === "valid user") {
            const { auth_token, ...rest } = loginResponse.data;
            dispatch(setUserInformation(rest));
            setCookie("accessToken", auth_token);
            showToast.success("Bienvenido");
            navigate(ROUTES.PLATAFORMA_DASHBOARD, { replace: true });
          } else {
            showToast.error("El usuario o la contraseña son incorrectos");
          }
        } else {
          navigate(ROUTES.CHECKOUT);
        }
      }
    } catch (error) {
      setErrorMessage(
        "Hubo un error con la verificación. Por favor, inténtalo nuevamente."
      );
    } finally {
      setIsLoading(false);
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
            electrónico <strong>{user_email}</strong>. Asegúrate de revisar la
            carpeta de SPAM, en caso de no encontrarlo en tu bandeja principal.
          </p>
        </div>

        <div className="code-fields-container">
          {values.map((value, index) => (
            <div className="input-container" key={index}>
              <input
                type="text"
                value={value}
                maxLength={1}
                autoComplete="off"
                onChange={(event) => handleChange(index, event)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                ref={fields.current[index]}
                style={{
                  border: "1px solid #00000026",
                  fontFamily: "PoppinsLight",
                  fontSize: "32px",
                  lineHeight: "48px",
                  textAlign: "center",
                  color: "black",
                }}
              />
            </div>
          ))}
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="verify-button-container">
          <button
            onClick={handleVerifyCode}
            disabled={!isReadyToVerify || isLoading}
          >
            {isLoading ? (
              <>
                <span className="loader"></span> Verificando
              </>
            ) : (
              "Verificar"
            )}
          </button>
        </div>

        <div className="email-verify-footer">
          <p>Puede tomar un minuto el recibir el código.</p>
          <p>¿No has recibido el código?</p>
          <p style={{ marginTop: "10px" }}>
            <strong>Reenviar nuevo código</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailCodePage;

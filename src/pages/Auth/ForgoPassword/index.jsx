import React, { useState } from "react";
import "./forgotPassword.css";
import { ROUTES } from "../../../constants/routes";
import { requestOTPForPasswordChange } from "../../../apis/auth/authApi";
import { useNavigate } from "react-router-dom";
import showToast from "../../../utils/toasts/commonToasts";
import { useDispatch } from "react-redux";
import {
  setForgotPassEmail,
  setIsUserOnProcess,
  setNextStepOnForgotPassword,
  setUserIdForForgotPass,
} from "../../../store/reducers/forgotPassword/forgotPassword";
function PasswordRecovery() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Función para validar el correo electrónico
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Manejar el cambio de input y validar el email
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail));
  };

  const handleRequestOTP = (e) => {
    e.preventDefault();

    if (isEmailValid) {
      setIsLoading(true);
      requestOTPForPasswordChange(email)
        .then((res) => { 
          if (
            res.data.status_Message !== "change password request failed" &&
            res.data.user_id !== ""
          ) {
            navigate(ROUTES.OTP_VERIFICATION, { replace: true });
            showToast.success("Código envíado correctamente");
            dispatch(setIsUserOnProcess(true));
            dispatch(setNextStepOnForgotPassword(1));
            dispatch(setUserIdForForgotPass(res.data.user_id));
            dispatch(setForgotPassEmail(email))
          } else {
            showToast.error("Hubo un error al envíar el código");
          }
          setIsLoading(false);
        })
        .catch((err) => { 
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="password-recovery-container">
      <div className="password-recovery-card">
        <h2 className="password-recovery-title">¿Olvidaste tu contraseña?</h2>
        <p className="password-recovery-subtitle">
          Recibirás un código de verificación para continuar con el proceso.
        </p>
        <form className="password-recovery-form">
          <label htmlFor="email" className="password-recovery-email-label">
            Ingresa tu correo
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="roberto@gmail.com"
            className="password-recovery-email-input"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </form>
        <button
          type="button"
          className="password-recovery-reset-button"
          onClick={handleRequestOTP}
          disabled={!isEmailValid || isLoading}
        >
          Enviar código
        </button>
        <div className="password-recovery-footer-links">
          <p className="password-recovery-subtitle">
            ¿La recordaste?{" "}
            <a href={ROUTES.LOGIN} className="password-recovery-login-link">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PasswordRecovery;

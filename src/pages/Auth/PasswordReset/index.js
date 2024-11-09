import React, { useState } from "react";
import "./PasswordReset.css";
import { useSelector } from "react-redux";
import {
  selectCurrentAuthCode,
  selectEmailForRestablishPass,
} from "../../../store/reducers/forgotPassword/forgotPassword";
import { reestablishUserPasswordByOTP } from "../../../apis/auth/authApi";
import showToast from "../../../utils/toasts/commonToasts";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { encryptPassword } from "../../../utils/auth";

function PasswordReset() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const authCode = useSelector(selectCurrentAuthCode);
  const email = useSelector(selectEmailForRestablishPass);
  const navigate = useNavigate();

  const reestablishPwInfo = {
    user_email: email,
    new_auth_code: authCode,
    new_password: encryptPassword(password),
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleClick = () => {
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      setSuccess("");
    } else if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      setSuccess("");
    } else {
      reestablishUserPasswordByOTP(reestablishPwInfo).then((res) => {
        if (res.data.status_Message === "password changed") {
          showToast.success("Tu contraseña fue cambiada correctamente");
          setSuccess("Tu contraseña fue cambiada correctamente");
        }
      });
      setError("");
    }
  };

  return (
    <div className="password-reset-page-container">
      <div className="password-reset-box">
        {success ? (
          <div>
            <h4>Contraseña Cambiada</h4>
            <p>Tu contraseña fue cambiada correctamente.</p>
            <button
              type="button"
              className="login-button"
              onClick={() => navigate(ROUTES.LOGIN)}
            >
              Ir al inicio de sesión
            </button>
          </div>
        ) : (
          <>
            <h4>Reestablece tu contraseña</h4>
            <form>
              <div className="password-reset-input-group">
                <label htmlFor="password">Nueva contraseña </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="password-reset-input-group">
                <label htmlFor="confirmPassword">Confirma tu contraseña</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  autoComplete="off"
                  required
                />
              </div>
              {error && <p className="password-reset-error-message">{error}</p>}
            </form>
            <button
              type="button"
              className="password-reset-button"
              onClick={handleClick}
            >
              Reestablecer Contraseña
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default PasswordReset;

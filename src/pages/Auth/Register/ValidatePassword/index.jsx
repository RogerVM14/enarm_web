import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  passwordMeetsRegistrationPolicy,
  REGISTRATION_PASSWORD_HINT,
} from "../../../../utils/auth/passwordPolicy";
import "./ValidatePassword.css";

const PASSWORD_HINT_ID = "register-password-hint";

function ValidatePasswordInput(props) {
  const { password, setPassword, handleChange, passwordReady } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    handleChange(event);
    passwordReady(passwordMeetsRegistrationPolicy(value));
  };

  return (
    <div className="password-field">
      <div className="password-input-row">
        <input
          type={showPassword ? "text" : "password"}
          className="input-password"
          name="password"
          id="form-password"
          placeholder="Tu contraseña"
          value={password}
          onChange={handlePasswordChange}
          autoComplete="new-password"
          aria-describedby={PASSWORD_HINT_ID}
        />
        <button
          type="button"
          className="password-toggle"
          onClick={() => setShowPassword((v) => !v)}
          aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
        >
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </button>
      </div>
      <p id={PASSWORD_HINT_ID} className="password-hint">
        {REGISTRATION_PASSWORD_HINT}
      </p>
    </div>
  );
}

export default ValidatePasswordInput;

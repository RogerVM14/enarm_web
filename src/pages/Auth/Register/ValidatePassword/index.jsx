import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
import "./ValidatePassword.css";

function ValidatePasswordInput(props) {
  const { password, setPassword, handleChange, passwordReady } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState({
    length: false,
    number: false,
    specialChar: false,
    uppercase: false,
    lowercase: false,
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    handleChange(event);

    const regexList = [
      { regex: /(?=.{8,})/, type: "length" },
      { regex: /\d+/, type: "number" },
      { regex: /[!@#$%^&*(),.?":{}|<>]+/, type: "specialChar" },
      { regex: /[A-Z]+/, type: "uppercase" },
      { regex: /[a-z]+/, type: "lowercase" },
    ];

    const newIsValid = { ...isValid };
    regexList.forEach(({ regex, type }) => {
      newIsValid[type] = regex.test(value);
    });
    setIsValid(newIsValid);
    passwordReady(Object.values(newIsValid).every((value) => value));
  };



  return (
    <div className="password-input">
      <input
        type={showPassword ? "text" : "password"}
        className="input-password"
        name="password"
        id="form-password"
        placeholder="Tu contraseña"
        value={password}
        onChange={handlePasswordChange}
        autoComplete="new-password"
      />

      <div className="password-icon" onClick={toggleShowPassword}>
        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
      </div>
      <div className="password-validations">
        <div className="password-validation">
          {isValid.length ? (
            <BsPatchCheckFill style={{ color: "green" }} />
          ) : (
            <BsPatchCheckFill style={{ color: "#808080" }} />
          )}
          <span>8 caracteres</span>
        </div>
        <div className="password-validation">
          {isValid.number ? (
            <BsPatchCheckFill style={{ color: "green" }} />
          ) : (
            <BsPatchCheckFill style={{ color: "#808080" }} />
          )}
          <span>1 número</span>
        </div>
        <div className="password-validation">
          {isValid.specialChar ? (
            <BsPatchCheckFill style={{ color: "green" }} />
          ) : (
            <BsPatchCheckFill style={{ color: "#808080" }} />
          )}
          <span>1 carácter especial</span>
        </div>
        <div className="password-validation">
          {isValid.uppercase ? (
            <BsPatchCheckFill style={{ color: "green" }} />
          ) : (
            <BsPatchCheckFill style={{ color: "#808080" }} />
          )}
          <span>1 letra mayúscula</span>
        </div>
        <div className="password-validation">
          {isValid.lowercase ? (
            <BsPatchCheckFill style={{ color: "green" }} />
          ) : (
            <BsPatchCheckFill style={{ color: "#808080" }} />
          )}
          <span>1 letra minúscula</span>
        </div>
      </div>
    </div>
  );
}

export default ValidatePasswordInput;

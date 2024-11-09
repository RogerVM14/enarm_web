import React, { useState, useEffect } from "react";
import "./OTPVerification.css";
import OtpIcon from "../../../assets/icons/otp.svg";
import {
  verifyEmailCode,
  verifyOTPForChangePassword,
} from "../../../apis/auth/authApi";
import { useDispatch, useSelector } from "react-redux";
import {
  selectEmailForRestablishPass,
  selectUserIdForForgotPassword,
  setAuthCode,
} from "../../../store/reducers/forgotPassword/forgotPassword";
import showToast from "../../../utils/toasts/commonToasts";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Cambiado a 6 elementos
  const [isButtonActive, setIsButtonActive] = useState(false);
  const userID = useSelector(selectUserIdForForgotPassword);
  const email = useSelector(selectEmailForRestablishPass);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus on the next input if it's within bounds
    if (value && index < 5) {
      document
        .getElementById(`otpInput${index + 1}`)
        .removeAttribute("disabled");
      document.getElementById(`otpInput${index + 1}`).focus();
    }

    // Activate button if all inputs are filled
    setIsButtonActive(newOtp.every((digit) => digit !== ""));
  };

  const handleSubmitOTPCode = (e) => {
    e.preventDefault();
    // console.log(otp);
    // alert(`OTP enviado: ${otp.join("")}`);
    const confirmCode = otp.join("");
    const payload = {
      user_email: email,
      auth_code: confirmCode,
      user_id: userID,
    };
    verifyOTPForChangePassword(payload)
      .then((res) => {
        if (res.data.status_Message === "password authentication done") {
          showToast.success("Verificación exitosa");
          dispatch(setAuthCode(confirmCode));
          navigate(ROUTES.RESTABLISH_PASSWORD);
        } else {
          showToast.error("El código es incorrecto");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && index > 0) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      document.getElementById(`otpInput${index - 1}`).focus();
    }
  };

  useEffect(() => {
    // Disable all inputs except the first one on load
    otp.forEach((_, index) => {
      if (index !== 0) {
        document
          .getElementById(`otpInput${index}`)
          .setAttribute("disabled", true);
      }
    });
    // Focus on the first input when the component mounts
    document.getElementById("otpInput0").focus();
  }, []);

  return (
    <div className="container">
      <header className="icon-circle">
        <img src={OtpIcon} alt="otpIcon" className="otp-icon" />
      </header>
      <h4>Ingresa el código</h4>
      <form>
        <div className="input-field">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otpInput${index}`}
              type="number"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
            />
          ))}
        </div>
        <button
          onClick={handleSubmitOTPCode}
          className={isButtonActive ? "active" : ""}
          disabled={!isButtonActive}
        >
          Verificar código
        </button>
      </form>
    </div>
  );
}

export default OTPVerification;

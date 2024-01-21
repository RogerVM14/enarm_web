import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../apis/auth/authApi";
import doctorImage from "../../assets/imgs/Dres/stock-photo-surgeon-wearing-blue-uniform-stethoscope-small.png";
import { ERROR_MESSAGES } from "../../constants/Messages";
import { setCookie } from "../../utils/auth/cookieSession";
import { validateEmailFormat } from "../../utils/commons/commonFunctions";
import { errorToast } from "../../utils/toasts/commonToasts";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "../../css/LoginPage.css";
import ui from "./index.module.css";

const LoginPage = () => {

  setTimeout(() => { 
    const items = document.querySelectorAll(".reveal-load");
    items.forEach((item) => item.classList.add("active"));
  }, 100);

  return (
    <div className={ui.login}>
      <div className={ui.loginContainer}>
        <div className={ui.subContainer}>
          <div className={ui.containerHead}>
            <h1 className="title fade-in-title">
              <span className={ui.containerTitle}>¡Bienvenido</span>
              <span className={ui.containerTitle}>de</span>
              <span className={ui.containerTitle}>nuevo!</span>
            </h1>
          </div>
          <div className="container-body">
            <FormLogin />
          </div>
        </div>
        <div className={ui.imageContainer}>
          <img src={doctorImage} alt="doctor-pic" />{" "}
        </div>
        <div className={ui.triangle}></div>
      </div>
    </div>
  );
};

const FormLogin = () => {

  const [userEmail, setEmail] = useState("");
  const [userPass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = validateEmailFormat(userEmail);

    if (isValidEmail && userPass) {

      loginUser({ username: userEmail, password: userPass })
        .then((res) => {
          if (res.data.statusCode === 200) {
            console.log(
              "Iniciando Sesion",
              res.data.responseData.AccessToken
            );
            setCookie("accessToken", res.data.responseData.AccessToken);
            navigate("/u/dashboard", { replace: true });
          } else if (res.data.statusCode) {
            if (res.data.statusCode !== 200) {
              errorToast(res.data.message);
            }
          }
        })
        .catch((err) => {
          console.log(err.message);
          const error = err.response.data.message;
          errorToast(ERROR_MESSAGES[error]);
        });
    }
  };

  return (
    <div className="form-container reveal-load">
      <form method="POST" onSubmit={handleSubmit}>
        <div className={ui.formGroup}>
          <label className={ui.formLabel} htmlFor="form-user">Usuario o Correo electrónico*</label>
          <input
            type="text"
            name="user"
            id="form-user"
            placeholder="Tu usuario o corréo electrónico"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          /> 
          {
            emailError && (
              <span className={`${ui.formLabel} red`}>
                Introduce un correo válido
              </span>
            )
          }
        </div>
        <div className={ui.formGroup}>
          <label className={ui.formLabel} htmlFor="form-password">Contraseña*</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={userPass}
              onChange={(e) => {
                setPass(e.currentTarget.value);
              }}
            />

            <div className="password-login-icon" onClick={toggleShowPassword}>
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>

          {
            passwordError && (
              <span className={`${ui.formLabel} red`}>
                Introduzca una contraseña válida
              </span>
            )
          }
          <div className={ui.subGroup}>
            <Link className={`${ui.linkLabel} sky-blue no-style`} to="#" > Olvidé Contraseña </Link>
            <div className={ui.checkBox}>
              <input type="checkbox" name="remember" id="checkbox-remember" />
              <label className={ui.linkLabel} htmlFor="checkbox-remember">Recordarme</label>
            </div>
          </div>
        </div>
        <button className="button-rounded-blue-48" type="submit">
          <span className="button-text">Iniciar Sesión</span>
        </button>
        <hr style={{ margin: "2rem 0 1rem 0" }} />
        <p className="flex-row-nw jc-center gap-8">
          <span className={ui.linkLabel}>¿Aun no eres miembro?</span>
          <Link className={`${ui.linkLabel} sky-blue no-style`} to="/registrate" > Registrate Ahora </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../apis/auth/authApi";
import doctorImage from "../../../assets/imgs/Dres/stock-photo-surgeon-wearing-blue-uniform-stethoscope-small.png";
import { ERROR_MESSAGES } from "../../../constants/Messages";
import { setCookie } from "../../../utils/auth/cookieSession";
import { validateEmailFormat } from "../../../utils/commons/commonFunctions";
import showToast from "../../../utils/toasts/commonToasts";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./LoginPage.css";
import ui from "./index.module.css";
import LandingLayout from "../../Layouts/Landing";
import { useDispatch } from "react-redux";
import {
  setCheckoutUserId,
  setUserInformation,
} from "../../../store/reducers/user/UserInformationSlice";
import { ROUTES } from "../../../constants/routes";
import { encryptPassword } from "../../../utils/auth";

const LoginPage = () => {
  setTimeout(() => {
    const items = document.querySelectorAll(".reveal-load");
    items.forEach((item) => item.classList.add("active"));
  }, 100);

  return (
    <LandingLayout page="login" footer={false}>
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
    </LandingLayout>
  );
};

const FormLogin = () => {
  const [userEmail, setEmail] = useState("");
  const [userPass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError] = useState(false);
  const [passwordError] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = validateEmailFormat(userEmail);

    if (isValidEmail && userPass) {
      loginUser({
        new_user_email: userEmail,
        new_user_password: encryptPassword(userPass.toLocaleLowerCase()),
        environment: "platform",
      })
        .then((res) => {
          if (res.data.status_Message === "valid user") {
            const { status_Message, ...rest } = res.data;
            if (!rest.has_payments) {
              showToast.info(
                "No haz realizado tu pago aún, procede a realizarlo"
              );
              dispatch(setCheckoutUserId(rest.user_id));
              navigate(ROUTES.CHECKOUT);
            } else {
              dispatch(setUserInformation(rest));
              setCookie("accessToken", rest.auth_token);

              navigate(ROUTES.PLATAFORMA_DASHBOARD, { replace: true });
            }
          } else if (res.data.status_Message === "invalid user") {
            showToast.error("El usuario o la contraseña son incorrectos");
          } else {
            showToast.error("Hubo un error inesperado");
          }
        })
        .catch((err) => {
          // console.log(err.message);
          const error = err.response.data.message;
          showToast.error(ERROR_MESSAGES[error]);
        });
    }
  };

  return (
    <div className="form-container reveal-load">
      <form method="POST" onSubmit={handleSubmit}>
        <div className={ui.formGroup}>
          <label className={ui.formLabel} htmlFor="form-user">
            Usuario o Correo electrónico*
          </label>
          <input
            type="text"
            name="user"
            id="form-user"
            placeholder="Tu usuario o corréo electrónico"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
          {emailError && (
            <span className={`${ui.formLabel} red`}>
              Introduce un correo válido
            </span>
          )}
        </div>
        <div className={ui.formGroup}>
          <label className={ui.formLabel} htmlFor="form-password">
            Contraseña*
          </label>
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

          {passwordError && (
            <span className={`${ui.formLabel} red`}>
              Introduzca una contraseña válida
            </span>
          )}
          {/* <div className={ui.subGroup}>
            <Link className={`${ui.linkLabel} sky-blue no-style`} to="#">
              {" "}
              Olvidé Contraseña{" "}
            </Link>
            <div className={ui.checkBox}>
              <input type="checkbox" name="remember" id="checkbox-remember" />
              <label className={ui.linkLabel} htmlFor="checkbox-remember">
                Recordarme
              </label>
            </div>
          </div> */}
        </div>
        <button className="button-rounded-blue-48" type="submit" style={{marginTop:"20px"}}>
          <span className="button-text">Iniciar Sesión</span>
        </button>
        <hr style={{ margin: "2rem 0 1rem 0" }} />
        <p className="flex-row-nw jc-center gap-8">
          <span className={ui.linkLabel}>¿Aun no eres miembro?</span>
          <Link className={`${ui.linkLabel} sky-blue no-style`} to="/registro">
            {" "}
            Registrate Ahora{" "}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;



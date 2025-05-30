import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { closeUserRemoteSession, loginUser } from "../../../apis/auth/authApi";
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
import ConfirmDialogModal from "../../../components/ConfirmDialogModal";

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
            <img src={doctorImage} alt="doctor-pic" />
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
  const [emailError, setEmailError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado de carga
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAccept = () => {
    setIsSubmitting(true);
    closeUserRemoteSession({
      user_email: userEmail,
      user_password: encryptPassword(userPass),
      environment: "platform",
    })
      .then((res) => {
        const { status_Message, ...rest } = res.data;
        if (!rest.has_payments && rest.user_role_id !== 4) {
          showToast.info("No haz realizado tu pago aún, procede a realizarlo");
          dispatch(setCheckoutUserId(rest.user_id));
          navigate(ROUTES.CHECKOUT);
        } else {
          dispatch(setUserInformation(rest));
          setCookie("accessToken", rest.auth_token);
          navigate(ROUTES.PLATAFORMA_DASHBOARD, { replace: true });
        }
      })
      .catch(() => {
        showToast.error(
          "Hubo un error al cerrar la otra sesión, intenta nuevamente"
        );
        setIsModalOpen(false);
      })
      .finally(() => setIsSubmitting(false));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const isValidEmail = validateEmailFormat(userEmail);

    if (isValidEmail && userPass) {
      setIsSubmitting(true); // Activar el spinner
      loginUser({
        new_user_email: userEmail,
        new_user_password: encryptPassword(userPass),
        environment: "platform",
      })
        .then((res) => {
          if (res.data.status_Message === "user logged") {
            setIsModalOpen(true);
          }
          if (res.data.status_Message === "valid user") {
            const { status_Message, ...rest } = res.data;

            if (!rest.has_payments && rest.user_role_id !== 4) {
              showToast.info(
                "No haz realizado tu pago aún, procede a realizarlo"
              );
              dispatch(setCheckoutUserId(rest.user_id));
              navigate(ROUTES.CHECKOUT);
            } else {
              dispatch(setUserInformation(rest));

              setCookie("accessToken", rest.auth_token);

              setTimeout(() => {
                window.location.href = ROUTES.PLATAFORMA_DASHBOARD;
              }, 100);
            }
          }
          if (res.data.status_Message === "invalid user") {
            showToast.error("El usuario o la contraseña son incorrectos");
          }
        })
        .catch((err) => {
          const error = err.response?.data?.message || "Error desconocido";
          showToast.error(ERROR_MESSAGES[error]);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      setEmailError(!isValidEmail);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="form-container reveal-load">
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
              setEmailError(false);
            }}
            onKeyDown={handleKeyDown}
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
              onChange={(e) => setPass(e.currentTarget.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="password-login-icon" onClick={toggleShowPassword}>
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>
          <div className={ui.subGroup}>
            <Link
              className={`${ui.linkLabel} sky-blue no-style`}
              to={ROUTES.FORGOT_PASSWORD}
            >
              Olvidé mi contraseña
            </Link>
          </div>
        </div>
        <button
          className={`button-rounded-blue-48 ${
            isSubmitting ? "button-rounded-blue-48--disabled" : ""
          } flex items-center justify-center gap-2`}
          type="button"
          style={{ marginTop: "20px" }}
          onClick={handleSubmit}
          disabled={
            isSubmitting || !validateEmailFormat(userEmail) || !userPass
          }
        >
          {isSubmitting ? (
            <>
              <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full border-white"></div>
              <span className="button-text">Iniciando Sesión</span>
            </>
          ) : (
            <span className="button-text">Iniciar Sesión</span>
          )}
        </button>
        <hr style={{ margin: "2rem 0 1rem 0" }} />
        <p className="flex-row-nw jc-center gap-8">
          <span className={ui.linkLabel}>¿Aun no eres miembro?</span>
          <Link className={`${ui.linkLabel} sky-blue no-style`} to="/registro">
            Registrate Ahora
          </Link>
        </p>
      </div>
      <ConfirmDialogModal
        isOpen={isModalOpen}
        onAccept={handleAccept}
        onCancel={handleCancel}
        title="Cierre de sesión"
        description="Hemos detectado una sesión activa, al dar continuar, esta será cerrada automáticamente"
      />
    </>
  );
};

export default LoginPage;

/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import doctorImage from "../../../assets/imgs/Dres/stock-photo-doctor-wearing-white-coat-stethoscope-small.png";
import { ROUTES } from "../../../constants/routes";
import {
  resetUserInformation,
  setCheckoutUserInformation,
} from "../../../store/reducers/user/UserInformationSlice";
import "./RegisterPage.css";
import ui from "./index.module.css";
import LandingLayout from "../../Layouts/Landing";
import ValidatePassword from "./ValidatePassword";
import { CreateNewUser } from "../../../apis/auth/authApi";
import showToast from "../../../utils/toasts/commonToasts";
import { resetCheckoutInformation } from "../../../store/reducers/checkout/checkoutInformationSlice";
import { encryptPassword } from "../../../utils/auth";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetCheckoutInformation());
    dispatch(resetUserInformation());
  }, []);

  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleRegisterInformation = async () => {
    const insertUser = async () => {
      const { email, password } = userInfo;
      const encryptPass = encryptPassword(password.toLocaleLowerCase());
      const userInformation = { user_email: email, password: encryptPass };
      console.log(userInformation);

      CreateNewUser(userInformation)
        .then((res) => {
          const message = res.data.status_Message;
          if (message === "email exists")
            showToast.warning("Este email ya está en uso");
          if (message === "user was added successfully") {
            showToast.success("Tu usuario ha sido creado");
            const checkoutInf = {
              ...userInformation,
              user_id: res?.data?.user_id,
            };
            dispatch(setCheckoutUserInformation(checkoutInf));
            navigate(ROUTES.VERIFICAR_CORREO, { replace: true });
          }
        })
        .catch((err) => {
          console.log(err);
          showToast.error(
            "Hubo un error al crear tu usuario, intenta nuevamente"
          );
        });
    };
    insertUser();
  };

  setTimeout(() => {
    const items = document.querySelectorAll(".reveal-load");
    items.forEach((item) => item.classList.add("active"));
  }, 100);

  return (
    <LandingLayout page="register" footer={false}>
      <div className={ui.register}>
        <div className={ui.registerContainer}>
          <div className={ui.subContainer}>
            <div className={ui.containerHead}>
              <h1 className="title fade-in-title">
                <span className={ui.containerTitle}>Registro</span>
              </h1>
            </div>
            <div className="container-body">
              <RegisterForm
                handleUserInfo={setUserInfo}
                handleRegister={handleRegisterInformation}
              />
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

const RegisterForm = ({ handleUserInfo, handleRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [passwordComplete, setPasswordComplete] = useState(false);

  const handleClick = async () => {
    if (!isValidEmail()) return;
    if (!isValidPassword()) return;
    await handleRegister();
  };

  const validFormatEmail = EMAIL_REGEX.test(email);
  const isValidEmail = () => {
    if (email === "" || !validFormatEmail) {
      setEmailError(true);
      return false;
    }
    setEmailError(false);
    return true;
  };

  const isValidPassword = () => {
    if (password === "") {
      setPasswordError(true);
      return false;
    }
    setPasswordError(false);
    return true;
  };

  const handleChangeUserInformation = (event) => {
    const { name, value } = event.target;
    handleUserInfo((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return (
    <div className="form-container reveal-load">
      <div>
        <div className={ui.formGroup}>
          <label className={ui.formLabel} htmlFor="form-user">
            Correo electrónico*
          </label>
          <input
            type="text"
            name="email"
            id="form-email"
            autoComplete="off"
            placeholder="Correo electrónico"
            onChange={(e) => {
              handleChangeUserInformation(e);
              setEmail(e.target.value);
            }}
          />
          {emailError ? (
            <span className={`${ui.formLabel} red`}>
              Introduce un correo válido
            </span>
          ) : null}
        </div>
        <div className={ui.formGroup} style={{ marginBottom: "0" }}>
          <label className={ui.formLabel} htmlFor="form-password">
            Contraseña*
          </label>
          <ValidatePassword
            password={password}
            setPassword={setPassword}
            handleChange={handleChangeUserInformation}
            passwordReady={setPasswordComplete}
          />
          {passwordError ? (
            <span className={`${ui.formLabel} red`}>
              Introduce una contraseña válida
            </span>
          ) : null}
        </div>
        <button
          disabled={!validFormatEmail || !passwordComplete}
          className={ui.submitButton}
          type="button"
          onClick={handleClick}
        >
          <span className="button-text">Registrar</span>
        </button>
        <p className="flex-row-nw jc-center gap-8">
          <span className={ui.linkLabel}>¿Ya eres miembro?</span>
          <Link className="regular-14 sky-blue no-style" to={ROUTES.LOGIN}>
            Iniciar Sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

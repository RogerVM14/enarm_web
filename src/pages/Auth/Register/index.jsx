/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { CreateNewUser } from "../../../apis/auth/authApi";
import doctorImage from "../../../assets/imgs/Dres/stock-photo-doctor-wearing-white-coat-stethoscope-small.png";
import ValidatePassword from "./ValidatePassword";
import { TYPE_USER } from "../../../constants/generals";
import { ROUTES } from "../../../constants/routes";
import { setUserInformation } from "../../../store/reducers/user/UserInformationSlice";
import "./RegisterPage.css";
import ui from "./index.module.css";
import LandingLayout from "../../Layouts/Landing";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleRegisterInformation = async () => {

    const { name, email, password, phone } = userInfo;
    const userInformation = {
      userName: name,
      email,
      password,
      phone: `+52${phone}`,
    };

    dispatch(setUserInformation(userInformation));

    CreateNewUser(
      email,
      password,
      name,
      phone,
      TYPE_USER.USER_PREMIUM
    ).then((res) => {
      if (res.data.statusCode === 200) {
        navigate(ROUTES.VERIFICAR_CORREO);
      }
    });
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
                <span className={ui.containerTitle}>
                  Registro
                </span>
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

const RegisterForm = ({
  handleUserInfo,
  handleRegister,
}) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidName()) return;
    if (isValidEmail()) return;
    if (isValidPassword()) return;
    if (isValidPhone()) return;

    await handleRegister();
  };

  const isValidName = () => {
    if (name === "") {
      setNameError(true);
      return false;
    }
    if (name !== "" && nameError === true) {
      setNameError(false);
      return true;
    }
    return true;
  }

  const isValidEmail = () => {

    const isValid = EMAIL_REGEX.test(email);
    if (email === "" || !isValid) {
      setEmailError(true);
      return false;
    }
    setEmailError(false);
    return true;
  }

  const isValidPassword = () => {
    if (password === "") {
      setPasswordError(true);
      return false;
    }
    setPasswordError(false);
    return true;
  }

  const isValidPhone = () => {
    if (phone === "") {
      setPhoneError(true);
      return false;
    }
    setPhoneError(false);
    return true;
  }

  const handleChangeUserInformation = (event) => {
    const { name, value } = event.target;
    handleUserInfo((prevState) => {
      return { ...prevState, [name]: value, };
    });
  };

  const onlyNumberValidation = (event) => {
    if (!Number(event.target.value) && event.target.value !== "") return false;
    handleChangeUserInformation(event);
    return true;
  };

  return (
    <div className="form-container reveal-load">
      <form method="POST" onSubmit={handleSubmit}>
        <div className={ui.formGroup}>
          <label className={ui.formLabel} htmlFor="form-user">
            Nombre completo*
          </label>
          <input
            type="text"
            name="name"
            id="form-fullname"
            autoComplete="off"
            placeholder="Federico Peréz Ochoa"
            onChange={(e) => {
              handleChangeUserInformation(e);
              setName(e.target.value);
            }}
          />
          {nameError ? (<span className={`${ui.formLabel} red`}> introduce un nombre personal válido </span>) : null}
        </div>
        <div className={ui.formGroup}>
          <label className={ui.formLabel} htmlFor="form-user">
            Correo electrónico*
          </label>
          <input
            type="text"
            name="email"
            id="form-email"
            autoComplete="off"
            placeholder="Corréo electrónico"
            onChange={(e) => {
              handleChangeUserInformation(e);
              setEmail(e.target.value);
            }}
          />
          {emailError ? (<span className={`${ui.formLabel} red`}> Introduce un correo válido </span>) : null}
        </div>
        <div className={ui.formGroup} style={{ marginBottom: "0" }}>
          <label className={ui.formLabel} htmlFor="form-password">
            Contraseña*
          </label>
          <ValidatePassword
            password={password}
            setPassword={setPassword}
            handleChange={handleChangeUserInformation}
          />
          {passwordError ? (<span className={`${ui.formLabel} red`}> Introduzca una contraseña válida </span>) : null}
        </div>
        <div className={ui.formGroup}>
          <label className={ui.formLabel} htmlFor="form-password">
            Numero Telefónico*
          </label>
          <input
            type="text"
            name="phone"
            id="form-phone"
            placeholder="355-5454-845"
            autoComplete="off"
            maxLength={10}
            value={phone}
            onChange={(e) => {
              if (!onlyNumberValidation(e)) return;
              setPhone(e.target.value);
            }}
          />
          {phoneError ? (<span className={`${ui.formLabel} red`}> introduce un numero teléfonico válido </span>) : null}
        </div>
        <button className={ui.submitButton} type="submit">
          <span className="button-text">Registrar</span>
        </button>
        <p className="flex-row-nw jc-center gap-8">
          <span className={ui.linkLabel}>¿Ya eres miembro?</span>
          <Link className="regular-14 sky-blue no-style" to="/login">
            Iniciar Sesión
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;

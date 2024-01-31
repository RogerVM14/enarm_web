/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { CreateNewUser } from "../../apis/auth/authApi";
import doctorImage from "../../assets/imgs/Dres/stock-photo-doctor-wearing-white-coat-stethoscope-small.png";
import ValidatePasswordInput from "../../components/validate_password/ValidatePasswordInput";
import { TYPE_USER } from "../../constants/generals";
import { ROUTES } from "../../constants/routes";
import { setUserInformation } from "../../store/reducers/user/UserInformationSlice";
import "../../css/RegisterPage.css";
import ui from "./index.module.css";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

const RegisterPage = (props) => {
  //Redux dispatch function
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userRegisterInformation, setUserRegisterInformation] = useState({
    nameUser: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleRegisterInformation = () => {

    const { nameUser, email, password, phoneNumber } = userRegisterInformation;
    const userInformation = {
      userName: nameUser,
      email,
      password,
      phone: `+52${phoneNumber}`,
    };

    dispatch(setUserInformation(userInformation));

    CreateNewUser(
      email,
      password,
      nameUser,
      phoneNumber,
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
              setUserRegisterInformationHandler={setUserRegisterInformation}
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
  );
};

const RegisterForm = ({
  setUserRegisterInformationHandler,
  handleRegister,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState(""); 
  const [nameUserError, setNameUserError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameUser === "") {
      setNameUserError(true);
      return;
    } else {
      setNameUserError(false);
    }

    if (emailUser === "" || !EMAIL_REGEX.test(emailUser)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    if (passwordUser === "") {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    if (phoneNumber === "") {
      setPhoneNumberError(true);
      return;
    } else {
      setPhoneNumberError(false);
    }

    handleRegister();
  };

  const handleChangeUserInformation = (event) => {
    const { name, value } = event.target;
    // console.log({ name, value });
    setUserRegisterInformationHandler((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
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
            name="nameUser"
            id="form-fullname"
            autoComplete="off"
            placeholder="Federico Peréz Ochoa"
            onChange={(e) => {
              handleChangeUserInformation(e);
              setNameUser(e.target.value);
            }}
          />
          {
            nameUserError && (
              <span className={`${ui.formLabel} red`}>
                introduce un nombre personal válido
              </span>
            )
          }
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
              setEmailUser(e.target.value);
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
        <div className={ui.formGroup} style={{ marginBottom: "0" }}>
          <label className={ui.formLabel} htmlFor="form-password">
            Contraseña*
          </label>
          <ValidatePasswordInput
            password={passwordUser}
            setPassword={setPasswordUser}
            handleChange={handleChangeUserInformation}
          />
          {
            passwordError && (
              <span className={`${ui.formLabel} red`}>
                Introduzca una contraseña válida
              </span>
            )
          }
        </div>
        <div className={ui.formGroup}>
          <label className={ui.formLabel} htmlFor="form-password">
            Numero Telefónico*
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="form-phoneNumber"
            placeholder="355-5454-845"
            autoComplete="off"
            maxLength={10}
            value={phoneNumber}
            onChange={(e) => {
              if (!onlyNumberValidation(e)) return;
              setPhoneNumber(e.target.value);
            }}
          />
          {
            phoneNumberError && (
              <span className={`${ui.formLabel} red`}>
                introduce un numero teléfonico válido
              </span>
            )
          }
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

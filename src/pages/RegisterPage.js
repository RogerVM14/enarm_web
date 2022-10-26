import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import doctorImage from "../assets/imgs/Dres/stock-photo-doctor-wearing-white-coat-stethoscope-small.png";
import WidthContext from "../contexts/WidthContext";
import "../css/RegisterPage.css";
import { setUserInformation } from "../store/reducers/user/UserInformationSlice";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const EMAIL_REGEX = /^\S+@\S+\.\S+$/;


const RegisterPage = (props) => {
    //Redux dispatch function
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userRegisterInformation, setUserRegisterInformation] = useState({
        fullname: "",
        email: "",
        password: "",
        phoneNumber: "",
    });

    const handleRegisterInformation = () => {
        dispatch(setUserInformation(userRegisterInformation));
        navigate("/checkout");
    };

    setTimeout(() => {
        const items = document.querySelectorAll(".reveal-load");
        items.forEach((item) => {
            item.classList.add("active");
        });
    }, 100);

    const size = useContext(WidthContext);

    const isMobile = () => {
        if (["xs", "sm", "md"].includes(size)) return true;
        if (["lg", "xl", "xxl"].includes(size)) return false;
    };

    return (
        <div className="register">
            <div className="register-container">
                {!isMobile() ? (
                    <>
                        <div className="__container">
                            <div className="container-head">
                                <h1 className="title text-center fade-in-title">
                                    <span className={isMobile() ? "bold-44" : "bold-47"}>
                                        Registro
                                    </span>
                                </h1>
                            </div>
                            <div className="container-body">
                                <RegisterForm
                                    size={size}
                                    setUserRegisterInformationHandler={setUserRegisterInformation}
                                    handleRegister={handleRegisterInformation}
                                />
                            </div>
                        </div>
                        <div className="image-container">
                            <img src={doctorImage} alt="doctor-pic" />
                        </div>
                        <div className="triangle"></div>
                    </>
                ) : (
                    <>
                        <div className="container-head">
                            <h1 className="title text-center">Registro</h1>
                        </div>
                        <div className="container-body">
                            <RegisterForm
                                size={size}
                                setUserRegisterInformationHandler={setUserRegisterInformation}
                                handleRegister={handleRegisterInformation}
                            />
                        </div>
                        <div className="image-container">
                            <img src={doctorImage} alt="doctor-pic" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const RegisterForm = ({ size, setUserRegisterInformationHandler, handleRegister, }) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [nameUser, setNameUser] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nameUser === '') {
            window.alert("Introduzca nombre completo.");
            return;
        }

        if (emailUser === '' || !EMAIL_REGEX.test(emailUser)) {
            window.alert("Introduzca un correco electrónico válido.");
            return;
        }

        if (passwordUser === '') {
            window.alert("Introduzca una contraseña.");
            return;
        }

        if (phoneNumber === '') {
            window.alert("Introduzca un numero teléfonico válido.");
            return;
        }

        handleRegister();
    };

    const isMobile = () => {
        if (["xs", "sm", "md"].includes(size)) return true;
        if (["lg", "xl", "xxl"].includes(size)) return false;
    };

    const fontSizeClass = (type) => {
        const fontSizePixels = isMobile() === true ? "14" : "16";
        return `${type}-${fontSizePixels}`;
    };

    const handleChangeUserInformation = (event) => {

        if (!Number(event.target.value)) return;

        const { name, value } = event.target;

        console.log({ name, value });
        setUserRegisterInformationHandler((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const onlyNumberValidation = (event) => {

        if (!Number(event.target.value) && event.target.value !== '') return false;
        handleChangeUserInformation(event);
        return true;
    }


    return (
        <div className="form-container reveal-load">
            <form method="POST" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className={fontSizeClass("medium")} htmlFor="form-user">
                        Nombre completo*
                    </label>
                    <input
                        type="text"
                        name="fullname"
                        id="form-fullname"
                        autocomplete="off"
                        placeholder="Federico Peréz Ochoa"
                        onChange={(e) => {
                            handleChangeUserInformation(e);
                            setNameUser(e.target.value);
                        }}
                    />
                    {/* <span className={`${fontSizeClass('medium')} red`}>Error message</span> */}
                </div>
                <div className="form-group">
                    <label className={fontSizeClass("medium")} htmlFor="form-user">
                        Correo electrónico*
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="form-email"
                        autocomplete="off"
                        placeholder="Corréo electrónico"
                        onChange={(e) => {
                            handleChangeUserInformation(e);
                            setEmailUser(e.target.value);
                        }}
                    />
                    {/* <span className={`${fontSizeClass('medium')} red`}>Error message</span> */}
                </div>
                <div className="form-group">
                    <label className={fontSizeClass("medium")} htmlFor="form-password">
                        Contraseña*
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="form-password"
                        placeholder="Tu contraseña"
                        onChange={(e) => {
                            handleChangeUserInformation(e);
                            setPasswordUser(e.target.value);
                        }}
                    />
                    {/* <span className={`${fontSizeClass('medium')} red`}>Error message</span> */}
                </div>
                <div className="form-group">
                    <label className={fontSizeClass("medium")} htmlFor="form-password">
                        Numero Telefónico*
                    </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        id="form-phoneNumber"
                        placeholder="355-5454-845"
                        autocomplete="off"
                        maxLength={10}
                        value={phoneNumber}
                        onChange={(e) => {
                            if (!onlyNumberValidation(e)) return;
                            setPhoneNumber(e.target.value);
                        }}
                    />
                    {/* <span className={`${fontSizeClass('medium')} red`}>Error message</span> */}
                </div>
                <button className="button-rounded-blue-48" type="submit">
                    <span className="button-text">Registrar</span>
                </button>
                <hr />
                <p className="flex-row-nw jc-center gap-8">
                    <span className={fontSizeClass("regular")}>¿Ya eres miembro?</span>
                    <Link className="regular-14 sky-blue no-style" to="/iniciar_sesion">
                        Iniciar Sesión
                    </Link>
                </p>
            </form>
        </div>
    );
};
export default RegisterPage;

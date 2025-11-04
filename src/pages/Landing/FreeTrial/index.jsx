import React, { useEffect, useState } from "react";
import LandingLayout from "../../Layouts/Landing";
import CardPicture1 from "../../Assets/Images/CardPicture1.png";
import CardPicture2 from "../../Assets/Images/CardPicture2.png";
import CardPicture3 from "../../Assets/Images/CardPicture3.png";
import { useNavigate } from "react-router-dom";
import ui from "./index.module.css";
import { useDispatch } from "react-redux";
import { resetCheckoutInformation } from "../../../store/reducers/checkout/checkoutInformationSlice";
import {
  resetUserInformation,
  setCheckoutUserInformation,
} from "../../../store/reducers/user/UserInformationSlice";
import { ROUTES } from "../../../constants/routes";
import { createGuestUser } from "../../../apis/auth/authApi";
import showToast from "../../../utils/toasts/commonToasts";
import {
  setIsGuestUser,
  setIsLoadingContent,
} from "../../../store/reducers/general/general";
import { encryptPassword } from "../../../utils/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FreeTrialPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetCheckoutInformation());
    dispatch(resetUserInformation());
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const GuestEmailRegistration = () => {
    const [guestName, setGuestName] = useState("");
    const [guestEmail, setGuestEmail] = useState("");
    const [guestPassword, setGuestPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleCreateGuestUser = () => {
      const payload = {
        user_email: guestEmail,
        password: encryptPassword(guestPassword),
        fullname: guestName,
      };
      dispatch(setIsLoadingContent(true));
      createGuestUser(payload)
        .then((res) => {
          const message = res.data.status_Message;
          if (message === "email exists")
            showToast.warning("Este email ya está en uso");
          if (message === "guest added") {
            showToast.success("Tu usuario ha sido creado");
            const checkoutInf = {
              ...payload,
              user_id: res?.data?.user_id,
            };
            dispatch(setCheckoutUserInformation(checkoutInf));
            navigate(ROUTES.VERIFICAR_CORREO, { replace: true });
            dispatch(setIsGuestUser(true));
          }
          dispatch(setIsLoadingContent(false));
        })
        .catch((err) => {
          showToast.error(
            "Hubo un error al crear tu usuario, intenta nuevamente"
          );
          dispatch(setIsLoadingContent(false));
        })
        .finally(() => {
          dispatch(setIsLoadingContent(false));
        });
    };

    const createUserSubmit = () => {
      if (validateFields()) {
        try {
          handleCreateGuestUser();
        } catch (error) {
          showToast.error("Hubo un error al intentar tu usuario");
        }
      } else {
        return;
      }
    };

    const validateFields = () => {
      const nameRegex = /^[a-zA-Z\s]{3,}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!nameRegex.test(guestName)) {
        showToast.error(
          "El nombre debe tener al menos 3 caracteres y solo letras."
        );
        return false;
      }

      if (!emailRegex.test(guestEmail)) {
        showToast.error("Por favor, ingresa un correo electrónico válido.");
        return false;
      }

      if (guestPassword.length < 6) {
        showToast.error("La contraseña debe tener al menos 6 caracteres.");
        return false;
      }

      return true;
    };

    return (
      <section id={ui.explorer}>
        <div className="full-container">
          <div className="container-section">
            <h2 className="section-subtitle uppercase text-center blue">
              Explora
            </h2>
            <div className={ui.titleContainer}>
              <h3 className="section-title text-center white">
                Registrate y prueba gratis
              </h3>
            </div>
            <div className={ui.containerColumns}>
              <div className={ui.demoForm}>
                <form>
                  <div className={ui.formInput}>
                    <label className="input-label white" htmlFor="correo">
                      Nombre completo*
                    </label>
                    <input
                      type="text"
                      placeholder="Francisco Ochoa Sanchez"
                      name="username"
                      value={guestName}
                      onChange={(e) => {
                        setGuestName(e.target.value);
                      }}
                    />
                  </div>
                  <div className={ui.formInput}>
                    <label className="input-label white" htmlFor="correo">
                      Correo Electrónico*
                    </label>
                    <input
                      type="email"
                      placeholder="Tu correo electrónico"
                      name="email"
                      value={guestEmail}
                      onChange={(e) => {
                        setGuestEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className={ui.formInput}>
                    <label className="input-label white" htmlFor="name">
                      Contraseña*
                    </label>
                    <div style={{ position: "relative" }}>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        name="password"
                        value={guestPassword}
                        onChange={(e) => {
                          setGuestPassword(e.target.value);
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "10px",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                </form>
                <div className={ui.formInputColumns}>
                  <button
                    onClick={createUserSubmit}
                    style={{
                      cursor: `${
                        !guestEmail || !guestPassword
                          ? "not-allowed"
                          : "pointer"
                      }`,
                    }}
                    className={ui.blueLink}
                    disabled={!guestEmail || !guestPassword}
                  >
                    Quiero mi curso
                  </button>
                </div>
              </div>
              <div className={ui.verticalCards}>
                <div className={ui.cardAdvantage}>
                  <div className={ui.imageContainer}>
                    <img src={CardPicture1} alt="Ventaja 1" />
                  </div>
                  <div className={ui.cardDescription}>
                    <h3 className="regular-parraf white bold">
                      Nuestro contenido
                    </h3>
                    <p className="regular-parraf white">
                      Contenido 100% actualizado, didáctico y sin paja.
                    </p>
                  </div>
                </div>
                <div className={ui.cardAdvantage}>
                  <div className={ui.imageContainer}>
                    <img src={CardPicture2} alt="Ventaja 2" />
                  </div>
                  <div className={ui.cardDescription}>
                    <h3 className="regular-parraf white bold">
                      Método de aprendizaje
                    </h3>
                    <p className="regular-parraf white">
                      Aprenderás a estudiar Inteligente
                    </p>
                  </div>
                </div>
                <div className={ui.cardAdvantage}>
                  <div className={ui.imageContainer}>
                    <img src={CardPicture3} alt="Ventaja 3" />
                  </div>
                  <div className={ui.cardDescription}>
                    <h3 className="regular-parraf white bold">Simuladores</h3>
                    <p className="regular-parraf white">
                      Simulador idéntico en preguntas y formato al ENARM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <LandingLayout page="free-trial">
      <GuestEmailRegistration />
    </LandingLayout>
  );
};

export default FreeTrialPage;


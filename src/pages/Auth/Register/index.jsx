/* eslint-disable no-useless-escape */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import doctorImage from "../../../assets/imgs/Dres/stock-photo-doctor-wearing-white-coat-stethoscope-small.png";
import { ROUTES } from "../../../constants/routes";
import {
  resetUserInformation,
  setUserInformation,
  setCheckoutUserInformation,
} from "../../../store/reducers/user/UserInformationSlice";
import "./RegisterPage.css";
import ui from "./index.module.css";
import LandingLayout from "../../Layouts/Landing";
import ValidatePassword from "./ValidatePassword";
import { createGuestUser } from "../../../apis/auth/authApi";
import showToast from "../../../utils/toasts/commonToasts";
import { resetCheckoutInformation } from "../../../store/reducers/checkout/checkoutInformationSlice";
import { encryptPassword } from "../../../utils/auth";
import {
  signInWithGoogleInspectPayload,
  signInWithFacebookInspectPayload,
  signOutFirebaseAuth,
} from "../../../firebase";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {
  setIsGuestUser,
  setIsLoadingContent,
} from "../../../store/reducers/general/general";
import { setCookie } from "../../../utils/auth/cookieSession";
import ConfirmDialogModal from "../../../components/ConfirmDialogModal";

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
      const encryptPass = encryptPassword(password);
      const userInformation = { user_email: email, password: encryptPass };

      dispatch(setIsLoadingContent(true));
      createGuestUser(userInformation)
        .then((res) => {
          const message = res.data.status_Message;
          if (message === "email exists") {
            showToast.warning("Este email ya está en uso");
            return;
          }
          if (message === "guest added") {
            const uid = res.data.user_id;
            const uemail = res.data.user_email || email;
            dispatch(
              setCheckoutUserInformation({
                user_email: uemail,
                user_id: uid,
                password: encryptPass,
              }),
            );
            showToast.success(
              "Te enviamos un código de verificación a tu correo. Revísalo (y spam) para continuar.",
            );
            navigate(`${ROUTES.VERIFY_EMAIL_CODE}?source=register`, {
              replace: true,
            });
          }
        })
        .catch((err) => {
          const data = err.response?.data;
          if (data?.status_Message === "Firebase email not verified") {
            showToast.error("Verifica tu correo en Google antes de continuar.");
          } else if (
            data?.status_Message === "Firebase token without sub/uid"
          ) {
            showToast.error("No pudimos validar tu cuenta. Intenta de nuevo.");
          } else {
            showToast.error(
              "Hubo un error al crear tu usuario, intenta nuevamente",
            );
          }
        })
        .finally(() => dispatch(setIsLoadingContent(false)));
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [passwordComplete, setPasswordComplete] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);
  const [isFacebookSubmitting, setIsFacebookSubmitting] = useState(false);
  const [isSessionModalOpen, setIsSessionModalOpen] = useState(false);
  const pendingOAuthTokenRef = useRef(null);
  const oauthSubmitting =
    isGoogleSubmitting || isFacebookSubmitting;

  const completeSessionAfterAuth = (rest) => {
    if (!rest?.auth_token) {
      showToast.error("No se pudo iniciar sesión. Intenta de nuevo.");
      return;
    }
    dispatch(setUserInformation(rest));
    setCookie("accessToken", rest.auth_token);
    setTimeout(() => {
      window.location.href = ROUTES.PLATAFORMA_DASHBOARD;
    }, 100);
  };

  const handleOAuthSessionModalAccept = () => {
    if (!pendingOAuthTokenRef.current) return;
    createGuestUser({
      firebase_token: pendingOAuthTokenRef.current,
      environment: "platform",
    })
      .then(async (res) => {
        const { status_Message, ...rest } = res.data;
        if (status_Message === "valid user") {
          await signOutFirebaseAuth();
          completeSessionAfterAuth(rest);
        } else {
          showToast.error(
            "No se pudo cerrar la otra sesión. Intenta de nuevo.",
          );
        }
      })
      .catch(() => {
        showToast.error(
          "Hubo un error al cerrar la otra sesión, intenta nuevamente",
        );
      })
      .finally(() => {
        setIsSessionModalOpen(false);
        pendingOAuthTokenRef.current = null;
      });
  };

  const handleOAuthSessionModalCancel = () => {
    setIsSessionModalOpen(false);
    pendingOAuthTokenRef.current = null;
  };

  const OAUTH_REGISTER_COPY = {
    google: {
      invalidUser:
        "No pudimos crear tu cuenta con Google. Intenta de nuevo o regístrate con correo.",
      emailExistsLink:
        "Este correo ya tiene cuenta. Inicia sesión con Google para vincularla.",
      guestLoginHint: "Inicia sesión con Google para entrar a la plataforma.",
      firebaseVerify: "Verifica tu correo en Google antes de continuar.",
      tokenValidate:
        "No pudimos validar tu cuenta de Google. Intenta de nuevo.",
      genericError: "Error al registrarte con Google",
    },
    facebook: {
      invalidUser:
        "No pudimos crear tu cuenta con Facebook. Intenta de nuevo o regístrate con correo.",
      emailExistsLink:
        "Este correo ya tiene cuenta. Inicia sesión con Facebook para vincularla.",
      guestLoginHint:
        "Inicia sesión con Facebook para entrar a la plataforma.",
      firebaseVerify: "Verifica tu correo en Facebook antes de continuar.",
      tokenValidate:
        "No pudimos validar tu cuenta de Facebook. Intenta de nuevo.",
      genericError: "Error al registrarte con Facebook",
    },
  };

  const handleOAuthRegister = async (provider) => {
    const copy = OAUTH_REGISTER_COPY[provider];
    const setBusy =
      provider === "google" ? setIsGoogleSubmitting : setIsFacebookSubmitting;
    setBusy(true);
    try {
      const p =
        provider === "google"
          ? await signInWithGoogleInspectPayload()
          : await signInWithFacebookInspectPayload();
      dispatch(setIsLoadingContent(true));
      const res = await createGuestUser({
        firebase_token: p.idToken,
        environment: "platform",
      });
      const { status_Message, ...rest } = res.data;

      if (status_Message === "user logged") {
        pendingOAuthTokenRef.current = p.idToken;
        setIsSessionModalOpen(true);
        return;
      }
      if (status_Message === "valid user") {
        await signOutFirebaseAuth();
        completeSessionAfterAuth(rest);
        return;
      }
      if (status_Message === "invalid user") {
        showToast.error(copy.invalidUser);
        await signOutFirebaseAuth();
        return;
      }
      if (status_Message === "problems with last session") {
        showToast.error(
          "Hubo un problema al actualizar tu sesión. Intenta de nuevo.",
        );
        await signOutFirebaseAuth();
        return;
      }
      if (status_Message === "problems with last jwt") {
        showToast.error("Hubo un problema con la sesión. Intenta de nuevo.");
        await signOutFirebaseAuth();
        return;
      }
      if (status_Message === "email exists") {
        if (res.data?.action === "login_to_link_account") {
          showToast.warning(copy.emailExistsLink);
        } else {
          showToast.warning("Este email ya está en uso");
        }
        await signOutFirebaseAuth();
        return;
      }
      if (status_Message === "guest added") {
        showToast.success("Tu usuario ha sido creado");
        dispatch(setIsGuestUser(true));
        await signOutFirebaseAuth();
        if (res.data?.auth_token) {
          const { status_Message: _sm, ...restGuest } = res.data;
          completeSessionAfterAuth(restGuest);
        } else {
          showToast.info(copy.guestLoginHint);
          navigate(ROUTES.LOGIN, { replace: true });
        }
        return;
      }
      showToast.error("No se pudo completar el registro. Intenta de nuevo.");
      await signOutFirebaseAuth();
    } catch (err) {
      const code = err?.code;
      if (
        code === "auth/popup-closed-by-user" ||
        code === "auth/cancelled-popup-request"
      ) {
        return;
      }
      const data = err.response?.data;
      if (data?.status_Message === "Firebase email not verified") {
        showToast.error(copy.firebaseVerify);
      } else if (data?.status_Message === "Firebase token without sub/uid") {
        showToast.error(copy.tokenValidate);
      } else if (
        data?.status_Message === "Unsupported Firebase sign-in provider"
      ) {
        showToast.error(
          "Este método de inicio no está disponible aún. Contacta al administrador.",
        );
      } else {
        showToast.error(
          data?.message ||
            data?.status_Message ||
            err?.message ||
            copy.genericError,
        );
      }
      await signOutFirebaseAuth();
    } finally {
      dispatch(setIsLoadingContent(false));
      setBusy(false);
    }
  };

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
    <>
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
          <div className={ui.formGroup}>
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
            disabled={
              !validFormatEmail || !passwordComplete || oauthSubmitting
            }
            className={ui.submitButton}
            type="button"
            onClick={handleClick}
          >
            <span className="button-text">Registrar</span>
          </button>
          <p
            className="flex-row-nw jc-center gap-8"
            style={{ marginTop: "1rem" }}
          >
            <span className={ui.linkLabel}>¿Ya eres miembro?</span>
            <Link className="regular-14 sky-blue no-style" to={ROUTES.LOGIN}>
              Iniciar Sesión
            </Link>
          </p>
          <div className={ui.dividerRow}>
            <span>o</span>
          </div>
          <button
            type="button"
            className={ui.googleButton}
            onClick={() => handleOAuthRegister("google")}
            disabled={oauthSubmitting}
          >
            {isGoogleSubmitting ? (
              <>
                <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full border-[#05B2FA]"></div>
                <span>Conectando...</span>
              </>
            ) : (
              <>
                <FcGoogle size={22} />
                <span>Regístrate con Google</span>
              </>
            )}
          </button>
          {/* <button
            type="button"
            className={ui.facebookButton}
            onClick={() => handleOAuthRegister("facebook")}
            disabled={oauthSubmitting}
          >
            {isFacebookSubmitting ? (
              <>
                <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full border-white border-t-transparent"></div>
                <span>Conectando...</span>
              </>
            ) : (
              <>
                <FaFacebook size={22} />
                <span>Regístrate con Facebook</span>
              </>
            )}
          </button> */}
        </div>
      </div>
      <ConfirmDialogModal
        isOpen={isSessionModalOpen}
        onAccept={handleOAuthSessionModalAccept}
        onCancel={handleOAuthSessionModalCancel}
        title="Cierre de sesión"
        description="Hemos detectado una sesión activa, al dar continuar, esta será cerrada automáticamente"
      />
    </>
  );
};

export default RegisterPage;

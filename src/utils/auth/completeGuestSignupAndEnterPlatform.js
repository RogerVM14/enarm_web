import { loginUser } from "../../apis/auth/authApi";
import { setCookie } from "./cookieSession";
import { setUserInformation } from "../../store/reducers/user/UserInformationSlice";
import { ROUTES } from "../../constants/routes";
import showToast from "../toasts/commonToasts";

/**
 * Tras `guest added` con correo/contraseña: obtiene sesión y envía al home de la plataforma.
 * Si el alta ya devolvió `auth_token`, usa esa respuesta directamente.
 */
export async function completeGuestSignupAndEnterPlatform(
  dispatch,
  email,
  encryptedPassword,
  createResData
) {
  const applySession = (data) => {
    const { status_Message: _sm, ...rest } = data;
    if (!rest.auth_token) return false;
    dispatch(setUserInformation(rest));
    setCookie("accessToken", rest.auth_token);
    showToast.success("Bienvenido");
    window.location.href = ROUTES.PLATAFORMA_DASHBOARD;
    return true;
  };

  if (createResData?.auth_token && applySession(createResData)) {
    return;
  }

  try {
    const loginRes = await loginUser({
      new_user_email: email,
      new_user_password: encryptedPassword,
      environment: "platform",
    });
    if (loginRes.data.status_Message === "valid user" && applySession(loginRes.data)) {
      return;
    }
  } catch {
    /* continúa a aviso */
  }

  showToast.warning("Cuenta creada. Inicia sesión para continuar.");
  window.location.href = ROUTES.LOGIN;
}

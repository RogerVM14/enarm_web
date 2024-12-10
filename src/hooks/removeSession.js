import { removeCookie } from "../utils/auth/cookieSession";
import { resetUserInformation } from "../store/reducers/user/UserInformationSlice";
import { ROUTES } from "../constants/routes";
import { setIsLoadingContent } from "../store/reducers/general/general";

export const removeSession = (dispatch, navigate) => {
  // Resetea la información del usuario en Redux
  dispatch(resetUserInformation());
  dispatch(setIsLoadingContent(false))
  // Elimina la cookie de acceso
  removeCookie("accessToken");

  // Navega al login
  navigate(ROUTES.LOGIN, { replace: true });
};

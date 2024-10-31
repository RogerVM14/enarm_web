import { ROUTES } from "../constants/routes";
import { resetUserInformation } from "../store/reducers/user/UserInformationSlice";
import { removeCookie } from "./auth/cookieSession";
import CryptoJS from "crypto-js";
const { REACT_APP_SECRET_PASS_KEY } = process.env;
export const logout = (dispatch, navigate) => {
  dispatch(resetUserInformation());
  removeCookie("accessToken");
  navigate(ROUTES.LOGIN, { replace: true });
};

export const encryptPassword = (pwd) => {
  let newPassword = CryptoJS.SHA512(pwd, REACT_APP_SECRET_PASS_KEY).toString();
  return newPassword;
};

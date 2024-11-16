import toast from "react-hot-toast";
import { ROUTES } from "../constants/routes";
import { resetUserInformation } from "../store/reducers/user/UserInformationSlice";
import { getHeaders, removeCookie } from "./auth/cookieSession";
import CryptoJS from "crypto-js";
import axios from "axios";
const { REACT_APP_ENARM_API_GATEWAY_URL } = process.env;
const { REACT_APP_SECRET_PASS_KEY } = process.env;

const url = `${REACT_APP_ENARM_API_GATEWAY_URL}auth/`;

export const logout = async (dispatch, navigate) => {
  try {
    const endpoint = `${url}logout`;
    const headers = getHeaders();

    const { data, status } = await axios.get(endpoint, headers);
    if (data.status_Message === "session closed" && status === 200) {
      dispatch(resetUserInformation());
      removeCookie("accessToken");
      navigate(ROUTES.LOGIN, { replace: true });
    }
  } catch (error) {
    toast.error("Se presentó un error al intentar sesión.", {
      position: "top-right",
      duration: 3000,
    });
  }
};

export const encryptPassword = (pwd) => {
  let newPassword = CryptoJS.SHA512(pwd, REACT_APP_SECRET_PASS_KEY).toString();
  return newPassword;
};

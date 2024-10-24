import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetUserInformation, selectUserCheckoutInformation } from "../store/reducers/user/UserInformationSlice";
import { removeCookie } from "../utils/auth/cookieSession";
import { ROUTES } from "../constants/routes";

export const useLogout = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(resetUserInformation());
  dispatch(selectUserCheckoutInformation())
  removeCookie("accessToken");
  return () => {
    navigate(ROUTES.LOGIN, { replace: true });
  };
};

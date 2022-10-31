import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetUserInformation } from "../store/reducers/user/UserInformationSlice";
import { removeCookie } from "../utils/auth/cookieSession";

export const useLogout = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(resetUserInformation());
  removeCookie("accessToken");
  console.log(" Removing...");
  return () => {
    navigate("/iniciar_sesion", { replace: true });
  };
};

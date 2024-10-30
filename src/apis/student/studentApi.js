import axios from "axios";
import { getCookie } from "../../utils/auth/cookieSession";
const { REACT_APP_ENARM_API_GATEWAY_URL } = process.env;
const accessToken = getCookie("accessToken");
export const saveComplementaryStudentInfo = (payload) => {
  const requestInfo = {
    method: "POST",
    url: `${REACT_APP_ENARM_API_GATEWAY_URL}students/complete-student-info`,
    headers: {
      "Content-Type": "application/json",
      auth_token: accessToken,
    },
    data: payload,
  };

  return axios(requestInfo);
};

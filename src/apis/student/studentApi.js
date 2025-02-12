import axios from "axios";
import { getCookie, getHeaders } from "../../utils/auth/cookieSession";
const { REACT_APP_ENARM_API_GATEWAY_URL } = process.env;
const accessToken = getCookie("accessToken");
// console.log(accessToken);
export const saveComplementaryStudentInfo = (payload, token) => {
  const headers = getHeaders();
  const requestInfo = {
    method: "POST",
    url: `${REACT_APP_ENARM_API_GATEWAY_URL}students/complete-student-info`,
    headers: {
      "Content-Type": "application/json", 
      auth_token: token,
    },
    data: payload,
  };

  return axios(requestInfo);
};

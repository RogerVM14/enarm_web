import axios from "axios";
const { REACT_APP_ENARM_API_GATEWAY_URL } = process.env;
export const saveComplementaryStudentInfo = (payload, token) => {

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

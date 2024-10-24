import axios from "axios";
const { REACT_APP_ENARM_API_GATEWAY_URL } = process.env;

const authUrl = `${REACT_APP_ENARM_API_GATEWAY_URL}auth/`;

export const CreateNewUser = (payload) => {
  const request = {
    method: "POST",
    url: `${authUrl}signup`,
    headers: {
      "content-type": "application/json",
    },
    data: payload,
  };

  return axios(request);
};

export const loginUser = (payload) => {
  const request = {
    method: "GET",
    url: `${authUrl}signin`,
    headers: {
      "content-type": "application/json",
    },
    data: {
      new_user_email: "superadmin@enarm.com",
      new_user_password: "superadmin",
    },
  };

  return axios(request);
};

export const verifyEmailCode = (payload) => {
 
  const request = {
    method: "POST",
    url: `${REACT_APP_ENARM_API_GATEWAY_URL}students/verify-student-pin-code-for-email`,
    headers: {
      "content-type": "application/json",
    },
    data: payload,
  };

  return axios(request);
};

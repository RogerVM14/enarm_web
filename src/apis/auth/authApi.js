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
    method: "POST",
    url: `${authUrl}login`,
    headers: {
      "content-type": "application/json",
    },
    data: payload,
    // data: {
    //   new_user_email: "superadmin@enarm.com",
    //   new_user_password: "superadmin",
    // },
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

export const requestOTPForPasswordChange = (email) => {
  const request = {
    method: "POST",
    url: `${authUrl}change-password-request`,
    headers: {
      "content-type": "application/json",
    },
    data: {
      user_email: email,
    },
  };

  return axios(request);
};

export const verifyOTPForChangePassword = (payload) => {
  const request = {
    method: "POST",
    url: `${authUrl}verify-otp-to-change-password`,
    headers: {
      "content-type": "application/json",
    },
    data: payload,
  };

  return axios(request);
};

export const reestablishUserPasswordByOTP = (payload) => {
  const request = {
    method: "POST",
    url: `${authUrl}change-user-password`,
    headers: {
      "content-type": "application/json",
    },
    data: payload,
  };

  return axios(request);
};

export const closeUserRemoteSession = (payload) => {
  const request = {
    method: "POST",
    url: `${authUrl}close-session-remotely`,
    headers: {
      "content-type": "application/json",
    },
    data: payload,
  };

  return axios(request);
};

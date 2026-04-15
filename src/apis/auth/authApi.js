import axios from "axios";
import { encryptPassword } from "../../utils/auth";

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

export const createGuestUser = (payload) => {
  const hasFirebase = Boolean(payload?.firebase_token);
  const data = hasFirebase
    ? { firebase_token: payload.firebase_token }
    : { ...payload };

  const request = {
    method: "POST",
    url: `${REACT_APP_ENARM_API_GATEWAY_URL}students/add-guest`,
    headers: {
      "content-type": "application/json",
    },
    data,
  };

  return axios(request);
};

export const loginUser = (payload) => {
  const environment = payload?.environment ?? "platform";
  const hasFirebase = Boolean(payload?.firebase_token);

  const data = hasFirebase
    ? {
        environment,
        firebase_token: payload.firebase_token,
      }
    : {
        ...payload,
        environment,
      };

  const request = {
    method: "POST",
    url: `${authUrl}login`,
    headers: {
      "content-type": "application/json",
    },
    data,
  };

  return axios(request);
};

export const linkGoogleToEnarmAccount = (firebaseToken, authToken) => {
  return axios({
    method: "POST",
    url: `${authUrl}link-google`,
    headers: {
      "content-type": "application/json",
      auth_token: authToken,
    },
    data: { firebase_token: firebaseToken },
  });
};

export const setInitialEnarmPassword = (plainPassword, authToken) => {
  return axios({
    method: "POST",
    url: `${authUrl}set-password`,
    headers: {
      "content-type": "application/json",
      auth_token: authToken,
    },
    data: { password: encryptPassword(plainPassword) },
  });
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

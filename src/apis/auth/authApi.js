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

/**
 * Alta invitado (`students/add-guest`).
 * Formulario (correo): el mismo `payload` que envía el caller, p. ej. `{ user_email, password }`.
 * Google: solo `{ environment, firebase_token }` (no se envían email ni password).
 */
export const createGuestUser = (payload) => {
  const hasFirebase = Boolean(payload?.firebase_token);
  const data = hasFirebase
    ? {
        // environment: payload.environment ?? "platform",
        firebase_token: payload.firebase_token,
      }
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

/**
 * Login (`auth/login`).
 * Google: solo `{ environment, firebase_token }`.
 * Correo/contraseña: el `payload` completo del caller (p. ej. `environment`, `new_user_email`, `new_user_password`).
 */
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

  return axios(request).then((res) => {
    return res;
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

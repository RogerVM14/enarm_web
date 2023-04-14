import axios from "axios";
import moment from "moment";
const { REACT_APP_ENARM_API_GATEWAY_URL } = process.env;

const authUrl = `${REACT_APP_ENARM_API_GATEWAY_URL}auth/`;

export const CreateNewUser = (
  email,
  password,
  fullname,
  phone_number,
  type_user_id
) => {
  const user = {
    fullname,
    phone_number: `+52${phone_number}`,
    email,
    password,
    username: email,
    status: "1",
    subscription_end: "2023-12-12 00:00:00",
    subscription_start: moment().format("YYYY-MM-DD HH:mm:ss"),
    study_plan: 1,
    type_user_id,
  };

  const request = {
    method: "POST",
    url: `${authUrl}signup`,
    headers: {
      "content-type": "application/json",
    },
    data: user,
  };

  return axios(request);
};

export const loginUser = (payload) => {
  const request = {
    method: "POST",
    url: `${authUrl}signin`,
    headers: {
      "content-type": "application/json",
    },
    data: payload,
  };

  return axios(request);
};

export const verifyEmailCode = (email, code) => {
  const payload = {
    username: email,
    code,
  };
  const request = {
    method: "POST",
    url: `${authUrl}verify_code`,
    headers: {
      "content-type": "application/json",
    },
    data: payload,
  };

  return axios(request);
};

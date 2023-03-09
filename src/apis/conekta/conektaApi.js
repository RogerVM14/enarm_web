import axios from "axios";
const { REACT_APP_ENARM_API_GATEWAY_URL } = process.env

export const createClientConekta = (payload) => {
  const requestInfo = {
    method: "POST",
    url: `${REACT_APP_ENARM_API_GATEWAY_URL}conekta/crear-cliente`,
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  };
  return axios(requestInfo);
};

export const createOrderConekta = (payload) => {
  const requestInfo = {
    method: "POST",
    url: `${REACT_APP_ENARM_API_GATEWAY_URL}conekta/crear-orden`,
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  };
  return axios(requestInfo);
};


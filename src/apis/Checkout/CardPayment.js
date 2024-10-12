import axios from "axios";

const { REACT_APP_ENARM_API_GATEWAY_URL } = process.env;

export const createTokenCardForPayment = (payload) => {
  const requestInfo = {
    method: "POST",
    url: `${REACT_APP_ENARM_API_GATEWAY_URL}mercado-pago/create-token`,
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  };

  return axios(requestInfo);
};

export const createPaymentWithCard = (payload) => {
  const requestInfo = {
    method: "POST",
    url: `${REACT_APP_ENARM_API_GATEWAY_URL}mercado-pago/create-payment`,
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  };

  return axios(requestInfo);
};

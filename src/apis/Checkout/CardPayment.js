import axios from "axios";

const { REACT_APP_ENARM_API_GATEWAY_URL } = process.env;

export const createTokenCardForPayment = (payload) => {
  const requestInfo = {
    method: "POST",
    url: `${REACT_APP_ENARM_API_GATEWAY_URL}payments/mercado-pago/create-token`,
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  };

  return axios(requestInfo);
};

export const savePaymentWithCard = (payload) => {
  const requestInfo = {
    method: "POST",
    url: `https://7gb741dj56.execute-api.us-west-1.amazonaws.com/v1/payment`,
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
    url: `${REACT_APP_ENARM_API_GATEWAY_URL}payments/mercado-pago/create-payment`,
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  };

  return axios(requestInfo);
};

export const savePaymentInformationOnDataBase = (payload) => {
  const requestInfo = {
    method: "POST",
    url: `${REACT_APP_ENARM_API_GATEWAY_URL}students/add-course-payment`,
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  };

  return axios(requestInfo);
};

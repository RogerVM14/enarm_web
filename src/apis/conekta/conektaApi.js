import axios from "axios";

export const createTokenForTransaction = () => {
  const requestInfo = {
    method: "POST",
    url: "https://api.conekta.io/tokens",
    headers: {
      Authorization: "Basic a2V5X09ZVjZBdnFHRkdQSXUzQXM4QU1OV3FK",
      Accept: "application/vnd.conekta-v2.0.0+json",
      "Content-Type": "application/json",
    },
    data: { checkout: { returns_control_on: "Token" } },
  };
  return axios(requestInfo);
};

export const createOrder = (payload) => {
  const requestInfo = {
    method: "POST",
    url: "https://7gb741dj56.execute-api.us-west-1.amazonaws.com/v1/conekta/card-payment",
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  };
  return axios(requestInfo);
};


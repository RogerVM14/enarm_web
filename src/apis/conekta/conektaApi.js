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

export const createOrder = (cardToken) => {
  const requestInfo = {
    method: "POST",
    url: "http://localhost:4000/conekta",
    headers: {
      "Content-Type": "application/json",
    },
    data: { cardTokenId: cardToken },
  };
  return axios(requestInfo);
};

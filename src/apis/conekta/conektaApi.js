import axios from "axios";
const { REACT_APP_ENARM_API_GATEWAY_URL_MP } = process.env;
const contektaUrl = `${REACT_APP_ENARM_API_GATEWAY_URL_MP}conekta`;
export const createClientConekta = (userName, email, phone) => {
  const payload = {
    name: userName,
    email,
    phone,
  };

  const requestInfo = {
    method: "POST",
    url: `${contektaUrl}/crear-cliente`,
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  };
  return axios(requestInfo);
};

export const createOrderConekta = (
  customer_id,
  phoneNumber,
  userName,
  email
) => {
  const orderInfo = {
    customer_id,
    producto: "Pago curso Enarm",
    costo: "600000",
    telefono: phoneNumber,
    cliente: userName,
    correo: email,
  };
  const requestInfo = {
    method: "POST",
    url: `${contektaUrl}/crear-orden`,
    headers: {
      "Content-Type": "application/json",
    },
    data: orderInfo,
  };
  return axios(requestInfo);
};

export const saveConektaPayment = (payload) => {
  const requestInfo = {
    method: "POST",
    url: `${contektaUrl}/crear-orden`,
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  };
  return axios(requestInfo);
};

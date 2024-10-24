import axios from 'axios';
const {REACT_APP_ENARM_API_GATEWAY_URL_MP} = process.env;
export const fetchMercadoPagoPreferenceId = () => {
  const requestInfo = {
    method: "POST",
    url: "https://7gb741dj56.execute-api.us-west-1.amazonaws.com/v1/mercado-pago/create-preference-id",
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  return axios(requestInfo);
};
import axios from 'axios';
const {REACT_APP_ENARM_API_GATEWAY_URL} = process.env;
export const fetchMercadoPagoPreferenceId = () => {
  const requestInfo = {
    method: "POST",
    url: `${REACT_APP_ENARM_API_GATEWAY_URL}payments/mercado-pago/create-preference-id`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  return axios(requestInfo);
};
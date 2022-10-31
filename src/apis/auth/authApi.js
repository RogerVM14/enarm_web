import axios from "axios";
const { REACT_APP_ENARM_API_URL } = process.env;

export const CreateNewUser = (payload) => {
  const request = {
    method: "POST",
    url: `${REACT_APP_ENARM_API_URL}/users`,
    headers: {
      "content-type": "application/json",
    },
    data:payload
  };

  return axios(request);
};

export const loginUser = (payload) => {
  const request = {
    method: "POST",
    url: `${REACT_APP_ENARM_API_URL}/sessions`,
    headers: {
      "content-type": "application/json",
    },
    data: payload,
  };

  return axios(request);
};

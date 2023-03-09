import axios from "axios";
const { REACT_APP_ENARM_API_URL } = process.env;

 const url = `${REACT_APP_ENARM_API_URL}auth/`

export const CreateNewUser = (payload) => {
  const request = {
    method: "POST",
    url: `${url}/signup`,
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
    url: `${url}/signin`,
    headers: {
      "content-type": "application/json",
    },
    data: payload,
  };

  return axios(request);
};

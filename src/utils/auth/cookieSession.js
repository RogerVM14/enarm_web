import Cookies from "js-cookie";

/**
 *
 * @param {string} cookiename
 * @param {time} timeForCookieExpiration
 * @param {string} value
 */
export const setCookie = (cookiename, value) => {
  return Cookies.set(cookiename, value, {
    expires: 1,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};

/**
 *
 * @param {String} cookiename
 */
export const getCookie = (cookiename) => {
  return Cookies.get(cookiename);
};

export const getHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      // auth_token:
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX3JvbGVfaWQiOjEsImV4cCI6MTczMDM2MDQ4M30.vKfkjTR-wxfGTz_FmX4njoMqi6ilUAdiJBRt7dFz8Ro",
      auth_token: getCookie("accessToken"),
    },
  };
};

/**
 *
 * @param {String} cookiename
 */
export const removeCookie = (cookiename) => {
  return Cookies.remove(cookiename);
};

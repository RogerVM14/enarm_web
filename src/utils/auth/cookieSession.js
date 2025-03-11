import Cookies from "js-cookie";

/**
 *
 * @param {string} cookiename
 * @param {time} timeForCookieExpiration
 * @param {string} value
 */
export const setCookie = (cookiename, value) => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return Cookies.set(cookiename, value, {
    expires: 1,
    secure: isSafari ? false : true,
    sameSite: "None",
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

import React from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/auth/cookieSession";
import { ROUTES } from "../constants/routes";

const PlatformPrivateRoute = (props) => {
  const isAuthenticated = getCookie("accessToken");
  return isAuthenticated ? (
    <>{props.children}</>
  ) : (
    <Navigate to={ROUTES.LOGIN} />
  );
};

export default PlatformPrivateRoute;

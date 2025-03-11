import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { getCookie } from "../utils/auth/cookieSession";

const PublicRoutes = ({ children }) => {
  const isAuthenticated = getCookie("accessToken");
  
  return isAuthenticated ? (
    <Navigate to={ROUTES.PLATAFORMA_DASHBOARD} />
  ) : (
    children
  );
};

export default PublicRoutes;

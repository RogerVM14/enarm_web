import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "../components/layouts/DashboardLayout";
import PlatformResponsiveProvider from "../contexts/platform/PlatformResponsiveContext";
import { getCookie } from "../utils/auth/cookieSession";

const PlatformPrivateRoute = (props) => {
  const isAuthenticated = getCookie("accessToken");
  return isAuthenticated ? (
    <PlatformResponsiveProvider>
      <DashboardLayout hasAside={props.hasAside}>
        {props.children}
      </DashboardLayout>
    </PlatformResponsiveProvider>
  ) : (
    <Navigate to="/iniciar_sesion" />
  );
};

export default PlatformPrivateRoute;

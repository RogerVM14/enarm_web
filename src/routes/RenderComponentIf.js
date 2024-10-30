import React from "react";
import { Navigate } from "react-router-dom";

const RenderComponenteIf = ({ condition, redirectTo, children }) => {
  return condition ? children : <Navigate to={redirectTo} />;
};

export default RenderComponenteIf;

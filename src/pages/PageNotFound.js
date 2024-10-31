import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/PageNotFound.css";
import { ROUTES } from "../constants/routes";
import notFoundImg from "../assets/imgs/notFound.jpg";
const PageNotFound = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className="container">
      <img src={notFoundImg} alt="404 Not Found" className="image-404" />
      <h1 className="message">Oops! Página no encontrada</h1>
      <button onClick={handleRedirect} className="redirect-button">
        Ir al inicio
      </button>
    </div>
  );
};

export default PageNotFound;

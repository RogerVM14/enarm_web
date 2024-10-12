import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import drThump from "../assets/imgs/doctor_thump_up_medium.png";
import "../css/checkout/CheckoutPageThankful.css";
import { ROUTES } from "../constants/routes";

const CheckoutPageGratification = () => {
  const getWindowWidth = () => {
    let x = window.innerWidth;
    if (x < 576) return "xs";
    if (x >= 576 && x <= 767) return "sm";
    if (x >= 768 && x <= 991) return "md";
    if (x >= 992 && x <= 1199) return "lg";
    if (x >= 1200 && x <= 1399) return "xl";
    if (x >= 1400) return "xxl";
  };

  const [width, setWidth] = useState(getWindowWidth());
  const [countdown, setCountdown] = useState(5); // Estado para el contador
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", () => {
      const x = getWindowWidth();
      setWidth(x);
    });

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Redirigir después de 5 segundos
    const redirectTimeout = setTimeout(() => {
      navigate(ROUTES.PLATAFORMA_DASHBOARD, { replace: true });
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout); 
    };
  }, [navigate]);

  return (
    <>
      <div className={`background-gradial ${width}`}></div>
      <div className={`gratification-container ${width}`}>
        <img src={drThump} alt="doctor_thump" />
        <h1 className="bold-47">¡Gracias por tu compra!</h1>
        <span className="regular-23">
          Hemos enviado los detalles de tu compra a tu corréo electrónico.
        </span>
        <button
          className="button-rounded-blue-48"
          onClick={() => {
            navigate(ROUTES.PLATAFORMA_DASHBOARD, { replace: true });
          }}
        >
          <span className="button-text">Descubre todo Sobre el Curso</span>
        </button>
        <p className="auto-redirect-message">
          Serás redirigido automáticamente en: {countdown} segundos
        </p>
      </div>
    </>
  );
};

export default CheckoutPageGratification;

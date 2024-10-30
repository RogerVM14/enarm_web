import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import drThump from "../assets/imgs/doctor_failed.jpg";
import "../css/checkout/CheckoutPageThankful.css";
import { ROUTES } from "../constants/routes";

const CheckoutPaymentFailed = () => {
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
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", () => {
      const x = getWindowWidth();
      setWidth(x);
    });

  }, []);

  return (
    <>
      <div className={`background-gradial ${width}`}></div>
      <div className={`gratification-container ${width}`}>
        <img src={drThump} alt="doctor_thump" style={{marginBottom: 20}} />
        <h1 className="bold-47">¡UUPS!</h1>
        <span className="regular-23">
          Parece que ha habido un problema con tú pago
        </span>
        <button
          className="button-rounded-blue-48"
          onClick={() => {
            navigate(ROUTES.CHECKOUT, { replace: true });
          }}
        >
          <span className="button-text">Reintentar Pago</span>
        </button>
      </div>
    </>
  );
};

export default CheckoutPaymentFailed;

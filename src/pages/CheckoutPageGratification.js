import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import drThump from "../assets/imgs/doctor_thump_up_medium.png";
import "../css/checkout/CheckoutPageThankful.css";

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

  useEffect(() => {
    window.addEventListener("resize", () => {
      const x = getWindowWidth();
      setWidth(x);
    });
  }, [width]);
 

  const navigate = useNavigate();

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
            navigate("/u/dashboard", { replace: false });
          }}
        >
          <span className="button-text">Descubre todo Sobre el Curso</span>
        </button>
      </div>
    </>
  );
};

export default CheckoutPageGratification;

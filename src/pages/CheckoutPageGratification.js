import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import drThump from "../assets/imgs/doctor_thump_up_medium.png";
import WidthContext from "../contexts/WidthContext";
import "../css/checkout/CheckoutPageThankful.css";

const CheckoutPageGratification = () => {
  const size = useContext(WidthContext);

  // const isMobile = () => {
  //   if (["xs", "sm", "md"].includes(size)) return true;
  //   if (["lg", "xl", "xxl"].includes(size)) return false;
  // };

  const navigate = useNavigate();

  return (
    <>
      <div className={`background-gradial ${size}`}></div>
      <div className={`gratification-container ${size}`}>
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

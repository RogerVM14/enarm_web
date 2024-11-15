import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Importa useLocation
import drThump from "../assets/imgs/doctor_success.png";
import "../css/checkout/CheckoutPageThankful.css";
import { ROUTES } from "../constants/routes";
import { savePaymentInformationOnDataBase } from "../apis/Checkout/CardPayment";
import showToast from "../utils/toasts/commonToasts";
import { useSelector } from "react-redux";
import { selectUserCheckoutInformation } from "../store/reducers/user/UserInformationSlice";
import { CONFIG } from "../constants/config";

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
  const [isLoading, setIsLoading] = useState(false);
  const userCheckoutInfo = useSelector(selectUserCheckoutInformation);
  const { user_id } = userCheckoutInfo;
  const navigate = useNavigate();
  const location = useLocation();

  const getQueryParams = () => {
    const searchParams = new URLSearchParams(location.search);
    const payment_id = searchParams.get("payment_id");
    const status = searchParams.get("status");
    return { payment_id, status };
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      const x = getWindowWidth();
      setWidth(x);
    });

    const { payment_id, status } = getQueryParams();

    if (payment_id && status) {
      setIsLoading(true);
      const payload = {
        user_id: user_id,
        payment_method: "Mercado Pago",
        external_order_id: payment_id,
        total: CONFIG.PRICE,
        subtotal: CONFIG.PRICE,
        commission: 0,
        payment_transaction_status: status,
        payment_transaction_verification: status === "approved" ? true : false,
      };

      savePaymentInformationOnDataBase(payload)
        .then(() => {
          setIsLoading(false);
          showToast.success("Bienvenido, gracias por tu compra.");
        })
        .catch((error) => {
          showToast.error(
            "Algo sucedio con tu compra, por favor, consulta con soporte."
          );
        });
    }
  }, [navigate]);

  return (
    <>
      <div className={`background-gradial ${width}`}></div>
      <div className={`gratification-container ${width}`}>
        <img src={drThump} alt="doctor_thump" style={{ marginBottom: 20 }} />
        <h1 className="bold-47">¡Gracias por tu compra!</h1>
        <span className="regular-23">
          Hemos enviado los detalles de tu compra a tu corréo electrónico.
        </span>
        <button
          className="button-rounded-blue-48"
          onClick={() => {
            navigate(ROUTES.LOGIN);
          }}
        >
          <span className="button-text">Descubre todo Sobre el Curso</span>
        </button>
        {isLoading && (
          <p className="auto-redirect-message">
            Espera por favor, mientras guardamos tu información
          </p>
        )}
      </div>
    </>
  );
};

export default CheckoutPageGratification;

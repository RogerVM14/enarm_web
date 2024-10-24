import React, { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import "../../css/checkout/MercadoPagoCheckout.css";
import { fetchMercadoPagoPreferenceId } from "../../apis/MercadoPago/MercadoPagoApi";

const CheckoutForm = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const { REACT_APP_MP_PUBLIC_KEY } = process.env;

  // Inicializar Mercado Pago solo la primera vez
  useEffect(() => {
    initMercadoPago(REACT_APP_MP_PUBLIC_KEY, {
      locale: "es-MX",
    });
  }, [REACT_APP_MP_PUBLIC_KEY]);

  // Obtener el ID de la preferencia de la API cada vez que se renderiza el componente
  useEffect(() => {
    const fetchPreferenceId = async () => {
      try {
        const response = await fetchMercadoPagoPreferenceId();
        const newPreferenceId = response.data.body.preferenceId;
        setPreferenceId(newPreferenceId);
      } catch (error) {
        console.error("Error al obtener el ID de la preferencia:", error);
      }
    };

    fetchPreferenceId();
  }, []); 

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {preferenceId ? (
        <Wallet initialization={{ preferenceId }} />
      ) : (
        <button className="skeleton-button" disabled />
      )}
    </div>
  );
};

export default CheckoutForm;

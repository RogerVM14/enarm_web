import React, { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import "../../css/checkout/MercadoPagoCheckout.css";
import { fetchMercadoPagoPreferenceId } from "../../apis/MercadoPago/MercadoPagoApi";

const CheckoutForm = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const { REACT_APP_MERCADOPAGO_PUBLIC_KEY } = process.env;
  // Inicializar Mercado Pago solo la primera vez
  useEffect(() => {
    initMercadoPago(REACT_APP_MERCADOPAGO_PUBLIC_KEY, {
      locale: "es-MX",
    });
  }, []);

  // Llamada al servicio o recuperar del localStorage
  useEffect(() => {
    const fetchPreferenceId = async () => {
      const storedPreferenceId = localStorage.getItem("preferenceId");

      if (storedPreferenceId) {
        setPreferenceId(storedPreferenceId);
      } else {
        try {
          const response = await fetchMercadoPagoPreferenceId();
          const newPreferenceId = response.data.body.preferenceId;
          setPreferenceId(newPreferenceId);
          localStorage.setItem("preferenceId", newPreferenceId); // Guardar en localStorage
        } catch (error) {
          console.error("Error al obtener el ID de la preferencia:", error);
        }
      }
    };

    if (!preferenceId) {
      fetchPreferenceId();
    }
  }, [preferenceId]); // Solo se ejecuta si preferenceId es null

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

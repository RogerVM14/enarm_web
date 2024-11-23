import React from "react";
import "./WhatsAppFloatButton.css"; // Archivo CSS externo
import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { CONTACT_URLS } from "../../constants/routes";

const FloatingWhatsAppButton = () => {
  const whatsappLink = "https://wa.me/524445090543";
  const location = useLocation();

  // Obtener las rutas permitidas
  const allowedPaths = Object.values(CONTACT_URLS);
  const isAllowedPath = allowedPaths.includes(location.pathname);

  if (!isAllowedPath) {
    return null;
  }

  return (
    <div className="floating_btn">
      <a target="_blank" rel="noopener noreferrer" href={whatsappLink}>
        <div className="contact_icon">
          <FaWhatsapp size={30} />
        </div>
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;

import React from "react";
import "./WhatsAppFloatButton.css"; // Archivo CSS externo
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton = () => {
  const whatsappLink = "https://wa.me/524445090543"; // Cambia con tu número

  return (
    <>
      <div className="floating_btn">
        <a target="_blank" rel="noopener noreferrer" href={whatsappLink}>
          <div className="contact_icon">
            <FaWhatsapp size={30} />
          </div>
        </a>
      </div>
      <p className="text_icon">Talk to us?</p>
    </>
  );
};

export default FloatingWhatsAppButton;

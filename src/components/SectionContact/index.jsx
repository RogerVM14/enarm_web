import React from "react";
import { Link } from "react-router-dom";
import Whatsapp from "./Icons/Whatsapp.png";
import Telegram from "./Icons/Telegram.png";
import Messenger from "./Icons/Messenger.png";
import ui from "./index.module.css";
import { SOCIAL_MEDIA_LINKS } from "../../constants/generals";

const SectionContact = () => {

  return (
    <section id={ui.contactBanner} style={{ background: "#1E73BE" }}>
      <div className="full-container">
        <div className="container-section">
          <h2 className="section-subtitle blue text-center uppercase">contacto</h2>
          <h3 className="section-title white text-center">¿Tienes dudas? Escríbenos</h3>
          <div className={ui.containerIcons}>
            <a to={SOCIAL_MEDIA_LINKS.WHATSAPP}><img src={Whatsapp} alt="Whatsapp Icon" /></a>
            <a to={SOCIAL_MEDIA_LINKS.TELEGRAM}><img src={Telegram} alt="Telegram Icon" /></a>
            {/* <a to={SOCIAL_MEDIA_LINKS.INSTAGRAM}><img src={Messenger} alt="Messenger Icon" /></a> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContact;
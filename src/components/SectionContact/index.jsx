import React from "react";
import { Link } from "react-router-dom";
import Whatsapp from "./Icons/Whatsapp.png";
import Telegram from "./Icons/Telegram.png";
import Messenger from "./Icons/Messenger.png";
import ui from "./index.module.css";

const SectionContact = () => {

  return (
    <section id={ui.contactBanner} style={{ background: "#1E73BE" }}>
      <div className="full-container">
        <div className={ui.sectionContainer}>
          <h2 className="section-subtitle blue text-center uppercase">contacto</h2>
          <h3 className="section-title white text-center">¿Tienes dudas? Escríbenos</h3>
          <div className={ui.containerIcons}>
            <Link to="#"><img src={Whatsapp} alt="Whatsapp Icon" /></Link>
            <Link to="#"><img src={Telegram} alt="Telegram Icon" /></Link>
            <Link to="#"><img src={Messenger} alt="Messenger Icon" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContact;
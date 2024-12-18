import React, { useEffect } from "react";
import SectionQuestions from "../../../components/SectionQuestions";
import SectionContact from "../../../components/SectionContact";
import doctorCoffee from "../../../assets/imgs/monis/einstein-coffee.png";
import facebookIcon from "../../../assets/icons/facebook-blue.png";
import telegramIcon from "../../../assets/icons/telegram-blue.png";
// import messengerIcon from "../../../assets/icons/messenger-blue.png";
import twitterIcon from "../../../assets/icons/twitter-blue.png";
import pinterestIcon from "../../../assets/icons/pinterest-blue.png";
import instagramIcon from "../../../assets/icons/instagram-blue.png";
import whatsappIcon from "../../../assets/icons/whatsapp-blue.png";
import phoneIcon from "../../../assets/icons/phone-blue.png";
import ui from "./index.module.css";
import LandingLayout from "../../Layouts/Landing";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    return;
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <LandingLayout page="contact">
      <section id={ui.hero}>
        <div className="full-container">
          <div className="container-section">
            <div className={ui.containerGrid}>
              <div data-area="title">
                <h1 className="main-title-bold">Habla con nosotros.</h1>
                <p className="regular-parraf">
                  Ya sea que estés buscando más información, o quieras enviar tu
                  formato de pago. Estamos aquí para ayudarte ante cualquier
                  inquietud.
                </p>
              </div>
              <div data-area="contact">
                <div className={ui.contactContainer}>
                  <p className="regular-parraf bold">Contactanos por:</p>
                  <div className={ui.containerBody}>
                    <div className={ui.contactMedia}>
                      <img src={phoneIcon} alt="phone" />
                      <div>
                        <p className="regular-parraf bold blue">
                          Informes y llamadas
                        </p>
                        <p className="regular-parraf">444 509 05 43</p>
                      </div>
                    </div>
                    <div className={ui.contactMedia}>
                      <img src={whatsappIcon} alt="phone" />
                      <div>
                        <p className="regular-parraf bold blue">Whatsapp</p>
                        <p className="regular-parraf">444 509 0543</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-area="media">
                <div className={ui.mediaContainer}>
                  <p className="regular-parraf bold">Síguenos en:</p>
                  <div className={ui.mediaIcons}>
                    <a
                      href="https://www.facebook.com/plataformaenarm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={facebookIcon} alt="facebook" />
                    </a>
                    <a href="https://t.me/PlataformaENARM" target="_blank" rel="noreferrer">
                      <img src={telegramIcon} alt="telegram" />
                    </a>
                    <a href="https://whatsapp.com/channel/0029Va55YOO7Noa5jWtRxi1x" target="_blank" rel="noreferrer">
                      <img src={whatsappIcon} alt="whatsApp" />
                    </a>
                    <a href="https://twitter.com/EnarMoficial?s=09" target="_blank" rel="noreferrer">
                      <img src={twitterIcon} alt="twitter" />
                    </a>
                    <a href="https://pin.it/1UbrEA8" target="_blank" rel="noreferrer">
                      <img src={pinterestIcon} alt="pinterest" />
                    </a>
                    <a href="https://instagram.com/plataformaenarm?utm_medium=3wcopy_link" target="_blank" rel="noreferrer">
                      <img src={instagramIcon} alt="instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div data-area="image">
                <div className={ui.imageContainer}>
                  <img src={doctorCoffee} alt="Doctor cup" />
                </div>
              </div>
              <div data-area="form">
                <div className={ui.formContainer}>
                  <form onSubmit={handleSubmit}>
                    <div className={ui.formInput}>
                      <label className="input-label" htmlFor="name">
                        Nombre completo*
                      </label>
                      <input
                        type="text"
                        placeholder="Nombre completo"
                        name="name"
                        id="contactName"
                      />
                      {/* <span className="regular-parraf-14 danger">Error message ...</span> */}
                    </div>
                    <div className={ui.formInput}>
                      <label className="input-label" htmlFor="name">
                        Correo electrónico*
                      </label>
                      <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        name="email"
                        id="contactEmail"
                      />
                      {/* <span className="regular-parraf-14 danger">Error message ...</span> */}
                    </div>
                    <div className={ui.formInput}>
                      <label className="input-label" htmlFor="name">
                        Mensaje <i>(opcional)</i>
                      </label>
                      <textarea
                        name="message"
                        cols="30"
                        rows="8"
                        placeholder="Escribe tu mensaje"
                        id="contactMessage"
                      ></textarea>
                    </div>
                    <button className="button-rounded-blue-48" type="submit">
                      <span className="button-text">Enviar Mensaje</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionQuestions />
      <SectionContact />
    </LandingLayout>
  );
};

export default ContactPage;

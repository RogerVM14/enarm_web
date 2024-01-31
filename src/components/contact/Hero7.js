import React, { useState, useEffect } from 'react';
import doctorCoffee from '../../assets/imgs/monis/einstein-coffee.png';
import facebookIcon from '../../assets/icons/facebook-blue.png';
import telegramIcon from '../../assets/icons/telegram-blue.png';
import messengerIcon from '../../assets/icons/messenger-blue.png';
import twitterIcon from '../../assets/icons/twitter-blue.png';
import pinterestIcon from '../../assets/icons/pinterest-blue.png';
import instagramIcon from '../../assets/icons/instagram-blue.png';
import whatsappIcon from '../../assets/icons/whatsapp-blue.png';
import phoneIcon from '../../assets/icons/phone-blue.png';
import '../../css/contact/Hero7.css';
import ui from "./index.module.css";

const Hero7 = () => {

  setTimeout(() => {
    const items = document.querySelectorAll(".reveal-load");
    items.forEach(item => {
      item.classList.add("active");
    })

    const body = document.querySelector("body");
    body.scrollTop = 0;
  }, 100);

  return (
    <div className='hero-7'>
      <div className="hero-7-container">
        <ContainerHeader datatype="small" />
        <div className='__container'>
          <ContainerHeader datatype="large" />
          <div className="container-body">
            <div className="subcontainer">
              <ContactUsInfo />
              <FollowUs />
              <img className='doctor-coffee reveal-load' datatype="medium" src={doctorCoffee} alt="doctor-coffe" />
            </div>
            <img className='doctor-coffee reveal-load' datatype="large" src={doctorCoffee} alt="doctor-coffe" />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

const ContainerHeader = ({ datatype }) => {
  return (
    <div className="container-header" datatype={datatype}>
      <h1 className="title text-center reveal-load fade-in-title">
        <span className="bold-47">Habla</span>
        <span className="bold-47">con</span>
        <span className="bold-47">nosotros</span>
      </h1>
      <p className="regular-14 text-center reveal-load">
        Ya sea que estés buscando más información, o quieras enviar tu formato de pago.
        Estamos aquí para ayudarte ante cualquier inquietud.
      </p>
    </div>
  )
}

const FollowUs = () => {

  return (
    <div className="follow-us-container reveal-load">
      <p className='semibold-14'>Síguenos en:</p>
      <div className="social-media-icons">
        <img src={facebookIcon} alt="facebook" />
        <img src={telegramIcon} alt="telegram" />
        <img src={messengerIcon} alt="messenger" />
        <img src={twitterIcon} alt="twitter" />
        <img src={pinterestIcon} alt="pinterest" />
        <img src={instagramIcon} alt="instagram" />
      </div>
    </div>
  )
}

const ContactUsInfo = () => {

  return (

    <div className="contact-us reveal-load">
      <p className='semibold-14'>Contactanos por:</p>
      <div className="info-call">
        <div className='info-call-container'>
          <img src={phoneIcon} alt="phone" />
          <div className='parraf-container'>
            <p className='semibold-14 sky-blue'>Informes y llamadas</p>
            <p className='regular-14'>444 509 05 43</p>
          </div>
        </div>
        <div className='info-call-container'>
          <img src={whatsappIcon} alt="phone" />
          <div className="parraf-container">
            <p className='semibold-14 sky-blue'>Whatsapp</p>
            <p className='regular-14'>888 888 88 88</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ContactForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="form-container reveal-load">
      <form method='POST' onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="medium-16" htmlFor="name">Nombre completo*</label>
          <input type="text" placeholder='Nombre completo' name="name" id="contact-message-name" />
          <span className="red regular-14">Error message ...</span>
        </div>
        <div className="form-group">
          <label className="medium-16" htmlFor="name">Correo electrónico*</label>
          <input type="email" placeholder='Tu correo electrónico' name="email" id="contact-message-email" />
          <span className="red regular-14">Error message ...</span>
        </div>
        <div className="form-group">
          <label className="medium-16" htmlFor="name">Mensaje <i>(opcional)</i></label>
          <textarea name="message" id="contact-message-msg" cols="30" rows="8" placeholder='Escribe tu mensaje' ></textarea>
          {/* <input className='message' type="text" placeholder='Escribe tu mensaje' name="message" id="contact-message-msg" /> */}
        </div>
        <button className='button-rounded-blue-48' type='submit'>
          <span className="button-text">
            Enviar Mensaje
          </span>
        </button>
      </form>
    </div>
  )
}

export default Hero7;
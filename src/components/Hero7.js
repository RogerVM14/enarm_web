import React from 'react';
import '../css/Hero7.css';
import doctorCoffee from '../assets/imgs/monis/einstein-coffee.png';
import facebookIcon from '../assets/icons/facebook-blue.png';
import telegramIcon from '../assets/icons/telegram-blue.png';
import messengerIcon from '../assets/icons/messenger-blue.png';
import twitterIcon from '../assets/icons/twitter-blue.png';
import pinterestIcon from '../assets/icons/pinterest-blue.png';
import instagramIcon from '../assets/icons/instagram-blue.png';
import whatsappIcon from '../assets/icons/whatsapp-blue.png';
import phoneIcon from '../assets/icons/phone-blue.png';

const Hero7 = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='hero-7'>
            <div className="hero-7-container">
                <div className="subcontainer">
                    <h1 className="title">Habla con nosotros</h1>
                    <p className="parraf">Ya sea que estés buscando más información, o quieras enviar tu formato de pago. Estamos aquí para ayudarte ante cualquier inquietud.</p>
                    <div className="contact-us-container">
                        <p>Contactanos por:</p>
                        <div className="info-call">
                            <div className='info-call-container'>
                                <img src={phoneIcon} alt="phone" />
                                <div className='parraf-container'>
                                    <p className='text-blue'>Informes y llamadas</p>
                                    <p className='p-regular'>444 509 05 43</p>
                                </div>
                            </div>
                            <div className='info-call-container'>
                                <img src={whatsappIcon} alt="phone" />
                                <div className="parraf-container">
                                    <p className='text-blue'>Whatsapp</p>
                                    <p className='p-regular'>888 888 8888</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="follow-us-container">
                        <p>Síguenos en:</p>
                        <div className="social-media-icons">
                            <img src={facebookIcon} alt="facebook" />
                            <img src={telegramIcon} alt="telegram" />
                            <img src={messengerIcon} alt="messenger" />
                            <img src={twitterIcon} alt="twitter" />
                            <img src={pinterestIcon} alt="pinterest" />
                            <img src={instagramIcon} alt="instagram" />
                        </div>
                    </div>
                    <img className='absolute' src={doctorCoffee} alt="doctor-coffe" />
                </div>
                <div className="form-container">
                    <form method='POST'>
                        <div className="form-group">
                            <label htmlFor="name">Nombre completo*</label>
                            <input type="text" placeholder='Nombre completo' name="name" id="contact-message-name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Correo electrónico*</label>
                            <input type="email" placeholder='Tu correo electrónico' name="email" id="contact-message-email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Mensaje <i>(opcional)</i></label>
                            <input className='message' type="text" placeholder='Escribe tu mensaje' name="message" id="contact-message-msg" />
                        </div>
                        <button type='submit' onClick={handleSubmit}>
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </div>
    ) 
}

export default Hero7;
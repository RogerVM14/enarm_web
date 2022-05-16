import React from 'react';
import { Link } from 'react-router-dom';
import whatsAppIcon from '../assets/icons/whatsapp-white.png';
import telegramIcon from '../assets/icons/telegram-white.png';
import messengerIcon from '../assets/icons/messenger-white.png';
import '../css/ContactBanner.css';

const ContactBanner = ({ size }) => {
 
    return (
        <div className={`contact-banner bg-blue ${size}`}>
            <div className="contact-banner-container">
                <h1 className="tiny-blue-title text-center">CONTACTO</h1>
                <h2 className="subtitle white text-center">¿Tienes dudas? Escríbenos</h2>
                <div className="social-media-container">
                    <Link className='icon-link' to="#">
                        <img src={whatsAppIcon} alt="social-media-icon" />
                    </Link>
                    <Link className='icon-link' to="#">
                        <img src={telegramIcon} alt="social-media-icon" />
                    </Link>
                    <Link className='icon-link' to="#">
                        <img src={messengerIcon} alt="social-media-icon" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactBanner;
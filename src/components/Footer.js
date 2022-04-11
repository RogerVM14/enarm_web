import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css'
import footerLogo from '../assets/imgs/PicsArt_11-25-01.09.59.jpg';
import iconFacebook from '../assets/icons/vector-facebook.png';
import iconInstagram from '../assets/icons/vector-instagram.png';
import iconPinterest from '../assets/icons/vector-pinterest.png';
import iconTelegram from '../assets/icons/vector-telegram.png';
import iconMessenger from '../assets/icons/vector-messenger.png';
import iconTwitter from '../assets/icons/vector-twitter.png';


const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <img className='footer-enarm-logo' src={footerLogo} alt='footer-logo' />
                <div className='footer-enlaces'>
                    <div className='enlaces-left'>
                    <span>Enlaces</span>
                        <Link className='footer-link home' to='/'>Inicio</Link>
                        <Link className='footer-link about-us' to='/nosotros'>Nosotros</Link>
                        <Link className='footer-link about-course' to='/sobre_el_curso'>Curso ENARM</Link>
                    </div>
                    <div className='enlaces-right'>
                        <Link className='footer-link blog' to='/blog'>Blog</Link>
                        <Link className='footer-link free-test rounded-circle' to='/prueba_gratis'>Demo Gratis</Link>
                        <Link className='footer-link contact' to='/contacto'>Contacto</Link>     
                    </div>      
                </div>
                <div className='footer-contactanos'>
                    <span>Contáctanos</span>
                    <Link className='footer-link' to="#">
                        <i className='material-icons-outlined contact-icon'>whatsapp</i>
                        Whatsapp
                    </Link>
                    <Link className='footer-link' to="#">
                        <img className='contact-icon' src={iconTelegram} alt='' />
                        Telegram
                    </Link>
                    <Link className='footer-link' to="#">
                        <img className='contact-icon' src={iconMessenger} alt='' />
                        Messenger
                    </Link>
                </div>
                <div className='footer-right-container'>
                    <Link className='footer-link button-inscription' to='/registrate'>Inscribirme ahora</Link>
                    <div className='footer-social-media'>
                        <Link to='' className='vectors'>
                            <img src={iconFacebook} alt='' />
                        </Link>
                        <Link to='' className='vectors'>
                            <img src={iconTwitter} alt='' />
                        </Link>
                        <Link to='' className='vectors'>
                            <img src={iconPinterest} alt='' />
                        </Link>
                        <Link to='' className='vectors'>
                            <img src={iconInstagram} alt='' />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
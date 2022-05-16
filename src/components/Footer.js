import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/Footer.css'
import footerLogo from '../assets/imgs/PicsArt_11-25-01.09.59.jpg';
import iconFacebook from '../assets/icons/vector-facebook.png';
import iconInstagram from '../assets/icons/vector-instagram.png';
import iconPinterest from '../assets/icons/vector-pinterest.png';
import iconTelegram from '../assets/icons/vector-telegram.png';
import iconMessenger from '../assets/icons/vector-messenger.png';
import iconTwitter from '../assets/icons/vector-twitter.png';

const Footer = ({ topLine, size }) => {
 
    const activeStyle = { fontWeight: "bold" };
 
    const linkIsActive = (isActive) => {
        return isActive ? activeStyle : undefined;
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0 })
    }

    return (
        <footer className={size}>
            { topLine && (<hr />)}
            <div className={`footer-container ${size}`}>

                <img 
                    className='footer-enarm-logo' 
                    src={footerLogo} 
                    alt='footer-logo' 
                    style={ 
                        ['xs', 'sm', 'md'].includes(size) ? 
                        { maxHeight: "104px", maxWidth: "104px"} : 
                        { maxHeight: "159px", maxWidth: "159px"}
                    }
                />

                {
                    !["xs", 'sm', 'md'].includes(size) && (
                        <div className='footer-enlaces'>
                            <div className='enlaces-left'>
                                <span className='regular-14'>Enlaces</span>
                                <NavLink 
                                    onClick={() => scrollToTop() }
                                    className='footer-link regular-14 home' 
                                    to='/' 
                                    style={({ isActive }) => linkIsActive(isActive) }
                                >Inicio
                                </NavLink>
                                <NavLink 
                                    onClick={() => scrollToTop() }
                                    className='footer-link regular-14 about-us' 
                                    to='/nosotros' 
                                    style={({ isActive }) => linkIsActive(isActive) }
                                >Nosotros
                                </NavLink>
                                <NavLink 
                                    onClick={() => scrollToTop() }
                                    className='footer-link regular-14 about-course' 
                                    to='/sobre_el_curso' 
                                    style={({ isActive }) => linkIsActive(isActive) }
                                >Curso ENARM
                                </NavLink>
                            </div>
                            <div className='enlaces-right'>
                                <NavLink 
                                    onClick={() => scrollToTop() }
                                    className='footer-link regular-14 blog' 
                                    to='/blog' 
                                    style={({ isActive }) => linkIsActive(isActive) }
                                >Blog
                                </NavLink>
                                <NavLink 
                                    onClick={() => scrollToTop() }
                                    className='footer-link regular-14 free-test rounded-circle' 
                                    to='/prueba_gratis' 
                                    style={({ isActive }) => linkIsActive(isActive) }
                                >Demo Gratis
                                </NavLink>
                                <NavLink 
                                    onClick={() => scrollToTop() }
                                    className='footer-link regular-14 contact' 
                                    to='/contacto' 
                                    style={({ isActive }) => linkIsActive(isActive) }
                                >Contacto
                                </NavLink>
                            </div>      
                        </div>
                    )
                }

                { 
                    ['xs', 'sm'].includes(size) && (
                        <button className='button-rounded-blue-48 suscribe-button'>
                            <span className="button-text">
                                Inscribirme ahora
                            </span>
                        </button>
                    )
                }

                <div className='footer-contactanos'>
                    <span className='regular-16 gray'>Contáctanos</span>
                    <div className='contact-links'>
                        <Link onClick={() => scrollToTop() }className='footer-link' to="#">
                            <i className='material-icons-outlined contact-icon'>whatsapp</i>
                            <span className='regular-14 black'>Whatsapp</span>
                        </Link>
                        <Link onClick={() => scrollToTop() }className='footer-link' to="#">
                            <img className='contact-icon' src={iconTelegram} alt='telegram' />
                            <span className='regular-14 black'>Telegram</span>
                        </Link>
                        <Link onClick={() => scrollToTop() }className='footer-link' to="#">
                            <img className='contact-icon' src={iconMessenger} alt='messenger' />
                            <span className='regular-14 black'>Messenger</span>
                        </Link>
                    </div>
                </div> 
                { 
                    !['md','lg','xl', 'xxl'].includes(size)  ? (
                        <div className='footer-social-media'>
                            <Link onClick={() => scrollToTop() }to='#' className='vectors'>
                                <img src={iconFacebook} alt='facebook' />
                            </Link>
                            <Link onClick={() => scrollToTop() }to='#' className='vectors'>
                                <img src={iconTwitter} alt='twitter' />
                            </Link>                    
                            <Link onClick={() => scrollToTop() }to='#' className='vectors'>
                                <img src={iconInstagram} alt='instagram' />
                            </Link>
                        </div>  
                    ) : (
                        <div className='button-with-links'>
                            <button className='button-rounded-blue-48 suscribe-button'>
                                <span className="button-text">
                                    Inscribirme ahora
                                </span>
                            </button>
                            <div className='footer-social-media'>
                                <Link onClick={() => scrollToTop() }to='#' className='vectors'>
                                    <img src={iconFacebook} alt='facebook' />
                                </Link>
                                <Link onClick={() => scrollToTop() }to='#' className='vectors'>
                                    <img src={iconTwitter} alt='twitter' />
                                </Link>                    
                                { 
                                    size !== 'md' && (
                                        <Link onClick={() => scrollToTop() }to='#' className='vectors'>
                                            <img src={iconPinterest} alt='pinterest' />
                                        </Link>
                                    )
                                }
                                <Link onClick={() => scrollToTop() }to='#' className='vectors'>
                                    <img src={iconInstagram} alt='instagram' />
                                </Link>
                            </div> 
                        </div>
                    )
                }
                
            </div>
        </footer>
    )
}

export default Footer;
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

const Footer = ({ topLine, breakpoint }) => {

    const activeStyle = { fontWeight: "bold" };

    return (
        <footer className={breakpoint}>
            { topLine && (<hr />)}
            <div className={`footer-container ${breakpoint}`}>

                <img className='footer-enarm-logo' src={footerLogo} alt='footer-logo' />

                <div className='footer-enlaces'>
                    <div className='enlaces-left'>
                        <span>Enlaces</span>
                        <NavLink className='footer-link home' to='/' style={({ isActive }) => isActive ? activeStyle : undefined }>Inicio</NavLink>
                        <NavLink className='footer-link about-us' to='/nosotros' style={({ isActive }) => isActive ? activeStyle : undefined }>Nosotros</NavLink>
                        <NavLink className='footer-link about-course' to='/sobre_el_curso' style={({ isActive }) => isActive ? activeStyle : undefined }>Curso ENARM</NavLink>
                    </div>
                    <div className='enlaces-right'>
                        <NavLink className='footer-link blog' to='/blog' style={({ isActive }) => isActive ? activeStyle : undefined }>Blog</NavLink>
                        <NavLink className='footer-link free-test rounded-circle' to='/prueba_gratis' style={({ isActive }) => isActive ? activeStyle : undefined }>Demo Gratis</NavLink>
                        <NavLink className='footer-link contact' to='/contacto' style={({ isActive }) => isActive ? activeStyle : undefined }>Contacto</NavLink>
                    </div>      
                </div>

                { 
                    breakpoint !== 'extra-large' && (
                        <button className='button-rounded-blue-48 suscribe-button'>
                            <span className="button-text">
                                Inscribirme ahora
                            </span>
                        </button>
                    )
                }

                <div className='footer-contactanos'>
                    <span>Contáctanos</span>
                    <div className='contact-links'>
                        <Link className='footer-link' to="#">
                            <i className='material-icons-outlined contact-icon'>whatsapp</i>
                            <span className='black'>Whatsapp</span>
                        </Link>
                        <Link className='footer-link' to="#">
                            <img className='contact-icon' src={iconTelegram} alt='' />
                            <span className='black'>Telegram</span>
                        </Link>
                        <Link className='footer-link' to="#">
                            <img className='contact-icon' src={iconMessenger} alt='' />
                            <span className='black'>Messenger</span>
                        </Link>
                    </div>
                </div> 
                { 
                    breakpoint !== 'extra-large' ? (
                        <div className='footer-social-media'>
                            <Link to='' className='vectors'>
                                <img src={iconFacebook} alt='facebook' />
                            </Link>
                            <Link to='' className='vectors'>
                                <img src={iconTwitter} alt='twitter' />
                            </Link>                    
                            <Link to='' className='vectors'>
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
                                <Link to='' className='vectors'>
                                    <img src={iconFacebook} alt='facebook' />
                                </Link>
                                <Link to='' className='vectors'>
                                    <img src={iconTwitter} alt='twitter' />
                                </Link>                    
                                <Link to='' className='vectors'>
                                    <img src={iconPinterest} alt='pinterest' />
                                </Link>
                                <Link to='' className='vectors'>
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
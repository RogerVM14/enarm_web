import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/imgs/PicsArt_11-25-01.09.59.jpg' 
import '../css/Navbar.css';


const NavBar = ({ size, ismobile }) => {
  
    //  size: [xs, sm, md, lg, xl, xxl]
    //  ismobile: [xs, sm, md] == true | [lg, xl, xxl] == false
    
    const [active, setActive] = useState(false);
    const [mobileDevice, setMobileDevice] = useState(true);
    const activeStyle = { fontWeight: "bold", color: "#05B2FA", borderColor: "#05B2FA" }; 

    const linkIsActive = (isActive) => {
        return isActive ? activeStyle : undefined;
    }

    useEffect(() => {
        const isMobileDevice = () => {
            if(ismobile === 'true') {
                setMobileDevice(true)
                return;
            }
            setMobileDevice(false);
            return;
        }

        isMobileDevice(); 
    }, [ismobile]);

    const logoSize = () => {
        return mobileDevice ? { maxHeight: "80px", maxWidth: "80px" } : { maxHeight: "104px", maxWidth: "104px" };
    }
 
    return (
        <header className={size}>
            <nav className='navbar'>
                <div className={`navbar-container ${size}`}>
                    <div className="navbar-logo-container">
                        <Link to='/'>
                            <img 
                                className='navbar-logo' 
                                src={logo} 
                                alt='enarm-logo' 
                                style={ logoSize() }/>
                        </Link>
                    </div>
                    <div className='sub-container'>
                        { mobileDevice ? (
                            <>
                                <ul className='session'>
                                    <li className='get_course'>
                                        <button className='button-rounded-blue-35 button-text-white'>
                                            <span className="button-text">Obtener Curso</span>
                                        </button>
                                    </li>
                                    <li className='menu'>
                                        <button className='button-menu' onClick={() => { setActive(!active); }}>
                                            <i className='material-icons-outlined'>menu</i>
                                        </button>
                                    </li>
                                </ul>  
                            </>
                        ) : (
                            <>
                                <ul className='routes'>
                                    <li>
                                        <NavLink 
                                            style={({ isActive }) => linkIsActive(isActive) }
                                            className='regular-14 navbar-link home' 
                                            to='/' 
                                            >Inicio
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            className='regular-14 navbar-link about-us' 
                                            to='/nosotros' 
                                            style={({ isActive }) => linkIsActive(isActive) }
                                            >Nosotros
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            className='regular-14 navbar-link about-course' 
                                            to='/sobre_el_curso' 
                                            style={({ isActive }) => linkIsActive(isActive) }
                                            >Sobre el Curso
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            className='regular-14 navbar-link blog' 
                                            to='/blog' 
                                            style={({ isActive }) => linkIsActive(isActive) }
                                            >Blog
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            className='regular-14 navbar-link free-test rounded-circle' 
                                            to='/prueba_gratis' 
                                            style={({ isActive }) => linkIsActive(isActive) }
                                            >Prueba Gratis
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            className='regular-14 navbar-link contact' 
                                            to='/contacto' style={({ isActive }) => linkIsActive(isActive) }
                                            >Contacto
                                        </NavLink>
                                    </li>
                                    {
                                        mobileDevice ? (
                                            <li className={size}>
                                                <NavLink 
                                                    className='navbar-link login-link' 
                                                    to='/iniciar_sesion' 
                                                    style={({ isActive }) => linkIsActive(isActive) }
                                                    >
                                                    <i className='material-icons-outlined'>account_circle</i>
                                                    <span className='regular-14'>Iniciar Sesión</span>
                                                </NavLink>
                                            </li>
                                        ) : (
                                            <></>
                                        )
                                    }
                                </ul>
                                <ul className='actions'>
                                    <li className='get_course'>
                                        <button className='button-rounded-blue-35 button-text-white'>
                                            <span className="button-text">
                                                Obtener Curso
                                            </span>
                                        </button>
                                    </li>
                                    <li className='session'>
                                        <NavLink 
                                            className='navbar-link login-link' 
                                            to='/iniciar_sesion' 
                                            style={({ isActive }) => linkIsActive(isActive) }
                                            >
                                            <i className='material-icons-outlined'>account_circle</i>
                                            <span className='regular-14'>Iniciar Sesión</span>
                                        </NavLink>
                                    </li>
                                </ul> 
                            </>
                        )}   
                    </div>
                </div> 
                { mobileDevice && (
                    <div className={`menu-dropdown-list ${active ? 'menu-visible' : 'menu-hidden'}`}>
                        <div className="menu-dropdown-header">
                            <div className="navbar-logo-container">
                                <Link onClick={() => { setActive(false); }} to='/'>
                                    <img 
                                        className='navbar-logo' 
                                        src={logo} 
                                        alt='enarm-logo' 
                                        style={ logoSize() }/>
                                </Link>
                            </div>
                            <div className='close-menu'>
                                <Link to='#' onClick={() => { setActive(false); }}>
                                    <i className="material-icons-outlined">close</i>
                                </Link>
                            </div>
                        </div>
                        <ul className='menu-routes'>
                            <li>
                                <NavLink onClick={() => { setActive(false); }} className='navbar-link home' to='/'>
                                    <span className="montse-16">Inicio</span>
                                    <i className="material-icons-outlined">chevron_right</i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => { setActive(false); }} className='navbar-link about-us' to='/nosotros'>
                                    <span className="montse-16">Nosotros</span>
                                    <i className="material-icons-outlined">chevron_right</i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => { setActive(false); }} className='navbar-link about-course' to='/sobre_el_curso'>
                                    <span className="montse-16">Sobre el Curso</span>
                                    <i className="material-icons-outlined">chevron_right</i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => { setActive(false); }} className='navbar-link blog' to='/blog'>
                                    <span className="montse-16">Blog</span>
                                    <i className="material-icons-outlined">chevron_right</i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => { setActive(false); }} className='navbar-link free-test' to='/prueba_gratis'>
                                    <span className="montse-16">Prueba Gratis</span>
                                    <i className="material-icons-outlined">chevron_right</i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => { setActive(false); }} className='navbar-link contact' to='/contacto'>
                                    <span className="montse-16">Contacto</span>
                                    <i className="material-icons-outlined">chevron_right</i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => { setActive(false); }} className='navbar-link login-link' to='/iniciar_sesion'> 
                                    <span className='montse-16'>Iniciar Sesión</span> 
                                    <i className="material-icons-outlined">chevron_right</i>
                                </NavLink> 
                            </li>
                        </ul>
                        <button className='button-rounded-blue-48 button-text-white'>
                            <span className="button-text">Obtener Curso</span>
                        </button>
                    </div> 
                )}
            </nav>
        </header>
    )
}

export default NavBar;
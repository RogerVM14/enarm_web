import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/imgs/PicsArt_11-25-01.09.59.jpg'
import '../css/Navbar.css';


const NavBar = ({breakpoint}) => {
 
    const [active, setActive] = useState(false);
    const activeStyle = { fontWeight: "bold", color: "#05B2FA", borderColor: "#05B2FA" };

    return (
        <header className={breakpoint}>
            <nav className='navbar'>
                <div className={`navbar-container ${breakpoint}`}>
                    <div className="navbar-logo-container">
                        <Link to='/'>
                            <img className='navbar-logo' src={logo} alt='enarm-logo' />
                        </Link>
                    </div>
                    <div className='sub-container'>
                        <ul className='routes'>
                            <li><NavLink className='regular-14 navbar-link home' to='/' style={({ isActive }) => isActive ? activeStyle : undefined }>Inicio</NavLink></li>
                            <li><NavLink className='regular-14 navbar-link about-us' to='/nosotros' style={({ isActive }) => isActive ? activeStyle : undefined }>Nosotros</NavLink></li>
                            <li><NavLink className='regular-14 navbar-link about-course' to='/sobre_el_curso' style={({ isActive }) => isActive ? activeStyle : undefined }>Sobre el Curso</NavLink></li>
                            <li><NavLink className='regular-14 navbar-link blog' to='/blog' style={({ isActive }) => isActive ? activeStyle : undefined }>Blog</NavLink></li>
                            <li><NavLink className='regular-14 navbar-link free-test rounded-circle' to='/prueba_gratis' style={({ isActive }) => isActive ? activeStyle : undefined }>Prueba Gratis</NavLink></li>
                            <li><NavLink className='regular-14 navbar-link contact' to='/contacto' style={({ isActive }) => isActive ? activeStyle : undefined }>Contacto</NavLink></li>
                            <li className={breakpoint}>
                                <NavLink className='navbar-link login-link' to='/iniciar_sesion' style={({ isActive }) => isActive ? activeStyle : undefined }>
                                    <i className='material-icons-outlined'>account_circle</i>
                                    <span className='regular-14'>Iniciar Sesión</span>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className='actions'>
                            <li className='get_course'>
                                <button className='button-rounded-blue-35 button-text-white'>
                                    <span className="button-text">Obtener Curso</span>
                                </button>
                            </li>
                            <li className='session'>
                                <NavLink className='navbar-link login-link' to='/iniciar_sesion' style={({ isActive }) => isActive ? activeStyle : undefined }>
                                    <i className='material-icons-outlined'>account_circle</i>
                                    <span className='regular-14'>Iniciar Sesión</span>
                                </NavLink>
                            </li>
                        </ul>    
                        <ul className='session'>
                            <li className='menu'>
                                <button className='button-menu' onClick={() => { setActive(!active); }}>
                                    <i className='material-icons-outlined'>menu</i>
                                </button>
                            </li>
                        </ul>  
                        <div className={`menu-dropdown-list ${active ? 'menu-visible' : 'menu-hidden'}`}>
                            <ul className='menu-routes'>
                                <li><NavLink onClick={() => { setActive(false); }} className='regular-14 navbar-link home' to='/'>Inicio</NavLink></li> <hr />
                                <li><NavLink onClick={() => { setActive(false); }} className='regular-14 navbar-link about-us' to='/nosotros'>Nosotros</NavLink></li> <hr />
                                <li><NavLink onClick={() => { setActive(false); }} className='regular-14 navbar-link about-course' to='/sobre_el_curso'>Sobre el Curso</NavLink></li> <hr />
                                <li><NavLink onClick={() => { setActive(false); }} className='regular-14 navbar-link blog' to='/blog'>Blog</NavLink></li> <hr />
                                <li><NavLink onClick={() => { setActive(false); }} className='regular-14 navbar-link free-test' to='/prueba_gratis'>Prueba Gratis</NavLink></li> <hr />
                                <li><NavLink onClick={() => { setActive(false); }} className='regular-14 navbar-link contact' to='/contacto'>Contacto</NavLink></li> <hr />
                                <li><NavLink onClick={() => { setActive(false); }} className='navbar-link login-link' to='/iniciar_sesion'> <span className='regular-14'>Iniciar Sesión</span> </NavLink> </li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;
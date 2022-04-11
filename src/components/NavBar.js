import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/PicsArt_11-25-01.09.59.jpg'
import '../css/Navbar.css';

const NavBar = () => { 

    const navLinks = document.querySelectorAll(".navbar-link");
   
    const handleNavLink = (e) => {
        const self = e.currentTarget;
        navLinks.forEach(link => {
            if(link.classList.contains('isSelected')) {
                link.classList.remove('isSelected');
            }
        });
        self.classList.add("isSelected"); 
    } 

    return (
        <header>
            <nav className='navbar'>  
                <div className='navbar-container'>
                    <img className='navbar-logo' src={logo} alt='enarm-logo' /> 
                    <div className='main-routes'>
                        <Link className='navbar-link home' to='/' onClick={handleNavLink}>Inicio</Link>
                        <Link className='navbar-link about-us' to='/nosotros' onClick={handleNavLink}>Nosotros</Link>
                        <Link className='navbar-link about-course' to='/sobre_el_curso' onClick={handleNavLink}>Sobre el Curso</Link>
                        <Link className='navbar-link blog' to='/blog' onClick={handleNavLink}>Blog</Link>
                        <Link className='navbar-link free-test rounded-circle' to='/prueba_gratis' onClick={handleNavLink}>Prueba Gratis</Link>
                        <Link className='navbar-link contact' to='/contacto' onClick={handleNavLink}>Contacto</Link>           
                    </div>
                    <div className='navbar-right-controls'>
                        <Link className='navbar-link get-course' to='#' onClick={handleNavLink}>Obtener Curso</Link> 
                        <Link className='navbar-link login-link' to='/iniciar_sesion' onClick={handleNavLink}>
                            <i className='material-icons-outlined'>account_circle</i>
                            <span>Iniciar Sesión</span>
                        </Link> 
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoIcon from "../../Assets/Images/EnarmLogo.jpg"
import ui from "./index.module.css";

const NavBar = () => {

  const [display, setDisplay] = useState(false);

  const navigationLinks = [
    { label: "Inicio", url: "/" },
    { label: "Nosotros", url: "/nosotros" },
    { label: "Sobre el Curso", url: "/curso" },
    { label: "Blog", url: "/blog" },
    { label: "Prueba Gratis", url: "/prueba", rounded: true },
    { label: "Contacto", url: "/contacto" },
  ];

  return (
    <header>
      <div className="full-container">
        <div className={ui.headerContainer}>
          <nav className={ui.containerNavigation}>
            <div datatype="large" className={ui.imageContainer}>
              <img src={LogoIcon} alt="logo" className={ui.logoImage} width={104} height={104} />
            </div>
            <div className={ui.navigationHeader} datatype="small">
              <div className={ui.imageContainer}>
                <img src={LogoIcon} alt="logo" className={ui.logoImage} width={104} height={104} />
              </div>
              <MobileHeaderNavTools display={display} handleDisplay={(e) => setDisplay(e)} />
            </div>
            <div className={ui.containerNavLinks} data-display={display}>
              <NavigationLinks
                list={navigationLinks}
                handleDisplay={() => { setDisplay(false) }}
              />
              <Link datatype="small" to="/registro" className={ui.blueRoundedLink}>Obtener Curso</Link>
            </div>
            <ul className={ui.authLinks}>
              <li>
                <Link datatype="large" to="/registro" className={ui.blueRoundedLink}>Obtener Curso</Link>
              </li>
              <li className={ui.linkWithIcon}>
                <UserIcon />
                <Link to="/login" className={ui.loginLink}>Iniciar Sesión</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

const MobileHeaderNavTools = ({ display, handleDisplay }) => {

  return display
    ? (
      <button type="button" className={ui.closeButton} onClick={() => handleDisplay(false)}>
        <CloseIcon />
      </button>
    )
    : (
      <div className={ui.headerTools}>
        <Link datatype="small" to="/registro" className={ui.blueRoundedLink}>Obtener Curso</Link>
        <button type="button" className={ui.burgerMenu} onClick={() => { handleDisplay(true) }}>
          <BurgerIcon />
        </button>
      </div>
    )
}

const NavigationLinks = ({ list, handleDisplay = () => { } }) => {
  return (
    <ul className={ui.navigationLinks}>
      {
        list?.map((item, index) => {
          return (
            <li className={ui.linkItem} key={index}>
              <NavLink
                to={item.url}
                className={({ isActive }) => isActive ? ui.selectedLink : ui.link}
                data-rounded={item.rounded ?? null}
                onClick={() => { handleDisplay() }}
              >
                {item.label}
              </NavLink>
            </li>
          )
        })
      }
    </ul>
  )
}

const BurgerIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 25" fill="none">
      <g clipPath="url(#clip0_200_1482)">
        <path d="M3 4.59375H21V6.56906H3V4.59375ZM3 11.5073H21V13.4826H3V11.5073ZM3 18.4209H21V20.3962H3V18.4209Z" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_200_1482">
          <rect width="24" height="23.7037" fill="white" transform="translate(0 0.642578)" />
        </clipPath>
      </defs>
    </svg>
  )
}

const UserIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5.12104 17.8037C7.15267 16.6554 9.4998 16 12 16C14.5002 16 16.8473 16.6554 18.879 17.8037M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const CloseIcon = () => {
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0_732_13854)">
      <path d="M12 10.5867L16.95 5.63672L18.364 7.05072L13.414 12.0007L18.364 16.9507L16.95 18.3647L12 13.4147L7.04999 18.3647L5.63599 16.9507L10.586 12.0007L5.63599 7.05072L7.04999 5.63672L12 10.5867Z" fill="black" />
    </g>
    <defs>
      <clipPath id="clip0_732_13854">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
}

export default NavBar;
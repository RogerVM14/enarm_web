import React from "react";
import ui from "./index.module.css";
import LogoIcon from "../../Assets/Images/EnarmLogo.jpg";
import { Link } from "react-router-dom";
import Whatsapp from "./Icons/Whatsapp.svg";
import Telegram from "./Icons/Telegram.svg";
import Facebook from "./Icons/Facebook.svg";
import Instagram from "./Icons/Instagram.svg";
import Pinterest from "./Icons/Pinterest.svg";
import Twitter from "./Icons/X.svg";
import { ROUTES } from "../../../../constants/routes";
import { SOCIAL_MEDIA_LINKS } from "../../../../constants/generals";

const Footer = ({
  visible
}) => {

  const socialMediaLinks = [
    { url: SOCIAL_MEDIA_LINKS.FACEBOOK, alt: "Facebook", icon: Facebook },
    { url: SOCIAL_MEDIA_LINKS.TWITTER, alt: "Twitter", icon: Twitter },
    { url: SOCIAL_MEDIA_LINKS.PINTEREST, alt: "Pinterest", icon: Pinterest },
    { url: SOCIAL_MEDIA_LINKS.INSTAGRAM, alt: "Instagram", icon: Instagram }
  ];

  const contactLinks = [
    { url: SOCIAL_MEDIA_LINKS.WHATSAPP, alt: "WhatsApp", icon: Whatsapp, label: "Whatsapp" },
    { url: SOCIAL_MEDIA_LINKS.TELEGRAM, alt: "Telegram", icon: Telegram, label: "Telegram" },
    // { url: "#", alt: "Messenger", icon: Messenger, label: "Messenger" }
  ];

  const routerLinks = [
    [
      { url: ROUTES.HOME, alt: "Inicio", label: "Inicio" },
      { url: ROUTES.NOSOTROS, alt: "Nosotros", label: "Nosotros" },
      { url: ROUTES.SOBRE_EL_CURSO, alt: "Curso ENARM", label: "Curso ENARM" }
    ],
    [
      // { url: "/blog", alt: "Blog", label: "Blog" },
      // { url: "/prueba", alt: "Demo Gratis", label: "Demo Gratis" },
      { url: ROUTES.CONTACTO, alt: "Contacto", label: "Contacto" }
    ]
  ];

  return visible === true ? (
    <footer>
      <div className="full-container">
        <hr />
        <div className={ui.footerContainer}>
          <div className={ui.imageContainer}>
            <img src={LogoIcon} alt="logo" />
          </div>
          <Link to={ROUTES.REGISTRO} datatype="onlySmall" className={ui.blueButtonLink}>Inscribirme ahora</Link>
          <div className={ui.navigationLinks}>
            <h5>Enlaces</h5>
            {
              routerLinks?.map((item, index) => {
                return (
                  <NavLinks list={item} key={index} classList={ui.linkList} />
                )
              })
            }
          </div>
          <div className={ui.contactLinks}>
            <h5>Contáctanos</h5>
            <NavLinks list={contactLinks} classList={ui.contactList} />
          </div>
          <div className={ui.subscriptionAndSocialMedia}>
            <Link to="#" className={ui.blueButtonLink}>Inscribirme ahora</Link>
            <NavLinks list={socialMediaLinks} classList={ui.socialMediaList} />
          </div>
        </div>
      </div>
    </footer>
  ) : null;
}

const NavLinks = ({ list, classList }) => {
  return (
    <nav>
      <ul className={classList}>
        {
          list?.map((item, index) => {
            return (
              <li key={index}>
                <IconLink
                  url={item.url}
                  alt={item.alt}
                  icon={item.icon}
                >
                  {item.label}
                </IconLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

const IconLink = ({ url, icon, alt, children }) => {
  return (
    <Link to={url} title={alt}>
      {icon ? <img src={icon} alt={alt} title={alt} /> : null}
      {children}
    </Link>
  )
}

export default Footer;
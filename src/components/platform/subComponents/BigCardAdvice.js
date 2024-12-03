import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import cardImage from '../../../assets/imgs/aviso.img.png';
import '../../../css/platform/components/BigCard.css'
import { ROUTES } from '../../../constants/routes';

const BigCardAdvice = (props) => {

  // const { device } = props;

  // const navigate = useNavigate();

  // const handleNavigation = () => {
  //   navigate("/u/planes/aviso_novedades");
  // }

  return (
    // <div className={`c-big-card ${device}`}>
    <div className="c-big-card">
      <div className='big-card-container'>
        {/* <div className={`big-card__image-box ${device}`}> */}
        <div className="big-card__image-box">
          <img className='image-box__image' src={cardImage} alt="advice-img" />
        </div>
        {/* <div className={`bc-c-text-container ${device}`}> */}
        <div className="bc-c-text-container">
          {/* <h1 className={`regular-${device === "smart" ? "14" : "16"} fw500`}>Avisos</h1> */}
          <h1 className="regular-16 fw500">Avisos</h1>
          {/* {
            device === "smart" ? (
              <p className='regular-12 lineHeight-18'>
                Mantente al tanto de todo lo relevante dentro de Plataforma ENARM para que tengas una buena ...
                <span
                  className="regular-12 sky-blue noDecor"
                  onClick={() => { handleNavigation() }}
                >Ver todos los avisos</span>
              </p>

            ) :
              ( */}
          <>
            <p className='regular-14'>Mantente al tanto de todo lo relevante dentro de Plataforma ENARM para que tengas una buena experiencia.</p>
            <br />
            <p className='regular-14'>Dentro de Avisos encontrarás:</p>
            <ul>
              <li><span className='regular-14'>Avisos Legales.</span></li>
              <li><span className='regular-14'>Reportar sesiones o contraseñas.</span></li>
              <li><span className='regular-14'>Preguntas frecuentes.</span></li>
              <li><span className='regular-14'>Formas de contacto, y mucho más.</span></li>
            </ul>
            <br />
            <Link className="regular-14 sky-blue noDecor" to={ROUTES.PLATAFORMA_AVISOS_ENARM}>Ver todos los avisos</Link>
          </>
          {/* )
          } */}
        </div>
      </div>
    </div>
  )
}

export default BigCardAdvice;
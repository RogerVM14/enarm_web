import React, { useState, useEffect } from 'react';
import bgImageMedium from '../../assets/imgs/Dres/ymlp.png';
import '../../css/about_course/Hero3.css';
import FadeInTitle from "../FadeInTitle";

const Hero3 = ({ size, ismobile }) => {

  const [mobileDevice, setMobileDevice] = useState(true);

  useEffect(() => {
    const isMobileDevice = () => {
      if (ismobile) {
        setMobileDevice(true)
        return;
      }
      setMobileDevice(false);
      return;
    }

    isMobileDevice();
  }, [ismobile]);

  setTimeout(() => {
    const items = document.querySelectorAll(".reveal-load");
    items.forEach(item => {
      item.classList.add("active");
    })

    const body = document.querySelector("body");
    body.scrollTop = 0;
  }, 100);

  const wordsTitle = ["Obtén", "un", "seguimiento", "personalizado", "e", "intensivo"]

  return (
    <div className={`hero-3 ${size}`}>
      <div className="hero-3-container">
        <div className="gradient"></div>
        {!mobileDevice && (<div className="triangle"></div>)}
        <div className="hero-3-container-header reveal-load">
          <FadeInTitle words={wordsTitle} align="center" />
          <p className={mobileDevice ? 'regular-14 text-center' : 'bold-16'}>
            Este año queremos que más del 85% de nuestros alumnos aprueben el ENARM en su primer intento.
          </p>
        </div>
        <div className="hero-3-container-body reveal-load">
          <button className='button-rounded-blue-48'>
            <span className="button-text">
              Obtener Curso
            </span>
          </button>
          <button className='only-letters'>
            <span>Ver Contenido del Curso</span>
            <i className='material-icons-outlined'>chevron_right</i>
          </button>
        </div>
        {mobileDevice && (<div className="bg-image" style={{ backgroundImage: `url('${bgImageMedium}')` }}></div>)}
      </div>
    </div>
  )
}

export default Hero3;
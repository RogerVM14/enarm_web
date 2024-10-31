import React, { useState, useEffect } from "react";
import bgImageMedium from "../../../Assets/Images/Heroes.png";
import FadeInTitle from "../../../../components/FadeInTitle";
import "./Hero3.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";

const Hero3 = ({ size, isMobile }) => {

  const [mobileDevice, setMobileDevice] = useState(true);

  useEffect(() => {
    const isMobileDevice = () => {
      if (isMobile) {
        setMobileDevice(true)
        return;
      }
      setMobileDevice(false);
      return;
    }

    isMobileDevice();
  }, [isMobile]);

  setTimeout(() => {
    const items = document.querySelectorAll(".reveal-load");
    items.forEach(item => {
      item.classList.add("active");
    })

    const body = document.querySelector("body");
    body.scrollTop = 0;
  }, 100);

  const wordsTitle = ["Obtén", "un", "seguimiento", "personalizado", "e", "intensivo"]
  const navigate = useNavigate()
  const handleNavigate = () => navigate(ROUTES.REGISTRO)
  return (
    <div className={`hero-3 ${size}`}>
      <div className="hero-3-container">
        <div className="gradient"></div>
        {mobileDevice === false ? (<div className="triangle"></div>) : null}
        <div className="hero-3-container-header reveal-load">
          <FadeInTitle words={wordsTitle} align="center" />
          <p className={mobileDevice ? "regular-14 text-center" : "bold-16"}>
            Este año queremos que más del 85% de nuestros alumnos aprueben el ENARM en su primer intento.
          </p>
        </div>
        <div className="hero-3-container-body reveal-load">
          <button type="button" className="button-rounded-blue-48" onClick={handleNavigate}>
            <span className="button-text">
              Obtener Curso
            </span>
          </button>
          {/* <button type="button" className="only-letters">
            <span>Ver Contenido del Curso</span>
            <i className="material-icons-outlined">chevron_right</i>
          </button> */}
        </div>
        {mobileDevice && (<div className="bg-image" style={{ backgroundImage: `url("${bgImageMedium}")` }}></div>)}
      </div>
    </div>
  )
}

export default Hero3;
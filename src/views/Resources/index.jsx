import React from "react";
import { Link } from "react-router-dom";
import PlayIcon from "../../pages/Assets/Icons/playIcon.svg";
import LupaIcon from "../../pages/Assets/Icons/bulbIcon.svg";
import BulbIcon from "../../pages/Assets/Icons/lupaIcon.svg";
import HatIcon from "../../pages/Assets/Icons/hatIcon.svg";
import ui from "./index.module.css";

const ResourcesSection = () => {
  return (
    <section id={ui.resources}>
      <div className="full-container">
        <div className="container-section">
          <h2 className="section-subtitle uppercase blue text-center">recursos</h2>
          <div className={ui.titleContainer}>
            <h3 className="section-title text-center">Tenemos un gran repertorio de recursos listos para ti</h3>
          </div>
          <div className={ui.resourcesContainer}>
            <div className={ui.containerGrid}>
              <div className={ui.gridCard}>
                <div className={ui.imageContainer}>
                  <img src={PlayIcon} alt="card-icon" />
                </div>
                <h3 className={ui.cardTitle}>Vive la experiencia ENARM gratis</h3>
                <Link to="#" className={ui.cardLink}>Prueba Gratis</Link>
              </div>
              <div className={ui.gridCard}>
                <div className={ui.imageContainer}>
                  <img src={BulbIcon} alt="card-icon" />
                </div>
                <h3 className={ui.cardTitle}>Guía descriptiva del curso 2021</h3>
                <Link to="#" className={ui.cardLink}>Descargar</Link>
              </div>
              <div className={ui.gridCard}>
                <div className={ui.imageContainer}>
                  <img src={LupaIcon} alt="card-icon" />
                </div>
                <h3 className={ui.cardTitle}>Abarcamos todas las exigencias del ENARM</h3>
                <Link to="#" className={ui.cardLink}>Iniciar hoy mismo</Link>
              </div>
              <div className={ui.gridCard}>
                <div className={ui.imageContainer}>
                  <img src={HatIcon} alt="card-icon" />
                </div>
                <h3 className={ui.cardTitle}>Conoce nuestra metodología de estudio</h3>
                <Link to="#" className={ui.cardLink}>Ver método de estudio</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResourcesSection;
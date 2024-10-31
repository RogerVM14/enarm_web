import React from "react";
import ui from "./index.module.css";
import ImageItem from "../../pages/Assets/Images/PatientSatisfaction.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const SectionPromise = () => {
  return (
    <section id={ui.promise}>
      <div className="full-container">
        <div className="container-section" aria-details="promise">
          <div className={ui.promiseContainer}>
            <div className={ui.imageContainer}>
              <img src={ImageItem} alt="Patient satisfaction" />
            </div>
            <div className={ui.containerInformation}>
              <h2 className="section-subtitle blue text-left uppercase">Promesa</h2>
              <h3 className="section-title dark text-left">Nuestro sueño es que logres aprobar el ENARM</h3>
              <p className="regular-parraf text-left">Junto con el equipo de médicos especialistas de los mejores hospitales del país, una comunidad vibrante de alumnos y un equipo de profesionales digitales, tenemos tu formación como prioridad.</p>
              <Link className={ui.promiseLinkBtn} to={ROUTES.REGISTRO}>
                {/* <span>Obtén tu prueba Gratis</span> */}
                <span>Comienza ahora mismo</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
                  <path d="M0 2.12L7.88 10L0 17.88L2.12 20L12.12 10L2.12 0L0 2.12Z" fill="#05B2FA" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionPromise;
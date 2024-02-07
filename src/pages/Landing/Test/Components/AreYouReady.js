import React from "react";
import ui from "./ready.module.css";

const AreYouReady = () => {

  return (
    <section id={ui.ready}>
      <div className="full-container">
        <div className="container-section" data-type="section">
          <h2 className="section-title text-center">¿Estás listo?</h2>
          <div className="subcontainer">
            <div className={ui.cards}>
              <div className={ui.card}>
                <h3 className="medium-29">Curso ENARM 2022</h3>
                <ul className="ls-none">
                  <li className={ui.cardList}>
                    <i className="material-icons-outlined green-check">done</i>
                    <p className="regular-parraf">Diseñado por 18 Residentes Jóvenes</p>
                  </li>
                  <li className={ui.cardList}>
                    <i className="material-icons-outlined green-check">done</i>
                    <p className="regular-parraf" >Basados 100% en las GPC Mexicanas.</p>
                  </li>
                  <li className={ui.cardList}>
                    <i className="material-icons-outlined green-check">done</i>
                    <p className="regular-parraf">Porcentaje de aceptación del 80%.</p>
                  </li>
                  <li className={ui.cardList}>
                    <i className="material-icons-outlined green-check">done</i>
                    <p className="regular-parraf">Simulador-PRO idéntico al del ENARM.</p>
                  </li>
                </ul>
              </div>
              <div className={ui.card} style={{ background: "#1E73BE" }}>
                <ul className="ls-none">
                  <li className={ui.cardList}>
                    <i className="material-icons-outlined green-check">done</i>
                    <p className="regular-parraf white">100% de satisfacción de nuestros alumnos.</p>
                  </li>
                  <li className={ui.cardList}>
                    <i className="material-icons-outlined green-check">done</i>
                    <p className="regular-parraf white">Curso élite, un simulador avanzado y material de punta.</p>
                  </li>
                  <li className={ui.cardList}>
                    <i className="material-icons-outlined green-check">done</i>
                    <p className="regular-parraf white">Metodología de estudio didáctica actualizada.</p>
                  </li>
                  <li className={ui.cardList}>
                    <i className="material-icons-outlined green-check">done</i>
                    <p className="regular-parraf white">¡Pago seguro y acceso inmediato. Inicia hoy mismo!</p>
                  </li>
                  <li className={ui.cardList}>
                    <i className="material-icons-outlined green-check">done</i>
                    <p className="regular-parraf white">Experimenta simulacros con preguntas identicas a las que verás el día de tu ENARM.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AreYouReady;
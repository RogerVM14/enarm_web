import React from "react";
import ui from "../index.module.css"

const Avances = () => {
  return (
    <article id={ui.progress}>
      {/* Sección: Progreso y Avances Registrados */}
      <header className={ui.articleHeader}>
        <h5>Progreso</h5>
      </header>
      <div className={ui.articleBody}>
        <p className={ui.bodyTitle}>Avance registrado</p>
        <div className={ui.progressBar} data-progress="5">
          <div className={ui.barInProgress}></div>
          <span>15%</span>
        </div>
      </div>
    </article>
  );
};

export default Avances;

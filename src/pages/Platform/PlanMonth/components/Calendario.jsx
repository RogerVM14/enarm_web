import React from "react";
import { Link } from "react-router-dom";
import ui from "../index.module.css";

const Calendario = () => {
  return (
    <article id={ui.studyCalender}>
      {/* Sección: Calendario de Estudio */}
      <header className={ui.articleHeader}>
        <h5>Calendario de Estudio</h5>
      </header>
      <div className={ui.articleBody}>
        <p className={ui.bodyTitle}>Ejemplo Calendario Mensual</p>
        <h3>Alcanza tus metas con el siguiente calendario.</h3>
        <p className={ui.bodyParraf}>
          El realizarlo te permitirá tener una organización, programar tus días de estudio y crear un hábito de estudio.
        </p>
        <div className={ui.calendarLink}>
          <Link to="#" target="_blank">
            Descarga Calendario
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Calendario;

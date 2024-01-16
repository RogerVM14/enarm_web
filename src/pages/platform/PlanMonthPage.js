import React from 'react';
import { Link } from "react-router-dom";
import StudyCalendar from '../../components/platform/subComponents/StudyCalendar';
import StudyPlanCourseContainer from '../../components/platform/subComponents/StudyPlanCourseContainer';
import DashboardLayout from "../Layouts/Dashboard";
import '../../css/platform/pages/PlanMonthPage.css';
import ui from "index.module.css";

const PlanMonthPage = (props) => {

  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.gridContainer}>
          <section>
            <StudyPlanCourseContainer />
          </section>
          <aside>
            {/* Sección: Calendario de Estudio */}
            <article id={ui.studyCalender}>
              <header className={ui.articleHeader}>
                <h2>Calendario de Estudio</h2>
              </header>
              <div className={ui.articleBody}>
                <p className={ui.bodyTitle}>Ejemplo Calendario Mensual</p>
                <h3>Alcanza tus metas con el siguiente calendario.</h3>
                <p className={ui.bodyParraf}>El realizarlo te permitirá tener una organización, programar tus días de estudio y crear un hábito de estudio.</p>
                <Link to="#" target="_blank">Descarga Calendario</Link>
              </div>
            </article>

            {/* Sección: Progreso y Avances Registrados */}
            <article id={ui.progress}>
              <header className={ui.articleHeader}>
                <h2>Progreso</h2>
              </header>
              <div className={ui.articleBody}>
                <p className={ui.bodyTitle}>Avance registrado</p>
                <div>
                  <div></div>
                  <span>5</span>
                </div>
              </div>
            </article>

            {/* Sección: Abrir tabla del Plan de Estudio */}
            <article id={ui.studyPlan}>
              <div className={ui.articleBody}>
                <Link to="#" target="_blank" > Abrir Tabla del Plan de Estudio </Link>
              </div>
            </article>

          </aside>
        </div>

      </div>
    </DashboardLayout>
  )
}

export default PlanMonthPage;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../Layouts/Dashboard";
import PlanCourse from "../../../components/platform/PlanCourse";
import PlanCourseCollapse from "../../../components/platform/PlanCourseCollapse";
import ui from "./index.module.css";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import axios from "axios";
import { getHeaders } from "../../../utils/auth/cookieSession";
const { REACT_APP_ENARM_API_GATEWAY_URL: url } = process.env;

const PlanMonthPage = () => {
  const [weeksList, setWeekList] = useState([]);
  const { data: studyplans } = useQuery("study-plans-by-id", () => getStudyPlanById());

  const getStudyPlanById = async () => {
    try {
      const endpoint = `${url}study-plan/get-study-plan-by-id`;
      const headers = getHeaders();
      const body = { study_plan_id: 6 };
      const { data, status } = await axios.post(endpoint, body, headers);
      if (data.status_Message === "there is study plan" && status === 200) {
        return data.study_plan;
      }
    } catch (error) {
      toast.error("Se presentó un error al cargar plan de estudios", {
        position: "bottom-right",
        duration: 3500,
      });
    }
  };

  useEffect(() => {
    if (!studyplans) return;
    const resourceList = studyplans?.weeks.map(({ week_resources, week_names, week_id, week }) => {
      const typeCounts = week_resources.reduce((acc, resource) => {
        acc[resource.type] = (acc[resource.type] || 0) + 1;
        return acc;
      }, {});
      return {
        resources: Object.entries(typeCounts),
        week_names,
        week_id,
        week_number: week,
      };
    });
    setWeekList(resourceList);
  }, [studyplans]);

  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.gridContainer}>
          <section>
            <PlanCourse />
            <PlanCourseCollapse weeksList={weeksList} />
          </section>
          <aside>
            {/* Sección: Calendario de Estudio */}
            {/* <article id={ui.studyCalender}>
              <header className={ui.articleHeader}>
                <h5>Calendario de Estudio</h5>
              </header>
              <div className={ui.articleBody}>
                <p className={ui.bodyTitle}>Ejemplo Calendario Mensual</p>
                <h3>Alcanza tus metas con el siguiente calendario.</h3>
                <p className={ui.bodyParraf}>
                  El realizarlo te permitirá tener una organización, programar tus días de estudio y crear un hábito de
                  estudio.
                </p>
                <div className={ui.calendarLink}>
                  <Link to="#" target="_blank">
                    Descarga Calendario
                  </Link>
                </div>
              </div>
            </article> */}

            {/* Sección: Progreso y Avances Registrados */}
            {/* <article id={ui.progress}>
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
            </article> */}

            {/* Sección: Abrir tabla del Plan de Estudio */}
            {/* <article id={ui.studyPlan}>
              <div className={ui.articleBody}>
                <div className={ui.bodyLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 15 14" fill="none">
                    <path
                      d="M13.5625 1.51904H9.9875C9.22031 1.51904 8.47031 1.73936 7.825 2.15498L7.0625 2.64404L6.3 2.15498C5.65533 1.73944 4.90449 1.51863 4.1375 1.51904H0.5625C0.285937 1.51904 0.0625 1.74248 0.0625 2.01904V10.894C0.0625 11.1706 0.285937 11.394 0.5625 11.394H4.1375C4.90469 11.394 5.65469 11.6144 6.3 12.03L6.99375 12.4769C7.01406 12.4894 7.0375 12.4972 7.06094 12.4972C7.08437 12.4972 7.10781 12.4909 7.12813 12.4769L7.82187 12.03C8.46875 11.6144 9.22031 11.394 9.9875 11.394H13.5625C13.8391 11.394 14.0625 11.1706 14.0625 10.894V2.01904C14.0625 1.74248 13.8391 1.51904 13.5625 1.51904ZM4.1375 10.269H1.1875V2.64404H4.1375C4.69062 2.64404 5.22812 2.80186 5.69219 3.10029L6.45469 3.58936L6.5625 3.65967V10.8784C5.81875 10.4784 4.9875 10.269 4.1375 10.269ZM12.9375 10.269H9.9875C9.1375 10.269 8.30625 10.4784 7.5625 10.8784V3.65967L7.67031 3.58936L8.43281 3.10029C8.89688 2.80186 9.43437 2.64404 9.9875 2.64404H12.9375V10.269ZM5.26406 4.64404H2.36094C2.3 4.64404 2.25 4.69717 2.25 4.76123V5.46436C2.25 5.52842 2.3 5.58154 2.36094 5.58154H5.2625C5.32344 5.58154 5.37344 5.52842 5.37344 5.46436V4.76123C5.375 4.69717 5.325 4.64404 5.26406 4.64404ZM8.75 4.76123V5.46436C8.75 5.52842 8.8 5.58154 8.86094 5.58154H11.7625C11.8234 5.58154 11.8734 5.52842 11.8734 5.46436V4.76123C11.8734 4.69717 11.8234 4.64404 11.7625 4.64404H8.86094C8.8 4.64404 8.75 4.69717 8.75 4.76123ZM5.26406 6.83154H2.36094C2.3 6.83154 2.25 6.88467 2.25 6.94873V7.65186C2.25 7.71592 2.3 7.76904 2.36094 7.76904H5.2625C5.32344 7.76904 5.37344 7.71592 5.37344 7.65186V6.94873C5.375 6.88467 5.325 6.83154 5.26406 6.83154ZM11.7641 6.83154H8.86094C8.8 6.83154 8.75 6.88467 8.75 6.94873V7.65186C8.75 7.71592 8.8 7.76904 8.86094 7.76904H11.7625C11.8234 7.76904 11.8734 7.71592 11.8734 7.65186V6.94873C11.875 6.88467 11.825 6.83154 11.7641 6.83154Z"
                      fill="black"
                      fill-opacity="0.85"
                    />
                  </svg>
                  <Link to="#" target="_blank">
                    Abrir Tabla del Plan de Estudio{" "}
                  </Link>
                </div>
              </div>
            </article> */}
          </aside>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PlanMonthPage;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardLayout from "../../Layouts/Dashboard";
import ui from "./index.module.css";
import ChevronIcon from "../Assets/Icons/chevronicon.svg";
import AlertIcon from "../Assets/Icons/alertIcon.png";
import GuideContent from "../../../components/platform/GuideContent";
import { useQuery } from "react-query";
import SimulatorsAdvice from "./components/SimulatorsAdvice";
import { getWeekResourcesByWeekAndPlan } from "../../../apis/platform";
import VimeoPlayer from "../../../components/VimeoPlayer";

const useQueryParams = () => {
  const { search } = useLocation();
  const queryParameters = new URLSearchParams(search);
  const plan = parseInt(queryParameters.get("plan_id"));
  const week = parseInt(queryParameters.get("week"));

  return { plan, week };
};

const CoursePage = () => {
  const [cardDisplay, setCardDisplay] = useState([false, false, false, false]);
  const [videos, setVideos] = useState([]);
  const [resume, setResume] = useState([]);
  const [simulators, setSimulators] = useState([]);
  const [open, setOpen] = useState(false);
  const [dataQuery, setDataQuery] = useState({});

  const handleDisplayCardBody = (i) => {
    setCardDisplay((prev) => {
      return prev.map((position, index) => {
        if (index !== i) return position;
        return !position;
      });
    });
  };

  const params = useQueryParams();

  const { data: resources } = useQuery("resources", () => getWeekResourcesByWeekAndPlan(params));

  useEffect(() => {
    if (!resources) return;
    const { resource_List } = resources;
    let resume_data = [];
    let resume_specialty = [];
    let resume_types = [];
    Object.values(resource_List).forEach((resource) => {
      const [resourceItem, resourceArray] = Object.entries(resource)[0];
      const _array = resourceArray.map((data) => {
        return [
          data.name,
          data.type,
          data.resource_id,
          data.resource_name,
          data.resource_url,
          data.simulator_id,
          data.week_resource_id,
        ];
      });

      if (resourceItem === "Video clases") setVideos(_array);
      if (["Resumen", "Mini-resumen", "Flash cards", "Tips enarm"].includes(resourceItem)) {
        const tipoRecursos = [...new Set(_array.map((resource) => resource[1]))];
        const tipoEspecialidades = [...new Set(_array.map((resource) => resource[0]))];
        resume_types.push(tipoRecursos);
        resume_specialty.push(tipoEspecialidades);
        resume_data.push(..._array);
      }
      if (resourceItem === "Simulador") setSimulators([{ key: _array.key, ..._array }]);
    });
    resume_specialty = [...new Set(resume_specialty.map((resource) => resource[0]))];
    setResume({ especialidades: resume_specialty, tipo_recursos: resume_types, recursos: resume_data });
  }, [resources]);

  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.gridContainer}>
          <section id={ui.containerCourse}>
            <header>
              <div className={ui.headerContent}>
                <div className={ui.contentTop}>
                  <h4>{resources?.week_names}</h4>
                  <p>Contenido</p>
                </div>
                <p>
                  Bienvenido al contenido de Infectología. A continuación tendrás acceso a los contenidos que tenemos
                  preparados especialmente para ti. Es importante que revises cada uno de ellos en el orden en el que se
                  presentan para asegurar el éxito de este curso.
                </p>
              </div>
            </header>
            {/* Resumenes */}
            <div className={ui.courseCard}>
              <div
                className={ui.cardHeader}
                onClick={() => {
                  handleDisplayCardBody(0);
                }}
              >
                <div className={ui.cardTitle}>
                  <img src={ChevronIcon} alt="chevron" width={12} height={12} data-selected={cardDisplay[0]} />
                  <h5>1. Resúmenes</h5>
                </div>
                <div className={ui.cardDescription}>
                  <p>Resúmenes, Flash cards y Tips</p>
                  <span>130 recursos</span>
                </div>
              </div>
              {cardDisplay[0] === false ? null : (
                <div className={ui.cardBody}>
                  <GuideContent resumeData={resume} />
                </div>
              )}
            </div>
            {/* Graficas */}
            <div className={ui.courseCard} data-card="graficos">
              <div
                className={ui.cardHeader}
                onClick={() => {
                  handleDisplayCardBody(1);
                }}
              >
                <div className={ui.cardTitle}>
                  <img
                    src={AlertIcon}
                    alt="alert"
                    width={12}
                    height={12}
                    // data-selected={cardDisplay[1]}
                  />
                  <h5>2. Gráficos</h5>
                </div>
                <div className={ui.cardDescription}>
                  <p>
                    Antes de continuar, asegúrate de tener tus <strong>gráficos</strong>
                  </p>
                </div>
              </div>
            </div>
            {/* Videos */}
            <div className={ui.courseCard}>
              <div
                className={ui.cardHeader}
                onClick={() => {
                  handleDisplayCardBody(2);
                }}
              >
                <div className={ui.cardTitle}>
                  <img src={ChevronIcon} alt="chevron" width={12} height={12} data-selected={cardDisplay[2]} />
                  <h5>3. Video-Clases</h5>
                </div>
                <div className={ui.cardDescription}>
                  <p>Repasa tus gráficos con las video-clases</p>
                  <span>{videos.length} video-clases</span>
                </div>
              </div>
              {cardDisplay[2] === false ? null : (
                <div className={ui.cardBody}>
                  <div className={ui.videoContainerGroup}>
                    {videos?.map((video) => {
                      return (
                        <VimeoPlayer videoUrl={video?.resource_url} />
                        // <video
                        //   width="320"
                        //   height="240"
                        //   controls
                        //   key={video[1]}
                        //   style={{ width: "100%", height: "500px" }}
                        // >
                        //   <source src={video[4]} type="video/mp4" />
                        // </video>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            {/* Simuladores*/}
            {simulators?.map((simulator, index) => {
              return (
                <div className={ui.courseCard} key={index}>
                  <div
                    className={ui.cardHeader}
                    onClick={() => {
                      handleDisplayCardBody(3);
                    }}
                  >
                    <div className={ui.cardTitle}>
                      <img src={ChevronIcon} alt="chevron" width={12} height={12} data-selected={cardDisplay[3]} />
                      <h5>4. Simulador {simulator[3]}</h5>
                    </div>
                    <div className={ui.cardDescription}>
                      <p>Practica en nuestro simulador</p>
                    </div>
                  </div>
                  {cardDisplay[3] === false ? null : (
                    <div className={ui.cardBody}>
                      <ol className={ui.guideList}>
                        <li>
                          Simulador con <strong>50 preguntas.</strong>
                        </li>
                        <li>
                          Tiempo para resolverlo: <strong>1 hora 15 minutos.</strong>
                        </li>
                        <li>
                          🔥<strong> 5 intentos</strong> permitidos para resolverlo
                        </li>
                        <li>
                          Conoce tus resultados al finalizar presionando <strong>Finish Quiz.</strong>
                        </li>
                      </ol>
                      <div className={ui.buttons}>
                        <Link to={"#"} className={ui.buttonLinkWhite} aria-disabled>
                          Ir al panel de resultados
                        </Link>
                        <button
                          type="button"
                          className={ui.buttonLinkBlue}
                          onClick={() => { 
                            setOpen(true);
                            setDataQuery({ simulator: simulator[0][5], plan: 1 });
                          }}
                        >
                          Comenzar Simulador
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </section>

          <aside>
            {/* <section id={ui.advance}>
              <header>
                <div className={ui.sectionHeader}>
                  <h5>Registra tu avance</h5>
                </div>
              </header>
              <div className={ui.sectionBody}>
                <p>Semana 2 - 5 días</p>
                <div className={ui.checkboxLabel}>
                  <input type="checkbox" name="dayOne" id="dayOne" />
                  <label htmlFor="dayOne">Día 1</label>
                </div>
                <div className={ui.checkboxLabel}>
                  <input type="checkbox" name="dayTwo" id="dayTwo" />
                  <label htmlFor="dayOne">Día 2</label>
                </div>
                <div className={ui.checkboxLabel}>
                  <input type="checkbox" name="dayThree" id="dayThree" />
                  <label htmlFor="dayOne">Día 3</label>
                </div>
                <div className={ui.checkboxLabel}>
                  <input type="checkbox" name="dayFour" id="dayFour" />
                  <label htmlFor="dayOne">Día 4</label>
                </div>
                <div className={ui.checkboxLabel}>
                  <input type="checkbox" name="dayFive" id="dayFive" />
                  <label htmlFor="dayOne">Día 5</label>
                </div>
              </div>
            </section> */}
            <section id={ui.studyMethods}>
              <header>
                <div className={ui.sectionHeader}>
                  <h5>Método de Estudio</h5>
                </div>
              </header>
              <div className={ui.sectionBody}>
                <p>¡Aprendizaje de calidad!</p>
                <div className={ui.methodList}>
                  <div className={ui.method}>
                    <div className={ui.methodNumber}>
                      <h5>1</h5>
                    </div>
                    <div className={ui.methodDescription}>
                      <h5>Resúmenes</h5>
                      <span>Consulta el contenido.</span>
                    </div>
                  </div>
                  <div className={ui.method}>
                    <div className={ui.methodNumber}>
                      <h5>2</h5>
                    </div>
                    <div className={ui.methodDescription}>
                      <h5>Gráficos</h5>
                      <span>Digiere tu aprendizaje.</span>
                    </div>
                  </div>
                  <div className={ui.method}>
                    <div className={ui.methodNumber}>
                      <h5>3</h5>
                    </div>
                    <div className={ui.methodDescription}>
                      <h5>Video-Clases</h5>
                      <span>Repasa la información.</span>
                    </div>
                  </div>
                  <div className={ui.method}>
                    <div className={ui.methodNumber}>
                      <h5>4</h5>
                    </div>
                    <div className={ui.methodDescription}>
                      <h5>SimuladorPRO</h5>
                      <span>Practica en tiempo real.</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
      <SimulatorsAdvice open={open} onClose={() => setOpen(false)} query={dataQuery} />
    </DashboardLayout>
  );
};

export default CoursePage;

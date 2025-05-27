import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../../Layouts/Dashboard";
import ui from "./index.module.css";
import { useQuery } from "react-query";
import { getWeekResourcesByWeekAndPlan } from "../../../apis/platform";
import Resumes from "./components/Resumes";
import Videos from "./components/Videos";
import Graphics from "./components/Graphics";
import Simulators from "./components/Simulators";
import { useDispatch } from "react-redux";
import { setIsLoadingContent } from "../../../store/reducers/general/general";

const useQueryParams = () => {
  const { search } = useLocation();
  const queryParameters = new URLSearchParams(search);
  const plan = parseInt(queryParameters.get("plan"));
  const week = parseInt(queryParameters.get("week"));
  const specialties = queryParameters.get("specialties").split(",");
  const list = specialties?.map((e) => parseInt(e));

  return { plan, week, specialties: list };
};

const CoursePage = () => {
  const [cardDisplay, setCardDisplay] = useState([false, false, false, false]);
  const [videos, setVideos] = useState([]);
  const [resume, setResume] = useState([]);
  const [simulators, setSimulators] = useState([]);
  const [tabulator, setTabulator] = useState([]);
  const [tabulatorSelected, setTabulatorSelected] = useState(0);

  const handleDisplayCardBody = (i) => {
    setCardDisplay((prev) => {
      return prev.map((position, index) => {
        if (index !== i) return position;
        return !position;
      });
    });
  };

  const params = useQueryParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    isLoading,
    data: resources,
    refetch,
  } = useQuery("resources", () => getWeekResourcesByWeekAndPlan(params, dispatch, navigate));

  useEffect(() => {
    if (isLoading) {
      dispatch(setIsLoadingContent(true));
    } else {
      dispatch(setIsLoadingContent(false));
    }

    return () => {
      dispatch(setIsLoadingContent(false));
    };
  }, [isLoading, dispatch]);

  useEffect(() => {
    if (!resources) return;
    const { resource_List, week_names } = resources;
    let resume_data = [];
    let resume_specialty = [];
    let resume_types = [];
    let simulator_types = [];
    const splitedNames = week_names?.split("|").map((e, i) => ({ name: e.trim(), value: params.specialties[i] }));
    setTabulator(splitedNames || []);
    Object.values(resource_List).forEach((resource) => {
      const [resourceItem, resourceArray] = Object.entries(resource)[0];
      const _array = resourceArray.map((data) => {
        return [
          data.name,
          data.type,
          data.is_completed,
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
      if (resourceItem === "Simulador") {
        simulator_types.push(resourceArray);
      }
    });
    setSimulators(simulator_types);
    resume_specialty = [...new Set(resume_specialty.map((resource) => resource[0]))];
    setResume({
      especialidades: week_names.split("|").map((e) => e.trim()),
      tipo_recursos: resume_types,
      recursos: resume_data?.filter((e) => splitedNames[tabulatorSelected]?.name === e[0]) || [],
    });
  }, [resources, tabulatorSelected]);

  const handleChangeTab = (position) => {
    setTabulatorSelected(position);
  };
  return (
    <DashboardLayout>
      <div className="p-6 h-screen lg:h-auto ">
        <div className="grid lg:grid-cols-[1fr_17.375rem]  gap-x-6 w-full">
          <div className="w-full">
            <header>
              <div className="p-6 bg-white mb-2 border-solid border-[1px] border-[#d9d9d9]">
                <div className="flex flex-row justify-start gap-x-3 mb-6 items-center">
                  <h4 className="poppins-medium-20 text-[#000000D9]">{resources?.week_names}</h4>
                  <p className="poppins-regular-14 text-[#00000073]">Contenido</p>
                </div>
                <p className="poppins-regular-14">
                  Bienvenido al contenido de{" "}
                  <strong className="poppins-bold-14">
                    {resume === undefined || resume.length === 0 ? "" : resume?.especialidades[0]}
                  </strong>
                  . A continuación tendrás acceso a los contenidos que tenemos preparados especialmente para ti. Es
                  importante que revises cada uno de ellos en el orden en el que se presentan para asegurar el éxito de
                  este curso.
                </p>
              </div>
            </header>
            <div className="">
              <div className="flex overflow-x-auto whitespace-nowrap">
                {tabulator?.map((tab, index) => (
                  <button
                    key={tab.value}
                    onClick={() => handleChangeTab(index)}
                    className={`inline-flex items-center h-12 px-4 py-2 text-sm text-center ${
                      tabulatorSelected === index ? "bg-[#05B2FA80]" : "bg-white"
                    } border border-b-0 border-gray-300 sm:text-base rounded-t-md text-slate-900 whitespace-nowrap focus:outline-none`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-4 bg-white border border-[#d9d9d9]">
              {tabulator && tabulator.length > 0 && (
                <>
                  <Resumes
                    resume={resume || { recursos: [], especialidades: [], tipo_recursos: [] }}
                    refetch={refetch}
                    tabSelected={tabulator[tabulatorSelected] || {}}
                    handleDisplayCardBody={handleDisplayCardBody}
                    cardDisplay={cardDisplay[0]}
                  />
                  <Graphics handleDisplayCardBody={handleDisplayCardBody} />
                  <Videos
                    videos={videos || []}
                    tabSelected={tabulator[tabulatorSelected] || {}}
                    handleDisplayCardBody={handleDisplayCardBody}
                    cardDisplay={cardDisplay[2]}
                  />
                  <Simulators
                    simulators={simulators[0] || []}
                    cardDisplay={cardDisplay[3]}
                    plan={params?.plan}
                    tabSelected={tabulator[tabulatorSelected] || {}}
                  />
                </>
              )}
            </div>
          </div>

          <aside className="hidden lg:block">
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
                  <h5 className="poppins-regular-14">Método de Estudio</h5>
                </div>
              </header>
              <div className={ui.sectionBody}>
                <p className="poppins-regular-14">¡Aprendizaje de calidad!</p>
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
    </DashboardLayout>
  );
};

export default CoursePage;

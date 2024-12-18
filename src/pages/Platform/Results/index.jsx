import React from "react";
import ui from "./index.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../../Layouts/Dashboard";
import GraphicResults from "../Assets/Images/graphicResults.png";
import { getSimulatorStatsByStudent } from "../../../apis/platform";
import { useQuery } from "react-query";
import ArrowLeft from "./ArrowLeft";
import TryList from "./components/TryList";
import { useDispatch } from "react-redux";

const useQueryParams = () => {
  const { search } = useLocation();
  const queryParameters = new URLSearchParams(search);
  const plan = parseInt(queryParameters.get("plan"));
  const simulator = parseInt(queryParameters.get("simulator"));
  const specialty = queryParameters.get("specialty");

  return { plan, simulator, specialty };
};



const ResultsPage = () => {
  const dispatch = useDispatch()
const navigate = useNavigate()
  const { plan, simulator, specialty } = useQueryParams();
  const { data: stats } = useQuery(["student-stats"], () => getSimulatorStatsByStudent(simulator,dispatch, navigate ));

  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.gridContainer}>
          <header>
            <div className={ui.headerContainer}>
              <div className={ui.containerBody}>
                <div className={ui.bodyTop}>
                  <ArrowLeft />
                  <h4>{specialty}</h4>
                  <p datatype="large">Panel de Resultados</p>
                  <p datatype="small">Panel</p>
                  {!stats?.attempts_completed ? (
                    <Link
                      to={`/cursoENARM/simulador?plan=${plan}&id=${simulator}`}
                      className={ui.blueLink}
                      datatype="large"
                    >
                      Comenzar Simulador
                    </Link>
                  ) : null}
                </div>
                <p>
                  En este espacio puedes conocer las estadísticas de tu desempeño por cada intento realizado. Además,
                  para una mejor retroalimentación hemos dividido los resultados por categorías para que identifiques
                  rápidamente cuáles son tus puntos fuertes y cuáles son aquellas que necesitas reforzar.
                </p>
                {!stats?.attempts_completed ? (
                  <Link to={"#"} datatype="small">
                    Comenzar Simulador
                  </Link>
                ) : null}
              </div>
            </div>
          </header>
          <aside>
            <div className={ui.asideContainer}>
              <div className="bg-white py-4 px-4 shadow-[0px_-1px_0px_0px_#F0F0F0_inset]">
                <h5 className="poppins-medium-16 text-[#000000D9]">Resultados por Intento</h5>
              </div>
              <div className="p-4 bg-white">
                <div>
                  <p className="poppins-regular-14 text-[#00000073]">¡Porcentajes de tus intentos!</p>
                </div>
                <TryList list={stats?.answer_list} simulatorID={simulator} planID={plan} />
              </div>
            </div>
          </aside>
          <section>
            <div className={ui.sectionContainer}>
              <div className={ui.containerHead}>
                <h5>Desglose de Resultados por Categorías</h5>
              </div>
              <div className={ui.containerBody}>
                <div className={ui.graphicContainer}>
                  <div className={ui.graphicTabs}>
                    <ul className={ui.tabList}>
                      <li className={ui.tabItem} data-selected="selected">
                        1er Intento
                      </li>
                      <li className={ui.tabItem}>2do Intento</li>
                      <li className={ui.tabItem}>3er Intento</li>
                      <li className={ui.tabItem}>4to Intento</li>
                      <li className={ui.tabItem}>5to Intento</li>
                    </ul>
                  </div>
                  <div className={ui.graphicWrapper}>
                    <img src={GraphicResults} alt="graphic" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ResultsPage;

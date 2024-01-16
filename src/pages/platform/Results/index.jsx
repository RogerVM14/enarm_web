import React from "react";
import ui from "./index.module.css"
import { Link } from "react-router-dom";
import DashboardLayout from "../../Layouts/Dashboard";
import GraphicResults from "../Assets/Images/graphicResults.png";

const ResultsPage = () => {
  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.gridContainer}>
          <header>
            <div className={ui.headerContainer}>
              <div className={ui.containerBody}>
                <div className={ui.bodyTop}>
                  <img src="" alt="" />
                  <h4>Simulador Infectología</h4>
                  <p>Panel de Resultados</p>
                  <Link to={"#"}>Comenzar Simulador</Link>
                </div>
                <p>
                  En este espacio puedes conocer las estadísticas de tu desempeño por cada intento realizado.
                  Además, para una mejor retroalimentación hemos dividido los resultados por categorías para que identifiques
                  rápidamente cuáles son tus puntos fuertes y cuáles son aquellas que necesitas reforzar.
                </p>
              </div>
            </div>
          </header>
          <aside>
            <div className={ui.asideContainer}>
              <div className={ui.containerHead}>
                <h5>Resultados por Intento</h5>
              </div>
              <div className={ui.containerBody}>
                <div className={ui.bodyTitle}>
                  <p>¡Porcentajes de tus intentos!</p>
                </div>
                <div className={ui.tryResult}>
                  <div className={ui.resultInfo}>
                    <h5>1er Intento</h5>
                    <p>Respuestas correctas 75 de 100</p>
                    <Link to={"#"}>Ver Retroalimentación</Link>
                  </div>
                  <div className={ui.percentage}>
                    <div className={ui.percentageNumber}>
                      75%
                    </div>
                  </div>
                </div>
                <div className={ui.tryResult}>
                  <div className={ui.resultInfo}>
                    <h5>2do Intento</h5>
                    <p>Sin registro</p>
                  </div>
                  <div className={ui.percentage}>
                    <div className={ui.percentageNumber}>
                      0%
                    </div>
                  </div>
                </div>
                <div className={ui.tryResult}>
                  <div className={ui.resultInfo}>
                    <h5>3er Intento</h5>
                    <p>Sin registro</p>
                  </div>
                  <div className={ui.percentage}>
                    <div className={ui.percentageNumber}>
                      0%
                    </div>
                  </div>
                </div>
                <div className={ui.tryResult}>
                  <div className={ui.resultInfo}>
                    <h5>4to Intento</h5>
                    <p>Sin registro</p>
                  </div>
                  <div className={ui.percentage}>
                    <div className={ui.percentageNumber}>
                      0%
                    </div>
                  </div>
                </div>
                <div className={ui.tryResult}>
                  <div className={ui.resultInfo}>
                    <h5>5to Intento</h5>
                    <p>Sin registro</p>
                  </div>
                  <div className={ui.percentage}>
                    <div className={ui.percentageNumber}>
                      0%
                    </div>
                  </div>
                </div>
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
                      <li className={ui.tabItem} data-selected="selected">1er Intento</li>
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
  )
}

export default ResultsPage;
import React, { useState } from "react";
import ui from "./index.module.css"
import { Link } from "react-router-dom";
import DashboardLayout from "../../Layouts/Dashboard";
import GraphicResults from "../Assets/Images/graphicResults.png";

const ResultsPage = () => {

  const [tries, setTries] = useState([
    { tryNumber: "1er Intento", result: "Respuestas correctas 75 de 100", percentage: "75", retro: true },
    { tryNumber: "2do Intento", result: "Sin registro", percentage: "0", retro: false },
    { tryNumber: "3er Intento", result: "Sin registro", percentage: "0", retro: false },
    { tryNumber: "4to Intento", result: "Sin registro", percentage: "0", retro: false },
    { tryNumber: "5to Intento", result: "Sin registro", percentage: "0", retro: false }
  ]);

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
                  <p datatype="large">Panel de Resultados</p>
                  <p datatype="small">Panel</p>
                  <Link to={"#"} datatype="large">Comenzar Simulador</Link>
                </div>
                <p>
                  En este espacio puedes conocer las estadísticas de tu desempeño por cada intento realizado.
                  Además, para una mejor retroalimentación hemos dividido los resultados por categorías para que identifiques
                  rápidamente cuáles son tus puntos fuertes y cuáles son aquellas que necesitas reforzar.
                </p>
                <Link to={"#"} datatype="small">Comenzar Simulador</Link>
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
                <TryResultContainer tries={tries} />
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

const TryResultContainer = ({ tries }) => {
  return (
    <React.Fragment>
      {
        tries?.map((item, index) => {

          const { tryNumber, result, percentage, retro } = item;
          return (
            <div className={ui.tryResult} key={index}>
              <div className={ui.resultInfo}>
                <h5>{tryNumber}</h5>
                <p>{result}</p>
                {
                  retro
                    ? <Link to={"#"}>Ver Retroalimentación</Link>
                    : null
                }
              </div>
              <div className={ui.percentage}>
                <div className={ui.percentageNumber}>
                  {percentage}%
                </div>
              </div>
            </div>
          )
        })
      }
    </React.Fragment>
  )
}

export default ResultsPage;
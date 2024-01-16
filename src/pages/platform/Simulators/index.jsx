import React, { useContext, useState } from "react";
import DashboardLayout from "../../Layouts/Dashboard";
import SpecialitiesList from "../../../components/platform/SpecialitiesList";
import ui from "./index.module.css";
import ChevronIcon from "../Assets/Icons/chevronicon.svg";
import { Link } from "react-router-dom";
import { GeneralContext } from "../../../contexts/GeneralContext";

const SimulatorsPage = () => {

  const { setImportantModal } = useContext(GeneralContext);

  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.gridContainer}>
          <SpecialitiesList />
          <section id={ui.simulatorsSection}>
            <div className={ui.sectionContainer}>
              <div className={ui.containerBody}>
                <SimulatorCard goToSimulation={() => { setImportantModal(true) }} />
                <SimulatorCard goToSimulation={() => { setImportantModal(true) }} />
                <SimulatorCard goToSimulation={() => { setImportantModal(true) }} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout >
  )
}

const SimulatorCard = ({ goToSimulation = () => { } }) => {

  const [bodyVisualization, setBodyVisualization] = useState(false);

  return (
    <div className={ui.simulatorCard}>
      <div className={ui.cardHeader} onClick={() => { setBodyVisualization(!bodyVisualization) }}>
        <div className={ui.headerTitle}>
          <img src={ChevronIcon} alt="chevron" width={12} height={12} />
          <h4>Simulador Infectología #1</h4>
        </div>
        <p>Practica en nuestro simulador</p>
      </div>
      {
        bodyVisualization === false
          ? null
          : (
            <div className={ui.cardBody}>
              <ol className={ui.guideList}>
                <li>Simulador con <strong>50 preguntas.</strong></li>
                <li>Tiempo para resolverlo: <strong>1 hora 15 minutos.</strong></li>
                <li>🔥<strong> 5 intentos</strong> permitidos para resolverlo</li>
                <li>Conoce tus resultados al finalizar presionando<strong>Finish Quiz.</strong></li>
              </ol>
              <div className={ui.buttons}>
                <Link to={"#"} className={ui.buttonLinkWhite} aria-disabled>Ir al panel de resultados</Link>
                <Link to={"#"}
                  className={ui.buttonLinkBlue}
                  onClick={(e) => { goToSimulation() }}
                >Comenzar Simulador</Link>
              </div>
            </div>
          )
      }
    </div>
  )
}

export default SimulatorsPage;
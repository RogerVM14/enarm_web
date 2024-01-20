import React, { useContext, useEffect, useState } from "react";
import DashboardLayout from "../../Layouts/Dashboard";
import SpecialitiesList from "../../../components/platform/SpecialitiesList";
import ui from "./index.module.css";
import ChevronIcon from "../Assets/Icons/chevronicon.svg";
import BackIcon from "../Assets/Icons/backicon.svg";
import { Link } from "react-router-dom";
import { GeneralContext } from "../../../contexts/GeneralContext";

const SimulatorsPage = () => {

  const [displayContainer, setDisplayContainer] = useState(false);
  const [smallDevice, setSmallDevice] = useState(null);

  useEffect(() => {
    function getWindowSize() {
      let xViewport = window.innerWidth;
      setSmallDevice(xViewport <= 992);
    }
    window.addEventListener("resize", getWindowSize);
    getWindowSize();
    return () => window.removeEventListener("resize", getWindowSize)
  }, [])

  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.gridContainer}>
          <SpecialitiesList
            displayContainer={displayContainer}
            handleDisplay={() => { setDisplayContainer(!displayContainer) }} 
            smallDevice={smallDevice}/>
          <SimulationCardsContainer
            displayContainer={displayContainer}
            handleDisplay={() => { setDisplayContainer(!displayContainer) }}
            smallDevice={smallDevice}
          />
        </div>
      </div>
    </DashboardLayout >
  )
}

const SimulationCardsContainer = ({
  displayContainer,
  handleDisplay = () => { },
  smallDevice
}) => {
  if (displayContainer === false && smallDevice=== true) return null;
  return (
    <section id={ui.simulatorsSection} data-size="">
      <div className={ui.sectionContainer}>
        <button
          type="button"
          className={ui.backButton}
          onClick={() => handleDisplay()}
        >
          <img src={BackIcon} alt="chevron" />
          Volver
        </button>
        <div className={ui.containerBody}>
          <SimulatorCard />
          <SimulatorCard />
          <SimulatorCard />
        </div>
      </div>
    </section>
  )
}

const SimulatorCard = () => {

  const [display, setDisplay] = useState(false);

  return (
    <div className={ui.simulatorCard}>
      <div className={ui.cardHeader} >
        <div className={ui.headerTitle} onClick={() => { setDisplay(!display) }} >
          <img src={ChevronIcon} alt="chevron" width={12} height={12} data-selected={display} />
          <h4>Simulador Infectología #1</h4>
        </div>
        <p>Practica en nuestro simulador</p>
      </div>
      <CardBody display={display} />
    </div>
  )
}

const CardBody = ({ display }) => {

  const { setImportantModal } = useContext(GeneralContext);

  if (display === false) return null;
  return (
    <div className={ui.cardBody}>
      <ol className={ui.guideList}>
        <li>Simulador con <strong>50 preguntas.</strong></li>
        <li>Tiempo para resolverlo: <strong>1 hora 15 minutos.</strong></li>
        <li>🔥<strong> 5 intentos</strong> permitidos para resolverlo</li>
        <li>Conoce tus resultados al finalizar presionando <strong>Finish Quiz.</strong></li>
      </ol>
      <div className={ui.buttons}>
        <Link to={"#"} className={ui.buttonLinkWhite} aria-disabled>Ir al panel de resultados</Link>
        <Link to={"#"}
          className={ui.buttonLinkBlue}
          onClick={(e) => { setImportantModal(true) }}
        >Comenzar Simulador</Link>
      </div>
    </div>
  )
}

export default SimulatorsPage;
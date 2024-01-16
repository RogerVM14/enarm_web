import React, { useContext } from "react";
import ui from "./index.module.css";
import DashboardHeaderTemplate from "./Header";
import DashboardAsideTemplate from "./Aside";
import ImportantAdvice from "../../../components/platform/DialogModal/Simulator/ImportantAdvice";
import FeedbackAdvice from "../../../components/platform/DialogModal/Simulator/FeedbackAdvice";
import { GeneralContext } from "../../../contexts/GeneralContext";
import { useNavigate } from "react-router-dom";

const DashboardLayout = ({ children }) => {

  const navigation = useNavigate();

  const {
    feedbackModal,
    importantModal,
    setImportantModal,
    setSimulationOnCourse
  } = useContext(GeneralContext);

  const handleRunSimulation = () => {
    setSimulationOnCourse(true);
    setImportantModal(false);
    navigation("/u/planes/11_meses/simulador/blabla");
  }

  const closeImportantModal = () => {
    setImportantModal(false);
  }

  return (
    <div id={ui.dashboardWrapper}>
      <DashboardHeaderTemplate />
      <DashboardAsideTemplate />
      <main>
        {children}
      </main>
      <ImportantAdvice
        open={importantModal}
        handleRunSimulation={handleRunSimulation}
        closeImportantModal={closeImportantModal}
      />
      <FeedbackAdvice
        open={feedbackModal} />
    </div>
  )
}

export default DashboardLayout;
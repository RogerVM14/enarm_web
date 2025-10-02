import React, { useContext, useEffect, useState } from "react";
import ui from "./index.module.css";
import DashboardHeaderTemplate from "./Header";
import DashboardAsideTemplate from "./Aside";
import ImportantAdvice from "../../../components/platform/DialogModal/Simulator/ImportantAdvice";
import FeedbackAdvice from "../../../components/platform/DialogModal/Simulator/FeedbackAdvice";
import { GeneralContext } from "../../../contexts/GeneralContext";
import { useNavigate } from "react-router-dom";
import MaintenanceBanner from "../../../components/banners/MaintenanceBanner";

const DashboardLayout = ({ children }) => {
  const navigation = useNavigate();
  const [smallDevice, setSmallDevice] = useState(null);
  const [smallMenu, setSmallMenu] = useState(false);

  const { feedbackModal, setFeedbackModal, importantModal, setImportantModal, setSimulationOnCourse } =
    useContext(GeneralContext);

  const handleRunSimulation = () => {
    setSimulationOnCourse(true);
    setImportantModal(false);
    navigation("/cursoENARM/planes/11_meses/simulador/blabla");
  };

  const handleRunFeedback = () => {
    setSimulationOnCourse(false);
    setFeedbackModal(false);
    navigation("/cursoENARM/planes/11_meses/retro");
  };

  const closeImportantModal = () => setImportantModal(false);
  const closeFeedbackModal = () => setFeedbackModal(false);

  useEffect(() => {
    function getWindowSize() {
      let xViewport = window.innerWidth;
      setSmallDevice(xViewport <= 1024);
    }

    window.addEventListener("resize", getWindowSize);

    getWindowSize();

    return () => window.removeEventListener("resize", getWindowSize);
  }, []);

  const handleShowMenu = () => setSmallMenu(!smallMenu);

  return (
    <div id={ui.dashboardWrapper}>
      <DashboardHeaderTemplate handleShowMenu={handleShowMenu} />
      <DashboardAsideTemplate smallDevice={smallDevice} isMenuActive={smallMenu} handleShowMenu={handleShowMenu} />
      <main className="max-h-[calc(100dvh_-_3rem] min-h-[calc(100dvh_-_3rem] overflow-y-hidden">
        <MaintenanceBanner />
        {children}
      </main>
      <ImportantAdvice
        open={importantModal}
        handleRunSimulation={handleRunSimulation}
        closeImportantModal={closeImportantModal}
      />
      <FeedbackAdvice
        open={feedbackModal}
        closeFeedbackModal={closeFeedbackModal}
        handleRunFeedback={handleRunFeedback}
      />
    </div>
  );
};

export default DashboardLayout;

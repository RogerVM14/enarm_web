import { createContext, useState } from "react";

export const GeneralContext = createContext(null);

const GeneralProvider = (props) => {
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [importantModal, setImportantModal] = useState(false);
  const [simulationOnCourse, setSimulationOnCourse] = useState(false);
  const [menuPlans, setMenuPlans] = useState(true);
  const [menuDocuments, setMenuDocuments] = useState(false);
  const [globalMenuSelected, setGlobalMenuSelected] = useState(0);
  const [answersFromSimulator, setAnswersFromSimulator] = useState({});
  const [simulatorIsActive, setSimulatorIsActive] = useState(false);
  const [simulatorCooldownAdvice, setSimulatorCooldownAdvice] = useState(false);

  return (
    <GeneralContext.Provider
      value={{
        feedbackModal,
        setFeedbackModal,
        importantModal,
        setImportantModal,
        globalMenuSelected,
        setGlobalMenuSelected,
        menuPlans,
        setMenuPlans,
        menuDocuments,
        setMenuDocuments,
        simulationOnCourse,
        setSimulationOnCourse,
        answersFromSimulator,
        setAnswersFromSimulator,
        simulatorIsActive,
        setSimulatorIsActive,
        simulatorCooldownAdvice,
        setSimulatorCooldownAdvice,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;

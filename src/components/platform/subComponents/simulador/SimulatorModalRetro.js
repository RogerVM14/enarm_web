import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CountDownContext } from '../../../../contexts/platform/CountDownContext';
// import { CurrentCourseContext } from '../../../../contexts/platform/CurrentCourseContext';
import { ModalRetroSimulatorContext } from '../../../../contexts/platform/ModalRetroSimulator';
import { PlanRoutesContext } from '../../../../contexts/platform/PlanRoutesContext';
import { FeedbackQuestionsResultsContext } from '../../../../contexts/platform/FeedbackQuestionsResultsContext';
import { SimulatorAttemptsContext } from '../../../../contexts/platform/SimulatorAttemptsContext';
import ExclamationIcon from '../../../../assets/icons/ExclamationCircle.png';
import close_button from '../../../../assets/icons/close-button-gray.png';

const SimulatorModalRetro = (props) => {

  let navigate = useNavigate();
  const { hideSimulatorRetroModal } = useContext(ModalRetroSimulatorContext);
  // const { currentCourse } = useContext(CurrentCourseContext);
  const { totalAttempts, handleTotalAttempts } = useContext(SimulatorAttemptsContext);

  const { questions } = useContext(FeedbackQuestionsResultsContext);
  const { setStartCountDown } = useContext(CountDownContext);
  const { routeString } = useContext(PlanRoutesContext);
  const { deviceType, isSmart } = props;

  const settingResults = () => {
    const attempt = totalAttempts.length;
    const correct_answers = questions.filter(item => item.correct_answer_position === item.answer_selected).length;
    const percentage = (correct_answers / 50).toFixed(2);

    handleTotalAttempts({ attempt, correct_answers, percentage });
  }

  const handleNavigateToSimulator = () => {
    settingResults()
    hideSimulatorRetroModal();
    setStartCountDown(false);
    navigate(`/u/planes/${routeString.toLowerCase()}/retro`, { replace: false });
  }

  return (
    <div className={`modal-simulator ${deviceType}`}>
      <span className='modal-close' onClick={() => hideSimulatorRetroModal()}></span>
      <div className={`modal-simulator__container ${deviceType}`} style={
        isSmart ? {
          width: "100%",
          height: "100%"
        } : {
          width: "416px",
          height: "212px"
        }}>
        {isSmart && <img src={close_button} alt="close_button" className="close_button" />}
        <div className={`modal-simulator__container__advice ${deviceType}`} style={{ position: "relative" }}>
          <img src={ExclamationIcon} alt="exclamation-icon" style={{ position: "absolute", left: "-2rem" }} />
          <h1 className="regular-16">¿Estás seguro que quieres la retroalimentación ahora?</h1>
          <p className="regular-14">Si detienes el Simulador ahora, el intento del se marcará como completado.</p>
        </div>
        <div className={`modal-simulator__container__buttons ${deviceType}`}>
          <button onClick={() => hideSimulatorRetroModal()}>
            <span className="regular-14">No, volver</span>
          </button>
          <button onClick={() => handleNavigateToSimulator()}>
            <span className="blue regular-14 white">Si, quiero Retroalimentación</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SimulatorModalRetro;

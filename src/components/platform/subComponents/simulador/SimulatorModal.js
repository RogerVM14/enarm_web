import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CountDownContext } from '../../../../contexts/platform/CountDownContext';
import { CurrentCourseContext } from '../../../../contexts/platform/CurrentCourseContext';
import { ModalSimulatorContext } from '../../../../contexts/platform/ModalStartingSimulator';
import { PlanRoutesContext } from '../../../../contexts/platform/PlanRoutesContext';
import ExclamationIcon from '../../../../assets/icons/ExclamationCircle.png';
import close_button from '../../../../assets/icons/close-button-gray.png'

const SimulatorModal = (props) => {

  let navigate = useNavigate();
  const { hideSimulatorModal } = useContext(ModalSimulatorContext);
  const { currentCourse } = useContext(CurrentCourseContext);
  const { setStartCountDown } = useContext(CountDownContext);
  const { routeString } = useContext(PlanRoutesContext);
  const { deviceType, isSmart } = props;

  const handleNavigateToSimulator = () => {
    hideSimulatorModal();
    setStartCountDown(true);
    navigate(`/u/planes/${routeString.toLowerCase()}/simulador/${currentCourse.course}`, { replace: false });
  }

  return (
    <div className={`modal-simulator ${deviceType}`}>
      <span className='modal-close' onClick={() => hideSimulatorModal()}></span>
      <div className={`modal-simulator__container ${deviceType}`}>
        {isSmart && <img src={close_button} alt="close_button" className='modal-simulator__close-button' onClick={() => hideSimulatorModal()} />}
        <div className="modal-simulator__container__advice" style={{ position: "relative" }}>
          <img src={ExclamationIcon} alt="exclamation-icon" style={{ position: "absolute", left: "-2rem" }} />
          <h1 className="regular-16">Importante</h1>
          <ul>
            <li className='regular-14 lineHeight_22'>Asegura una conexión a internet estable.</li>
            <li className='regular-14 lineHeight_22'>Espacio libre de interrupciones por al menos <strong className='regular-14'>10 horas</strong> (5 horas del simulador y 5 horas de revisión).</li>
            <li className='regular-14 lineHeight_22'>Utiliza una computadora de escritorio o portátil.</li>
            <li className='regular-14 lineHeight_22'>El dispositivo móvil no es ideal para llevar a cabo el simulador.</li>
          </ul>
        </div>
        <div className="modal-simulator__container__buttons">
          <button onClick={() => hideSimulatorModal()}>
            <span className="regular-14">No, volver</span>
          </button>
          <button onClick={() => handleNavigateToSimulator()}>
            <span className="blue regular-14 white">Si, quiero comenzar el simulador</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SimulatorModal;
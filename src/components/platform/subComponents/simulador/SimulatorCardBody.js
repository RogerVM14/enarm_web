import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalSimulatorContext } from '../../../../contexts/platform/ModalStartingSimulator';
import { PlanRoutesContext } from '../../../../contexts/platform/PlanRoutesContext';
import { SimulatorAttemptsContext } from '../../../../contexts/platform/SimulatorAttemptsContext';

const SimulatorCardBody = (props) => {

  const { showSimulatorModal } = useContext(ModalSimulatorContext);
  const navigate = useNavigate();
  const { routeString } = useContext(PlanRoutesContext);
  const { deviceType, isSmart } = props;

  const { totalAttempts } = useContext(SimulatorAttemptsContext);
  const handleNavigation = () => {
    if (totalAttempts.length === 0) return;
    navigate(`/u/planes/${routeString.toLowerCase()}/panel_resultados/${props.clase}`)

  }

  return (
    <div className="simulador-body">
      <ul className='list-instructions'>
        <li><span className='regular-14'>1. Simulador con <b>50 Preguntas</b></span></li>
        <li><span className='regular-14'>2. Tiempo para resolverlo: 1 hora 15 minutos</span></li>
        <li><span className='regular-14'>3.  🔥 5 intentos permitidos para resolverlo</span></li>
        <li><span className='regular-14'>4. Conoce tus resultados al finalizar y presionando Finish Quiz</span></li>
      </ul>
      <div className={`buttons-utility ${deviceType}`}>
        <button onClick={() => showSimulatorModal()}>
          <span className='regular-14 white'>Comenzar Simulador</span>
        </button>
        <button onClick={() => { handleNavigation() }}>
          <span className='regular-14'>Ir al panel de resultados</span>
        </button>
      </div>
    </div>
  )
}

export default SimulatorCardBody;
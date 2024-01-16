import React, { useContext, useState } from 'react';
import { SimulatorAttemptsContext } from '../../../../contexts/platform/SimulatorAttemptsContext';
import CircleResultsByPercentage from './CircleResultsByPercentage';
import GraphicResultsByPercentage from './GraphicResultsByPercentage';

const PanelAttemptsContainer = (props) => {

  /*
  * FALSE === PERCENTAGES
  * TRUE === GRAPHICS 
  */
  const [optionSelected, setOptionSelect] = useState(false)
  const { totalAttempts } = useContext(SimulatorAttemptsContext);

  const { deviceType, isSmart } = props;

  return (
    <div className={`panel-attempts-container ${deviceType}`}>
      <div className={`panel-attempts__head ${deviceType}`}>
        <div className={`panel-attempts__title ${deviceType}`}>
          <h1 className='regular-16'>Resultados por intento</h1>
          <h1 className='roboto-14 gray-textColor' >¡Tus intentos en números!</h1>
        </div>
        <div className={`panel-attempts__tools ${deviceType}`}>
          <div
            className={`tools__percentage ${optionSelected ? "not-selected-gray" : "selected-blue"}`}
            onClick={() => { setOptionSelect(false) }}
          >
            <i className="material-icons gray-colored fs16">percent</i>
            <span className='regular-12 gray-colored'>Ver Porcentajes</span>
          </div>
          <div
            className={`tools__graphics ${optionSelected ? "selected-blue" : "not-selected-gray"}`}
            onClick={() => { setOptionSelect(true) }}
          >
            <i className="material-icons gray-colored rotate-to-right fs16">bar_chart</i>
            <span className='regular-12 gray-colored'>Ver Gráficas</span>
          </div>
        </div>
      </div>
      <div className={`panel-attempts__body ${deviceType}`}>
        {
          !optionSelected ? (
            <CircleResultsByPercentage
              isSmart={isSmart}
              totalAttempts={totalAttempts}
            />
          ) : (
            <GraphicResultsByPercentage
              isSmart={isSmart}
              totalAttempts={totalAttempts}
            />
          )
        }
      </div>
    </div>
  )
}

export default PanelAttemptsContainer;
import React, { useContext } from 'react';
import { SimulatorAttemptsContext } from '../../../../contexts/platform/SimulatorAttemptsContext';
import CircleResultsByPercentage from './CircleResultsByPercentage';

const PanelLeftResults = () => {

    const { totalAttempts } = useContext(SimulatorAttemptsContext);

    return (
        <div className='c-panel-left-results'>
            <div className="panel-left-results__head">
                <h1 className='regular-16'>Resultados por intento</h1>
            </div>
            <div className="panel-left-results__body">
                <h1 className='roboto-14' style={{ color: "rgba(0, 0, 0, 0.45)" }}>¡Tus intentos en números!</h1>
                <CircleResultsByPercentage 
                    totalAttempts={totalAttempts}
                /> 
            </div>
        </div>
    )
}

export default PanelLeftResults
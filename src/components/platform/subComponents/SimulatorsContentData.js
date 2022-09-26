import React, { useContext, useState } from 'react';
import { ActualGuideContext } from '../../../contexts/platform/CurrentGuideContext';
import SimulatorCardBody from './simulador/SimulatorCardBody';
import '../../../css/platform/components/SimulatorsContent.css';

const SimulatorsContentData = (props) => {

    const { guideData } = useContext(ActualGuideContext);
    const { deviceType, isSmart } = props;

    const simulatorList = [
        { pos: 1, isActive: false },
        { pos: 2, isActive: false },
        { pos: 3, isActive: false }
    ];

    const [simulatorInfo, setSimulatorInfo] = useState(simulatorList);

    const handleToggleSimulatorBodies = (e, i) => {
        setSimulatorInfo(() => {
            const newList = simulatorList.map((list, index) => {
                if (index === i) {
                    return { ...list, isActive: !list.isActive }
                }
                return { ...list }
            })
            return newList;
        });
    }


    return (
        <div className={`simulator-container ${deviceType}`}>
            {
                simulatorInfo.map((simulator, index) => {
                    return (
                        <div className='i-simulator' key={index}>
                            <div className='simulator-head'>
                                <button onClick={(e) => handleToggleSimulatorBodies(e, index)} >
                                    <i className={`material-icons button-icon ${simulatorInfo[index].isActive ? "open" : "closed"}-mode`}>chevron_right</i>
                                    <span className='regular-14 bold'>Simulador {guideData.label} #{simulator.pos}</span>
                                    <span className='regular-14'>Practica en nuestro simulador</span>
                                </button>
                            </div>
                            {
                                simulatorInfo[index].isActive && <SimulatorCardBody 
                                
                                deviceType={deviceType}
                                isSmart={isSmart}
                                />
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SimulatorsContentData;
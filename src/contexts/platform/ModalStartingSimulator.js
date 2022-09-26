import React, { createContext, useState } from 'react';

export const ModalSimulatorContext = createContext(null);

const ModalStartingSimulator = (props) => {

    const [isModalSimulatorVisible, setSimulatorVision] = useState(false);

    const showSimulatorModal = () => { 
        setSimulatorVision(true);
    }

    const hideSimulatorModal = () => { 
        setSimulatorVision(false);
    }

    return (
        <ModalSimulatorContext.Provider value={
            {
                isModalSimulatorVisible,
                showSimulatorModal,
                hideSimulatorModal
            }
        }>
            {props.children}
        </ModalSimulatorContext.Provider>
    )
}

export default ModalStartingSimulator;
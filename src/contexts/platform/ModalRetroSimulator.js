import React, { useState, createContext } from 'react';

export const ModalRetroSimulatorContext = createContext(null);

const ModalRetroSimulator = (props) => {

    const [isModalRetroVisible, setModalRetroVision] = useState(false);

    const showSimulatorRetroModal = () => {
        setModalRetroVision(true);
    }

    const hideSimulatorRetroModal = () => {
        setModalRetroVision(false);
    }

    return (
        <ModalRetroSimulatorContext.Provider value={
            {
                isModalRetroVisible,
                showSimulatorRetroModal,
                hideSimulatorRetroModal
            }
        }>
            {props.children}
        </ModalRetroSimulatorContext.Provider>
    )
}
  
export default ModalRetroSimulator
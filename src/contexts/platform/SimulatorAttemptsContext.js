import React, { useState, createContext, useEffect } from 'react'

export const SimulatorAttemptsContext = createContext(null);

const SimulatorAttemptsProvider = (props) => {

    const [totalAttempts, setTotalAttempts] = useState([])

    useEffect(() => {
        console.log(totalAttempts)
    }, [totalAttempts])

    const handleTotalAttempts = (properties) => {
        console.log({properties})
        setTotalAttempts((attempts) => {
            return [...attempts, properties];
        });
    }

    return (
        <SimulatorAttemptsContext.Provider value={{ totalAttempts, handleTotalAttempts }}>
            {props.children}
        </SimulatorAttemptsContext.Provider>
    )
}

export default SimulatorAttemptsProvider;
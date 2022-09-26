import React, { createContext, useState } from 'react'

export const AttemptsContext = createContext(null);

const AttemptsProvider = (props) => {

    const [numAttempt, setAttempt] = useState([])

    const handleAttempt = () => {
        return;
    }

    return (
        <AttemptsContext.Provider value={{ numAttempt, handleAttempt }}>
            {props.children}
        </AttemptsContext.Provider>
    )
}

export default AttemptsProvider;
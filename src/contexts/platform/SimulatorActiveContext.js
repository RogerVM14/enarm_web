import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const SimulatorActiveContext = createContext(null);

const SimulatorActiveProvider = (props) => {

    const [isActive, setActive] = useState(false);

    return (
        <SimulatorActiveContext.Provider value={{ isActive, setActive }}>
            {props.children}
        </SimulatorActiveContext.Provider>
    )
}

export default SimulatorActiveProvider;
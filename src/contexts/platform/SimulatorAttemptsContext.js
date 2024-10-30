import React, { useState, createContext } from "react";

export const SimulatorAttemptsContext = createContext(null);

const SimulatorAttemptsProvider = (props) => {
  const [totalAttempts, setTotalAttempts] = useState([]);

  const handleTotalAttempts = (properties) => {
    setTotalAttempts((attempts) => {
      return [...attempts, properties];
    });
  };

  return (
    <SimulatorAttemptsContext.Provider value={{ totalAttempts, handleTotalAttempts }}>
      {props.children}
    </SimulatorAttemptsContext.Provider>
  );
};

export default SimulatorAttemptsProvider;

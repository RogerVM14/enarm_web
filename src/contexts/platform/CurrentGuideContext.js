import React, { createContext, useState } from "react";

export const ActualGuideContext = createContext({});

const CurrentGuideContext = (props) => {
  const [guideData, setGuideData] = useState({ pos: 0, label: "Infectología" });

  const handleGuideSelector = (data) => {
    setGuideData((guide) => {
      return { ...guide, pos: data[0], label: data[1] };
    });
  };

  return (
    <ActualGuideContext.Provider value={{ guideData, handleGuideSelector }}>
      {props.children}
    </ActualGuideContext.Provider>
  );
};

export default CurrentGuideContext;

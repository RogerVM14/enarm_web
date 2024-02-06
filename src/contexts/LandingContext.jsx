import { createContext, useState } from "react";

export const LandingContext = createContext(null);

const LandingProvider = ({ children }) => {

  const [popUp, setPopUp] = useState(true);

  return (
    <LandingContext.Provider value={{
      popUp,
      setPopUp      
    }}>
      {children}
    </LandingContext.Provider>
  )
}

export default LandingProvider;
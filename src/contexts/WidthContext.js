import { createContext, useEffect, useState } from "react";

export const WidthContext = createContext(null);

const WidthProvider = ({ children }) => {

  const [width, setWidth] = useState(0);

  useEffect(() => {
    function getWindowSize() {
      let xViewport = window.innerWidth;
      setWidth(xViewport);
    }

    window.addEventListener("resize", getWindowSize);

    getWindowSize();

    return () => window.removeEventListener("resize", getWindowSize)
  }, [])

  return (
    <WidthContext.Provider value={{ width }}>
      {children}
    </WidthContext.Provider>
  )
};

export default WidthProvider;
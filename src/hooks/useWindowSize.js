import { useState, useEffect } from "react";

const useWindowSize = () => {

  const [viewPort, setViewPort] = useState(null);
  const [breakout, setBreakout] = useState(null);  

  useEffect(() => {

    function getBreakout(x) {
      if (x <= 576) return "sm";
      if (x > 576 && x <= 768) return "md";
      if (x > 768 && x <= 1024) return "lg";
      if (x > 1024 && x < 1440) return "xl";
      if (x > 1440) return "xxl";
    }

    function handleResize() {
      let x = window.innerWidth;
      setViewPort(viewPort);
      const breakoutResult = getBreakout(x);
      setBreakout(breakoutResult);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);

  }, [viewPort, breakout]);



  return { viewPort, breakout };
}

export default useWindowSize;
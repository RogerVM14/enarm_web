import { useState, useEffect } from "react";

export const useWindowSize = () => {

  const [windowSize, setWindowSize] = useState(undefined);
  const [isPortableState, setIsPortableState] = useState(undefined);

  useEffect(() => {

    function handleResize() {
      let size = window.innerWidth
      setWindowSize(size);
      let isSizePortable = size < 992;
      setIsPortableState(isSizePortable);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return {
    windowSize,
    isPortableState
  };
}
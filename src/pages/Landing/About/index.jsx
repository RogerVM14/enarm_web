import React, { useEffect, useState } from "react";
import LandingLayout from "../../Layouts/Landing";
import HowItWorks from "./Components/HowItWorks";
import Contents from "./Components/Contents";
import Hero3 from "./Components/Hero3";
import Process from "./Components/Process";

const CoursePage = () => {

  const getWindowWidth = () => {
    let x = window.innerWidth;
    if (x < 576) return "xs";
    if (x >= 576 && x <= 767) return "sm";
    if (x >= 768 && x <= 991) return "md";
    if (x >= 992 && x <= 1199) return "lg";
    if (x >= 1200 && x <= 1399) return "xl";
    if (x >= 1400) return "xxl";
  };

  const [width, setWidth] = useState(getWindowWidth());

  const isMobile = () => {
    if (["xs", "sm", "md"].includes(width)) return true;
    if (["lg", "xl", "xxl"].includes(width)) return false;
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      const x = getWindowWidth();
      setWidth(x);
    });
  }, [width]);

  return (
    <LandingLayout page="course">
      <Hero3 isMobile={isMobile} size={width} />
      <Process isMobile={isMobile} size={width} />
      <HowItWorks isMobile={isMobile} size={width} />
      <Contents isMobile={isMobile} size={width} />
    </LandingLayout>
  )
}

export default CoursePage;


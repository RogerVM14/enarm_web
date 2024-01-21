import React, { useEffect, useState } from "react";
import Hero3 from "../components/about_course/Hero3";
import Process from "../components/about_course/Process";
import HowItWorks from "../components/about_course/HowItWorks";
import Contents from "../components/about_course/Contents";

const AboutCoursePage = () => {
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

  useEffect(() => {
    window.addEventListener("resize", () => {
      const x = getWindowWidth();
      setWidth(x);
    });
  }, [width]);

  const isMobile = () => {
    if (['xs', 'sm', 'md'].includes(width)) return true;
    if (['lg', 'xl', 'xxl'].includes(width)) return false;
  }
 
  return (
    <>
      <Hero3 size={width} ismobile={isMobile} />
      <Process size={width} />
      <HowItWorks size={width} ismobile={isMobile} />
      <Contents size={width} ismobile={isMobile} />
    </>
  )
}

export default AboutCoursePage;
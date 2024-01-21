import React, { useEffect, useState } from "react";
import Hero2 from "../components/about_us/Hero2";
import KnowUs from "../components/about_us/KnowUs";
import News from "../components/about_us/News";
import Facts from "../components/about_us/Facts";
import Stats from "../components/about_us/Stats";
import Promises from "../components/Promises";

const AboutUsPage = () => {

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
      <Hero2 size={width} ismobile={isMobile} />
      <KnowUs size={width} ismobile={isMobile} />
      <News size={width} />
      <Facts size={width} />
      <Stats size={width} />
      <Promises size={width} />
    </>
  )
}

export default AboutUsPage;
import React, { useEffect, useState } from "react";
import Hero6 from "../components/free_test/Hero6";
import AreYouReady from "../components/free_test/AreYouReady";
import ContactBanner from "../components/ContactBanner";
import Discount from "../components/Discount"
import Advantages from "../components/free_test/Advantages"; 

const FreeTestPage = () => {
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
      <Hero6 size={width} />
      <AreYouReady size={width} ismobile={isMobile} />
      <ContactBanner size={width} ismobile={isMobile} />
      <Advantages size={width} />
      <Discount size={width} ismobile={isMobile} />
    </>
  )
}

export default FreeTestPage;
import React, { useEffect, useState } from "react";
import Hero7 from "../components/contact/Hero7.js";
import ContactBanner from "../components/ContactBanner";
import RegularQuestions from "../components/contact/RegularQuestions.js";
import WidthContext from "../contexts/WidthContext";

const ContactPage = () => {
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
    <div className="layout-wrapper">
      <Hero7 size={width} ismobile={isMobile } />
      <RegularQuestions size={width} />
      <ContactBanner size={width} />
    </div>
  )
}

export default ContactPage;


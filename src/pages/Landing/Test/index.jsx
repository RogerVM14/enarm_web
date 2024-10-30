import React, { useEffect, useState } from 'react'
import LandingLayout from "../../Layouts/Landing";
import Hero6 from "./Components/Hero6";
import Advantages from "./Components/Advantages";
import AreYouReady from "./Components/AreYouReady";
import SectionContact from "../../../components/SectionContact";
import DiscountSection from "../../../views/Discount";

const TestPage = () => {
 
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


  return (
    <LandingLayout page="test">
      <Hero6 size={width} />
      <AreYouReady />
      <SectionContact />
      <Advantages />
      <DiscountSection />
    </LandingLayout>
  )
}

export default TestPage;
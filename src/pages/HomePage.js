import Discount from "../components/Discount";
import Explore from "../components/homepage/Explore";
import Hero from "../components/homepage/Hero";
import Resources from "../components/Resources";
import ValueProposal from "../components/homepage/ValueProposal";
import Witness from "../components/homepage/Witness";
import { useEffect, useState } from "react";

const HomePage = () => {
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
      <Hero size={width} ismobile={isMobile} />
      <Explore size={width} ismobile={isMobile} />
      <Discount size={width} ismobile={isMobile} />
      <ValueProposal size={width} ismobile={isMobile} />
      <Witness size={width} ismobile={isMobile} />
      <Resources size={width} ismobile={isMobile} />
    </>
  )
}

export default HomePage;
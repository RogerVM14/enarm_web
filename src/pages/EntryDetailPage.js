import React, { useState, useEffect} from "react";
import Hero5 from "../components/entry_details/Hero5";
import Entry from "../components/entry_details/Entry";
import InterestingEntries from "../components/entry_details/InterestingEntries";
import Resources from "../components/Resources"; 

const EntryDetailPage = () => {

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
    <div>
      <Hero5 size={width} />
      <Entry size={width} ismobile={isMobile} />
      <InterestingEntries size={width} ismobile={isMobile} />
      <Resources size={width} ismobile={isMobile} />
    </div>
  )
}

export default EntryDetailPage
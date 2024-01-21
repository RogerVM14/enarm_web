import React, { useState, useEffect } from "react";
import ContentsEntries from "../components/blog_entries/ContentsEntries";
import Hero4 from "../components/blog_entries/Hero4";
import Promises from "../components/Promises";

const BlogEntriesPage = () => {

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
      <Hero4 size={width} ismobile={isMobile} />
      <ContentsEntries size={width} ismobile={isMobile} />
      <Promises size={width} />
    </>
  )
}

export default BlogEntriesPage
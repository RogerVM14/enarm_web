import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Modal from '../Modal';


const Layout = ({ children, topLine }) => {

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
      <NavBar size={width} ismobile={isMobile()} />
      <main className={width} >
        {children}
      </main>
      <Footer topLine={topLine} size={width} />
      <Modal size={width} ismobile={isMobile()} />
    </>
  )
}

export default Layout;
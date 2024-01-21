import React from "react";
import ui from "./index.module.css";
import LandingHeader from "./Header";
import LandingFooter from "./Footer";

const LandingLayout = ({ children }) => {
  return (
    <div className={ui.landingWrapper}>
      <LandingHeader />
      <main> 
        {children}
      </main>
      <LandingFooter />
    </div>
  )
}

export default LandingLayout;
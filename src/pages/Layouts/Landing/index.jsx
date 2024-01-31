import React from "react";
import LandingHeader from "./Header";
import LandingFooter from "./Footer";

const LandingLayout = ({ page, children }) => {
  return (
    <React.Fragment>
      <LandingHeader />
      <main datapage={page}>
        {children}
      </main>
      <LandingFooter />
    </React.Fragment>
  )
}

export default LandingLayout;
import React, { useContext } from "react";
import LandingHeader from "./Header";
import LandingFooter from "./Footer";
import PopUp from "../../../components/PopUp";
import { LandingContext } from "../../../contexts/LandingContext";

const LandingLayout = ({
  page,
  footer = true,
  children
}) => {

  const { popUp, setPopUp } = useContext(LandingContext);

  return (
    <React.Fragment>
      <LandingHeader />
      <main datapage={page}>
        {children}
      </main>
      <LandingFooter visible={footer} />
      <PopUp open={popUp} closeModal={() => { setPopUp(false); }} />
    </React.Fragment>
  )
}

export default LandingLayout;
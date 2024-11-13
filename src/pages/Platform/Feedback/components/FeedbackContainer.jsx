import React from "react";
import ui from "../index.module.css";
import ArrowButtons from "./ArrowButtons";
import GraphicBodyContent from "./GraphicBodyContent";
import FeedbackBodyContent from "./FeedbackBodyContent";

const FeedbackContainer = ({
  feed,
  position,
  simulatorName,
  handleOnChangeFeedback = () => {},
  backToFeedbackList = () => {},
  displaySpecial,
}) => { 
  return (
    <div className={ui.sectionContainer}>
      <header>
        <div className={ui.containerHead} datatype="large">
          <p>
            {simulatorName} / Panel Simulador / <strong>Retroalimentación Primer Intento</strong>
          </p>
          <ArrowButtons handleOnClick={(e) => handleOnChangeFeedback(e, displaySpecial)} />
        </div>
      </header>
      <div className={ui.containerBody} style={{height: "calc(100dvh - 10rem)", overflowY: "auto"}}>
        <div className={ui.bodyContent}>
          <div className={ui.contentHead} datatype="small">
            <button type="button" className={ui.backButton} onClick={() => backToFeedbackList()}>
              Regresar
            </button>
            <ArrowButtons handleOnClick={(e) => handleOnChangeFeedback(e, displaySpecial)} />
          </div>
          {displaySpecial === true ? <GraphicBodyContent /> : <FeedbackBodyContent feed={feed} position={position} />}
          <ArrowButtons handleOnClick={(e) => handleOnChangeFeedback(e, displaySpecial)} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackContainer;

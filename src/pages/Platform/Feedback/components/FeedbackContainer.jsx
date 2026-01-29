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
  attempt,
}) => {
  const layer = ["1er Intento", "2do Intento", "3ro Intento", "4to Intento", "5to Intento"];

  return (
    <div className={ui.sectionContainer}>
      <header>
        <div className={ui.containerHead} datatype="large">
          <p>
            {simulatorName ?? "Simulador"} / Panel Simulador / <strong>{layer[(attempt ?? 1) - 1]}</strong>
          </p>
          <ArrowButtons handleOnClick={(e) => handleOnChangeFeedback(e, displaySpecial)} />
        </div>
      </header>
      <div className={ui.containerBody} style={{ height: "calc(100dvh - 10rem)", overflowY: "auto" }}>
        <div className={ui.bodyContent}>
          <div className={ui.contentHead} datatype="small">
            <button type="button" className={ui.backButton} onClick={() => backToFeedbackList()}>
              Regresar
            </button>
            <ArrowButtons handleOnClick={(e) => handleOnChangeFeedback(e, displaySpecial)} />
          </div>
          {displaySpecial === true ? (
            <GraphicBodyContent />
          ) : feed != null && (position !== undefined && position !== null) ? (
            <FeedbackBodyContent feed={feed} position={position} />
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="spinner-border animate-spin inline-block w-8 h-8 border-2 rounded-full border-[#05B2FA] mb-4"></div>
              <p className="text-[#595959]">Cargando retroalimentación...</p>
            </div>
          )}
          <ArrowButtons handleOnClick={(e) => handleOnChangeFeedback(e, displaySpecial)} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackContainer;

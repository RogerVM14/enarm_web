import React from "react";
import ui from "../index.module.css";
import IconValidation from "./IconValidation";

const FeedbackList = ({ list, filter, handleOnClickFeedback = () => {}, feedbackSelected }) => { 
  return (
    <div className={ui.feedbackList}>
      {list?.map(({ clinic_case, clinic_case_id, questions_case, position }, index) => {
        const [responses] = questions_case;

        return (
          <div
            className={ui.listItem}
            key={clinic_case_id}
            data-selected={feedbackSelected === index}
            onClick={() => handleOnClickFeedback(index)}
          >
            <div className={ui.itemContent}>
              <div className={ui.itemAnswerValidation}>
                <IconValidation flag={responses.was_correct} />
              </div>
              <div className={ui.itemCase}>
                <p>{clinic_case.slice(0, 40)}...</p>
              </div>
              <p className={ui.itemNumQuestion}>Pregunta {position}.</p>
              <p className={ui.itemQuestion}>{responses.simulator_question.slice(0,25)}...</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeedbackList;

import React from "react";
import ui from "../index.module.css";
// import FlashCardImage from "../../Assets/Images/Flashcard.png";

const letters = ["A", "B", "C", "D"];
const FeedbackBodyContent = ({ feed, position }) => {
  const setBackgound = (index) => {
    const { correct_answer_index, answer_index_selected } = feed?.questions_case[0];
    let bg = "bg-transparent";

    if (index === answer_index_selected) bg = "bg-[#FFF1F0] border-[1px] border-solid border-[#FFA39E]";
    if (index === correct_answer_index) bg = "bg-[#F6FFED] border-[1px] border-solid border-[]";

    return bg;
  };

  return (
    <React.Fragment>
      <h5>Pregunta {position}</h5>
      <p className={ui.feedbackCase}>{feed?.clinic_case}</p>
      <h5>{feed?.questions_case[0]?.simulator_question}</h5>
      <ul>
        {feed?.questions_case[0]?.answers?.map(({ answer, correct_answer }, index) => {
          return (
            <li
              key={index}
              className={`${setBackgound(index)} py-2 px-4 rounded-sm max-w-[395px]`}
            >{`${letters[index]}. ${answer}`}</li>
          );
        })}
      </ul>
      <h5>
        Respuesta{" "}
        {feed?.questions_case[0]?.was_correct === null
          ? "no respondída"
          : feed?.questions_case[0]?.was_correct
          ? "correcta"
          : "incorrecta"}
      </h5>
      <p className={ui.feedbackResponse}>
        {feed?.questions_case[0]?.was_correct === null ? "" : feed?.questions_case[0]?.feedback}
      </p>
      {/* <p className={ui.feedbackTip}>🔥 Tip ENARM: {}</p> */}
      {/* <div className={ui.flashCard}>
        <img src={FlashCardImage} alt="flashcard" />
      </div> */}
    </React.Fragment>
  );
};

export default FeedbackBodyContent;

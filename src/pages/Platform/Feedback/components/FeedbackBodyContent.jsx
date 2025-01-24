import ui from "../index.module.css";
import "react-quill/dist/quill.snow.css";

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
    <div>
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
      <h5 className="py-6">
        Respuesta
        {feed?.questions_case[0]?.was_correct === null
          ? "no respondída"
          : feed?.questions_case[0]?.was_correct
          ? "correcta"
          : "incorrecta"}
      </h5>
      <div dangerouslySetInnerHTML={{ __html: feed?.questions_case[0]?.feedback }}></div>
    </div>
  );
};

export default FeedbackBodyContent;

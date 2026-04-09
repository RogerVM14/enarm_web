import ui from "../index.module.css";
// import "react-quill/dist/quill.snow.css";

const letters = ["A", "B", "C", "D"];

const FeedbackBodyContent = ({ feed, position }) => {
  // No renderizar contenido hasta que feed y questions_case estén listos
  const isReady = feed != null && Array.isArray(feed?.questions_case) && feed.questions_case.length > 0;
  const positionReady = position !== undefined && position !== null;

  if (!isReady || !positionReady) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-2 rounded-full border-[#05B2FA] mb-4"></div>
        <p className="text-[#595959]">Cargando retroalimentación...</p>
      </div>
    );
  }

  const setBackgound = (index, qc) => {
    const { correct_answer_index, answer_index_selected } = qc || {};
    let bg = "bg-transparent";

    if (index === answer_index_selected) bg = "bg-[#FFF1F0] border-[1px] border-solid border-[#FFA39E]";
    if (index === correct_answer_index) bg = "bg-[#F6FFED] border-[1px] border-solid border-[]";

    return bg;
  };

  const getAnswerTitle = (qc) => {
    const { answer_index_selected, was_correct, correct_answer_index } = qc || {};
    const answered =
      answer_index_selected !== null &&
      was_correct !== null &&
      correct_answer_index !== null;
    if (!answered) return "Pregunta no respondida";
    return was_correct ? "Respuesta correcta" : "Respuesta incorrecta";
  };

  const isUnanswered = (qc) => {
    const { answer_index_selected, was_correct, correct_answer_index } = qc || {};
    return (
      answer_index_selected === null || was_correct === null || correct_answer_index === null
    );
  };

  const questionsCase = feed?.questions_case ?? [];

  return (
    <div>
      <h5>{position != null ? `Caso Clínico ${position}` : ""}</h5>
      <p className={`${ui.feedbackCase} mb-4`}>{feed?.clinic_case ?? ""}</p>
      {questionsCase.map((qc, idx) => (
        <div key={qc?.simulator_question_id ?? idx} className="mb-6">
          <div className="px-4 py-1 bg-[#ad2102] inline-block rounded-sm mb-3">
            <h6 className="uppercase text-white">
              Pregunta {position}.{qc?.originalIndex ?? idx + 1}
            </h6>
          </div>
          <h5>{qc?.simulator_question ?? ""}</h5>
          {isUnanswered(qc) ? (
            <div className="py-2 mt-4 px-3 mb-3 rounded-sm bg-[#FFF7E6] border border-[#FFD591] inline-flex items-center gap-2">
              <span className="text-[#FA8C16]">⚠️</span>
              <span className="text-[#AD6800] text-sm">Esta pregunta no fue respondida</span>
            </div>
          ) : null}
          <ul>
            {(qc?.answers ?? []).map((item, index) => (
              <li
                key={index}
                className={`${setBackgound(index, qc)} py-2 px-4 rounded-sm max-w-[395px]`}
              >
                {`${letters[index] ?? ""}. ${item?.answer ?? ""}`}
              </li>
            ))}
          </ul>
          {!isUnanswered(qc) ? (
            <h5 className="py-4">{getAnswerTitle(qc)}</h5>
          ) : null}
          <div className="py-2 mt-2 px-3 mb-3 rounded-sm bg-[#E6F7FF] border border-[#91D5FF] inline-flex items-center gap-2">
            <span className="text-[#1890FF]">💡</span>
            <span className="text-[#0958D9] text-sm">Retroalimentación</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: qc?.feedback ?? "" }}></div>
          {idx < questionsCase.length - 1 ? (
            <div className="my-6 border-t border-[#F0F0F0]"></div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default FeedbackBodyContent;

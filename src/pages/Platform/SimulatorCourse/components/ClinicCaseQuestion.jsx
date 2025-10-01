import QuestionsGroup from "./QuestionsGroup";

const ClinicCaseQuestion = ({ data, position, handleSelectAnswer = () => {}, id }) => { 
  return (
    <div className="">
      <div className="bg-[#1e73be] py-1 px-6 text-center rounded-sm">
        <h2 className="uppercase text-white">Caso Clínico</h2>
      </div>
      <div className="py-4">
        <p>{data?.clinic_case}</p>
      </div>
      {(data?.questions_case || [data?.questions_case?.[0]]).map((qc, idx) => (
        <div key={qc?.simulator_question_id || idx}>
          <div className="px-6 py-1 bg-[#ad2102] max-w-[300px] rounded-sm">
            <h3 className="uppercase text-white">Pregunta {id}{data?.questions_case?.length > 1 ? `.${idx + 1}` : ""}</h3>
          </div>
          <div className="pt-6 pb-2">
            <p>{qc?.simulator_question}</p>
          </div>
          <QuestionsGroup
            data={qc?.answers}
            position={position}
            idPrefix={`q-${qc?.simulator_question_id || `${id}-${idx}`}`}
            handleSelectAnswer={(answerPosition) =>
              handleSelectAnswer({
                clinic_case_id: data?.clinic_case_id,
                id,
                answerPosition,
                questionInfo: qc,
              })
            }
          />
        </div>
      ))}
    </div>
  );
};

export default ClinicCaseQuestion;

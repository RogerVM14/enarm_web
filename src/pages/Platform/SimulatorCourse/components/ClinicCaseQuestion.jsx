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
      <div className="px-6 py-1 bg-[#ad2102] max-w-[300px] rounded-sm">
        <h3 className="uppercase text-white">Pregunta {id}</h3>
      </div>
      <div className="pt-6 pb-2">
        <p>{data?.questions_case[0].simulator_question}</p>
      </div>
      <QuestionsGroup
        data={data?.questions_case[0]?.answers}
        position={position}
        handleSelectAnswer={(answerPosition) => handleSelectAnswer({ ...data, answerPosition, id })}
      />
    </div>
  );
};

export default ClinicCaseQuestion;

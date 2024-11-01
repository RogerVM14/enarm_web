import { useEffect, useState } from "react";
import ui from "./index.module.css";
import DashboardLayout from "../../Layouts/Dashboard";
import { Link, useLocation } from "react-router-dom";
import SimulatorsAdvice from "./components/SimulatorAdvice/SimulatorsAdvice";
import { useQuery } from "react-query";
import { getSimulatorQuestions, addAnswerSimulatorByStudent } from "../../../apis/platform";
import toast from "react-hot-toast";

const useQueryParams = () => {
  const { search } = useLocation();
  const queryParameters = new URLSearchParams(search);
  const plan = parseInt(queryParameters.get("plan"));
  const simulator_id = parseInt(queryParameters.get("id"));

  return { plan, simulator_id };
};

const SimulatorCoursePage = () => {
  const [questionGroup, setQuestionGroup] = useState(true);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [squares, setSquares] = useState([]);
  const [squareSelected, setSquareSelected] = useState(null);
  const [answersSimulator, setAnwersSimulator] = useState([]);

  const { simulator_id, plan } = useQueryParams();
  const {
    isLoading,
    isError,
    data: simulatorQuestions,
  } = useQuery("questions", () => getSimulatorQuestions(simulator_id));

  const pushAnswer = (data) => {
    const { clinic_case_id, questions_case, answerPosition } = data;
    const [{ simulator_question_id, answers }] = questions_case;
    const correct_answer_index = answers.findIndex((element) => element.correct_answer === true);
    const estructure = {
      clinic_case_id,
      questions: [
        {
          simulator_question_id,
          answer_index_selected: answerPosition,
          was_correct: correct_answer_index === answerPosition,
          correct_answer_index,
        },
      ],
    };
    setAnwersSimulator((prev) => {
      const index = prev?.findIndex((element) => element.clinic_case_id === clinic_case_id);
      if (index === -1) return [...prev, estructure];
      const updatedAnswers = replaceObjectAtIndex(prev, index, estructure);
      return updatedAnswers;
    });
  };

  function replaceObjectAtIndex(arr, index, newObject) {
    if (index < 0 || index >= arr.length) {
      return arr;
    }

    const updatedArray = [...arr];
    updatedArray[index] = newObject;

    return updatedArray;
  }

  useEffect(() => {
    if (!simulatorQuestions || simulatorQuestions === undefined) return;
    const _array = simulatorQuestions.questions?.map((element) => {
      return { ...element, isAnswered: false };
    });
    setSquares(_array);
  }, [simulatorQuestions]);

  useEffect(() => {
    if (squareSelected === null) return;
    setSquares((prev) => {
      const newObject = { ...prev[squareSelected], isAnswered: true };

      const updatedAnswers = replaceObjectAtIndex(prev, squareSelected, newObject);
      return updatedAnswers;
    });
  }, [squareSelected]);

  const seeResults = async () => {
    const total_answers = answersSimulator.length;
    const correct_answers = answersSimulator.filter(({ questions }) => questions[0].was_correct === true).length;
    const total_questions = simulatorQuestions.questions.length;
    const rate_percent =
      total_answers === 50 ? (correct_answers / total_answers) * 100 : (correct_answers / total_questions) * 100;
    const objectData = {
      simulator_id: parseInt(simulator_id),
      total_attempts: 5,
      total_answers,
      correct_answers,
      total_questions,
      time_in_simulator: "00:15:00",
      answers_simulator: answersSimulator,
      rate_percent: Math.ceil(rate_percent),
    };
    const response = await addAnswerSimulatorByStudent(objectData);
    if (response) {
      toast.success("Se ha agregado con exito.", {
        position: "bottom-right",
        duration: 3500,
      });
    } else {
      toast.error("Error insertando respuestas.", {
        position: "bottom-right",
        duration: 3500,
      });
    }
  };

  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.gridContainer}>
          <aside>
            <div className={ui.asideContainer}>
              <div className={ui.containerHead}>
                <h5>Simulador Infectología</h5>
                <h5>2do Intento</h5>
              </div>
              <div className={ui.containerBody}>
                <div className={ui.countdownWrapper}>
                  <p>Tiempo restante</p>
                  <input type="time" name="countdown" id="countdown" disabled />
                </div>
                <div className={ui.questionsWrapper}>
                  <div className={ui.questionsGroup}>
                    <div
                      className={ui.groupHeader}
                      onClick={() => {
                        setQuestionGroup(!questionGroup);
                      }}
                      data-selected-questions={questionGroup}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path
                          d="M8.73779 6.02419L4.08936 2.0154C3.91602 1.86648 3.66211 2.00075 3.66211 2.24123V10.2588C3.66211 10.4993 3.91602 10.6336 4.08936 10.4846L8.73779 6.47585C8.87085 6.36111 8.87085 6.13894 8.73779 6.02419Z"
                          fill="black"
                          fillOpacity="0.85"
                        />
                      </svg>
                      <p>Preguntas</p>
                    </div>
                    <QuestionsSquaresGroup squares={squares} display={questionGroup} />
                  </div>
                </div>
                {/* <div className={ui.clinicCasesGroup}>
                  <div
                    className={ui.groupHeader}
                    onClick={() => {
                      setClinicGroup(!clinicGroup);
                    }}
                    data-selected-cases={clinicGroup}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path
                        d="M8.73779 6.02419L4.08936 2.0154C3.91602 1.86648 3.66211 2.00075 3.66211 2.24123V10.2588C3.66211 10.4993 3.91602 10.6336 4.08936 10.4846L8.73779 6.47585C8.87085 6.36111 8.87085 6.13894 8.73779 6.02419Z"
                        fill="black"
                        fillOpacity="0.85"
                      />
                    </svg>
                    <p>Casos clínicos (5)</p>
                  </div>
                  <ClinicCasesGroup display={clinicGroup} />
                </div> */}
              </div>
            </div>
          </aside>

          <section>
            <div className={ui.sectionContainer}>
              <div className={ui.simulatorQuestions}>
                {isLoading && !isError && <span>Cargando...</span>}
                {!isLoading && isError && <span>..Error..</span>}
                {!isLoading && !isError ? (
                  <>
                    <SimulatorQuestion
                      handleSelectAnswer={(e) => {
                        pushAnswer(e);
                        setSquareSelected(current);
                      }}
                      position={0}
                      data={simulatorQuestions?.questions[current]}
                      id={current + 1}
                    />
                    <SimulatorQuestion
                      handleSelectAnswer={(e) => {
                        pushAnswer(e);
                        setSquareSelected(current + 1);
                      }}
                      position={1}
                      data={simulatorQuestions?.questions[current + 1]}
                      id={current + 2}
                    />
                  </>
                ) : null}
              </div>
              <div className={ui.containerFooterButtons}>
                <button
                  type="button"
                  className={ui.getRetroButton}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <span>Obtener retroalimentación</span>
                </button>
                {current < 48 ? (
                  <button
                    type="button"
                    className={ui.nextQuestionsButton}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setCurrent(current + 2);
                    }}
                    // disabled={answeredPosition?.some((i) => i === false)}
                  >
                    <span>Siguiente</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className={ui.nextQuestionsButton}
                    style={{ cursor: "pointer" }}
                    onClick={() => seeResults()}
                  >
                    <span>Ver resultados</span>
                  </button>
                )}
              </div>
            </div>
            <SimulatorsAdvice open={open} onClose={() => setOpen(false)} query={{ simulator: simulator_id, plan }} />
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
};

const SimulatorQuestion = ({ data, position, handleSelectAnswer = () => {}, id }) => {
  const answerLetter = ["A", "B", "C", "D"];
  return (
    <div className={ui.question}>
      <div className={ui.questionHead}>
        <h2>Caso Clínico</h2>
      </div>
      <div className={ui.questionDescription}>
        <p>{data?.clinic_case}</p>
      </div>
      <div className={ui.answerNumber}>
        <h3>Pregunta {id}</h3>
      </div>
      <div className={ui.questionAnswers}>
        <p>{data?.questions_case[0].simulator_question}</p>
        <ul className={ui.answersList}>
          {data?.questions_case[0].answers?.map((answer, index) => {
            return (
              <QuestionAnswerOption
                question={answer}
                index={index}
                position={id}
                letter={answerLetter[index]}
                positionQuestion={position}
                key={index}
                handleSelectAnswer={(answerPosition) => handleSelectAnswer({ answerPosition, ...data })}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const QuestionsSquaresGroup = ({ squares, display }) => {
  if (display === false || !squares || squares.length === 0) return;
  return (
    <div className={ui.groupBody}>
      {squares?.map((quest, index) => {
        const { isAnswered } = quest;
        const squareClass = isAnswered === true ? ui.squareSelected : ui.square;
        return (
          <div key={index} className={squareClass}>
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};

// const ClinicCasesGroup = ({ display }) => {
//   if (display === false) return null;
//   return (
//     <div className={ui.groupBody}>
//       <div className={ui.questionPreview}>
//         <p>Trabajador de la construcción que acude a consulta por la pres...</p>
//         <Link to="#">Ir a caso clínico</Link>
//       </div>
//       <div className={ui.questionPreview}>
//         <p>Mujer previamente sana se presenta a consulta con dolor de 15 hora...</p>
//         <Link to="#">Ir a caso clínico</Link>
//       </div>
//       <div className={ui.questionPreview}>
//         <p>hombre de 49 años acude a urgencias por tos productiva dis...</p>
//         <Link to="#">Ir a caso clínico</Link>
//       </div>
//       <div className={ui.questionPreview}>
//         <p>Trabajador de la construcción que acude a consulta por la pres...</p>
//         <Link to="#">Ir a caso clínico</Link>
//       </div>
//       <div className={ui.questionPreview}>
//         <p>Mujer previamente sana se presenta a consulta con dolor de 15 hora...</p>
//         <Link to="#">Ir a caso clínico</Link>
//       </div>
//     </div>
//   );
// };

const QuestionAnswerOption = ({ question, index, position, letter, handleSelectAnswer }) => {
  const identifier = "answer" + index + "Question" + position;
  const group = "question" + position;
  return (
    <li className={ui.answerItem}>
      <label htmlFor={identifier}>{letter}</label>
      <input
        type="radio"
        name={group}
        id={identifier}
        data-answer={index}
        data-question={position}
        onClick={(e) => {
          handleSelectAnswer(index, question);
        }}
      />
      <label htmlFor={identifier}>{question?.answer}</label>
    </li>
  );
};

export default SimulatorCoursePage;

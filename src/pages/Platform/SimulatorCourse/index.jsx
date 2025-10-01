import { useContext, useEffect, useState } from "react";
import ui from "./index.module.css";
import DashboardLayout from "../../Layouts/Dashboard";
import { useLocation, useNavigate } from "react-router-dom";
import SimulatorsAdvice from "./components/SimulatorAdvice/SimulatorsAdvice";
import { useQuery } from "react-query";
import {
  getSimulatorQuestions,
  addAnswerSimulatorByStudent,
  getSimulatorStatsByStudent,
} from "../../../apis/platform";
import toast from "react-hot-toast";
import ClinicCaseQuestion from "./components/ClinicCaseQuestion";
import QuestionsSquaresGroup from "./components/QuestionsSquaresGroup";
import ClinicCasesGroup from "./components/ClinicCasesGroup";
import CountdownTimer from "./components/CountdownTimer";
import { ChevronRight } from "./icons/ChevronRight";
import { GeneralContext } from "../../../contexts/GeneralContext";
import SimulatorCooldownAdvice from "./components/SimulatorCooldownAdvice/SimulatorsAdvice";
import { useDispatch } from "react-redux";
import { setIsLoadingContent } from "../../../store/reducers/general/general";

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
  const [duration, setDuration] = useState("");
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [squareSelected, setSquareSelected] = useState(null);
  const [answersSimulator, setAnwersSimulator] = useState([]);
  const [answerResponse, setAnswerResponse] = useState(0);

  const { simulator_id, plan } = useQueryParams();
  const { setSimulatorIsActive } = useContext(GeneralContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const {
    isLoading,
    isError,
    data: simulatorQuestions,
  } = useQuery("questions", () =>
    getSimulatorQuestions(simulator_id, dispatch, navigate)
  );

  const { data: statsAttempts } = useQuery("stats", () =>
    getSimulatorStatsByStudent(simulator_id, dispatch, navigate)
  );

  useEffect(() => {
    if (statsAttempts === undefined) return;
    const positions = [
      "er",
      "do",
      "ro",
      "to",
      "to",
      "to",
      "mo",
      "vo",
      "no",
      "mo",
    ];
    const { answer_list } = statsAttempts;
    const index =
      Object.entries(answer_list).length === 0 ? 0 : answer_list.length;
    const stringAttempt = `${index + 1}${positions[index]}`;
    setTotalAttempts(stringAttempt);
  }, [statsAttempts]);

  const pushAnswer = (data) => {
    const { clinic_case_id, id, answerPosition, questionInfo } = data;
    const { simulator_question_id, answers } = questionInfo || {};
    const correct_answer_index = (answers || []).findIndex((e) => e.correct_answer === true);

    setAnwersSimulator((prev) => {
      // Encontrar o crear la entrada del caso clínico
      const caseIndex = prev.findIndex((e) => e.clinic_case_id === clinic_case_id);
      const baseCase = caseIndex !== -1 ? prev[caseIndex] : { clinic_case_id, questions: [], id };

      // Remover cualquier respuesta previa de la misma subpregunta
      const filteredQuestions = baseCase.questions.filter((q) => q.simulator_question_id !== simulator_question_id);

      const updatedCase = {
        ...baseCase,
        questions: [
          ...filteredQuestions,
          {
            simulator_question_id,
            answer_index_selected: answerPosition,
            was_correct: correct_answer_index === answerPosition,
            correct_answer_index,
          },
        ],
      };

      if (caseIndex === -1) {
        return [...prev, updatedCase];
      }
      return replaceObjectAtIndex(prev, caseIndex, updatedCase);
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

    setDuration(simulatorQuestions?.simulator_duration);
    setSquares(_array);
    setSimulatorIsActive(true);

    const answeredSimulatorsStructure = _array.map((cases, index) => ({
      clinic_case_id: cases.clinic_case_id,
      questions: cases.questions_case.map((q) => ({
        simulator_question_id: q.simulator_question_id,
        answer_index_selected: null,
        was_correct: null,
        correct_answer_index: null,
      })),
      id: index + 1,
    }));

    setAnwersSimulator(answeredSimulatorsStructure);
  }, [simulatorQuestions, setSimulatorIsActive]);

  useEffect(() => {
    if (squareSelected === null) return;
    setSquares((prev) => {
      const newObject = { ...prev[squareSelected], isAnswered: true };

      const updatedAnswers = replaceObjectAtIndex(
        prev,
        squareSelected,
        newObject
      );
      return updatedAnswers;
    });
  }, [squareSelected]);

  const seeResults = async (onCloseUp = false) => {
    const total_answers = answersSimulator.length;
    const correct_answers = answersSimulator?.filter(
      ({ questions }) => questions[0].was_correct === true
    ).length;
    const total_questions = simulatorQuestions?.questions?.length;
    const rate_percent =
      total_answers === 50
        ? (correct_answers / total_answers) * 100
        : (correct_answers / total_questions) * 100;
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
    const response = await addAnswerSimulatorByStudent(
      objectData,
      dispatch,
      navigate
    );
    if (response) {
      if (!onCloseUp) {
        toast.success("Se ha agregado con exito.", {
          position: "bottom-right",
          duration: 3500,
        });
      } else {
        return true;
      }
    } else {
      if (onCloseUp) {
        toast.error("Error insertando respuestas.", {
          position: "bottom-right",
          duration: 3500,
        });
      }
      return false;
    }
  };

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (isLoading) {
      dispatch(setIsLoadingContent(true));
    } else {
      dispatch(setIsLoadingContent(false));
    }

    return () => {
      dispatch(setIsLoadingContent(false));
    };
  }, [isLoading]);

  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.gridContainer}>
          <aside>
            <div className={ui.asideContainer}>
              <div className={ui.containerHead}>
                <h5>Simulador Infectología</h5>
                <h5>{totalAttempts} Intento</h5>
              </div>
              <div className={ui.containerBody}>
                <CountdownTimer
                  initialTime={duration}
                  isCooldownZero={async () => await seeResults()}
                />
                <div className={ui.questionsWrapper}>
                  <div className={ui.questionsGroup}>
                    <div
                      className={`${ui.groupHeader} poppins-regular-14 gap-x-1 py-2`}
                      onClick={() => setQuestionGroup(!questionGroup)}
                      data-selected-questions={questionGroup}
                    >
                      <ChevronRight />
                      <p>Casos clínicos</p>
                    </div>
                    <QuestionsSquaresGroup
                      squares={squares}
                      display={questionGroup}
                      onChangeCurrent={(e) => {
                        setCurrent(e);
                        setAnswerResponse(0);
                      }}
                    />
                  </div>
                </div>
                <ClinicCasesGroup
                  currentPosition={current}
                  cases={simulatorQuestions?.questions}
                  changeCurrentPosition={(e) => {
                    setCurrent(e);
                    setAnswerResponse(0);
                  }}
                />
              </div>
            </div>
          </aside>

          <section>
            <div className={ui.sectionContainer}>
              <div className={ui.simulatorQuestions}>
                {/* {isLoading && !isError && <span>Cargando...</span>} */}
                {!isLoading && isError && <span>..Error..</span>}
                {!isLoading && !isError ? (
                  <>
                    <ClinicCaseQuestion
                      handleSelectAnswer={(e) => {
                        pushAnswer(e);
                        setSquareSelected(current);
                        if (answerResponse === 2) return;
                        setAnswerResponse(answerResponse + 1);
                      }}
                      position={0}
                      data={simulatorQuestions?.questions[current]}
                      id={current + 1}
                    />
                    <ClinicCaseQuestion
                      handleSelectAnswer={(e) => {
                        pushAnswer(e);
                        setSquareSelected(current + 1);
                        if (answerResponse === 2) return;
                        setAnswerResponse(answerResponse + 1);
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
                  onClick={() => setOpen(true)}
                >
                  <span>Obtener retroalimentación</span>
                </button>
                {current < 48 ? (
                  <button
                    type="button"
                    className={ui.nextQuestionsButton}
                    style={{ cursor: "pointer" }}
                    disabled={answerResponse !== 2}
                    onClick={() => {
                      setCurrent(current + 2);
                      setAnswerResponse(0);
                    }}
                  >
                    <span>Siguiente</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className={ui.nextQuestionsButton}
                    style={{ cursor: "pointer" }}
                    onClick={async () => {
                      const response = await seeResults(true);
                      if (response) {
                        setSimulatorIsActive(false);
                        setTimeout(() => {
                          navigate(
                            `/cursoENARM/retroalimentacion?plan=${plan}&simulator=${simulator_id}`
                          );
                        }, 1500);
                      }
                    }}
                  >
                    <span>Ver resultados</span>
                  </button>
                )}
              </div>
            </div>
            <SimulatorsAdvice
              open={open}
              onClose={() => setOpen(false)}
              data={answersSimulator}
              query={{ simulator: simulator_id, plan }}
              onBeforeSubmit={() => seeResults(true)}
            />
            <SimulatorCooldownAdvice
              query={{ simulator: simulator_id, plan }}
              onBeforeSubmit={() => seeResults(true)}
            />
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default SimulatorCoursePage;

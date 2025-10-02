import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layouts/Dashboard/";
import ui from "./index.module.css";
import FeedbackContainer from "./components/FeedbackContainer";
import FeedbackList from "./components/FeedbackList";
import FilterList from "./components/FilterList";
import { useQuery } from "react-query";
import { getAnswersSimulatorAttemptByStudent } from "../../../apis/platform";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLoadingContent } from "../../../store/reducers/general/general";

const useQueryParams = () => {
  const { search } = useLocation();
  const queryParameters = new URLSearchParams(search);
  const plan = parseInt(queryParameters.get("plan_id"));
  const simulator = parseInt(queryParameters.get("simulator"));

  return { plan, simulator };
};

const FeedbackPage = () => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [filterPosition, setFilterPosition] = useState(0);
  const [indexPosition, setIndexPosition] = useState(0);
  const [displayFeedback, setDisplayFeedback] = useState(false);
  const [displaySpecialities, setDisplaySpecialities] = useState(false);
  const [displaySpecialContent, setDisplaySpecialContent] = useState(false);
  const [filters, setFilters] = useState([]);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { simulator } = useQueryParams();
  const { data: answers } = useQuery("answers", () => getAnswersSimulatorAttemptByStudent(simulator, dispatch, navigate));

  useEffect(() => {
    if (answers === undefined || Object.entries(answers).length === 0) {
      dispatch(setIsLoadingContent(true));
      return
    } else {
      dispatch(setIsLoadingContent(false));
    }
    const { responses } = answers;
    const array = responses.map((element, index) => ({ ...element, position: index + 1 }));
    setQuestions(array);
    setFilteredQuestions(array);
    // Calcular contadores basados en preguntas individuales
    const totalQuestions = answers?.responses?.reduce((total, caseItem) => {
      return total + (caseItem.questions_case?.length || 0);
    }, 0) || 0;

    const correctQuestions = answers?.responses?.reduce((total, caseItem) => {
      return total + (caseItem.questions_case?.filter(q => q.was_correct === true).length || 0);
    }, 0) || 0;

    const incorrectQuestions = answers?.responses?.reduce((total, caseItem) => {
      return total + (caseItem.questions_case?.filter(q => q.was_correct === false).length || 0);
    }, 0) || 0;

    const unansweredQuestions = answers?.responses?.reduce((total, caseItem) => {
      return total + (caseItem.questions_case?.filter(q => {
        const { answer_index_selected, was_correct, correct_answer_index } = q;
        return answer_index_selected === null || was_correct === null || correct_answer_index === null;
      }).length || 0);
    }, 0) || 0;

    setFilters([
      { filter: "all", selected: true, label: "Todas", counter: totalQuestions },
      { filter: "correct", selected: false, label: "Correctas", counter: correctQuestions },
      {
        filter: "incorrect",
        selected: false,
        label: "Incorrectas",
        counter: incorrectQuestions,
      },
      {
        filter: "unanswered",
        selected: false,
        label: "No respondidas",
        counter: unansweredQuestions,
      },
      // { filter: "categories", selected: false, label: "Categorias", counter: null },
    ]);
  }, [answers]);

  useEffect(() => {
    if (filterPosition === 0) {
      // Para "Todas", mantener la numeración original
      setFilteredQuestions(
        questions.map((question) => ({
          ...question,
          questions_case: question?.questions_case?.map((q, originalIndex) => ({
            ...q,
            originalIndex: originalIndex + 1 // Mantener la numeración original
          })) || []
        }))
      );
    }
    if (filterPosition === 1) {
      // Filtrar solo las preguntas correctas, manteniendo la estructura de casos y numeración original
      setFilteredQuestions(
        questions.map((question) => {
          const correctQuestions = question?.questions_case?.map((q, originalIndex) => ({
            ...q,
            originalIndex: originalIndex + 1 // Mantener la numeración original
          })).filter(q => q.was_correct === true) || [];
          return {
            ...question,
            questions_case: correctQuestions
          };
        }).filter(question => question.questions_case.length > 0) // Solo casos que tengan preguntas correctas
      );
    }

    if (filterPosition === 2) {
      // Filtrar solo las preguntas incorrectas, manteniendo la estructura de casos y numeración original
      setFilteredQuestions(
        questions.map((question) => {
          const incorrectQuestions = question?.questions_case?.map((q, originalIndex) => ({
            ...q,
            originalIndex: originalIndex + 1 // Mantener la numeración original
          })).filter(q => q.was_correct === false) || [];
          return {
            ...question,
            questions_case: incorrectQuestions
          };
        }).filter(question => question.questions_case.length > 0) // Solo casos que tengan preguntas incorrectas
      );
    }

    if (filterPosition === 3) {
      // Filtrar solo las preguntas no respondidas, manteniendo la estructura de casos y numeración original
      setFilteredQuestions(
        questions.map((question) => {
          const unansweredQuestions = question?.questions_case?.map((q, originalIndex) => ({
            ...q,
            originalIndex: originalIndex + 1 // Mantener la numeración original
          })).filter(q => {
            const { answer_index_selected, was_correct, correct_answer_index } = q;
            return answer_index_selected === null || was_correct === null || correct_answer_index === null;
          }) || [];
          return {
            ...question,
            questions_case: unansweredQuestions
          };
        }).filter(question => question.questions_case.length > 0) // Solo casos que tengan preguntas no respondidas
      );
    }
  }, [filterPosition, questions]);

  useEffect(() => {
    function handleAsideContent() {
      if (filterPosition === 4 && displaySpecialities === false) {
        setDisplaySpecialities(true);
        return;
      }

      if (
        (filterPosition === 4 && displaySpecialities === true) ||
        (filterPosition !== 4 && displaySpecialities === false)
      ) {
        return;
      }

      if (filterPosition !== 4 && displaySpecialities === true) {
        setDisplaySpecialities(false);
      }
    }

    handleAsideContent();
  }, [filterPosition, displaySpecialities]);

  const handleOnChangeFeedback = (e, type) => {
    // TYPE = TRUE: Is the display graphic active
    if (type === true) return;
    let index = indexPosition + e;
    if (index < 0) index = 0;
    if (index > 49) index = 49;
    setIndexPosition(index);
  };

  const handleOnClickFeedback = (e) => {
    setIndexPosition(e);
    setDisplayFeedback(true);
    if (displaySpecialContent === true) {
      setDisplaySpecialContent(false);
      return;
    }
  };

  const handleFilterSelect = (selectedIndex) => {
    setFilterPosition(selectedIndex);
    // Actualizar el estado de selección de los filtros
    setFilters(prevFilters => 
      prevFilters.map((filter, index) => ({
        ...filter,
        selected: index === selectedIndex
      }))
    );
  };

  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.gridContainer}>
          <aside>
            <div className={ui.asideContainer}>
              <div className={ui.containerHead}>
                <div className={ui.filters}>
                  <FilterList list={filters} handleSelect={handleFilterSelect} />
                </div>
              </div>
              <div className={ui.containerBody} style={{ maxHeight: "calc(100dvh - 9rem)", overflowY: "auto" }}>
                <FeedbackList
                  list={filteredQuestions}
                  filter={filterPosition}
                  handleOnClickFeedback={handleOnClickFeedback}
                  feedbackSelected={indexPosition}
                />
              </div>
            </div>
          </aside>
          <section style={{ height: "min-content" }} id="feedbackSection" data-display={displayFeedback}>
            <FeedbackContainer
              feed={filteredQuestions[indexPosition]}
              position={filteredQuestions[indexPosition]?.position}
              simulatorName={answers?.simulator_name}
              attempt={answers?.attempt_count}
              handleOnChangeFeedback={(e) => handleOnChangeFeedback(e)}
              backToFeedbackList={() => {
                setDisplayFeedback(false);
                setDisplaySpecialContent(false);
              }}
              displaySpecial={displaySpecialContent}
            />
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FeedbackPage;

import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layouts/Dashboard/";
import ui from "./index.module.css";
import FeedbackContainer from "./components/FeedbackContainer";
import FeedbackList from "./components/FeedbackList";
import FilterList from "./components/FilterList";
import { useQuery } from "react-query";
import { getAnswersSimulatorAttemptByStudent } from "../../../apis/platform";
import { useLocation } from "react-router-dom";

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
  const { simulator } = useQueryParams();
  const { data: answers } = useQuery("answers", () => getAnswersSimulatorAttemptByStudent(simulator));

  useEffect(() => {
    if (answers === undefined || Object.entries(answers).length === 0) return;
    const { responses } = answers;
    const array = responses.map((element, index) => ({ ...element, position: index + 1 }));
    setQuestions(array);
    setFilteredQuestions(array);
    setFilters([
      { filter: "all", selected: true, label: "Todas", counter: answers?.total_answers },
      { filter: "correct", selected: false, label: "Correctas", counter: answers?.correct_answers },
      {
        filter: "incorrect",
        selected: false,
        label: "Incorrectas",
        counter: answers?.total_answers - answers?.correct_answers,
      },
      // { filter: "categories", selected: false, label: "Categorias", counter: null },
    ]);
  }, [answers]);

  useEffect(() => {
    if (filterPosition === 0) {
      setFilteredQuestions(questions);
    }
    if (filterPosition === 1) {
      setFilteredQuestions(
        questions.filter((question) => {
          return question?.questions_case[0]?.was_correct && question;
        })
      );
    }

    if (filterPosition === 2) {
      setFilteredQuestions(
        questions.filter((question) => {
          return !question?.questions_case[0]?.was_correct && question;
        })
      );
    }
  }, [filterPosition, questions]);

  useEffect(() => {
    function handleAsideContent() {
      if (filterPosition === 3 && displaySpecialities === false) {
        setDisplaySpecialities(true);
        return;
      }

      if (
        (filterPosition === 3 && displaySpecialities === true) ||
        (filterPosition !== 3 && displaySpecialities === false)
      ) {
        return;
      }

      if (filterPosition !== 3 && displaySpecialities === true) {
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

  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.gridContainer}>
          <aside>
            <div className={ui.asideContainer}>
              <div className={ui.containerHead}>
                <div className={ui.filters}>
                  <FilterList list={filters} handleSelect={(e) => setFilterPosition(e)} />
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

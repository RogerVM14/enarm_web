import React, { useEffect, useState } from 'react';

const FeedbackAsideLeftContainer = (props) => {

  const [feedback, setFeedback] = useState([]);
  const [categories, setCategories] = useState([]);
  const [feedbackCorrects, setCorrects] = useState([]);
  const [feedbackIncorrects, setIncorrects] = useState([]);
  const [feedbackFilter, setFeedbackFilter] = useState([
    { filterSelected: true, class: "all", label: "Todas", value: feedback.length },
    { filterSelected: false, class: "corrects", label: "Correctas", value: feedbackCorrects.length },
    { filterSelected: false, class: "incorrects", label: "Incorrectas", value: feedbackIncorrects.length },
    { filterSelected: false, class: "categories", label: "Categorias", value: 16 }
  ]);
  const { deviceType } = props;

  useEffect(() => {
    const list = props.simulatorQuestionsList;
    setFeedback(list);
    setCorrects(() => {
      const onlyCorrects = list.filter(item => item.isCorrect === true);
      return [...onlyCorrects]
    });
    setIncorrects(() => {
      const onlyIncorrects = list.filter(item => item.isCorrect === false);
      return [...onlyIncorrects]
    })

  }, [props.simulatorQuestionsList]);

  useEffect(() => {
    setCategories(props.categoriesList);
  }, [props.categoriesList])


  useEffect(() => {
    setFeedbackFilter((items) => {
      const feeds = items.map((f, i) => {
        if (f.class === "corrects") return { ...f, value: feedbackCorrects.length }

        return { ...f }
      })
      return [...feeds];
    })
  }, [feedbackCorrects])

  useEffect(() => {
    setFeedbackFilter((items) => {
      const feeds = items.map((f, i) => {
        if (f.class === "all") return { ...f, value: feedback.length }
        return { ...f }
      })
      return [...feeds];
    })
  }, [feedback])

  useEffect(() => {
    setFeedbackFilter((items) => {
      const feeds = items.map((f, i) => {
        if (f.class === "incorrects") return { ...f, value: feedbackIncorrects.length }
        return { ...f }
      })
      return [...feeds];
    })
  }, [feedbackIncorrects])

  const handleFilter = (cls) => {
    setFeedbackFilter((items) => {
      const NEW_ARRAY = items.map(f => {
        if (f.class === cls) return { ...f, filterSelected: true }
        return { ...f, filterSelected: false }
      })
      return [...NEW_ARRAY];
    });

    switch (cls) {
      case "all":
        props.handleCategoriesOption(false);
        props.selectQuestionItem({ filter: 1 });
        break;
      case "corrects":
        props.handleCategoriesOption(false);
        const firstCorrectFeedback = feedbackCorrects[0].question_id;
        props.selectQuestionItem({ filter: firstCorrectFeedback });
        break;
      case "incorrects":
        props.handleCategoriesOption(false);
        const firstIncorrectFeedback = feedbackIncorrects[0].question_id;
        props.selectQuestionItem({ filter: firstIncorrectFeedback });
        break;
      default:
        props.handleCategoriesOption(true);
        break;
    }
  }

  return (
    <div className={`fal-container ${deviceType}`}>
      <div className={`fal-container__header ${deviceType}`}>
        {
          feedbackFilter.map((filter, index) => {
            return (
              <div
                className={`fal-container__header__${filter.class}`}
                key={index}
                onClick={(e) => handleFilter(filter.class)}
                style={filter.filterSelected ? { borderBottom: "2px solid #05B2FA" } : {}}
              >
                <span
                  className='regular-12'
                  style={filter.filterSelected ? { color: "#05B2FA" } : {}}
                >
                  {filter.filterSelected ? filter.label : filter.label.slice(0, 3) + "..."}
                </span>
                <span
                  className="regular-12"
                >
                  {filter.value}
                </span>
              </div>
            )
          })}
      </div>
      <div className={`fal-container__body ${deviceType}`}>

        {
          feedbackFilter[0].filterSelected === true && (
            feedback.map((question, questionIndex) => {
              return (
                <div
                  className={`fal__body__question-card ${questionIndex === props.feedbackSelected ? "question-card--selected" : ""}`}
                  key={questionIndex}
                  onClick={
                    (e) => {
                      props.selectQuestionItem({
                        index: question.question_id
                      });
                    }
                  }
                >
                  <div className={`card-icon-${question.isCorrect}`}></div>
                  <h1 className='regular-14 uppercase'>{question.case.slice(0, 48)}...</h1>
                  <span className='regular-12'>Pregunta {question.question_id}.</span>
                  <p className='regular-14' style={{ color: "rgba(0, 0, 0, 0.45)" }}>{question.question}</p>
                </div>
              )
            })
          )
        }
        {
          feedbackFilter[1].filterSelected === true && (
            feedbackCorrects.map((question, questionIndex) => {
              return (
                <div
                  className={`fal__body__question-card ${questionIndex === props.feedbackSelected ? "question-card--selected" : ""}`}
                  key={questionIndex}
                  onClick={
                    (e) => {
                      props.selectQuestionItem({
                        index: question.question_id
                      });
                    }
                  }
                >
                  <div className={`card-icon-${question.isCorrect}`}></div>
                  <h1 className='regular-14 uppercase'>{question.case.slice(0, 48)}...</h1>
                  <span className='regular-12'>Pregunta {question.question_id}.</span>
                  <p className='regular-14' style={{ color: "rgba(0, 0, 0, 0.45)" }}>{question.question}</p>
                </div>
              )
            })
          )
        }
        {
          feedbackFilter[2].filterSelected === true && (
            feedbackIncorrects.map((question, questionIndex) => {
              return (
                <div
                  className={`fal__body__question-card ${questionIndex === props.feedbackSelected ? "question-card--selected" : ""}`}
                  key={questionIndex}
                  onClick={
                    (e) => {
                      props.selectQuestionItem({
                        index: question.question_id
                      });
                    }
                  }
                >
                  <div className={`card-icon-${question.isCorrect}`}></div>
                  <h1 className='regular-14 uppercase'>{question.case.slice(0, 48)}...</h1>
                  <span className='regular-12'>Pregunta {question.question_id}.</span>
                  <p className='regular-14' style={{ color: "rgba(0, 0, 0, 0.45)" }}>{question.question}</p>
                </div>
              )
            })
          )
        }
        {
          feedbackFilter[3].filterSelected === true && (
            categories.map((cat, catIndex) => {
              return (
                <div
                  className={`fal__body__question-card ${catIndex === props.categoryPos ? "question-card--selected" : ""}`}
                  key={catIndex}
                  onClick={(e) => {
                    props.setCategoryPos(catIndex);
                  }}
                >
                  <h1 className='regular-14'>{cat}</h1>
                </div>
              )
            })
          )
        }
      </div>

    </div>
  )
}

export default FeedbackAsideLeftContainer
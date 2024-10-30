import React, { useContext, useEffect, useState } from 'react';
import { CountDownContext } from '../../../../contexts/platform/CountDownContext';
import { ActualGuideContext } from '../../../../contexts/platform/CurrentGuideContext';

const SimulatorAsideLeftContainer = (props) => {

  const [allQuestions, setAllQuestions] = useState([]);
  const [isQuestionsExpanded, setQuestionExpanded] = useState(false);
  const [isCasesExpanded, setCasesExpanded] = useState(false);

  const { guideData } = useContext(ActualGuideContext);
  const { countDown } = useContext(CountDownContext);
  const { label } = guideData;
  const { deviceType, isSmart } = props;
  const questionClass = (index, isAnswered) => {
    let classSelected = "";
    if (props.selected === index) {
      classSelected = "selected"
    }
    if (isAnswered) {
      classSelected += " is_answered"
    }
    return `question-id-number ${classSelected}`
  }

  useEffect(() => {
    setAllQuestions(props.questionList);
  }, [props.questionList])

  const getSomeQuestions = () => {
    return allQuestions.slice(props.selected, props.selected + 5);
  }

  return (
    <div className={`simulator-left-container ${deviceType}`}>
      <div className={`simulator-left-container__header ${deviceType}`}>
        <h3 className='regular-16 bold'>Simulador {label}</h3>
        <span className='regular-14'>2do Intento</span>
      </div>
      <div className={`simulator-left-container__clock ${deviceType}`}>
        <span className='roboto-14 gray-textColor'>Tiempo limite: </span><input type="text" name="timer" id="timer" defaultValue={countDown} />
      </div>
      <div className={`simulator-left-container__body-questions ${deviceType}`}>
        {
          isSmart ? (
            <>
              <div className='questions-tools' onClick={() => { setQuestionExpanded(!isQuestionsExpanded) }}>
                <i className="material-icons">{isQuestionsExpanded ? "arrow_drop_down" : "arrow_right"}</i>
                <span className='roboto-14' style={{ color: "rgba(0, 0, 0, 0.85)" }}>Preguntas</span>
              </div>
              {
                isQuestionsExpanded && (
                  <div className='questions-list'>
                    {
                      props.questionList.map((ques, indexQues) => {
                        return (
                          <div
                            className={questionClass(indexQues, ques.isAnswered)}
                            key={indexQues}
                            onClick={
                              (e) => props.selectQuestion({ i: indexQues, event: e })
                            }
                          >
                            <span className='roboto-12'>
                              {ques.question_id}
                            </span>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              }
            </>
          ) : (
            <>
              <button className='roboto-14'>Preguntas</button>
              {
                props.questionList.map((ques, indexQues) => {
                  return (
                    <div
                      className={questionClass(indexQues, ques.isAnswered)}
                      key={indexQues}
                      onClick={
                        (e) => props.selectQuestion({ i: indexQues, event: e })
                      }
                    >
                      <span className='roboto-12'>
                        {ques.question_id}
                      </span>
                    </div>
                  )
                })
              }
            </>
          )
        }
      </div>
      <div className={`simulator-left-container__footer-questions ${deviceType}`}>
        {
          isSmart ? (
            <>
              <div className='cases-tools' onClick={() => { setCasesExpanded(!isCasesExpanded) }}>
                <i className="material-icons">{isCasesExpanded ? "arrow_drop_down" : "arrow_right"}</i>
                <span className='roboto-14' style={{ color: "rgba(0, 0, 0, 0.85)" }}>Casos clínicos {"(5)"}</span>
              </div>
              {
                isCasesExpanded && (
                  <div className='cases-list'>
                    {
                      getSomeQuestions().map((item, index) => {
                        return (
                          <div className="footer-question-item" key={index}>
                            <p className='regular-12 uppercase'>{item.case.slice(0, 60)}...</p>
                            <span className='regular-14 sky-blue'>Ir al caso clínico</span>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              }
            </>
          ) : (
            getSomeQuestions().map((item, index) => {
              return (
                <div className="footer-question-item" key={index}>
                  <p className='regular-12 uppercase'>{item.case.slice(0, 60)}...</p>
                  <span className='regular-14 sky-blue'>Ir al caso clínico</span>
                </div>
              )
            })
          )
        }
      </div>
    </div>
  )
}

export default SimulatorAsideLeftContainer;

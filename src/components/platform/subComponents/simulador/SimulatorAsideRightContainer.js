import React, { useContext, useEffect, useState } from 'react'
import { ModalRetroSimulatorContext } from '../../../../contexts/platform/ModalRetroSimulator';

const SimulatorAsideRightContainer = (props) => {
  const ARRAY = ["A", "B", "C", "D"];
  const [answers, setAnswers] = useState([]);
  const [nextAnswers, setNextAnswers] = useState([]);

  useEffect(() => {
    setAnswers(props.currentAnswers)
  }, [props.currentAnswers]);

  useEffect(() => {

    setNextAnswers(props.nextAnswers)
  }, [props.nextAnswers])

  const { showSimulatorRetroModal } = useContext(ModalRetroSimulatorContext);

  const { deviceType, isSmart } = props;

  return (
    <div className={`simulator-right-container ${deviceType}`}>
      <div className={`simulator-questions ${deviceType}`}>
        <div className={`simulator-question ${deviceType}`}>
          <div className={`question-header ${deviceType}`}>
            <h1 className='regular-16 white'>CASO CLÍNICO</h1>
          </div>
          <div className={`question-body ${deviceType}`}>
            <p className={`question-body__parraf regular-16 ${deviceType}`}>
              {props.currentQuestion.case}
            </p>
            <h1 className={`question-body__question-number regular-16 white ${deviceType}`}>
              Pregunta {props.currentQuestion.question_id}
            </h1>
            <div className={`question-body__question-answers-container ${deviceType}`}>
              <h1 className='regular-16'>{props.currentQuestion.question}</h1>
              {
                answers?.map((answer, answerIndex) => {
                  return (
                    <div key={answerIndex} className="answer-item">
                      <span className="regular-16">{ARRAY[answerIndex]}</span>
                      <input
                        type="radio"
                        name="answer_first"
                        checked={answerIndex === props.currentQuestion.answer_selected}
                        onChange={(e) => props.handleSelectAnswer({ answer: answerIndex, id: props.currentQuestion.question_id, pos: 0 })}
                        id={`question_${props.currentQuestion.question_id}_${answerIndex + 1}`}
                      />
                      <label className="regular-16" htmlFor={`question_${props.currentQuestion.question_id}_${answerIndex + 1}`}>{answer}</label>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className={`simulator-questions-last ${deviceType}`}>
          {
            props.currentQuestion.question_id !== 50 && (
              <>
                <div className={`question-header ${deviceType}`}>
                  <h1 className='regular-16 white'>CASO CLÍNICO</h1>
                </div>
                <div className={`question-body ${deviceType}`}>
                  <p className={`question-body__parraf regular-16 ${deviceType}`}>
                    {props.nextQuestion.case}
                  </p>
                  <h1 className={`question-body__question-number regular-16 white ${deviceType}`}>
                    Pregunta {props.nextQuestion.question_id}
                  </h1>
                  <div className={`question-body__question-answers-container ${deviceType}`}>
                    <h1 className='regular-16'>{props.nextQuestion.question}</h1>
                    {
                      nextAnswers?.map((answer, answerIndex) => {
                        return (
                          <div key={answerIndex} className="answer-item">
                            <span className="regular-16">{ARRAY[answerIndex]}</span>
                            <input
                              type="radio"
                              name="answer_last"
                              checked={answerIndex === props.nextQuestion.answer_selected}
                              onChange={(e) => props.handleSelectAnswer({ answer: answerIndex, id: props.nextQuestion.question_id, pos: 1 })}
                              id={`question_${props.nextQuestion.question_id}_${answerIndex + 1}`}
                            />
                            <label className="regular-16" htmlFor={`question_${props.nextQuestion.question_id}_${answerIndex + 1}`}>{answer}</label>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </>
            )
          }
          <div className={`question-button-footer ${deviceType}`}>
            <button
              className='regular-14'
              onClick={() => showSimulatorRetroModal()}
            >
              Obtener Retroalimentacion
            </button>
            {
              props.currentQuestion.question_id >= 49 ? (
                <button
                  className='regular-14'
                  onClick={(e) => showSimulatorRetroModal()}
                >
                  Finalizar
                </button>
              ) : (
                <button
                  className='regular-14'
                  onClick={(e) => props.getNextQuestions({ i: (props.nextQuestion.question_id) })}
                >
                  Siguiente
                </button>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimulatorAsideRightContainer;
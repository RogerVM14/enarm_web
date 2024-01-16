import React from "react";
import ui from "./index.module.css";
import DashboardLayout from "../../Layouts/Dashboard";
import { Link } from "react-router-dom";
import useFetch from "./Hooks/useFetch";

const SimulatorCoursePage = () => {

  const {
    data,
    current,
    answeredPosition,
    handleSelectAnswer,
    handleNextQuestions
  } = useFetch();

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
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M8.73779 6.02419L4.08936 2.0154C3.91602 1.86648 3.66211 2.00075 3.66211 2.24123V10.2588C3.66211 10.4993 3.91602 10.6336 4.08936 10.4846L8.73779 6.47585C8.87085 6.36111 8.87085 6.13894 8.73779 6.02419Z" fill="black" fill-opacity="0.85" />
                      </svg>
                      <p>Preguntas</p>
                    </div>
                    {data?.map((square, squareIndex) => {
                      const { isAnswered } = square;
                      const squareClass = isAnswered === true ? ui.selected : null;
                      return (
                        <div
                          key={squareIndex}
                          className={squareClass}
                        >
                          {square.question_id}
                        </div>
                      )
                    })}
                  </div>
                  <div className={ui.questionPreview}>
                    <p>Trabajador de la construcción que acude a consulta por la pres...</p>
                    <Link to="#">Ir a caso clínico</Link>
                  </div>
                  <div className={ui.questionPreview}>
                    <p>Mujer previamente sana se presenta a consulta con dolor de 15 hora...</p>
                    <Link to="#">Ir a caso clínico</Link>
                  </div>
                  <div className={ui.questionPreview}>
                    <p>hombre de 49 años acude a urgencias por tos productiva dis...</p>
                    <Link to="#">Ir a caso clínico</Link>
                  </div>
                  <div className={ui.questionPreview}>
                    <p>Trabajador de la construcción que acude a consulta por la pres...</p>
                    <Link to="#">Ir a caso clínico</Link>
                  </div>
                  <div className={ui.questionPreview}>
                    <p>Mujer previamente sana se presenta a consulta con dolor de 15 hora...</p>
                    <Link to="#">Ir a caso clínico</Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <section>
            <div className={ui.sectionContainer}>
              <div className={ui.simulatorQuestions}>
                <SimulatorQuestion
                  handleSelectAnswer={handleSelectAnswer}
                  position={0}
                  data={data[current]}
                />
                <SimulatorQuestion
                  handleSelectAnswer={handleSelectAnswer}
                  position={1}
                  data={data[current + 1]}
                />
              </div>
              <div className={ui.containerFooterButtons}>
                <button type="button" className={ui.getRetroButton}>
                  <span>Obtener retroalimentación</span>
                </button>
                <button
                  type="button"
                  className={ui.nextQuestionsButton}
                  onClick={() => { handleNextQuestions(2) }}
                  disabled={answeredPosition?.some((i) => i === false)}
                >
                  <span>Siguiente</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  )
}

const SimulatorQuestion = ({
  data,
  position,
  handleSelectAnswer = () => { }
}) => {
  if (data === undefined || data === null) return null;

  const {
    question_id: id,
    case: questionCase,
    question,
    answers_list: list
  } = data;

  return (
    <div className={ui.question}>
      <div className={ui.questionHead}>
        <h2>Caso Clínico</h2>
      </div>
      <div className={ui.questionDescription}>
        <p>{questionCase}</p>
      </div>
      <div className={ui.answerNumber}>
        <h3>Pregunta {id}</h3>
      </div>
      <div className={ui.questionAnswers}>
        <p>{question}</p>
        <ul className={ui.answersList}>
          {list?.map((q, i) => {
            return (
              <QuestionAnswerOption
                question={q}
                index={i}
                position={id}
                positionQuestion={position}
                key={i}
                handleSelectAnswer={handleSelectAnswer}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const QuestionAnswerOption = ({
  question,
  index,
  position,
  positionQuestion,
  handleSelectAnswer = () => { }
}) => {

  const answerLetter = ["A", "B", "C", "D"];
  const identifier = "answer" + index + "Question" + position;
  const group = "question" + position;

  return (
    <li className={ui.answerItem}>
      <label htmlFor={identifier}>{answerLetter[index]}</label>
      <input
        type="radio"
        name={group}
        id={identifier}
        data-answer={index}
        data-question={position}
        onChange={(e) => { handleSelectAnswer(position - 1, index, positionQuestion) }}
      />
      <label htmlFor={identifier}>{question}</label>
    </li>
  )
}

export default SimulatorCoursePage;
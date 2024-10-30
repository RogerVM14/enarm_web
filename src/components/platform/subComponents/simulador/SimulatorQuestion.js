import React, { useState } from 'react';

const SimulatorQuestion = ({ questions, questAnswers }) => {

  const ARRAY = ["A", "B", "C", "D"];

  const [answers, setAnswers] = useState(questAnswers);

  return (
    <div className="simulator-question">
      <div className="question-header">
        <h1>CASO CLÍNICO</h1>
      </div>
      <div className="question-body">
        <p className="question-body__parraf">
          {questions.case}
        </p>
        <h1 className="question-body__question-number">
          Pregunta {questions.question_id}
        </h1>
        <div className="question-body__question-answers-container">
          <h1>{questions.question}</h1>
          {
            answers.map((answer, answerIndex) => {
              return (
                <div key={answerIndex}>
                  {ARRAY[answerIndex]}
                  <input
                    type="checkbox"
                    name={`question_${questions.question_id}_${answerIndex + 1}`}
                    id={`question_${questions.question_id}_${answerIndex + 1}`}
                  />
                  <label htmlFor={`question_${questions.question_id}_${answerIndex + 1}`}>{answer}</label>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SimulatorQuestion;
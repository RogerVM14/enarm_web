import React, { useState } from 'react';

const SimulatorQuestion = ({ questions, questAnswers }) => {
  const OPTION_LETTERS = ["A", "B", "C", "D", "E", "F"];

  // Selecciones del usuario por pregunta (simulator_question_id -> Set de índices seleccionados)
  const [selectedByQuestion, setSelectedByQuestion] = useState({});

  const toggleSelection = (questionId, answerIndex) => {
    setSelectedByQuestion((prev) => {
      const current = new Set(prev[questionId] || []);
      if (current.has(answerIndex)) {
        current.delete(answerIndex);
      } else {
        current.add(answerIndex);
      }
      return { ...prev, [questionId]: Array.from(current) };
    });
  };

  const hasMultiQuestions = Array.isArray(questions?.questions_case) && questions.questions_case.length > 0;

  return (
    <div className="simulator-question">
      <div className="question-header">
        <h1>CASO CLÍNICO</h1>
      </div>
      <div className="question-body">
        <p className="question-body__parraf">
          {questions.case}
        </p>

        {hasMultiQuestions ? (
          // Renderizar todas las preguntas dentro de questions_case
          questions.questions_case.map((q, qIndex) => (
            <div key={q.simulator_question_id || qIndex} className="question-body__question-answers-container">
              <h1 className="question-body__question-number">Pregunta {qIndex + 1}</h1>
              <h2>{q.simulator_question}</h2>
              {Array.isArray(q.answers) && q.answers.map((ans, answerIndex) => (
                <div key={answerIndex}>
                  {OPTION_LETTERS[answerIndex]}
                  <input
                    type="checkbox"
                    name={`question_${q.simulator_question_id}_${answerIndex + 1}`}
                    id={`question_${q.simulator_question_id}_${answerIndex + 1}`}
                    checked={(selectedByQuestion[q.simulator_question_id] || []).includes(answerIndex)}
                    onChange={() => toggleSelection(q.simulator_question_id, answerIndex)}
                  />
                  <label htmlFor={`question_${q.simulator_question_id}_${answerIndex + 1}`}>{ans.answer || ans}</label>
                </div>
              ))}
            </div>
          ))
        ) : (
          // Fallback al comportamiento anterior (una sola pregunta)
          <>
            <h1 className="question-body__question-number">Pregunta {questions.question_id}</h1>
            <div className="question-body__question-answers-container">
              <h1>{questions.question}</h1>
              {(questAnswers || []).map((answer, answerIndex) => (
                <div key={answerIndex}>
                  {OPTION_LETTERS[answerIndex]}
                  <input
                    type="checkbox"
                    name={`question_${questions.question_id}_${answerIndex + 1}`}
                    id={`question_${questions.question_id}_${answerIndex + 1}`}
                  />
                  <label htmlFor={`question_${questions.question_id}_${answerIndex + 1}`}>{answer}</label>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SimulatorQuestion;
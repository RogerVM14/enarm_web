import React, { useState, useEffect } from "react";
import ui from "../index.module.css";
import IconValidation from "./IconValidation";

const FeedbackList = ({ list, filter, handleOnClickFeedback = () => {}, feedbackSelected }) => { 
  const [expandedCase, setExpandedCase] = useState(null);

  const handleCaseClick = (index) => {
    // Si el caso ya está expandido, colapsarlo; si no, expandirlo
    if (expandedCase === index) {
      setExpandedCase(null);
    } else {
      setExpandedCase(index);
    }
    handleOnClickFeedback(index);
  };

  const handleExpandToggle = (index, event) => {
    // Solo expandir/colapsar sin navegar
    event.stopPropagation();
    if (expandedCase === index) {
      setExpandedCase(null);
    } else {
      setExpandedCase(index);
    }
  };

  // Efecto para expandir automáticamente el caso clínico seleccionado
  useEffect(() => {
    if (feedbackSelected !== null) {
      setExpandedCase(feedbackSelected);
    }
  }, [feedbackSelected]);

  const getQuestionStatus = (question) => {
    const { answer_index_selected, was_correct, correct_answer_index } = question;
    const answered = answer_index_selected !== null && was_correct !== null && correct_answer_index !== null;
    
    if (!answered) return 'unanswered';
    return was_correct ? 'correct' : 'incorrect';
  };

  return (
    <div className={ui.feedbackList}>
      {list?.map(({ clinic_case, clinic_case_id, questions_case, position }, index) => {
        const isExpanded = expandedCase === index;
        
        return (
          <div key={clinic_case_id} className="mb-2">
            {/* Header del caso clínico */}
            <div
              className={`${ui.listItem} cursor-pointer`}
              data-selected={feedbackSelected === index}
              onClick={() => handleCaseClick(index)}
            >
              <div className={ui.itemContent}>
                <div className="flex items-center gap-2">
                  <div 
                    className={`transition-transform duration-200 cursor-pointer ${isExpanded ? 'rotate-90' : 'rotate-0'}`}
                    onClick={(e) => handleExpandToggle(index, e)}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={ui.itemCase}>
                    <p>{clinic_case.slice(0, 40)}...</p>
                  </div>
                </div>
                <p className={ui.itemNumQuestion}>Caso Clínico {position}</p>
                <p className={ui.itemQuestion}>{questions_case.length} pregunta{questions_case.length > 1 ? 's' : ''}</p>
              </div>
            </div>

            {/* Preguntas expandidas */}
            {isExpanded && (
              <div className="ml-4 mt-2 space-y-2">
                {questions_case.map((question, qIndex) => {
                  const status = getQuestionStatus(question);
                  return (
                    <div
                      key={question.simulator_question_id || qIndex}
                      className="flex items-center gap-3 p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
                      onClick={() => handleOnClickFeedback(index)}
                    >
                      <div className="flex-shrink-0">
                        {status === 'correct' && <IconValidation flag={true} />}
                        {status === 'incorrect' && <IconValidation flag={false} />}
                        {status === 'unanswered' && (
                          <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                            <span className="text-gray-400 text-xs">○</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Pregunta {position}.{question.originalIndex || qIndex + 1}</p>
                        <p className="text-xs text-gray-600">{question.simulator_question.slice(0, 30)}...</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FeedbackList;

import React from 'react';
import flashcard from '../../../../assets/imgs/platform/Flashcard.png';
import GraphicResults from './GraphicResults';
import GraphicResultsByPercentage from '../panel_results/GraphicResultsByPercentage';

const FeedbackAsideRightContainer = ({
    feedbackQuestion,
    handleFeedback,
    isCategoriesSelected,
    cat,
    categoriesList,
    catResults,
    deviceType,
    isSmart,
    handleFeedbackSelection
}) => {

    const ARRAY_LETTERS = ["A", "B", "C", "D"];

    const { answer_selected, correct_answer_position, isCorrect, question_id } = feedbackQuestion;

    const answerFeedbackResponse = (index) => {
        if (answer_selected === null) return "";
        if (correct_answer_position === index) return "correct-answer";
        if (answer_selected === index) return "incorrect-answer";
    }

    const feedbackIsCorrect = () => {
        if (isCorrect === true) return "Correcto";
        if (isCorrect === false) return "Incorrecto";
        return "Sin responder";
    }

    return (
        <div className={`feedback-right-container ${deviceType}`}>
            <div className={`feedback-right-container__header ${deviceType}`}>
                {
                    isSmart ? (
                        <span className='regular-14 underline' onClick={()=> { handleFeedbackSelection()}}>Regresar</span>
                    ) : (
                        <div>
                            <span className='regular-14'>Infectología</span>/
                            <span className='regular-14'>Panel Simulador</span>/
                            <span className='regular-14'>Retroalimentación Primer Intento</span>
                        </div>
                    )
                }
                <div>
                    {question_id === 1 ? null : <i className="material-icons" onClick={(e) => { handleFeedback({ index: question_id - 1 }) }}> chevron_left </i>}
                    {question_id === 50 ? null : <i className="material-icons" onClick={(e) => { handleFeedback({ index: question_id + 1 }) }}> chevron_right </i>}
                </div>
            </div>
            <div className={`feedback-right-container__body ${deviceType}`}>
                {
                    isCategoriesSelected ? (
                        <>
                            <h1 className="medium-16">{cat}</h1>
                            <div className='categories-graphic-links'>
                                <span className="regular-14 blue noDecor">🔥 Mini-Resumen: {cat} M-R</span>
                                <span className="regular-14 blue noDecor">🔥 Caso Clínico: {cat} C-C</span>
                            </div>
                            {
                               isSmart 
                               ? <GraphicResultsByPercentage showAttemps={false}/> 
                               : <GraphicResults results={catResults} />
                            }
                        </>
                    ) : (
                        <>
                            <h1 className='medium-16 fw-500 question-num-tag'>Pregunta {feedbackQuestion.question_id}</h1>
                            <p className="regular-14 question-case-tag" style={{ color: "rgba(0, 0, 0, 0.45)" }}> {feedbackQuestion.case} </p>
                            <p className='medium-14 fw-500 question-question-tag'> {feedbackQuestion.question} </p>
                            {
                                feedbackQuestion.answers_list?.map((item, index) => {
                                    return (
                                        <h1
                                            key={index}
                                            className={`regular-14 fw-500 answer-tag ${deviceType} ${answerFeedbackResponse(index)}`}
                                        >
                                            {ARRAY_LETTERS[index]}. {item}
                                        </h1>
                                    )
                                })
                            }
                            <h1 className='medium-16 fw-500'>{feedbackIsCorrect()}</h1>
                            {
                                answer_selected === null ? null : (
                                    <>
                                        <p className="regular-14 question-response-tag">{feedbackQuestion.response}</p>
                                        <p className="regular-14 blue question-tip-response-tag">🔥 Tip ENARM: {feedbackQuestion.tip_response}</p>
                                        <div className={`flashcard-tag ${deviceType}`}>
                                            <img src={flashcard} alt="flash-card" />
                                        </div>
                                    </>
                                )
                            }
                        </>
                    )
                }
            </div>
            <div className="feedback-right-container__footer">
                <div>
                    {question_id === 1 ? null : <i className="material-icons" onClick={(e) => { handleFeedback({ index: question_id - 1 }) }}> chevron_left </i>}
                    {question_id === 50 ? null : <i className="material-icons" onClick={(e) => { handleFeedback({ index: question_id + 1 }) }}> chevron_right </i>}
                </div>
            </div>
        </div>
    )
}

export default FeedbackAsideRightContainer; 
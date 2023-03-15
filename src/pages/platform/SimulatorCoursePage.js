import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import SimulatorAsideLeftContainer from '../../components/platform/subComponents/simulador/SimulatorAsideLeftContainer';
import SimulatorAsideRightContainer from '../../components/platform/subComponents/simulador/SimulatorAsideRightContainer';
import { ModalRetroSimulatorContext } from '../../contexts/platform/ModalRetroSimulator';
import SimulatorModalRetro from '../../components/platform/subComponents/simulador/SimulatorModalRetro';
import { FeedbackQuestionsResultsContext } from '../../contexts/platform/FeedbackQuestionsResultsContext';
// import { CountDownContext } from '../../contexts/platform/CountDownContext';
import { AdviceModalContext } from '../../contexts/platform/AdviceModalContext';
// import { AttemptsContext } from '../../contexts/platform/AttemptsContext';
import SimuladorAdviceModal from '../../components/platform/subComponents/simulador/SimuladorAdviceModal';
import '../../css/platform/pages/SimulatorCoursePage.css';
import { PlatformResponsiveContext } from '../../contexts/platform/PlatformResponsiveContext';

const SimulatorCourse = () => {

    const [currentQuestion, setCurrentQuestion] = useState({});
    const [nextQuestion, setNextQuestion] = useState({});
    const [selectedQuestion, setSelectedQuestion] = useState(0);
    const [currentNext, setCurrentNext] = useState(true);
    const { questions, setQuestion } = useContext(FeedbackQuestionsResultsContext);
    // const { isModalRetroVisible, showSimulatorRetroModal } = useContext(ModalRetroSimulatorContext);
    const { isModalRetroVisible } = useContext(ModalRetroSimulatorContext);
    const { device, isSmart } = useContext(PlatformResponsiveContext);

    // let navigate = useNavigate()

    // const { setStartCountDown } = useContext(CountDownContext);
    // const { isAdviceModalActive, setAdviceModal } = useContext(AdviceModalContext);
    const { isAdviceModalActive } = useContext(AdviceModalContext);
    // const { numAttempt, handleAttempt} = useContext(AttemptsContext);

    useEffect(() => {

        if (currentNext === false) return;
        setCurrentQuestion(questions[0]);
        setNextQuestion(questions[1]);
        setCurrentNext(false);
    }, [questions, currentNext]);

    const handleSelectQuestion = (e) => {
        if (e.event !== undefined) {
            const element_tag = e.event.currentTarget;
            if (element_tag.classList.contains("is_answered")) return;
        }
        setCurrentQuestion((item) => { return { ...item, ...questions[e.i] } });
        setNextQuestion((item) => { return { ...item, ...questions[e.i + 1] } });

        setSelectedQuestion(e.i);
    }

    const handleAnswers = (e) => {
        // console.log(e.event)
        setQuestion((items) => {

            const NEW_ARRAY = items.map(question => {
                if (question.question_id === e.id) { return { ...question, answer_selected: e.answer, isAnswered: true } }
                return { ...question }
            })

            return [...NEW_ARRAY];
        });

        if (e.pos === 0) {
            setCurrentQuestion((item) => { return { ...item, answer_selected: e.answer } })
        } else {
            setNextQuestion((item) => { return { ...item, answer_selected: e.answer } })
        }
    }

    return (
        <div className={`main-container ${device}`}>
            <div className={`resources-wrapper ${device}`}>
                <SimulatorAsideLeftContainer
                    questionList={questions}
                    selectQuestion={(e) => handleSelectQuestion(e)}
                    selected={selectedQuestion}
                    deviceType={device}
                    isSmart={isSmart}
                />
                <SimulatorAsideRightContainer
                    currentQuestion={currentQuestion}
                    currentAnswers={currentQuestion.answers_list}
                    nextQuestion={nextQuestion}
                    nextAnswers={nextQuestion.answers_list}
                    getNextQuestions={(e) => handleSelectQuestion(e)}
                    handleSelectAnswer={(e) => handleAnswers(e)}
                    deviceType={device}
                    isSmart={isSmart}

                />
            </div>
            {
                isModalRetroVisible && (
                    <SimulatorModalRetro
                        deviceType={device}
                        isSmart={isSmart}
                    />
                )
            }
            {
                isAdviceModalActive && <SimuladorAdviceModal />
            }
        </div>
    )
}

export default SimulatorCourse;
import React, { createContext, useEffect, useState } from 'react';
import { simulator_questions } from '../../utils/SimulatorQuestionsApi';

export const FeedbackQuestionsResultsContext = createContext(null);

const FeedbackQuestionsResultsProvider = (props) => {

    const [questions, setQuestion] = useState([]);

    useEffect(() => {
        
        const allQuestions = simulator_questions;
        setQuestion(allQuestions);
    }, []);

    return (
        <FeedbackQuestionsResultsContext.Provider value={{ questions, setQuestion }}>
            {props.children}
        </FeedbackQuestionsResultsContext.Provider>
    )
}

export default FeedbackQuestionsResultsProvider;
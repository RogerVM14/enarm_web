import React, { useContext, useEffect, useState } from 'react';
import FeedbackAsideLeftContainer from '../../components/platform/subComponents/feedbak/FeedbackAsideLeftContainer';
import FeedbackAsideRightContainer from '../../components/platform/subComponents/feedbak/FeedbackAsideRightContainer';
import { FeedbackQuestionsResultsContext } from '../../contexts/platform/FeedbackQuestionsResultsContext';
import { categories_list } from '../../utils/CategoriesList';
// import { categories_results } from '../../utils/CategoriesResults';
import { CategoryResultsContext } from '../../contexts/platform/CategoryResultsContext';
import { PlatformResponsiveContext } from '../../contexts/platform/PlatformResponsiveContext';
import '../../css/platform/pages/FeedbackToPage.css';

const FeedbakToPage = () => {

  const categories = categories_list;
  const { questions } = useContext(FeedbackQuestionsResultsContext);
  const [feedbackResults, setFeedback] = useState([])
  const [feedbackQuestion, setFeedbackQuestion] = useState({});
  const [feedbackSelected, setFeedbackSelected] = useState(0);
  const [categoryPos, setCategoryPos] = useState(0);
  const [isCategoriesSelected, setCategoriesSelect] = useState(false);
  const [isFeedbackSelected, setIsFeedbackSelected] = useState(false);
  const { device, isSmart } = useContext(PlatformResponsiveContext);

  const { results } = useContext(CategoryResultsContext);

  useEffect(() => {
    setFeedback(() => {
      const feedbackQuestions = questions.map(item => {
        if (item.answer_selected === null) return { ...item }

        const isCorrect = item.answer_selected === item.correct_answer_position;

        return { ...item, isCorrect: isCorrect }
      });
      return [...feedbackQuestions];
    });
    setFeedbackQuestion(questions[0])
  }, [questions]);

  const handleSelectQuestionFeedback = (e, h) => {
    if (e.index <= 0 || e.index >= 51) return;
    if (e.filter !== undefined) {
      const this_question = feedbackResults.filter(item => item.question_id === e.filter);
      setFeedbackQuestion(this_question[0]);
      setFeedbackSelected(0);
      return;
    }
    const this_question = feedbackResults.filter(item => item.question_id === e.index);
    setFeedbackQuestion(this_question[0]);
    setFeedbackSelected(feedbackResults.indexOf(this_question[0]));
    setCategoriesSelect(false);
    setIsFeedbackSelected(h.hor);
  }

  const handleCategoriesOption = (e) => {
    setCategoriesSelect(e);
    return
  }

  const handleSelectCategoryPosition = (e) => {
    // console.log({categoryIndex: e, isFeedbackSelected})
    setCategoryPos(e);
    setIsFeedbackSelected(true);
  }

  // useEffect(() => { console.log(isFeedbackSelected) }, [isFeedbackSelected])

  return (
    <div className={`main-container ${device}`}>
      <div className={`feedback-wrapper ${device}`}>
        {
          isSmart ? (
            !isFeedbackSelected ?
              <FeedbackAsideLeftContainer
                simulatorQuestionsList={feedbackResults}
                selectQuestionItem={(e) => { handleSelectQuestionFeedback(e, { hor: true }) }}
                feedbackSelected={feedbackSelected}
                categoriesList={categories}
                handleCategoriesOption={(e) => { handleCategoriesOption(e) }}
                categoryPos={categoryPos}
                setCategoryPos={handleSelectCategoryPosition}
                deviceType={device}
                isSmart={isSmart}
                handleFeedbackSelection={() => { setIsFeedbackSelected(!isFeedbackSelected) }}
              /> :
              <FeedbackAsideRightContainer
                feedbackQuestion={feedbackQuestion}
                handleFeedback={(e) => { handleSelectQuestionFeedback(e, { hor: true }) }}
                categoriesList={categories}
                isCategoriesSelected={isCategoriesSelected}
                cat={categories[categoryPos]}
                catResults={results}
                deviceType={device}
                isSmart={isSmart}
                handleFeedbackSelection={() => { setIsFeedbackSelected(!isFeedbackSelected) }}
              />
          ) : (
            <>
              <FeedbackAsideLeftContainer
                simulatorQuestionsList={feedbackResults}
                selectQuestionItem={(e) => { handleSelectQuestionFeedback(e, { hor: true }) }}
                feedbackSelected={feedbackSelected}
                categoriesList={categories}
                handleCategoriesOption={(e) => { handleCategoriesOption(e) }}
                categoryPos={categoryPos}
                setCategoryPos={handleSelectCategoryPosition}
                deviceType={device}
                isSmart={isSmart}
              />
              <FeedbackAsideRightContainer
                feedbackQuestion={feedbackQuestion}
                handleFeedback={(e) => { handleSelectQuestionFeedback(e, { hor: true }) }}
                categoriesList={categories}
                isCategoriesSelected={isCategoriesSelected}
                cat={categories[categoryPos]}
                catResults={results}
                deviceType={device}
                isSmart={isSmart}
              />
            </>
          )
        }
      </div>
    </div>
  )
}

export default FeedbakToPage;
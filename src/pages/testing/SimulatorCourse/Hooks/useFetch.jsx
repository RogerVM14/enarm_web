import { useState } from "react";

const useFetch = ({ handleSetAnswerToQuestion }) => {

  const [current, setCurrent] = useState(0);
  const [answeredPosition, setAnsweredPosition] = useState([false, false]);

  const handleSelectAnswer = (index, answer, position) => {
    handleSetAnswerToQuestion(answer, index);
    setAnsweredPosition((prev) => prev?.map((i, pos) => position === pos ? !i : i));
  }

  const handleNextQuestions = (e) => {
    if ((current + e) <= 0) {
      setCurrent(0);
      return;
    }
    if ((current + e) >= 48) {
      setCurrent(48);
      return;
    }
    setCurrent(current + e);
    setAnsweredPosition([false, false]);
  }

  return {
    current,
    answeredPosition,
    handleSelectAnswer,
    handleNextQuestions
  }
}


export default useFetch;
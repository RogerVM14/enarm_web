import React, { useEffect, useState } from "react";
const answerLetter = ["A", "B", "C", "D"];

const QuestionsGroup = ({ data, handleSelectAnswer, position }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (data === undefined || Object.entries(data).length === 0) return;
    const answerList = data.map((items) => {
      return { ...items, isChecked: false };
    });
    setAnswers(answerList);
  }, [data]);

  return (
    <ul className="">
      {answers?.map(({ answer, isChecked }, index, array) => {
        return (
          <div style={{ marginBottom: array.length - 1 === index ? "1rem" : "0" }} key={index}>
            <label
              htmlFor={`answer_${index}-${position}`}
              className="flex flex-row justify-start items-center gap-x-2 hover:bg-blue-100 transition-all cursor-pointer py-2 max-w-max rounded-sm"
            >
              {answerLetter[index]}
              <input
                type="checkbox"
                name={`answer_${index}-${position}`}
                id={`answer_${index}-${position}`}
                checked={isChecked}
                className=""
                onChange={() => {
                  setAnswers((prev) => prev.map((e, i) => ({ ...e, isChecked: i === index ? true : false })));
                  handleSelectAnswer(index, data);
                }}
              />
              {answer}
            </label>
          </div>
        );
      })}
    </ul>
  );
};

export default QuestionsGroup;

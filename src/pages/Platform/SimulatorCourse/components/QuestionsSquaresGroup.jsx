import React from "react";
import ui from "../index.module.css";

const QuestionsSquaresGroup = ({ squares, display, onChangeCurrent }) => {
  if (display === false || !squares || squares.length === 0) return;
  return (
    <div className={ui.groupBody}>
      {squares?.map((quest, index, array) => {
        const { isAnswered } = quest;
        const squareClass = isAnswered === true ? ui.squareSelected : ui.square;
        return (
          <button
            key={index}
            className={`${squareClass} hover:bg-transparent`}
            type="button"
            onClick={() => {
              if (index === array.length - 1) return;
              onChangeCurrent(index);
            }}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionsSquaresGroup;

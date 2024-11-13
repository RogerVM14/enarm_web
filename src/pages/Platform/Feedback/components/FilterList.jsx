import React from "react";
import ui from "../index.module.css";

const FilterList = ({ list, handleSelect = () => {} }) => {
  return list?.map((item, index) => {
    return (
      <div
        className={ui.filter}
        data-filter={item.filter}
        data-selected={item.selected}
        onClick={() => handleSelect(index)}
        key={index}
      >
        <h5>{item.label}</h5>
        {item.counter !== null ? <span>{item.counter}</span> : null}
      </div>
    );
  });
};

export default FilterList;

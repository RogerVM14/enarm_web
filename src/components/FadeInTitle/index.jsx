import React from "react";
import ui from "./index.module.css";

const FadeInTitle = ({ words, align }) => {
  return (
    <h1 className={ui.fadeInEffect} data-align={align}>
      {
        words?.map((i, index) => {
          return (
            <span className={ui.titleWord} key={index} >
              {i}
            </span>
          )
        })
      }
    </h1>
  )
}

export default FadeInTitle;
import React from "react";
import CorrectIcon from "../../Assets/Icons/correctIcon.svg";
import IncorrectIcon from "../../Assets/Icons/incorrectIcon.svg";
import NullIcon from "../../Assets/Icons/nullIcon.svg";

const IconValidation = ({ flag }) => {
  let icon = NullIcon;  
  if (flag === true) icon = CorrectIcon;
  if (flag === false) icon = IncorrectIcon;
  return <img src={icon} alt="result" />;
};

export default IconValidation;

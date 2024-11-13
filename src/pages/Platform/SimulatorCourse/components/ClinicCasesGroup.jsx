import React, { useState } from "react";
import { ChevronRight } from "../icons/ChevronRight";

const ClinicCasesGroup = ({ cases, currentPosition, changeCurrentPosition }) => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button
        type="button"
        className="flex flex-row items-center gap-x-1 hover:bg-transparent poppins-regular-14 py-2"
        onClick={() => setDisplay(!display)}
      >
        <ChevronRight />
        Casos clínicos (5)
      </button>

      {display && cases?.slice(currentPosition, currentPosition + 5).map(({ clinic_case }, index) => {
        return (
          <div className="pt-2 pb-2" key={index}>
            <p className="poppins-regular-12 text-left">{clinic_case.slice(0, 48)}...</p>
            <button
              className="poppins-regular-14 text-[#05b2fa] text-left h-8 hover:bg-transparent hover:underline"
              type="button"
              onClick={() => changeCurrentPosition(currentPosition + index)}
            >
              Ir a caso clínico
            </button>
          </div>
        );
      })}
    </div>
  ) ;
};

export default ClinicCasesGroup;

import React from "react";
import { Link } from "react-router-dom";

const TryList = ({ list, simulatorID, planID }) => {
  const tryTexts = ["er", "do", "ro", "to", "to", "to", "mo", "vo", "no", "mo"];
  return (
    <div>
      {list?.map((element, index) => {
        return (
          <div className="py-2" key={index}>
            <div className="flex flex-row justify-between items-center">
              <div>
                <h5 className="poppins-regular-16">{element.attempt_id + tryTexts[element.attempt_id - 1]} Intento</h5>
                <p className="poppins-regular-12 text-[#00000073]">
                  Respuestas correctas: {(parseInt(element.rate_percent) * 100) / parseInt(element.total_answers)} de
                  100
                </p>
              </div>
              <div className="border-[#05B2FA] border-[2px] border-solid h-[42px] w-[42px] flex flex-row items-center justify-center rounded-full">
                <p className="poppins-regular-12">{(element.rate_percent * 100) / element.total_answers}%</p>
              </div>
            </div>
            <Link
              className="text-[#05B2FA] poppins-regular-14"
              to={`/cursoENARM/retroalimentacion?plan_id=${planID}&simulator=${simulatorID}`}
            >
              Ver Retroalimentación
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default TryList;

import React from "react";
import AlertIcon from "../icons/AlertIcon";

const Graphics = ({ handleDisplayCardBody }) => {
  return (
    <div
      className="py-3 px-4 bg-[#FFF7E6] border-solid border-[1px] border-[#d9d9d9] mb-2"
      onClick={() => handleDisplayCardBody(1)}
    >
      <div className="flex flex-row gap-x-3 justify-start items-baseline">
        <AlertIcon />
        <div>
          <h5 className="poppins-bold-14">2. Gráficos</h5>
          <div className="flex flex-row gap-x-3 items-center">
            <p className="poppins-regular-14">
              Antes de continuar, asegúrate de tener tus{" "}
              <strong className="font-bold text-[#1E73BE] poppins-regular-14">gráficos</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphics;

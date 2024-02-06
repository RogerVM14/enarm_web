import React from "react";
import methodImg from "../../../Assets/Images/Metodologia.png";
import "./Process.css";

const Process = () => {
  return (
    <div className="process">
      <div className="process-container">
        <div className="process-container-header">
          <h2 className="tiny-blue-title text-center">
            EL PROCESO
          </h2>
          <h2 className="subtitle text-center">
            Metodología de estudio
          </h2>
          <p className="regular-14">
            Con nuestra metodología de estudio hemos
            ayudado a más de 15 mil Médicos a ser especialistas.
          </p>
        </div>
        <div className="process-container-body">
          <img src={methodImg} alt="metodologia" />
        </div>
      </div>
    </div>
  )
}

export default Process;
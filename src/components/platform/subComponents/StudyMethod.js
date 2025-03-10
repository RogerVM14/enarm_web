import React from "react";

const StudyMethod = (props) => {
  const { deviceType, isSmart } = props;

  return (
    <div className={`c-studymethod-container ${deviceType}`}>
      {isSmart ? (
        <>
          <div className={`study-method__head ${deviceType}`}>
            <h3 className="semibold-16">Método de Estudio</h3>
            <span className="regular-14 gray-textColor">¡Aprendizaje de calidad!</span>
          </div>
          <div className={`study-method__body ${deviceType}`}>
            <div className={`methods ${deviceType}`}>
              <div className="methods__method">
                <span className="blue-circle regular-16">1</span>
                <div>
                  <span className="regular-16">Resumenes</span>
                  <span className="regular-14 gray-textColor">Consulta el contenido.</span>
                </div>
              </div>
              <div className="methods__method">
                <span className="blue-circle regular-16">2</span>
                <div>
                  <span className="regular-16">Gráficos</span>
                  <span className="regular-14 gray-textColor">Procesa tu aprendizaje.</span>
                </div>
              </div>
              <div className="methods__method">
                <span className="blue-circle regular-16">3</span>
                <div>
                  <span className="regular-16">Video-clases</span>
                  <span className="regular-14 gray-textColor">Repasa la información.</span>
                </div>
              </div>
              <div className="methods__method">
                <span className="blue-circle regular-16">4</span>
                <div>
                  <span className="regular-16">SimuladorPRO</span>
                  <span className="regular-14 gray-textColor">Practica en tiempo real.</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={`study-method__head ${deviceType}`}>
            <h3 className="semibold-16">Método de Estudio</h3>
          </div>
          <div className={`study-method__body ${deviceType}`}>
            <span className="regular-14 gray-textColor">¡Aprendizaje de calidad!</span>
            <div className={`methods ${deviceType}`}>
              <div className="methods__method">
                <span className="regular-16">Resumenes</span>
                <span className="regular-14 gray-textColor">Consulta el contenido.</span>
              </div>
              <div className="methods__method">
                <span className="regular-16">Gráficos</span>
                <span className="regular-14 gray-textColor">Procesa tu aprendizaje.</span>
              </div>
              <div className="methods__method">
                <span className="regular-16">Video-clases</span>
                <span className="regular-14 gray-textColor">Repasa la información.</span>
              </div>
              <div className="methods__method">
                <span className="regular-16">SimuladorPRO</span>
                <span className="regular-14 gray-textColor">Practica en tiempo real.</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StudyMethod;

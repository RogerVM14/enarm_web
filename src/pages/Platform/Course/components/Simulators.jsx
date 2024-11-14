import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SimulatorsAdvice from "../components/SimulatorsAdvice";
import ui from "../index.module.css";
import ChevronIcon from "../../Assets/Icons/chevronicon.svg";

const Simulators = ({ simulators, cardDisplay, plan }) => {
  const [open, setOpen] = useState(false);
  const [dataQuery, setDataQuery] = useState({});
  const [simulatorsDisplay, setSimulatorsDisplay] = useState([]);

  useEffect(() => {
    if (simulators?.length === 0 || simulators === undefined) return;
    setSimulatorsDisplay(new Array(Object.values(simulators)[0]?.length).fill(false));
  }, [simulators]);

  const handleDisplaySimulator = (position) => {
    setSimulatorsDisplay((prev) => {
      return prev.map((element, index) => {
        if (index !== position) return element;
        return !element;
      });
    });
  };

  return (
    <>
      {simulators?.map((simulator, index) => {
        return (
          <div className={ui.courseCard} key={index}>
            <div className={ui.cardHeader} onClick={() => handleDisplaySimulator(index)}>
              <div className={ui.cardTitle}>
                <img src={ChevronIcon} alt="chevron" width={12} height={12} data-selected={cardDisplay[3]} />
                <h5>
                  4.{index + 1} Simulador {simulator[3]}
                </h5>
              </div>
              <div className={ui.cardDescription}>
                <p>Practica en nuestro simulador</p>
              </div>
            </div>
            {simulatorsDisplay[index] && (
              <div className={ui.cardBody}>
                <ol className={ui.guideList}>
                  <li>
                    Simulador con <strong>50 preguntas.</strong>
                  </li>
                  <li>
                    Tiempo para resolverlo: <strong>1 hora 15 minutos.</strong>
                  </li>
                  <li>
                    🔥<strong> 5 intentos</strong> permitidos para resolverlo
                  </li>
                  <li>
                    Conoce tus resultados al finalizar presionando <strong>Finish Quiz.</strong>
                  </li>
                </ol>
                <div className={ui.buttons}>
                  <Link to={"#"} className={ui.buttonLinkWhite} aria-disabled>
                    Ir al panel de resultados
                  </Link>
                  <button
                    type="button"
                    className={ui.buttonLinkBlue}
                    onClick={() => {
                      setOpen(true);
                      setDataQuery({ simulator: simulator[5], plan: plan });
                    }}
                  >
                    Comenzar Simulador
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <SimulatorsAdvice open={open} onClose={() => setOpen(false)} query={dataQuery} />
    </>
  );
};

export default Simulators;

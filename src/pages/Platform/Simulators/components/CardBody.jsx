import { Link } from "react-router-dom";
import ui from "./index.module.css";
import { useState } from "react";

const CardBody = ({ data, count, onSelectSimulator }) => {
  const [display, setDisplay] = useState(false); 
  return (
    <div className={ui.simulatorCard}>
      <div className={ui.simulatorHeader} onClick={() => setDisplay(!display)}>
        <div className={ui.simulatorTitle}>
          <ChevronIcon />
          <h5>
            Simulador {data.specialty_name} #{count}
          </h5>
        </div>
        <div className={ui.simulatorDescription}>
          <p>Practica en nuestro simulador</p>
        </div>
      </div>
      {display ? (
        <div className={ui.simulatorBody}>
          <ol className={ui.guideList}>
            <li>
              <p>
                Simulador con <strong>50 preguntas.</strong>
              </p>
            </li>
            <li>
              <p>
                Tiempo para resolverlo: <strong>1 hora 15 minutos.</strong>
              </p>
            </li>
            <li>
              <p>
                🔥<strong> 5 intentos</strong> permitidos para resolverlo
              </p>
            </li>
            <li>
              <p>
                Conoce tus resultados al finalizar presionando <strong>Finish Quiz.</strong>
              </p>
            </li>
          </ol>
          <div className={ui.buttons}>
            <Link to={`/cursoENARM/resultados?plan=2&simulator=${data?.id}`} className={ui.buttonLinkWhite} disabled>
              Ir al panel de resultados
            </Link>
            <button
              type="button"
              className={ui.buttonLinkBlue}
              onClick={() => {
                onSelectSimulator(data);
              }}
            >
              Comenzar Simulador
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const ChevronIcon = () => {
  return (
    <svg
      fill="#000000"
      width="14px"
      height="14px"
      viewBox="-3.75 0 16 16"
      id="chevron-right-16px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          id="Path_140"
          d="M-24,16a.5.5,0,0,1-.354-.146.5.5,0,0,1,0-.708L-17.207,8-24.354.854a.5.5,0,0,1,0-.708.5.5,0,0,1,.708,0l7.5,7.5a.5.5,0,0,1,0,.708l-7.5,7.5A.5.5,0,0,1-24,16Z"
          transform="translate(24.5 0)"
        ></path>
      </g>
    </svg>
  );
};

export default CardBody;

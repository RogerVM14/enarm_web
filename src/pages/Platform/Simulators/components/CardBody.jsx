import { Link } from "react-router-dom";
import ui from "./index.module.css";
import { useState } from "react";

const CardBody = ({ data, count, onSelectSimulator }) => {
  const [display, setDisplay] = useState(false);

  console.log({ data });

  const durationSplitted = () => {
    const [hh, mm] = data.duration.split(":");
    const hour = parseInt(hh) === 1 ? "1 hora" : parseInt(hh) === 0 ? "" : `${parseInt(hh)} horas`;
    const minutes = parseInt(mm) === 0 ? "" : `${parseInt(mm)} ${parseInt(mm) === 1 ? "minuto" : "minutos"}`;
    return `${hour} ${minutes}`;
  };

  return (
    <div className="bg-[#FAFAFA] mb-2">
      <div
        className="border-[1px] border-solid border-[#d9d9d9] py-3 px-4 hover:cursor-pointer"
        onClick={() => setDisplay(!display)}
      >
        <div className="flex flex-row gap-3 justify-start items-center">
          <ChevronIcon />
          <h5 className="poppins-semibold-14">
            Simulador {data.specialtyName} #{count}
          </h5>
        </div>
        <div className={ui.simulatorDescription}>
          <p className="poppins-regular-14">Practica en nuestro simulador</p>
        </div>
      </div>
      {display ? (
        <div className="bg-white p-4 border-solid border-[1px] border-[#d9d9d9] border-t-0">
          <ul className="ml-2">
            <li className="min-h-10 flex flex-row items-center">
              <p className="poppins-regular-14">
                1. Simulador con <strong className="poppins-bold-14">{data.totalQuestions} preguntas.</strong>
              </p>
            </li>
            <li className="min-h-10 flex flex-row items-center">
              <p className="poppins-regular-14">
                2. Tiempo para resolverlo: <strong className="poppins-bold-14">{durationSplitted()}</strong>
              </p>
            </li>
            <li className="min-h-10 flex flex-row items-center">
              <p className="poppins-regular-14">
                3. 🔥<strong className="poppins-bold-14"> {data.totalAttempts} intentos</strong> permitidos para
                resolverlo
              </p>
            </li>
            <li className="min-h-10 flex flex-row items-center">
              <p className="poppins-regular-14">
                4. Conoce tus resultados al finalizar presionando{" "}
                <strong className="poppins-bold-14">Finish Quiz.</strong>
              </p>
            </li>
          </ul>
          <div className={ui.buttons}>
            <Link
              to={
                data.userAttempts > 0
                  ? `/cursoENARM/resultados?plan=1&simulator=${data?.id}&specialty=${data?.specialtyName}`
                  : "#"
              }
              className={`max-h-10 min-h-10 rounded-sm border-solid border-[1px] border-[#d9d9d9] ${
                data.userAttempts > 0
                  ? "bg-white cursor-pointer text-black"
                  : "bg-[#f5f5f5] cursor-default text-[#00000040]"
              } py-2 px-4 poppins-regular-16`}
            >
              Ir al panel de resultados
            </Link>
            {data?.isCompleted === true ? null : (
              <button
                type="button"
                className="max-h-10 min-h-10 rounded-sm border-solid border-[1px] border-[#05B2FA] bg-[#05B2FA] text-white poppins-regular-16 py-2 px-4"
                onClick={() => {
                  if (data?.isCompleted === true) {
                    window.alert("Has realizado todos los intentos para este simulador.");
                    return;
                  }
                  onSelectSimulator(data);
                }}
              >
                Comenzar Simulador
              </button>
            )}
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

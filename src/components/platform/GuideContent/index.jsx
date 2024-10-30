import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ui from "./index.module.css";

const GuideContent = ({ resumeData }) => {
  const [especialidades, setEspecialidades] = useState([]);
  const [recursos, setRecursos] = useState([]);
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    setEspecialidades(resumeData.especialidades);
    setRecursos(resumeData.recursos);
    setTipos(resumeData.tipo_recursos);
  }, [resumeData]);

  return (
    <div className={ui.studyGuideContent}>
      {especialidades?.map((especialidad) => {
        return (
          <>
            <h1 className={ui.specialty_title}>{especialidad}</h1>
            <ul className={ui.organizedLinks}>
              {tipos?.map((tipo, tipoIndex) => {
                return (
                  <div key={tipoIndex}>
                    <li>
                      <span>
                        {tipoIndex + 1}. {tipo}
                      </span>
                    </li>
                    <ul className={ui.resources}>
                      {recursos?.map((recurso, recursoIndex) => {
                        return (
                          recurso[1] === tipo[0] && (
                            <li key={recursoIndex}>
                              <Link to={recurso[4]} target="_blank">
                                <svg
                                  width="13px"
                                  height="13px"
                                  viewBox="0 0 100 100"
                                  aria-hidden="true"
                                  role="img"
                                  class="iconify iconify--gis"
                                  preserveAspectRatio="xMidYMid meet"
                                  fill="#1e73be"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      d="M50 37.45c-6.89 0-12.55 5.66-12.55 12.549c0 6.89 5.66 12.55 12.55 12.55c6.655 0 12.112-5.294 12.48-11.862a3.5 3.5 0 0 0 .07-.688a3.5 3.5 0 0 0-.07-.691C62.11 42.74 56.653 37.45 50 37.45zm0 7c3.107 0 5.55 2.442 5.55 5.549s-2.443 5.55-5.55 5.55c-3.107 0-5.55-2.443-5.55-5.55c0-3.107 2.443-5.549 5.55-5.549z"
                                      fill="#1e73be"
                                    ></path>
                                  </g>
                                </svg>
                                {recurso[3]}
                              </Link>
                            </li>
                          )
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default GuideContent;

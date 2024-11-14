import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DotIcon from "../../icons/DotIcon";

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
    <div>
      {especialidades?.map((especialidad) => {
        return (
          <>
            <ul className="list-none">
              {tipos?.map((tipo, tipoIndex) => {
                return (
                  <div key={tipoIndex}>
                    <li>
                      <span>
                        {tipoIndex + 1}. {tipo}
                      </span>
                    </li>
                    <ul className="pl-4 pb-4">
                      {recursos?.map((recurso, recursoIndex) => {
                        return (
                          recurso[1] === tipo[0] && (
                            <li key={recursoIndex}>
                              <Link
                                to={recurso[4]}
                                target="_blank"
                                className="flex flex-row items-center gap-x-2 text-[#1e73be] hover:underline poppins-regular-14"
                              >
                                <DotIcon />
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

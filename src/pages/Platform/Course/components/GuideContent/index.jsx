import React, { useEffect, useState } from "react";
import Viewer from "../../../../../components/Viewer";

const GuideContent = ({ resumeData }) => {
  const [especialidades, setEspecialidades] = useState([]);
  const [recursos, setRecursos] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null); 
  const [isViewerOpen, setIsViewerOpen] = useState(false); 

  useEffect(() => {
    setEspecialidades(resumeData.especialidades);
    setRecursos(resumeData.recursos);
    setTipos(resumeData.tipo_recursos);
  }, [resumeData]);

  // Codifica las URLs para evitar problemas con caracteres especiales
  const encodeFileUrl = (url) => {
    try {
      const urlParts = url.split("/");
      const encodedFilename = encodeURIComponent(urlParts.pop());
      return `${urlParts.join("/")}/${encodedFilename}`;
    } catch (error) {
      console.error("Error codificando la URL:", error);
      return url; 
    }
  };

  const openViewer = (resourceUrl) => {
    const encodedUrl = encodeFileUrl(resourceUrl); 
    setSelectedResource(encodedUrl); 
    setIsViewerOpen(true); 
  };

  const closeViewer = () => {
    setSelectedResource(null); 
    setIsViewerOpen(false); 
  };

  return (
    <div>
      {especialidades?.map((especialidad) => {
        return (
          <div key={especialidad.id}>
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
                              <button
                                onClick={() => openViewer(recurso[4])} 
                                className="flex flex-row items-center gap-x-2 text-[#1e73be] hover:underline poppins-regular-14"
                              >
                                {`${recursoIndex + 1}.-`}
                                {recurso[3]}
                              </button>
                            </li>
                          )
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </ul>
          </div>
        );
      })}

      {isViewerOpen && (
        <Viewer
          isOpen={isViewerOpen}
          onClose={closeViewer}
          fileUrl={selectedResource}
        />
      )}
    </div>
  );
};

export default GuideContent;

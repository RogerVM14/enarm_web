import React, { useEffect, useState } from "react";
import Viewer from "../../../../../components/Viewer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkResourcesViewed } from "../../../../../apis/platform";
import toast from "react-hot-toast";

const GuideContent = ({ resumeData = { recursos: [], especialidades: [], tipo_recursos: [] }, tabSelected = {}, refetch }) => {
  const [recursos, setRecursos] = useState([]);
  const [resourcesToChange, setResourcesToChange] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isReadyToUpdate, setIsReadyUpdate] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!resumeData?.recursos) return;
    
    setRecursos(resumeData.recursos);
    const types = [...new Set(resumeData.recursos.map((e) => e[1]))];
    setTipos(types);
  }, [resumeData]);

  const encodeFileUrl = (url) => {
    if (!url) return '';
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
    if (!resourceUrl) return;
    const encodedUrl = encodeFileUrl(resourceUrl);
    setSelectedResource(encodedUrl);
    setIsViewerOpen(true);
  };

  const closeViewer = () => {
    setSelectedResource(null);
    setIsViewerOpen(false);
  };

  const handleChangeCompletedStatus = (resource_id) => {
    if (!resource_id) return;
    
    setIsReadyUpdate(true);
    setResourcesToChange((prev) => [...prev, resource_id]);
    setRecursos((prev) => {
      return prev.map((e) => {
        if (e[3] === resource_id) {
          e[2] = !e[2];
          return e;
        }
        return e;
      });
    });
  };

  const handleSubmitChangeCompleted = async () => {
    if (!tabSelected?.value) return;
    
    const payload = {
      resource_viewed_list: [...new Set(resourcesToChange)],
      specialty_id: tabSelected.value,
    };
    const response = await checkResourcesViewed(payload, dispatch, navigate);
    if (response) {
      toast.success("Se han actualizado los recursos seleccionados.", {
        duration: 3500,
        position: "top-right",
      });
      setResourcesToChange([]);
      setIsReadyUpdate(false);
      await refetch();
    }
  };

  if (!recursos || !tipos) {
    return null;
  }

  return (
    <div className="relative">
      <div className="relative right-0 top-0 flex flex-row gap-x-2 ml-auto mb-6">
        {isReadyToUpdate ? (
          <button
            onClick={async () => await handleSubmitChangeCompleted()}
            type="button"
            className="border border-blue-500 bg-blue-500 rounded-sm hover:bg-blue-400 active:scale-[.98] scale-1 transition-all text-white py-2 px-4 ml-auto"
          >
            Actualizar visualización de recursos
          </button>
        ) : null}
      </div>
      <ul className="list-none">
        {tipos?.map((tipo, tipoIndex) => {
          return (
            <div key={tipoIndex}>
              <li>
                <span>
                  {tipoIndex + 1}. {tipo}
                </span>
              </li>
              <ul className="pb-4">
                {recursos?.map(
                  (recurso, recursoIndex) =>
                    recurso[1] === tipo && (
                      <li key={recursoIndex} className="flex md:flex-row lg:items-center justify-between gap-x-2 hover:bg-[#1e73be1c] py-1 px-4 flex-col items-start">
                        <button
                          onClick={() => openViewer(recurso[5])}
                          className="flex flex-row items-center gap-x-2 text-[#1e73be] hover:underline poppins-regular-14 text-start"
                        >
                          {`${recursoIndex + 1}.-`}
                          {recurso[4]}
                        </button>
                        <label
                          htmlFor={`resource-${recurso[3]}`}
                          className="flex flex-row-reverse gap-x-2 items-center text-sm hover:cursor-pointer text-slate-500 ml-auto"
                        >
                          {recurso[2] === true ? "Completado" : "Sin completar"}
                          <input
                            type="checkbox"
                            id={`resource-${recurso[3]}`}
                            checked={recurso[2]}
                            onChange={() => handleChangeCompletedStatus(recurso[3])}
                          />
                        </label>
                      </li>
                    )
                )}
              </ul>
            </div>
          );
        })}
      </ul>
      {isViewerOpen && <Viewer isOpen={isViewerOpen} onClose={closeViewer} fileUrl={selectedResource} />}
    </div>
  );
};

export default GuideContent;

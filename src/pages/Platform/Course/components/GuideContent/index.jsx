import React, { useEffect, useState } from "react";
import Viewer from "../../../../../components/Viewer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkResourcesViewed } from "../../../../../apis/platform";
import toast from "react-hot-toast";

const GuideContent = ({ resumeData, tabSelected, refetch }) => {
  const [recursos, setRecursos] = useState([]);
  const [resourcesToChange, setResourcesToChange] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isReadyToUpdate, setIsReadyUpdate] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setRecursos(resumeData.recursos);
    const types = [...new Set(resumeData.recursos.map((e) => e[1]))];
    setTipos(types);
  }, [resumeData]);

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

  const handleChangeCompletedStatus = (resource_id) => {
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

  return (
    <div className="relative">
      <div className="absolute right-0 top-0 flex flex-row gap-x-2">
        {isReadyToUpdate ? (
          <button
            onClick={async () => await handleSubmitChangeCompleted()}
            type="button"
            className="border border-blue-500 bg-blue-500 rounded-sm hover:bg-blue-400 active:scale-[.98] scale-1 transition-all text-white py-2 px-4"
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
              <ul className="pl-4 pb-4">
                {recursos?.map(
                  (recurso, recursoIndex) =>
                    recurso[1] === tipo && (
                      <li key={recursoIndex} className="flex flex-row items-center justify-start gap-x-2">
                        <button
                          onClick={() => openViewer(recurso[5])}
                          className="flex flex-row items-center gap-x-2 text-[#1e73be] hover:underline poppins-regular-14"
                        >
                          {`${recursoIndex + 1}.-`}
                          {recurso[4]}
                        </button>
                        <label
                          htmlFor={`resource-${recurso}`}
                          className="flex flex-row-reverse gap-x-2 items-center text-sm hover:cursor-pointer text-slate-500"
                        >
                          {recurso[2] === true ? "Completado" : "Sin completar"}
                          <input
                            type="checkbox"
                            id={`resource-${recurso}`}
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

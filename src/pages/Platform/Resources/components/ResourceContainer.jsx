import { useState, useEffect } from "react";
import Viewer from "../../../../components/Viewer";

const ResourceContainer = ({ resourcesContent }) => {
  const [resumeData, setResumeData] = useState([]);
  const [specialtiesNames, setSpecialtiesNames] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null); // Estado para el recurso seleccionado
  const [isViewerOpen, setIsViewerOpen] = useState(false); // Estado para abrir/cerrar el visualizador

  useEffect(() => {
    const orderResourceData = () => {
      if (Object.keys(resourcesContent).length === 0) return;
      let specialty = [];
      Object.values(resourcesContent)?.forEach((resource) => {
        const [specialtyName, resourceArray] = Object.entries(resource)[0];
        const list = resourceArray.reduce((acc, item) => {
          const { type } = item;
          if (!acc[type]) {
            acc[type] = [];
          }
          acc[type].push(item);
          return acc;
        }, {});
        setResumeData(Object.entries(list));
        specialty.push(specialtyName);
      });
      setSpecialtiesNames(specialty);
    };

    orderResourceData();
  }, [resourcesContent]);

  const encodeFileUrl = (url) => {
    try {
      const urlParts = url.split("/");
      const encodedFilename = encodeURIComponent(urlParts.pop()); // Codifica el último segmento (nombre del archivo)
      return `${urlParts.join("/")}/${encodedFilename}`;
    } catch (error) {
      console.error("Error codificando la URL:", error);
      return url; // Devuelve la URL original si hay un error
    }
  };

  

  const openViewer = (resource) => {
    const encodedUrl = encodeFileUrl(resource.url); // Codifica la URL del archivo
    setSelectedResource(encodedUrl); // Guarda la URL codificada
    setIsViewerOpen(true); // Abre el Viewer
  };

  const closeViewer = () => {
    setSelectedResource(null); // Limpia el recurso seleccionado
    setIsViewerOpen(false); // Cierra el visualizador
  };

  return Object.keys(resourcesContent).length > 0 ? (
    <>
      <section>
        <header>
          <div className="py-4 px-6 border-[1px] bg-white flex flex-row justify-between">
            <div className="poppins-regular-14 flex flex-row gap-x-4">
              <button type="button" className="hidden">
                <svg
                  width="14px"
                  height="14px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z"
                      fill="#33363F"
                    ></path>
                  </g>
                </svg>
              </button>
              <h4 className="poppins-regular-14 !text-[20px]">
                {specialtiesNames.join(" / ")}
              </h4>
              <p className="poppins-regular-14">Recursos</p>
            </div>
          </div>
        </header>
        <div className="p-6 border-r border-b border-l border-[#d9d9d9] bg-white max-h-[calc(100dvh_-_9rem)] overflow-y-auto">
          {resumeData?.map(([specialty, data], index) => {
            return !["Simulador", "Video clases"].includes(specialty) ? (
              <div key={index}>
                <h5 className="poppins-regular-16">{specialty}</h5>
                <ul className="ml-6 list-disc mb-4">
                  {data?.map((resource) => {
                    return (
                      <li
                        key={resource.id}
                        className="text-[#1e73be] cursor-pointer"
                      >
                        <p
                          className="poppins-regular-14 hover:underline"
                          onClick={() => openViewer(resource)} // Abre el visualizador al hacer clic
                        >
                          {resource.name}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null;
          })}
        </div>
      </section>

      {/* Componente Viewer para visualizar PDFs e imágenes */}
      {isViewerOpen && (
        <Viewer
          isOpen={isViewerOpen}
          onClose={closeViewer}
          fileUrl={selectedResource}
        />
      )}
    </>
  ) : (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "PoppinsRegular",
          fontSize: "2rem",
          display: "block",
        }}
      >
        Selecciona una especialidad
      </span>
      <div style={{ width: "300px", height: "300px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <rect
            fill="#37A9FF"
            stroke="#37A9FF"
            strokeWidth="5"
            strokeLinejoin="round"
            width="30"
            height="30"
            x="85"
            y="85"
            rx="0"
            ry="0"
          >
            <animate
              attributeName="rx"
              calcMode="spline"
              dur="1.4"
              values="15;15;5;15;15"
              keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="ry"
              calcMode="spline"
              dur="1.4"
              values="15;15;10;15;15"
              keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="height"
              calcMode="spline"
              dur="1.4"
              values="30;30;1;30;30"
              keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="y"
              calcMode="spline"
              dur="1.4"
              values="40;170;40;"
              keySplines=".6 0 1 .4;0 .8 .2 1"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </svg>
      </div>
    </section>
  );
};

export default ResourceContainer;

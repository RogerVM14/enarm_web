import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layouts/Dashboard";
import SpecialitiesList from "./components/SpecialitiesList";
import ui from "./index.module.css";
import SimulationCardsContainer from "./components/SimulationCardsContainer";
import { useQuery } from "react-query";
import { getSpecialties, getResourcesBySpecialty } from "../../../apis/platform";

const SimulatorsPage = () => {
  const [displayContainer, setDisplayContainer] = useState(false);
  const [smallDevice, setSmallDevice] = useState(null);
  const [resourcesContent, setResourcesContent] = useState({});
  const [specialtyPosition, setSpecialtyPosition] = useState(0);
  const { isLoading, isError, data: especialidades } = useQuery("resource-specialties", () => getSpecialties());

  useEffect(() => {
    function getWindowSize() {
      let xViewport = window.innerWidth;
      setSmallDevice(xViewport <= 992);
    }
    window.addEventListener("resize", getWindowSize);
    getWindowSize();
    return () => window.removeEventListener("resize", getWindowSize);
  }, []);

  const specialtyListProps = {
    data: especialidades,
    selectSpecialty: (position) => {
      setSpecialtyPosition(position);
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!especialidades || specialtyPosition === 0) return;
      const list = await getResourcesBySpecialty(especialidades, specialtyPosition); 
      setResourcesContent(list);
    };
    fetchData();
  }, [specialtyPosition, especialidades]);
 
  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.gridContainer}>
          {isLoading && !isError ? <span>Cargando...</span> : null}
          {!isLoading && isError ? <span>Error...</span> : null}
          {!isLoading && !isError ? <SpecialitiesList {...specialtyListProps} /> : null}
          {Object?.entries(resourcesContent).length === 0 ? (
            <section id={ui.selectSpecialty} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontFamily: "PoppinsRegular", fontSize: "2rem", display: "block" }}>
                Selecciona una especialidad
              </span>
              <div style={{ width: "300px", height: "300px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                  <rect
                    fill="#37A9FF"
                    stroke="#37A9FF"
                    stroke-width="5"
                    stroke-linejoin="round"
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
          ) : (
            <SimulationCardsContainer
              displayContainer={displayContainer}
              handleDisplay={() => {
                setDisplayContainer(!displayContainer);
              }}
              smallDevice={smallDevice}
              resourcesContent={resourcesContent}
            />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SimulatorsPage;

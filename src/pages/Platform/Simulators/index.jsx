import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layouts/Dashboard";
import SpecialitiesList from "./components/SpecialitiesList"; 
import SimulationCardsContainer from "./components/SimulationCardsContainer";
import { useQuery } from "react-query";
import { getSpecialties, getResourcesBySpecialty } from "../../../apis/platform";
import BouncingLoading from "./components/BouncingLoading";

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
      <div className="p-6 bg-[#f0f2f5] min-h-full">
        <div className="grid grid-cols-[278px_1fr] gap-x-6">
          {isLoading && !isError ? <span>Cargando...</span> : null}
          {!isLoading && isError ? <span>Error...</span> : null}
          {!isLoading && !isError ? <SpecialitiesList {...specialtyListProps} /> : null}
          {Object?.entries(resourcesContent).length === 0 ? (
            <BouncingLoading />
          ) : (
            <SimulationCardsContainer
              displayContainer={displayContainer}
              handleDisplay={() => setDisplayContainer(!displayContainer)}
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

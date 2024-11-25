import React, { useState, useEffect } from "react";
import DashboardLayout from "../../Layouts/Dashboard";
import SpecialitiesList from "./components/SpecialitiesList";
import ui from "./index.module.css";
import { useQuery } from "react-query";
import { getHeaders } from "../../../utils/auth/cookieSession";
import axios from "axios";
import toast from "react-hot-toast";
import ResourceContainer from "./components/ResourceContainer";
import { getSpecialties } from "../../../apis/platform";
import { useDispatch } from "react-redux";
import { setIsLoadingContent } from "../../../store/reducers/general/general";

const { REACT_APP_ENARM_API_GATEWAY_URL: url } = process.env;

const ResourcesPage = () => {
  const [specialtyPosition, setSpecialtyPosition] = useState(0);
  const [resourcesContent, setResourcesContent] = useState({});
  const dispatch = useDispatch();
  const {
    isLoading,
    isError,
    data: especialidades,
  } = useQuery("resource-specialties", () => getSpecialties());

  if (isLoading) {
    dispatch(setIsLoadingContent(true));
  } else {
    dispatch(setIsLoadingContent(false));
  }

  const specialtyListProps = {
    data: especialidades,
    selectSpecialty: (position) => {
      setSpecialtyPosition(position);
    },
  };

  useEffect(() => {
    const getResourcesBySpecialty = async () => {
      try {
        if (!especialidades || specialtyPosition === 0) return;
        const { specialty_id } = especialidades?.find(
          (item) => item.specialty_id === specialtyPosition
        );
        const endpoint = `${url}study-plan/get-resources-simulators-by-specialty-id`;
        const headers = getHeaders();
        const body = {
          specialty_id,
        };
        const { data, status } = await axios.post(endpoint, body, headers);
        if (
          data.status_Message === "there are resources or simulators" &&
          status === 200
        ) {
          setResourcesContent(data.resources_simulators);
          return;
        }
        throw new Error();
      } catch (error) {
        toast.error("Error al obtener recursos.", {
          position: "bottom-right",
          duration: 3500,
        });
      }
    };
    getResourcesBySpecialty();
  }, [specialtyPosition, especialidades]);

  return (
    <DashboardLayout>
      <div className={`${ui.wrapper} overflow-hidden`}>
        <div className={ui.gridContainer}>
          {/* {isLoading && !isError ? <span>Cargando...</span> : null} */}
          {!isLoading && isError ? (
            <span>Error al cargar contenido</span>
          ) : null}
          {!isLoading && !isError ? (
            <>
              <SpecialitiesList {...specialtyListProps} />
              <ResourceContainer resourcesContent={resourcesContent} />
            </>
          ) : null}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ResourcesPage;

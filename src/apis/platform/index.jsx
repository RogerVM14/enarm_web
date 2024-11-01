import axios from "axios";
import { getHeaders } from "../../utils/auth/cookieSession";
import toast from "react-hot-toast";

const { REACT_APP_ENARM_API_GATEWAY_URL: url } = process.env;

export const getSpecialties = async () => {
  try {
    const endpoint = `${url}specialties/get-specialties`;
    const headers = getHeaders();

    const { data, status } = await axios.get(endpoint, headers);
    if (data.status_Message === "there are specialties" && status === 200) {
      return data.specialty_List;
    }
  } catch (error) {
    toast.error("Error al obtener especialidades.", {
      position: "bottom-right",
      duration: 3500,
    });
  }
};

export const getResourcesBySpecialty = async (especialidades, specialtyPosition) => {
  try {
    const { specialty_id } = especialidades?.find((item) => item.specialty_id === specialtyPosition);
    const endpoint = `${url}study-plan/get-resources-simulators-by-specialty-id`;
    const headers = getHeaders();
    const body = {
      specialty_id,
    };
    const { data, status } = await axios.post(endpoint, body, headers);
    if (data.status_Message === "there are resources or simulators" && status === 200) {
      return data.resources_simulators;
    }
    throw new Error();
  } catch (error) {
    toast.error("Error al obtener recursos.", {
      position: "bottom-right",
      duration: 3500,
    });
  }
};

export const getWeekResourcesByWeekAndPlan = async (params) => {
  try {
    const endpoint = `${url}study-plan/get-week-resources-by-week-and-plan`;
    const headers = getHeaders();
    const body = {
      study_plan_id: params.plan,
      week: params.week,
    };

    const { data, status } = await axios.post(endpoint, body, headers);
    if (data.status_Message === "there are resources" && status === 200) {
      const { resource_List, week_names } = data;
      return {
        resource_List,
        week_names,
      };
    }
  } catch (error) {
    toast.error("Se presentó un error al obtener recursos.", {
      position: "bottom-right",
      duration: 3500,
    });
  }
};

export const getStudyPlanById = async () => {
  try {
    const endpoint = `${url}study-plan/get-study-plan-by-id`;
    const headers = getHeaders();
    const body = { study_plan_id: 6 };
    const { data, status } = await axios.post(endpoint, body, headers);
    if (data.status_Message === "there is study plan" && status === 200) {
      return data.study_plan;
    }
  } catch (error) {
    toast.error("Se presentó un error al cargar plan de estudios", {
      position: "bottom-right",
      duration: 3500,
    });
  }
};

export const getSimulatorQuestions = async (id) => {
  try {
    const endpoint = `${url}simulators/get-simulator-questions-by-id`;
    const headers = getHeaders();
    const body = {
      simulator_id: id,
    };

    const { data, status } = await axios.post(endpoint, body, headers);
    if ((data.status_Message = "there is simulator" && status === 200)) {
      return data.simulator;
    }
  } catch (error) {
    toast.error("Error obteniendo cuestionario.", {
      position: "bottom-right",
      duration: 3500,
    });
  }
};

export const addAnswerSimulatorByStudent = async (objectData) => {
  try {
    const endpoint = `${url}simulators/add-answer-simulator-by-student`;
    const headers = getHeaders();

    const { data, status } = await axios.post(endpoint, objectData, headers);
    if ((data.status_Message = "answer insertion done" && status === 201)) {
      console.log({ data, status });
      return true;
    }
  } catch (error) {
    return false;
  }
};

import axios from "axios";
import { getHeaders, removeCookie } from "../../utils/auth/cookieSession";
import toast from "react-hot-toast";
import { removeSession } from "../../hooks/removeSession";

const { REACT_APP_ENARM_API_GATEWAY_URL: url } = process.env;

export const getSpecialties = async (dispatch, navigate) => {
  try {
    const endpoint = `${url}specialties/get-specialties`;
    const headers = getHeaders();

    const { data, status } = await axios.get(endpoint, headers);
    if (data.status_Message === "there are specialties" && status === 200) {
      return data.specialty_List;
    }
  } catch (error) {
    if (error.request.status === 401) {
      removeSession(dispatch, navigate);
      toast.error("Hemos detectado una sesión activa, cerraremos esta sesión", {
        position: "bottom-right",
        duration: 3500,
      });
    } else {
      toast.error("Error al obtener especialidades.", {
        position: "bottom-right",
        duration: 3500,
      });
    }
  }
};

export const getResourcesBySpecialty = async (
  especialidades,
  specialtyPosition,
  dispatch,
  navigate
) => {
  try {
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
      return data.resources_simulators;
    }
    throw new Error();
  } catch (error) {
    if (error.request.status === 401) {
      removeSession(dispatch, navigate);
      toast.error("Hemos detectado una sesión activa, cerraremos esta sesión", {
        position: "bottom-right",
        duration: 3500,
      });
    } else {
      toast.error("Error al obtener recursos.", {
        position: "bottom-right",
        duration: 3500,
      });
    }
  }
};

export const getWeekResourcesByWeekAndPlan = async (params, dispatch, navigate) => {
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
    if (error.request.status === 401) {
      removeSession(dispatch, navigate);
      toast.error("Hemos detectado una sesión activa, cerraremos esta sesión", {
        position: "bottom-right",
        duration: 3500,
      });
    } else {
      toast.error("Se presentó un error al obtener recursos.", {
        position: "bottom-right",
        duration: 3500,
      });
    }
  }
};

export const getStudyPlanById = async (plan, dispatch, navigate) => {
  try {
    const endpoint = `${url}study-plan/get-study-plan-by-id`;
    const headers = getHeaders();
    const body = { study_plan_id: plan };
    const { data, status } = await axios.post(endpoint, body, headers);
    if (data.status_Message === "there is study plan" && status === 200) {
      return data.study_plan;
    } else {
      throw new Error();
    }
  } catch (error) {
    if (error.request.status === 401) {
      removeSession(dispatch, navigate);
      toast.error("Hemos detectado una sesión activa, cerraremos esta sesión", {
        position: "bottom-right",
        duration: 3500,
      });
    } else {
      toast.error("Se presentó un error al cargar plan de estudios", {
        position: "bottom-right",
        duration: 3500,
      });
    }
  }
};

export const getSimulatorQuestions = async (id, dispatch, navigate) => {
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
    if (error.request.status === 401) {
      removeSession(dispatch, navigate);
      toast.error("Hemos detectado una sesión activa, cerraremos esta sesión", {
        position: "bottom-right",
        duration: 3500,
      });
    } else {
      toast.error("Error obteniendo cuestionario.", {
        position: "bottom-right",
        duration: 3500,
      });
    }
  }
};

export const addAnswerSimulatorByStudent = async (objectData, dispatch, navigate) => {
  try {
    const endpoint = `${url}simulators/add-answer-simulator-by-student`;
    const headers = getHeaders();

    const { data, status } = await axios.post(endpoint, objectData, headers);
    if ((data.status_Message = "answer insertion done" && status === 201)) {
      return true;
    }
  } catch (error) {
    if (error.request.status === 401) {
      removeSession(dispatch, navigate);
      toast.error("Hemos detectado una sesión activa, cerraremos esta sesión", {
        position: "bottom-right",
        duration: 3500,
      });
    }
    return false;
  }
};

export const getAnswersSimulatorAttemptByStudent = async (simulatorID, dispatch, navigate) => {
  try {
    const endpoint = `${url}simulators/get-answers-simulator-attempt-by-student`;
    const headers = getHeaders();

    const { attempt_count, attempts_completed, answer_list } =
      await getSimulatorStatsByStudent(simulatorID);

    const body = {
      simulator_id: simulatorID,
      attempt: answer_list.length,
    };
    const { data, status } = await axios.post(endpoint, body, headers);
    if (data.status_Message === "simulator answers founded" && status === 200) {
      return { ...data, attempt_count, attempts_completed, answer_list };
    }
  } catch (error) {
    if (error.request.status === 401) {
      removeSession(dispatch, navigate);
      toast.error("Hemos detectado una sesión activa, cerraremos esta sesión", {
        position: "bottom-right",
        duration: 3500,
      });
    } else {
      toast.error("Error obteniendo respuestas.", {
        position: "bottom-right",
        duration: 3500,
      });
    }
    return false;
  }
};

export const getSimulatorsBySpecialty = async (specialty_id, dispatch, navigate) => {
  try {
    const endpoint = `${url}simulators/get-simulators-by-specialty`;
    const body = { specialty_id };
    const headers = getHeaders();

    const { data, status } = await axios.post(endpoint, body, headers);
    if (status === 200 && data.status_Message === "there are simulators") {
      return data.simulator_List;
    }
  } catch (error) {
    if (error.request.status === 401) {
      removeSession(dispatch, navigate);
      toast.error("Hemos detectado una sesión activa, cerraremos esta sesión", {
        position: "bottom-right",
        duration: 3500,
      });
    } else {
      toast.error("Error obteniendo simuladores.", {
        position: "bottom-right",
        duration: 3500,
      });
    }
    return false;
  }
};

export const getSimulatorStatsByStudent = async (simulatorID, dispatch, navigate) => {
  try {
    const endpoint = `${url}simulators/get-simulator-stats-by-student`;
    const body = {
      simulator_id: simulatorID,
    };
    const headers = getHeaders();

    const { data, status } = await axios.post(endpoint, body, headers);
    if (data.status_Message === "simulator stats founded" && status === 200) {
      return data;
    }
  } catch (error) {
    if (error.request.status === 401) {
      removeSession(dispatch, navigate);
      toast.error("Hemos detectado una sesión activa, cerraremos esta sesión", {
        position: "bottom-right",
        duration: 3500,
      });
    } else {
      toast.error("Error obteniendo respuestas.", {
        position: "bottom-right",
        duration: 3500,
      });
    }
    return false;
  }
};

export const getStudyPlans = async (dispatch, navigate) => {
  try {
    const endpoint = `${url}study-plan/get-study-plans`;
    const headers = getHeaders();

    const { data, status } = await axios.get(endpoint, headers);

    if (data.status_Message === "there are study plans" && status === 200) {
      console.log(data.study_plans);
      return data.study_plans;
    }
    throw new Error();
  } catch (error) {
    if (error.request.status === 401) {
      removeSession(dispatch, navigate);
      toast.error("Hemos detectado una sesión activa, cerraremos esta sesión", {
        position: "bottom-right",
        duration: 3500,
      });
    } else {
      toast.error("Se presentó un error al obtener planes de estudio.", {
        duration: 3500,
        position: "top-right",
      });
    }
  }
};

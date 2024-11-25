import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layouts/Dashboard";
import PlanCourse from "./components/PlanCourse";
import PlanCourseCollapse from "./components/PlanCourseCollapse";
import ui from "./index.module.css";
import { useQuery } from "react-query";
import { getStudyPlanById } from "../../../apis/platform";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLoadingContent } from "../../../store/reducers/general/general";

const useQueryParams = () => {
  const { search } = useLocation();
  const queryParameters = new URLSearchParams(search);
  const plan = parseInt(queryParameters.get("id"));
  const name = queryParameters.get("name");

  return { plan, name };
};

const PlanMonthPage = () => {
  const [weeksList, setWeekList] = useState([]);

  const { plan, name } = useQueryParams();
  const dispatch = useDispatch();

  const { data: studyplans } = useQuery([name], () => getStudyPlanById(plan));
  if (!studyplans) {
    dispatch(setIsLoadingContent(true));
  } else {
    dispatch(setIsLoadingContent(false));
  }

  useEffect(() => {
    if (!studyplans) return;
    const resourceList = studyplans?.weeks.map(
      ({ week_resources, week_names, week_id, week }) => {
        const typeCounts = week_resources.reduce((acc, resource) => {
          acc[resource.type] = (acc[resource.type] || 0) + 1;
          return acc;
        }, {});
        return {
          resources: Object.entries(typeCounts),
          week_names,
          week_id,
          week_number: week,
        };
      }
    );
    setWeekList(resourceList);
  }, [studyplans]);

  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.gridContainer}>
          <section>
            <PlanCourse planName={name} />
            <PlanCourseCollapse weeksList={weeksList} planID={plan} />
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PlanMonthPage;

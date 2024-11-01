import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layouts/Dashboard";
import PlanCourse from "../../../components/platform/PlanCourse";
import PlanCourseCollapse from "../../../components/platform/PlanCourseCollapse";
import ui from "./index.module.css";
import { useQuery } from "react-query";
import { getStudyPlanById } from "../../../apis/platform";
// import TablaEstudios from "./components/TablaEstudios";
// import Calendario from "./components/Calendario";
// import Avances from "./components/Avances";

const PlanMonthPage = () => {
  const [weeksList, setWeekList] = useState([]);
  const { data: studyplans } = useQuery("study-plans-by-id", () => getStudyPlanById());

  useEffect(() => {
    if (!studyplans) return;
    const resourceList = studyplans?.weeks.map(({ week_resources, week_names, week_id, week }) => {
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
    });
    setWeekList(resourceList);
  }, [studyplans]);

  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.gridContainer}>
          <section>
            <PlanCourse />
            <PlanCourseCollapse weeksList={weeksList} />
          </section>
          <aside>
            {/* <Calendario />
            <Avances />
            <TablaEstudios /> */}
          </aside>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PlanMonthPage;

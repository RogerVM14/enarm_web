import React, { useState } from 'react';
import CardLegacy from './CardLegacy';
import PlanCollapse from './PlanCollapse';

const StudyPlanCourseContainer = (props) => {

  const [routeString, setRouteString] = useState("");

  return (
    <div className='plan-course-container'>
      <CardLegacy routePlan={routeString} />
      <PlanCollapse routePlan={routeString} />
    </div>
  )
}

export default StudyPlanCourseContainer;
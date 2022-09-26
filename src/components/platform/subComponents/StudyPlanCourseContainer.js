import React, { useContext } from 'react';
import { PlanRoutesContext } from '../../../contexts/platform/PlanRoutesContext';
import CardLegacy from './CardLegacy';
import PlanCollapse from './PlanCollapse';

const StudyPlanCourseContainer = (props) => {

    const { routeString } = useContext(PlanRoutesContext);

    const { deviceType, isSmart } = props;

    return (
        <div className='plan-course-container'>
            <CardLegacy
                routePlan={routeString}
                deviceType={deviceType}
                isSmart={isSmart}
            />
            <PlanCollapse
                routePlan={routeString}
                deviceType={deviceType}
                isSmart={isSmart}
            />
        </div>
    )
}

export default StudyPlanCourseContainer;
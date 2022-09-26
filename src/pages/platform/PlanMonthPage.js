import React, { useContext } from 'react';
import DashboardRightAside from '../../components/platform/DashboardRightAside';
import Progress from '../../components/platform/subComponents/Progress';
import StudyCalendar from '../../components/platform/subComponents/StudyCalendar';
import StudyTablePlan from '../../components/platform/subComponents/StudyTablePlan';
import StudyPlanCourseContainer from '../../components/platform/subComponents/StudyPlanCourseContainer';
import '../../css/platform/pages/PlanMonthPage.css';
import { PlatformResponsiveContext } from '../../contexts/platform/PlatformResponsiveContext';

const PlanMonthPage = (props) => {

    const { device, isSmart } = useContext(PlatformResponsiveContext);

    return (
        <div className={`main-container ${device}`}>
            <div className={`plantMonth-wrapper ${device}`}>
                {
                    isSmart ? (
                        <>
                            <StudyCalendar
                                deviceType={device}
                                isSmart={isSmart}
                            />
                            <Progress
                                deviceType={device}
                                isSmart={isSmart}
                            />
                            <StudyTablePlan
                                deviceType={device}
                                isSmart={isSmart}
                            />
                            <StudyPlanCourseContainer
                                deviceType={device}
                                isSmart={isSmart}
                            />
                        </>
                    ) : (
                        <>
                            <StudyPlanCourseContainer />
                            <DashboardRightAside>
                                <StudyCalendar />
                                <Progress />
                                <StudyTablePlan />
                            </DashboardRightAside>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default PlanMonthPage;
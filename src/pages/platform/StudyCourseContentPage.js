import React, { useContext } from 'react';
import DashboardRightAside from '../../components/platform/DashboardRightAside';
import CourseContent from '../../components/platform/subComponents/CourseContent';
import ProgressRecord from '../../components/platform/subComponents/ProgressRecord';
import { CurrentWeekContext } from '../../contexts/platform/CurrentWeekStudyContext';
import StudyMethod from '../../components/platform/subComponents/StudyMethod';
import { ModalSimulatorContext } from '../../contexts/platform/ModalStartingSimulator';
import SimulatorModal from '../../components/platform/subComponents/simulador/SimulatorModal';
import { PlatformResponsiveContext } from '../../contexts/platform/PlatformResponsiveContext';
import '../../css/platform/pages/StudyCourseContentPage.css'

const StudyCourseContentPage = () => {

  const { currentWeek } = useContext(CurrentWeekContext);
  const { isModalSimulatorVisible } = useContext(ModalSimulatorContext);
  const { device, isSmart } = useContext(PlatformResponsiveContext);

  return (
    <>
      <div className={`main-container ${device}`}>
        <div className={`course-container-wrapper ${device}`}>
          {
            isSmart ? (
              <div style={
                {
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  width: "100%"
                }
              }>
                <StudyMethod
                  deviceType={device}
                  isSmart={isSmart}
                />
                <CourseContent
                  class={currentWeek.class}
                  deviceType={device}
                  isSmart={isSmart}
                />
              </div>
            ) : (
              <>
                <CourseContent class={currentWeek.class} />
                <DashboardRightAside>
                  <ProgressRecord
                    days={currentWeek.days}
                    week={currentWeek.week.week}
                  />
                  <StudyMethod />
                </DashboardRightAside>
              </>
            )
          }
        </div>
        {
          isSmart && (
            <ProgressRecord
              days={currentWeek.days}
              week={currentWeek.week.week}
              deviceType={device}
              isSmart={isSmart}
            />
          )
        }
      </div>
      {
        isModalSimulatorVisible && (
          <SimulatorModal
            deviceType={device}
            isSmart={isSmart}
          />
        )
      }
    </>
  )
}

export default StudyCourseContentPage;
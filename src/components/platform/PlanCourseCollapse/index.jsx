import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChevronIcon from "./chevronicon.svg";
import courseList from "./CourseList";
import ui from "./index.module.css";

const PlanCourseCollapse = () => {

  const [planCourse, setPlanCourse] = useState(() => {
    return courseList?.map((course) => {
      return { ...course, expanded: false }
    })
  });

  const getStatusLabel = (status) => {
    if (status === 0) return "Sin Avance";
    if (status === 1) return "Completo";
    return "Incompleto"
  }
  const getDaysLabel = (day) => {
    if (day === 0) return null;
    if (day === 1) return day + " día"
    if (day > 1) return day + " días"
  }

  const handleShowBodyContent = (i) => {
    setPlanCourse((prev) => {
      return prev?.map((item, index) => {
        if (index !== i) return item;
        return { ...item, expanded: !item.expanded }
      })
    });
  }

  return (
    <section>
      <div className={ui.courseContainer}>
        {
          planCourse?.map((course, indexCourse) => {
            const { week, status, classes, simulator, expanded } = course;
            return (
              <div className={ui.courseItem} key={indexCourse}>
                <div className={ui.itemContent}>
                  <div className={ui.contentHead} onClick={(e) => handleShowBodyContent(indexCourse)}>
                    <div className={ui.headTop}>
                      <div className={ui.courseWeekTitle}>
                        <img
                          src={ChevronIcon}
                          alt="chevron"
                          className={ui.chevronIcon}
                          data-pointer={expanded ? "bottom" : "right"}
                          width={12}
                          height={12}
                        />
                        <h6 className={ui.courseWeek}>Semana {week}</h6>
                      </div>
                      <span className={ui.weekStatus} data-status={status}>{getStatusLabel(status)}</span>
                    </div>
                    <div className={ui.headBottom}>
                      <div className={ui.classDays}>
                        {
                          classes?.map((currentClass, indexCurrentClass) => {
                            const { title, days } = currentClass;
                            return (
                              <div className={ui.dayClass} key={indexCurrentClass}>
                                <p>{title}</p>
                                <span>{getDaysLabel(days)}</span>
                              </div>
                            )
                          })
                        }
                        <div className={ui.dayClass}>
                          <p>{simulator.title}</p>
                          <span>{getDaysLabel(simulator.days)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={ui.contentBody} data-expanded={expanded}>
                    <div className={ui.bodyClassLinks}>
                      {
                        classes?.map((currentClass, indexCurrentClass) => {
                          const url = currentClass.id === null ? "#" : ("/u/planes/11_meses/contenido/" + currentClass.id);
                          return (
                            <div className={ui.classLink} key={indexCurrentClass}>
                              <Link to={url}>Ir a {currentClass.title}</Link>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default PlanCourseCollapse
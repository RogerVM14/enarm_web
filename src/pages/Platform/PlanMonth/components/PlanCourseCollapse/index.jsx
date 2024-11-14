import React from "react";
import { useNavigate } from "react-router-dom";
import ui from "./index.module.css";
import DotIcon from "../../../../../assets/icons/dot-icon";

const PlanCourseCollapse = ({ weeksList, planID }) => {
  const navigate = useNavigate();

  const handleShowBodyContent = (week) => {
    navigate(`/cursoENARM/planes_contenido?plan=${planID}&week=${week}`);
  };
  return (
    <section>
      <div className={ui.courseContainer}>
        {weeksList.length > 0 &&
          weeksList?.map((week) => {
            return (
              <button
                type="button"
                className={ui.courseItem}
                key={week?.week_id}
                onClick={() => handleShowBodyContent(week?.week_number)}
              >
                <div className={ui.itemContent}>
                  <div className={ui.contentHead}>
                    <div className={ui.headTop}>
                      <div className={ui.courseWeekTitle}>
                        <DotIcon />
                        <h6 className={ui.courseWeek}>
                          Semana {week.week_number} - {week?.week_names.join(" / ")}
                        </h6>
                      </div>
                    </div>
                    <div className={ui.headBottom}>
                      <div className={ui.classDays}>
                        {week?.resources.map((resource, index) => {
                          return (
                            <div className={ui.dayClass} key={index}>
                              <p> {resource[0]} - </p>
                              <span>{resource[1]}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
      </div>
    </section>
  );
};

export default PlanCourseCollapse;

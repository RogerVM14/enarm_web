import React from "react";
import { useNavigate } from "react-router-dom";
import ui from "./index.module.css";

const PlanCourseCollapse = ({ weeksList }) => {
  const navigate = useNavigate();

  const handleShowBodyContent = (week) => {
    navigate(`/cursoENARM/planes/11_Meses/contenido/${week}?week=${week}&plan_id=${6}`);
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
                        <svg
                          width="14px"
                          height="14px"
                          viewBox="0 0 100 100"
                          aria-hidden="true"
                          role="img"
                          class="iconify iconify--gis"
                          preserveAspectRatio="xMidYMid meet"
                          fill="#000000"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M50 37.45c-6.89 0-12.55 5.66-12.55 12.549c0 6.89 5.66 12.55 12.55 12.55c6.655 0 12.112-5.294 12.48-11.862a3.5 3.5 0 0 0 .07-.688a3.5 3.5 0 0 0-.07-.691C62.11 42.74 56.653 37.45 50 37.45zm0 7c3.107 0 5.55 2.442 5.55 5.549s-2.443 5.55-5.55 5.55c-3.107 0-5.55-2.443-5.55-5.55c0-3.107 2.443-5.549 5.55-5.549z"
                              fill="#000000"
                            ></path>
                          </g>
                        </svg>
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
                              <p>{resource[0]} - </p>
                              <span>
                                {resource[1]} {resource[1] === 1 ? "día" : "días"}
                              </span>
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

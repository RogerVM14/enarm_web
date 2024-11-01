import { useState, useEffect } from "react";
import ui from "./index.module.css";

const ResourceContainer = ({ resourcesContent }) => {
  const [resumeData, setResumeData] = useState([]);
  const [specialtiesNames, setSpecialtiesNames] = useState([]);

  useEffect(() => {
    const orderResourceData = () => {
      if (Object.keys(resourcesContent).length === 0) return;
      let specialty = [];
      Object.values(resourcesContent)?.forEach((resource) => {
        const [specialtyName, resourceArray] = Object.entries(resource)[0];
        const list = resourceArray.reduce((acc, item) => {
          const { type } = item;
          if (!acc[type]) {
            acc[type] = [];
          }
          acc[type].push(item);
          return acc;
        }, {});
        setResumeData(Object.entries(list));
        specialty.push(specialtyName);
      });
      setSpecialtiesNames(specialty);
    };

    orderResourceData();
  }, [resourcesContent]);

  return Object.keys(resourcesContent).length > 0 ? (
    <section id={ui.resourceSectionContainer}>
      <header>
        <div className={ui.containerHeader}>
          <div className={ui.resourceTitle}>
            <button type="button" className={ui.backButton}>
              <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z"
                    fill="#33363F"
                  ></path>
                </g>
              </svg>
            </button>
            <h4>{specialtiesNames.join(" / ")}</h4>
            <p style={{ fontFamily: "PoppinsRegular" }}>Recursos</p>
          </div>
          <div className={ui.resourseFilters}>
            <div className={ui.filter}>
              <label htmlFor="resourseFilterOption">Filtrar por:</label>
              <select name="resourceFilterOption" id="resourceFilterOption" disabled>
                <option value="0" selected>
                  Tipo de documento
                </option>
              </select>
            </div>
            <div className={ui.turns}>
              <p>Vuelta</p>
              <div className={ui.checkboxLabel}>
                <input type="checkbox" name="firstTurn" id="firstTurn" />
                <label htmlFor="turn">1ra</label>
              </div>
              <div className={ui.checkboxLabel}>
                <input type="checkbox" name="secondTurn" id="secondTurn" />
                <label htmlFor="turn">2da</label>
              </div>
              <div className={ui.checkboxLabel}>
                <input type="checkbox" name="thirdTurn" id="thirdTurn" />
                <label htmlFor="turn">3ra</label>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={ui.containerBody}>
        {resumeData?.map(([specialty, data], index) => {
          return (
            <div key={index}>
              <h5 className={ui.specialyName}>{specialty}</h5>
              <ul className={ui.resourcesList}>
                {data?.map((resource) => {
                  return (
                    <li className={ui.resourceItem}>
                      <p>{resource.name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  ) : (
    <section
      id={ui.selectSpecialty}
      style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}
    >
      <span style={{ fontFamily: "PoppinsRegular", fontSize: "2rem", display: "block" }}>
        Selecciona una especialidad
      </span>
      <div style={{ width: "300px", height: "300px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <rect
            fill="#37A9FF"
            stroke="#37A9FF"
            stroke-width="5"
            stroke-linejoin="round"
            width="30"
            height="30"
            x="85"
            y="85"
            rx="0"
            ry="0"
          >
            <animate
              attributeName="rx"
              calcMode="spline"
              dur="1.4"
              values="15;15;5;15;15"
              keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="ry"
              calcMode="spline"
              dur="1.4"
              values="15;15;10;15;15"
              keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="height"
              calcMode="spline"
              dur="1.4"
              values="30;30;1;30;30"
              keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="y"
              calcMode="spline"
              dur="1.4"
              values="40;170;40;"
              keySplines=".6 0 1 .4;0 .8 .2 1"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </svg>
      </div>
    </section>
  );
};

export default ResourceContainer;

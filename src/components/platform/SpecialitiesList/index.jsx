import React, { useState } from "react";
import { Link } from "react-router-dom";
import ui from "./index.module.css";


const SpecialitiesList = ({
  displayContainer,
  handleDisplay = () => { },
  smallDevice
}) => {
  const [specialities, setSpecialities] = useState([
    { label: "Infectología", isActive: true },
    { label: "Cardiología", isActive: false },
    { label: "Dermatología", isActive: false },
    { label: "Gastroenterología", isActive: false },
    { label: "Nefrología", isActive: false },
    { label: "Neumología", isActive: false },
    { label: "Urgencias", isActive: false },
    { label: "Reumatología", isActive: false },
    { label: "Oftalmología", isActive: false },
    { label: "Hematología", isActive: false },
    { label: "Cirugía General", isActive: false },
    { label: "Psiquiatría", isActive: false },
    { label: "Inmunología", isActive: false }
  ]);

  const handleSelectSpeciality = (i) => {
    setSpecialities((prev) => {
      return prev?.map((item, index) => {
        return index === i
          ? { ...item, isActive: !item.isActive }
          : { ...item, isActive: false };
      })
    });
    handleDisplay();
  }

  if (displayContainer === true && smallDevice === true) return null;
  return (
    <aside >
      <div className={ui.specialitiesContainer}>
        <ul>
          <li className={ui.specialityItem}>
            <p>Especialidades</p>
          </li>
          {
            specialities?.map((speciality, indexSpeciality) => {
              const { isActive, label } = speciality;
              return (
                <li
                  key={indexSpeciality}
                  className={ui.specialityItem}
                  data-active={isActive}
                >
                  <Link
                    to="#"
                    className={ui.specialityLink}
                    onClick={(e) => handleSelectSpeciality(indexSpeciality)}
                  >
                    {label}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </aside>
  )
}

export default SpecialitiesList;
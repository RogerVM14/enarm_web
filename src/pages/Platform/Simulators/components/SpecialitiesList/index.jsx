import React, { useEffect, useState } from "react";
import ui from "./index.module.css";

const SpecialitiesList = ({ handleDisplay = () => {}, data, selectSpecialty }) => {
  const [specialities, setSpecialities] = useState([]);

  const handleSelectSpeciality = (i) => {
    setSpecialities((prev) => {
      return prev?.map((item, index) => {
        return index === i ? { ...item, isActive: !item.isActive } : { ...item, isActive: false };
      });
    });
    handleDisplay();
  };

  useEffect(() => {
    if (!data) return;
    const list = data.map((item) => ({ id: item.specialty_id, name: item.specialty_name, isActive: false }));
    setSpecialities(list);
  }, [data]);

  return (
    <aside>
      <div className={ui.specialitiesContainer}>
        <ul>
          <li className={ui.specialityItem}>
            <p>Especialidades</p>
          </li>
          {specialities?.map((speciality, index) => {
            const { isActive, name, id } = speciality;
            return (
              <li key={id} className={ui.specialityItem}>
                <button
                  type="button"
                  className={isActive ? ui.specialityButtonSelected : ui.specialityButton}
                  onClick={() => {
                    handleSelectSpeciality(index, id);
                    selectSpecialty(id);
                  }}
                >
                  <span>{name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default SpecialitiesList;

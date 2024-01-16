import React from 'react';
import { Link } from 'react-router-dom';

const StudyTablePlan = (props) => {

  const { deviceType, isSmart } = props;

  return (
    <div
      className={`study-table-plan ${deviceType}`}
      style={{ display: "flex", alignItems: "center", padding: "5px 0px", gap: "8px", justifyContent: 'center' }}>
      <i className="material-icons gray">import_contacts</i>
      <Link
        className="regular-14 black"
        to="#"
        target="_blank"
      >
        Abrir Tabla del Plan de Estudio
      </Link>
    </div>
  )
}

export default StudyTablePlan;
import React from 'react'

const Progress = (props) => {

  const { deviceType, isSmart } = props;
  return (
    <div className={`progress ${deviceType}`}>
      <div className={`progress-head ${deviceType}`}>
        <h3 className={isSmart ? "medium-14" : "semibold-16"}>Progreso</h3>
      </div>
      <div className={`progress-body ${deviceType}`}>
        <h3 className={`roboto-${isSmart ? "12 gray-textColor" : "14"}`}>Registra tu avance</h3>
        <div>
          <div className={`progress-bar ${deviceType}`}></div>
          <span className='regular-14' style={isSmart ? { width: "28px" } : {}}>5</span>
        </div>
      </div>
    </div>
  )
}

export default Progress;
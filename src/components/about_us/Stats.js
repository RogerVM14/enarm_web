import React from 'react';
import '../../css/about_us/Stats.css';

const Stats = ({ size }) => { 

    const stats_list = [
        { class: "special-stat", statValue: "26", statName: "ESPECIALIDADES" },
        { class: "mini-resume-stat", statValue: "360", statName: "MINI RESÚMENES" },
        { class: "flash-card-stat", statValue: "2800", statName: "FLASH CARDS" },
        { class: "video-time", statValue: "1500", statName: "HORAS DE VIDEO" },
        { class: "resumes", statValue: "400", statName: "RESÚMENES" },
        { class: "aceptation-percentage-stat", statValue: "83%", statName: "PORCENTAJE DE ACEPTACION REAL" }
    ]

    return (
        <div className='stats'>
            <div className="stats-container">
                <div className="container-body">
                    <div className="stats-items-container">
                        {
                            stats_list.map((item, index) => {
                                return (
                                    <div className="stat" key={index}>
                                        <div className="stat-circle spin">
                                            <div className="outer-circle"></div>
                                            <div className="inner-circle"></div>
                                            <div className="small-circle"></div>
                                        </div>
                                        <span className={`stat-number ${item.class}`}>{
                                            index === 3 ? (
                                                <>
                                                    <label className='plus'>+</label><label>{item.statValue}</label>
                                                </>                                                
                                            ) : ( 
                                                item.statValue
                                            )
                                        }</span>
                                        <span className='stat-name'>{item.statName}</span>
                                    </div> 
                                )
                            })
                        }  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
import React from 'react';
import '../css/Stats.css';

const Stats = () => {
    return (
        <div className='stats'>
            <div className="stats-container">
                <div className="container-body">
                    <div className="stats-items-container">
                        <div className="stat mb-96">
                            <div className="stat-circle">
                                <div className="outer-circle"></div>
                                <div className="inner-circle"></div>
                                <div className="small-circle"></div>
                                <span className="special-stat">26</span>
                            </div>
                            <span className='stat-name'>ESPECIALIDADES</span>
                        </div>
                        <div className="stat mb-96">
                            <div className="stat-circle">
                                <div className="outer-circle"></div>
                                <div className="inner-circle"></div>
                                <div className="small-circle"></div>
                                <span className="mini-resume-stat">360</span>
                            </div>
                            <span className='stat-name'>MINI RESÚMENES</span>
                        </div>
                        <div className="stat mb-96">
                            <div className="stat-circle">
                                <div className="outer-circle"></div>
                                <div className="inner-circle"></div>
                                <div className="small-circle"></div>
                                <span className="flash-card-stat">2800</span>
                            </div>
                            <span className='stat-name'>FLASH CARDS</span>
                        </div>
                        <div className="stat">
                            <div className="stat-circle">
                                <div className="outer-circle"></div>
                                <div className="inner-circle"></div>
                                <div className="small-circle"></div>
                                <span className="video-time">{'+\n1500'}</span>
                            </div>
                            <span className='stat-name'>HORAS DE VIDEO</span>
                        </div>
                        <div className="stat">
                            <div className="stat-circle">
                                <div className="outer-circle"></div>
                                <div className="inner-circle"></div>
                                <div className="small-circle"></div>
                                <span className="resumes">400</span>
                            </div>
                            <span className='stat-name'>RESÚMENES</span>
                        </div>
                        <div className="stat">
                            <div className="stat-circle">
                                <div className="outer-circle"></div>
                                <div className="inner-circle"></div>
                                <div className="small-circle"></div>
                                <span className='aceptation-percentage-stat'>83%</span>
                            </div>
                            <span className='stat-name'>PORCENTAJE DE ACEPTACION REAL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
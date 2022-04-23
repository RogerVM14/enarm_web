import React from 'react';
import '../../css/about_us/Stats.css';

const Stats = () => {
    return (
        <div className='stats'>
            <div className="stats-container">
                <div className="container-body">
                    <div className="stats-items-container">
                        <div className="stat">
                            <div className="stat-circle spin">
                                <div className="outer-circle"></div>
                                <div className="inner-circle"></div>
                                <div className="small-circle"></div>
                            </div>
                            <span className="stat-number special-stat">26</span>
                            <span className='stat-name'>ESPECIALIDADES</span>
                        </div>
                        <div className="stat">
                            <div className="stat-circle spin">
                                <div className="outer-circle"></div>
                                <div className="inner-circle"></div>
                                <div className="small-circle"></div>
                            </div>
                            <span className="stat-number mini-resume-stat">360</span>
                            <span className='stat-name'>MINI RESÚMENES</span>
                        </div>
                        <div className="stat">
                            <div className="stat-circle spin">
                                <div className="outer-circle"></div>
                                <div className="inner-circle"></div>
                                <div className="small-circle"></div>
                            </div>
                            <span className="stat-number flash-card-stat">2800</span>
                            <span className='stat-name'>FLASH CARDS</span>
                        </div>
                        <div className="stat">
                            <div className="stat-circle spin">
                                <div className="outer-circle"></div>
                                <div className="inner-circle"></div>
                                <div className="small-circle"></div>
                            </div>
                            <span className="stat-number video-time"><label className='plus'>+</label><label>1500</label></span>
                            <span className='stat-name'>HORAS DE VIDEO</span>
                        </div>
                        <div className="stat">
                            <div className="stat-circle spin">
                                <div className="outer-circle"></div>
                                <div className="inner-circle"></div>
                                <div className="small-circle"></div>
                            </div>
                            <span className="stat-number resumes">400</span>
                            <span className='stat-name'>RESÚMENES</span>
                        </div>
                        <div className="stat">
                            <div className="stat-circle spin">
                                <div className="outer-circle"></div>
                                <div className="inner-circle"></div>
                                <div className="small-circle"></div>
                            </div>
                            <span className='stat-number aceptation-percentage-stat'>83%</span>
                            <span className='stat-name'>PORCENTAJE DE ACEPTACION REAL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
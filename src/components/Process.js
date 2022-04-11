import React from 'react';
import '../css/Process.css';
import methodImg from '../assets/imgs/monis/Metodologia.png';

const Process = () => {
    return (
        <div className='process'>
            <div className="process-container">
                <div className="process-container-header">
                    <h1 className='title'>EL PROCESO</h1>
                    <h2 className='subtitle'>Metodología de estudio</h2>
                    <p>Con nuestra metodología de estudio hemos ayudado a más de 15 mil Médicos a ser especialistas</p>
                </div>
                <div className="process-container-body">
                    <img src={methodImg} alt="metodologia" />
                </div>
            </div>
        </div>
    )
}

export default Process;
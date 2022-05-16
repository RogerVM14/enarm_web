import React from 'react';
import methodImg from '../../assets/imgs/monis/Metodologia.png';
import '../../css/about_course/Process.css'; 

const Process = ({ size }) => { 
    return (
        <div className={`process ${size}`}>
            <div className="process-container">
                <div className="process-container-header">
                    <h1 className='tiny-blue-title text-center'>
                        EL PROCESO
                    </h1>
                    <h2 className='subtitle text-center'>
                        Metodología de estudio
                    </h2>
                    <p className='regular-14'>
                        Con nuestra metodología de estudio hemos 
                        ayudado a más de 15 mil Médicos a ser especialistas.
                    </p>
                </div>
                <div className="process-container-body">
                    <img src={methodImg} alt="metodologia" />
                </div>
            </div>
        </div>
    )
}

export default Process;
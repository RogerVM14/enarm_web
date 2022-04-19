import React from 'react'; 
import doctorsImage from '../assets/imgs/Dres/patient-satisfaction-survey_1.png';
import '../css/Promises.css';

const Promises = () => {
    return (
        <div className='promises'>
            <div className="promises-container reveal">
                <div className="promises-container-body">
                    <div className="image-container">
                        <img src={doctorsImage} alt="promises-img" />
                    </div>
                    <div className="promises-subcontainer">
                        <h1 className="tiny-blue-title text-center">PROMESA</h1>
                        <h2 className='subtitle text-center'>Nuestro sueño es que logres aprobar el ENARM</h2>
                        <p className='regular-14 text-center'>Junto con el equipo de médicos especialistas de los mejores hospitales del país, una comunidad vibrante de alumnos y un equipo de profesionales digitales, tenemos tu formación como prioridad.</p>
                        <button>
                            <span>Obtén tu prueba Gratis</span>
                            <i className='material-icons-outlined'>chevron_right</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promises;
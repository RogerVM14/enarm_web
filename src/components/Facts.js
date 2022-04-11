import React from 'react';
import '../css/Facts.css';
import badgeIcon from '../assets/svg/badge.svg';
import moneyIcon from '../assets/svg/Money.svg';
import peopleIcon from '../assets/svg/people.svg';
import crownIcon from '../assets/svg/crown.svg';

const Facts = () => {
    return (
        <div className='facts'>
            <div className="facts-container">
                <div className="container-head">
                    <h1 className="title">Hechos</h1>
                    <h2 className="subtitle">Los mejores beneficios sólo en Plataforma ENARM</h2>
                </div>
                <div className="container-body">
                    <div className='facts-items-container'>
                        <div className="item h209">
                            <div className="icon-circle-border">
                                <img src={badgeIcon} alt="badge-icon" /> 
                            </div>
                            <p className='w278 h141'>Más del 80% de nuestros alumnos aprueban su examen ENARM a la primera.</p>
                        </div>
                        <div className="item h209"> 
                            <div className="icon-circle-border">                            
                                <img src={moneyIcon} alt="money-icon" />
                            </div>
                            <p className='h141'>El mejor curso, a un<br></br>valor justo y competitivo.<br></br>La mejor inversión para tu futuro.</p>
                        </div>
                        <div className="item h213"> 
                            <div className="icon-circle-border">
                                <img src={crownIcon} alt="crown-icon" />
                            </div>  
                            <p className='h145'>El mejor contenido, simulador y asesorías personalizadas por residentes especialistas.</p>
                        </div>
                        <div className="item h213">
                            <div className="icon-circle-border">                            
                                <img src={peopleIcon} alt="people-icon" /> 
                            </div>
                            <p className='w824 h145'>20 médicos especialistas y toda una comunidad respaldan nuestro curso.</p>
                        </div>
                    </div>
                    <button>Incribirme ahora</button>
                </div>
            </div>
        </div>      
    )
}

export default Facts
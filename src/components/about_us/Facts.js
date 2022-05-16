import React from 'react';
import badgeIcon from '../../assets/svg/badge.svg';
import moneyIcon from '../../assets/svg/Money.svg';
import peopleIcon from '../../assets/svg/people.svg';
import crownIcon from '../../assets/svg/crown.svg';
import '../../css/about_us/Facts.css';

const Facts = ({ size }) => { 
    return (
        <div className={`facts bg-blue ${size}`}>
            <div className="facts-container">
                <div className="container-head">
                    <h1 className="tiny-blue-title text-center">Hechos</h1>
                    <h2 className="subtitle white text-center">Los mejores beneficios sólo en Plataforma ENARM</h2>
                </div>
                <div className="container-body">
                    <div className='facts-items-container'>
                        <div className="item">
                            <div className="icon-circle-border">
                                <img src={badgeIcon} alt="badge-icon" /> 
                            </div>
                            <p className={`${size === 'xxl' ? 'regular-23' : 'regular-20'} white text-center`}>
                                Más del 80% de nuestros alumnos aprueban su examen ENARM a la primera.
                            </p>
                        </div>
                        <div className="item"> 
                            <div className="icon-circle-border">                            
                                <img src={moneyIcon} alt="money-icon" />
                            </div>
                            <p className={`${size === 'xxl' ? 'regular-23' : 'regular-20'} white text-center`}>
                                El mejor curso, a un valor justo y competitivo. La mejor inversión para tu futuro.
                            </p>
                        </div>
                        <div className="item"> 
                            <div className="icon-circle-border">
                                <img src={crownIcon} alt="crown-icon" />
                            </div>  
                            <p className={`${size === 'xxl' ? 'regular-23' : 'regular-20'} white text-center`}>
                                El mejor contenido, simulador y asesorías personalizadas por residentes especialistas.
                            </p>
                        </div>
                        <div className="item">
                            <div className="icon-circle-border">                            
                                <img src={peopleIcon} alt="people-icon" /> 
                            </div>
                            <p className={`${size === 'xxl' ? 'regular-23' : 'regular-20'} white text-center`}>
                                20 médicos especialistas y toda una comunidad respaldan nuestro curso.
                            </p>
                        </div>
                    </div>
                    <button className='button-rounded-blue-48'>
                        <span className="button-text">
                            Incribirme ahora
                        </span>
                    </button>
                </div>
            </div>
        </div>      
    )
}

export default Facts
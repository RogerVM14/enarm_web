import React from 'react';
import '../css/Advantages.css';
import starBlueIcon from '../assets/icons/star-blue.png'
import Carrousel from './Carrousel';

const Advantages = () => {
    return (
        <div className='advantages'>
            <div className="advantages-container">
                <div className="advantages-container-header">
                    <h1 className="title">VENTAJAS</h1>
                    <h2 className="subtitle">Lo que nos hace diferentes</h2>
                </div>
                <div className="advantages-container-body">
                    <div className="advantages-items">
                        <div className="advantage">
                            <img src={starBlueIcon} alt="star-blue" />
                            <h1>Método de Estudio</h1>
                            <p>Nuestro equipo de expertos pedagógicos y residentes han diseñado el método más eficaz para que tengas éxito el día del ENARM.</p>
                        </div>
                        <div className="advantage">
                            <img src={starBlueIcon} alt="star-blue" />
                            <h1>Material de Estudio</h1>
                            <p>Nuestro material de estudio está enriquecido con Diagramas, Nemotecnias, Tablas y Puntos Clave que verás a la hora de tú ENARM.</p>
                        </div>
                        <div className="advantage">
                            <img src={starBlueIcon} alt="star-blue" />
                            <h1>SimuladorPro</h1>
                            <p>Practica y presenta el ENARM las veces que quieras con nuestro Simulador idéntico en formato y preguntas. ¡Domina el examen!</p>
                        </div>
                    </div> 
                </div>
            </div> 
            <div className="advantages-carrousel">
                <Carrousel />
            </div>
        </div>
    )
}

export default Advantages
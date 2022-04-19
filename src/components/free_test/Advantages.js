import React from 'react';
import '../../css/free_test/Advantages.css';
import starBlueIcon from '../../assets/icons/star-blue.png'
import Carrousel from '../Carrousel';

const Advantages = () => {
    return (
        <div className='advantages'>
            <div className="advantages-container">
                <div className="advantages-container-header">
                    <h1 className="tiny-blue-title text-center">VENTAJAS</h1>
                    <h2 className="subtitle text-center">Lo que nos hace diferentes</h2>
                </div>
                <div className="advantages-container-body">
                    <div className="advantages-items">
                        <div className="advantage">
                            <img src={starBlueIcon} alt="star-blue" />
                            <h1 className='medium-29'>Método de Estudio</h1>
                            <p className='regular-14 text-center'>Nuestro equipo de expertos pedagógicos y residentes han diseñado el método más eficaz para que tengas éxito el día del ENARM.</p>
                        </div>
                        <div className="advantage">
                            <img src={starBlueIcon} alt="star-blue" />
                            <h1 className='medium-29'>Material de Estudio</h1>
                            <p className='regular-14 text-center'>Nuestro material de estudio está enriquecido con Diagramas, Nemotecnias, Tablas y Puntos Clave que verás a la hora de tú ENARM.</p>
                        </div>
                        <div className="advantage">
                            <img src={starBlueIcon} alt="star-blue" />
                            <h1 className='medium-29'>SimuladorPro</h1>
                            <p className='regular-14 text-center'>Practica y presenta el ENARM las veces que quieras con nuestro Simulador idéntico en formato y preguntas. ¡Domina el examen!</p>
                        </div>
                    </div> 
                </div> 
                <div className="advantages-carrousel">
                    <Carrousel />
                </div>
            </div> 
        </div>
    )
}

export default Advantages
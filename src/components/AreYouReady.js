import React from 'react';
import '../css/AreYouReady.css';

const AreYouReady = () => {
    return (
        <div className='are-you-ready'>
            <div className="are-you-ready-container">
                <h1 className="title">¿Estás listo?</h1>
                <div className="sub-container">
                    <div className="cards">
                        <div className="card bg-white">
                            <h1>Curso ENARM 2022</h1>
                            <ul className="ls-none">
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green">done</i>
                                    <p className="text-list">Diseñado por 18 Residentes Jóvenes</p>
                                </li>
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green">done</i>
                                    <p className="text-list">Basados 100% en las GPC Mexicanas.</p>
                                </li>
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green">done</i>
                                    <p className="text-list">Porcentaje de aceptación del 80%.</p>
                                </li>
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green">done</i>
                                    <p className="text-list">Simulador-PRO idéntico al del ENARM.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="card bg-blue">
                        <ul className="ls-none">
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green">done</i>
                                    <p className="text-list white">100% de satisfacción de nuestros alumnos.</p>
                                </li>
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green">done</i>
                                    <p className="text-list white">Curso élite, un simulador avanzado y material de punta.</p>
                                </li>
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green">done</i>
                                    <p className="text-list white">Metodología de estudio didáctica actualizada.</p>
                                </li>
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green">done</i>
                                    <p className="text-list white">¡Pago seguro y acceso inmediato. Inicia hoy mismo!</p>
                                </li>
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green">done</i>
                                    <p className="text-list white">Experimenta simulacros con preguntas identicas a las que verás el día de tu ENARM.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AreYouReady;
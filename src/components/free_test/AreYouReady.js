import React, { useState, useEffect } from 'react';
import '../../css/free_test/AreYouReady.css';

const AreYouReady = ({ size, ismobile }) => {

    const [mobileDevice, setMobileDevice] = useState(true);  

    useEffect(() =>{
        const isMobileDevice = () =>{
            if(ismobile === 'true') {
                setMobileDevice(true)
                return;
            }
            setMobileDevice(false);
            return;
        }

        isMobileDevice();
    }, [ismobile]);

    return (
        <div className='are-you-ready'>
            <div className="are-you-ready-container">
                <h1 className="subtitle text-center">¿Estás listo?</h1>
                <div className="subcontainer">
                    <div className="cards">
                        <div className="card bg-white">
                            <h1 className='medium-29 text-center'>Curso ENARM 2022</h1>
                            <ul className="ls-none">
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green-check">done</i>
                                    <p className={ !mobileDevice ? "regular-16" : "regular-14" }>
                                        Diseñado por 18 Residentes Jóvenes
                                </p>
                                </li>
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green-check">done</i>
                                    <p className={ !mobileDevice ? "regular-16" : "regular-14" }
                                    >Basados 100% en las GPC Mexicanas.
                                </p>
                                </li>
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green-check">done</i>
                                    <p className={ !mobileDevice ? "regular-16" : "regular-14" }>
                                        Porcentaje de aceptación del 80%.
                                </p>
                                </li>
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green-check">done</i>
                                    <p className={ !mobileDevice ? "regular-16" : "regular-14" }>
                                        Simulador-PRO idéntico al del ENARM.
                                </p>
                                </li>
                            </ul>
                        </div>
                        <div className="card bg-blue">
                            <ul className="ls-none">
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green-check">done</i>
                                    <p className={`${ !mobileDevice ? "regular-16" : "regular-14" } white`}>
                                        100% de satisfacción de nuestros alumnos.
                                    </p>
                                </li>
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green-check">done</i>
                                    <p className={`${ !mobileDevice ? "regular-16" : "regular-14" } white`}>
                                        Curso élite, un simulador avanzado y material de punta.
                                    </p>
                                </li>
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green-check">done</i>
                                    <p className={`${ !mobileDevice ? "regular-16" : "regular-14" } white`}>
                                        Metodología de estudio didáctica actualizada.
                                    </p>
                                </li>
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green-check">done</i>
                                    <p className={`${ !mobileDevice ? "regular-16" : "regular-14" } white`}>
                                        ¡Pago seguro y acceso inmediato. Inicia hoy mismo!
                                    </p>
                                </li>
                                <li className='list-ip'>
                                    <i className="material-icons-outlined green-check">done</i>
                                    <p className={`${ !mobileDevice ? "regular-16" : "regular-14" } white`}>
                                        Experimenta simulacros con preguntas identicas a las que verás el día de tu ENARM.
                                    </p>
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
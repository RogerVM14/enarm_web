import React from 'react';
import '../css/Witness.css';
import Carrousel from './Carrousel';

const Witness = () => {
    return (
        <div className='witness'>
            <div className='witness-container'>
                <div className='witness-container-header'> 
                    <div className='witness-carrousel'>
                        <Carrousel /> 
                    </div>
                </div>
                <div className='witness-container-body'>
                    <h1 className='witness-title reveal'>¿Estás listo?</h1>
                    <div className='body-sub_container bg-white'>
                        <h2>Hechos que te respaldan en plataforma ENARM</h2>
                        <button className='witness-button-inscription'>Inscribirme ahora</button>
                    </div>
                    <div className='body-sub_container bg-blue'>
                        <ul className='witness-list'>
                            <li>
                                <i className='material-icons-outlined green'>done</i>
                                <p>100% de satisfacción de nuestros alumnos.</p>
                            </li>
                            
                            <li>
                                <i className='material-icons-outlined green'>done</i>
                                <p>Curso élite, un simulador avanzado y material de punta.</p>
                            </li>
                            
                            <li>
                                <i className='material-icons-outlined green'>done</i>
                                <p>Metodología de estudio didáctica actualizada.</p>
                            </li>
                            
                            <li>
                                <i className='material-icons-outlined green'>done</i>
                                <p>¡Pago seguro y acceso inmediato. Inicia hoy mismo!</p>
                            </li>
                            
                            <li>
                                <i className='material-icons-outlined green'>done</i>
                                <p>Experimenta simulacros con preguntas identicas a las que verás el día de tu ENARM.</p>
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Witness
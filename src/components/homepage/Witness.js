import React from 'react';
import '../../css/homepage/Witness.css';
import Carrousel from '../Carrousel';

const Witness = ({width}) => {  
    return (
        <div className='witness reveal'>
            <div className='witness-container'>
                <div className='witness-container-header'> 
                    <div className='witness-carrousel reveal'>
                        <Carrousel /> 
                    </div>
                </div>
                <div className='witness-container-body'>
                    <h1 className='subtitle black text-center reveal'>¿Estás listo?</h1>
                    <div className='body-sub_container bg-white reveal'>
                        <h2 className={`${width !== 'extra-large' ? 'medium-29 text-center' : 'medium-33 text-start'} black`}>Hechos que te respaldan en plataforma ENARM</h2>
                        <button className='button-rounded-blue-48'>
                            <span className="button-text">
                                Inscribirme ahora
                            </span>
                        </button>
                    </div>
                    <div className='body-sub_container bg-blue reveal'>
                        <ul className='witness-list'>
                            <li>
                                <i className='material-icons-outlined green'>done</i>
                                <p className={width !== 'extra-large' ? 'regular-14 white' : 'regular-16 white'}>100% de satisfacción de nuestros alumnos.</p>
                            </li>
                            
                            <li>
                                <i className='material-icons-outlined green'>done</i>
                                <p className={width !== 'extra-large' ? 'regular-14 white' : 'regular-16 white'}>Curso élite, un simulador avanzado y material de punta.</p>
                            </li>
                            
                            <li>
                                <i className='material-icons-outlined green'>done</i>
                                <p className={width !== 'extra-large' ? 'regular-14 white' : 'regular-16 white'}>Metodología de estudio didáctica actualizada.</p>
                            </li>
                            
                            <li>
                                <i className='material-icons-outlined green'>done</i>
                                <p className={width !== 'extra-large' ? 'regular-14 white' : 'regular-16 white'}>¡Pago seguro y acceso inmediato. Inicia hoy mismo!</p>
                            </li>
                            
                            <li>
                                <i className='material-icons-outlined green'>done</i>
                                <p className={width !== 'extra-large' ? 'regular-14 white' : 'regular-16 white'}>Experimenta simulacros con preguntas identicas a las que verás el día de tu ENARM.</p>
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Witness
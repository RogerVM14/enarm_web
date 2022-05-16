import React, { useState, useEffect } from 'react';
import Carrousel from '../Carrousel';
import '../../css/homepage/Witness.css';

const Witness = ({size, ismobile}) => {

    const [mobileDevice, setMobileDevice] = useState(true);

    useEffect(() => {
        const isMobileDevice = () => {
            if(ismobile === 'true') {
                setMobileDevice(true)
                return;
            }
            setMobileDevice(false);
            return;
        }

        isMobileDevice(); 
    }, [ismobile]);
      
    const witness_list = [
        '100% de satisfacción de nuestros alumnos.',
        'Curso élite, un simulador avanzado y material de punta.',
        'Metodología de estudio didáctica actualizada.', 
        '¡Pago seguro y acceso inmediato. Inicia hoy mismo!',
        'Experimenta simulacros con preguntas identicas a las que verás el día de tu ENARM.'
    ]
    
    return (
        <div className={`witness ${size} reveal`}>
            <div className='witness-container'>
                <div className='witness-container-header'> 
                    <div className='witness-carrousel reveal'>
                        <Carrousel /> 
                    </div>
                </div>
                { 
                    !['xs', 'sm'].includes(size) && (
                        <h1 className='subtitle black text-center reveal'>¿Estás listo?</h1>
                    )
                }
                <div className='witness-container-body'>
                    { 
                        ['xs', 'sm'].includes(size) && (
                            <h1 className='subtitle black text-center reveal'>¿Estás listo?</h1>
                        )
                    }
                    <div className='body-sub_container bg-white reveal'>
                        <h2 className={`${mobileDevice ? 'medium-29 text-center' : 'medium-33 text-start'} black`}>Hechos que te respaldan en plataforma ENARM</h2>
                        <button className='button-rounded-blue-48'>
                            <span className="button-text">
                                Inscribirme ahora
                            </span>
                        </button>
                    </div>
                    <div className='body-sub_container bg-blue reveal'>
                        <ul className='witness-list'>
                            {
                                witness_list.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <i className='material-icons-outlined green-check'>done</i>
                                            <p className={mobileDevice ? 'regular-14 white' : 'regular-16 white'}>
                                                {item}
                                            </p>
                                        </li> 
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Witness;
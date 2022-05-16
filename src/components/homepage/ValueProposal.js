import React, { useState, useEffect } from 'react';
import '../../css/homepage/ValueProposal.css';

const ValueProposal = ({size, ismobile}) => {

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
    

    return (
        <div className={`value_proposal ${size}`}>
            <div className='value_proposal-container'>
                <div className='value_proposal-item'>
                    <div className='item-icon-container margin-center'>
                        <span></span> 
                        <i className='material-icons-outlined'>star_border</i>
                    </div>
                    <h2 className={`${mobileDevice ? 'medium-29' : 'medium-33'} white text-center`}> Residentes exitosos </h2>
                    <p className={`${mobileDevice ? 'regular-14' : 'regular-16'} white text-center`}>
                        Asesoria de mas de 20 residentes exitosos de todo el paso que estan llistos para apoyarte de forma continua.
                    </p>
                </div>
                <div className='value_proposal-item'>
                    <div className='item-icon-container'>
                        <span></span> 
                        <i className='material-icons-outlined'>star_border</i>
                    </div>
                    <h2 className={`${mobileDevice ? 'medium-29' : 'medium-33'} white text-center`}>Aprobación</h2>
                    <p className={`${mobileDevice ? 'regular-14' : 'regular-16'} white text-center`}>
                        Mas del 80% de los alumnos inscritos, aprueban su ENARM a la primera.
                    </p>
                </div>
                <div className='value_proposal-item'>
                    <div className='item-icon-container'>
                        <span></span> 
                        <i className='material-icons-outlined'>star_border</i>
                    </div>
                    <h2 className={`${mobileDevice ? 'medium-29' : 'medium-33'} white text-center`}>Flexible</h2>
                    <p className={`${mobileDevice ? 'regular-14' : 'regular-16'} white text-center`}>
                        Cuando quieras y desde dónde estés, podrás preparte de manera efectiva desde cualquier dispositivo.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ValueProposal
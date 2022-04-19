import React from 'react';
import '../../css/homepage/ValueProposal.css';

const ValueProposal = ({width}) => {
    return (
        <div className='value_proposal'>
            <div className='value_proposal-container'>
                <div className='value_proposal-item'>
                    <div className='item-icon-container margin-center'>
                        <span></span> 
                        <i className='material-icons-outlined'>star_border</i>
                    </div>
                    <h2 className={`${width !== 'extra-large' ? 'medium-29' : 'medium-33'} white text-center`}>Residentes exitosos</h2>
                    <p className={`${width !== 'extra-large' ? 'regular-14 white' : 'regular-16 white'} text-center`}>Asesoria de mas de 20 residentes exitosos de todo el paso que estan llistos para apoyarte de forma continua.</p>
                </div>
                <div className='value_proposal-item'>
                    <div className='item-icon-container'>
                        <span></span> 
                        <i className='material-icons-outlined'>star_border</i>
                    </div>
                    <h2 className={`${width !== 'extra-large' ? 'medium-29' : 'medium-33'} white text-center`}>Aprobación</h2>
                    <p className={`${width !== 'extra-large' ? 'regular-14 white' : 'regular-16 white'} text-center`}>Mas del 80% de los alumnos inscritos, aprueban su ENARM a la primera.</p>
                </div>
                <div className='value_proposal-item'>
                    <div className='item-icon-container'>
                        <span></span> 
                        <i className='material-icons-outlined'>star_border</i>
                    </div>
                    <h2 className={`${width !== 'extra-large' ? 'medium-29' : 'medium-33'} white text-center`}>Flexible</h2>
                    <p className={`${width !== 'extra-large' ? 'regular-14 white' : 'regular-16 white'} text-center`}>Cuando quieras y desde dónde estés, podrás preparte de manera efectiva desde cualquier dispositivo.</p>
                </div>
            </div>
        </div>
    )
}

export default ValueProposal
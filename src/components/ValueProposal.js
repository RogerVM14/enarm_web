import React from 'react';
import '../css/ValueProposal.css';

const ValueProposal = () => {
    return (
        <div className='value_proposal'>
            <div className='value_proposal-container'>
                <div className='value_proposal-item'>
                    <div className='item-icon-container'>
                        <span></span> 
                        <i className='material-icons-outlined'>star_border</i>
                    </div>
                    <h2>Residentes exitosos</h2>
                    <p>Asesoria de mas de 20 residentes exitosos de todo el paso que estan llistos para apoyarte de forma continua.</p>
                </div>
                <div className='value_proposal-item'>
                    <div className='item-icon-container'>
                        <span></span> 
                        <i className='material-icons-outlined'>star_border</i>
                    </div>
                    <h2>Aprobación</h2>
                    <p>Mas del 80% de los alumnos inscritos, aprueban su ENARM a la primera.</p>
                </div>
                <div className='value_proposal-item'>
                    <div className='item-icon-container'>
                        <span></span> 
                        <i className='material-icons-outlined'>star_border</i>
                    </div>
                    <h2>Flexible</h2>
                    <p>Cuando quieras y desde dónde estés, podrás preparte de manera efectiva desde cualquier dispositivo.</p>
                </div>
            </div>
        </div>
    )
}

export default ValueProposal
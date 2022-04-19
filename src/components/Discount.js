import React from 'react';
import doctorImageSmall from '../assets/imgs/Dres/52658390_2126718167364767_1182669139588677632_n.png';
import doctorImageMedium from '../assets/imgs/Dres/52658390_2126718167364767_1182669139588677632_n-medium.png'; 
import '../css/Discount.css';

const Discount = ({width}) => {
 
    const setApropiadeImage = () => {
        if(width === 'small') return doctorImageSmall; 
        if(width === 'medium') return doctorImageMedium;
        if(width === 'large') return doctorImageMedium;
        if(width === 'extra-large') return doctorImageSmall;
    }

    return (
        <div className='discount'>
            <div className='discount-container reveal'>
                <div className='sub-container'>
                    <h2 className='tiny-blue-title'>Descuento</h2>
                    <h2 className={`regular-${width !== 'extra-large' ? '14' : '16'}`}>Obten una beca del <strong>40% del descuento.</strong></h2>
                    <h1 className={width !== 'extra-large' ? 'subtitle' : 'bold-39'}>MX$6,000</h1>
                    <h3 className={`regular-${width !== 'extra-large' ? '14' : '16'} red`}>MX $10,000</h3>
                    <ul className='discount-list'>
                        <li>
                            <i className='material-icons-outlined'>done</i>
                            <p className={ width !== 'extra-large' ? 'regular-14' : 'regular-16' }>8 de cada 10 estudiantes logran aprobar el ENARM a la primera.</p>
                        </li>
                        <li>
                            <i className='material-icons-outlined'>done</i>
                            <p className={ width !== 'extra-large' ? 'regular-14' : 'regular-16' }>Hemos ayudado a mas de 20 mil médicos a ser especialistas.</p>
                        </li>
                        <li>
                            <i className='material-icons-outlined'>done</i>
                            <p className={ width !== 'extra-large' ? 'regular-14' : 'regular-16' }>Contenido 100% actualizado, original y didáctico</p>
                        </li>
                    </ul>
                    <button className='suscribe-now button-rounded-blue-48'>
                        <span className='button-text'>Inscribirme ahora</span>
                    </button>
                </div>
                <div className='sub-container image-container'>
                    <img src={setApropiadeImage()} alt='doctor-pic'/>
                </div>
            </div>
        </div>
    )
}

export default Discount

import React from 'react';
import dresImg from '../assets/imgs/Dres/52658390_2126718167364767_1182669139588677632_n.png';
import '../css/Discount.css';

const Discount = () => {
    return (
        <div className='discount'>
            <div className='discount-container reveal'>
                <div className='sub-container'>
                    <img src={dresImg} alt=''/>
                </div>
                <div className='sub-container'>
                    <h2 className='title'>Descuento</h2>
                    <h2 className='subtitle'>Obten una beca del <strong>40% del descuento.</strong></h2>
                    <h1 className='cost'>MX$6,000</h1>
                    <h3 className='cost-discount'>MX $10,000</h3>
                    <ul className='discount-list'>
                        <li>
                            <i className='material-icons-outlined'>done</i>
                            <p>8 de cada 10 estudiantes logran aprobar el ENARM a la primera.</p>
                        </li>
                        <li>
                            <i className='material-icons-outlined'>done</i>
                            <p>Hemos ayudado a mas de 20 mil médicos a ser especialistas.</p>
                        </li>
                        <li>
                            <i className='material-icons-outlined'>done</i>
                            <p>Contenido 100% actualizado, original y didáctico</p>
                        </li>
                    </ul>
                    <button className='suscribe-now'>
                        Inscribirme ahora
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Discount
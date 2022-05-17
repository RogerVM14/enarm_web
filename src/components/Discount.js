import React, { useEffect, useState } from 'react';
import doctorImageSmall from '../assets/imgs/Dres/52658390_2126718167364767_1182669139588677632_n.png';
import doctorImageMedium from '../assets/imgs/Dres/52658390_2126718167364767_1182669139588677632_n-medium.png'; 
import '../css/Discount.css';

const Discount = ({size, ismobile}) => {
 
    const setApropiadeImage = () => {
        if(size === 'sm' | size === 'xs') return doctorImageMedium; 
        if(size === 'md') return doctorImageMedium;
        if(size === 'lg') return doctorImageMedium;
        if(size === 'xl') return doctorImageSmall;
        if(size === 'xxl') return doctorImageSmall;
    }

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
        <div className={`discount ${size}`}>
            <div className='discount-container reveal'>
                <div className='sub-container'>
                    <h2 className='tiny-blue-title'>Descuento</h2>
                    <h2 className={`regular-${mobileDevice ? '14' : '16'}`}>Obten una beca del <strong>40% del descuento.</strong></h2>
                    <div className="ammount">
                        <h1 className={mobileDevice ? 'subtitle' : 'bold-39'}>MX$6,000</h1>
                        <h3 className={`regular-${mobileDevice ? '14' : '16'} red`} style={{ textDecoration: "line-through"}}>MX $10,000</h3>
                    </div>
                    <ul className='discount-list'>
                        <li>
                            <i className='material-icons-outlined green-check'>done</i>
                            <p className={ mobileDevice ? 'regular-14' : 'regular-16' }>
                                8 de cada 10 estudiantes logran aprobar el ENARM a la primera.
                            </p>
                        </li>
                        <li>
                            <i className='material-icons-outlined green-check'>done</i>
                            <p className={ mobileDevice ? 'regular-14' : 'regular-16' }>
                                Hemos ayudado a mas de 20 mil médicos a ser especialistas.
                            </p>
                        </li>
                        <li>
                            <i className='material-icons-outlined green-check'>done</i>
                            <p className={ mobileDevice ? 'regular-14' : 'regular-16' }>
                                Contenido 100% actualizado, original y didáctico
                            </p>
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

import React from 'react';
import '../css/Hero.css';
import doctorImage from '../assets/imgs/Dres/hero_doctor.png';
import logoHero from '../assets/imgs/Logos_plata/logo-hero.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='bg-rectangle'></div>
            <div className='hero-container'>
                <div className='description-container'>
                    <h1 className='title'>¿Te gustaría aprobar el ENARM a la Primera?</h1>
                    <h2 className='subtitle'>
                        Ya es posible con:
                        <img className='logo' src={logoHero} alt='logo-hero' />
                    </h2>
                    <button className='suscribe-now'>Inscribete ahora</button>
                    <ul className='hero-list ls-none'>
                        <li>
                            <i className='material-icons-outlined'>done</i>
                            <p>Diseñado por 18 Residentes Jóvenes</p>
                        </li>
                        <li>
                            <i className='material-icons-outlined'>done</i>
                            <p>BAsados 100% en las GPC Mexicanas.</p>
                        </li>
                        <li>
                            <i className='material-icons-outlined'>done</i>
                            <p>Porcentaje de aceptación del 80%</p>
                        </li>
                        <li>
                            <i className='material-icons-outlined'>done</i>
                            <p>Simulador-PRO idéntico al del ENARM.</p>
                        </li>
                        <li>
                            <i className='material-icons-outlined'>done</i>
                            <p>Ingreso a comunidad exclusiva de Residentes.</p>
                        </li>
                    </ul>
                </div>         
                <div className='doctor-image'>
                    <img src={doctorImage} alt='doctor'/>
                    <div className='circle-with-borders'></div>
                </div>
            </div>   
        </div>
    )
}

export default Hero;
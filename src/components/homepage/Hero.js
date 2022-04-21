import React from 'react';
import '../../css/homepage/Hero.css';
import doctorImage from '../../assets/imgs/Dres/hero_doctor.png';
import logoHero from '../../assets/imgs/Logos_plata/logo-hero.png'; 

const Hero = ({width}) => {

    setTimeout(() => {
        const items = document.querySelectorAll(".reveal-load");
        items.forEach(item => {
            item.classList.add("active");
        })
        
        const body = document.querySelector("body");
        body.scrollTop = 0;
    }, 100);

    
    const heroList = [
        'Diseñado por 18 Residentes Jóvenes.',
        'Basados 100% en las GPC Mexicanas.',
        'Porcentaje de aceptación del 80%.',
        'Simulador-PRO idéntico al del ENARM.',
        'Ingreso a comunidad exclusiva de Residentes.'
    ] 
 
    return (
        <div className={`hero ${width}`}>
            <div className='bg-rectangle'></div>
            <div className='hero-container'>
                <div className='description-container reveal-load'>
                    <h1 className={`hero-title ${width !== 'extra-large' ? 'title text-center' : 'regular-47'}`}>¿Te gustaría aprobar el ENARM a la Primera?</h1>
                    <h2 className={`${width !== 'extra-large' ? 'regular-14 text-center' : 'bold-16 hero-subtitle'}`}>
                        <span>Ya es posible con:</span>
                        <img className='logo' src={logoHero} alt='logo-hero' />
                    </h2>
                    <button className='button-rounded-blue-48 mb-32'>
                        <span className='button-text'>Inscribete ahora</span>
                    </button>
                    <ul className='hero-list ls-none'>
                        {
                            heroList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <i className='material-icons-outlined'>done</i>
                                        <p className={width !== 'extra-large' ? 'regular-14' : 'bold-16-nomb'}>{item}</p>
                                    </li>
                                )
                            })
                        } 
                    </ul>
                </div>         
                <div className='doctor-image reveal-load'>
                    <img src={doctorImage} alt='doctor'/>
                    <div className='circle-with-borders'></div>
                </div>
            </div>   
        </div>
    )
}

export default Hero;
import React, { useState, useEffect } from 'react';
import doctorImage from '../../assets/imgs/Dres/hero_doctor.png';
import logoHero from '../../assets/imgs/Logos_plata/logo-hero.png'; 
import '../../css/homepage/Hero.css';

const Hero = ({size, ismobile}) => {

    setTimeout(() => {
        const items = document.querySelectorAll(".reveal-load");
        items.forEach(item => {
            item.classList.add("active");
        })
        
        const body = document.querySelector("body");
        body.scrollTop = 0;
    }, 100);


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
    
    const heroList = [
        'Diseñado por 18 Residentes Jóvenes.',
        'Basados 100% en las GPC Mexicanas.',
        'Porcentaje de aceptación del 80%.',
        'Simulador-PRO idéntico al del ENARM.',
        'Ingreso a comunidad exclusiva de Residentes.'
    ] 
 
    return (
        <div className={`hero ${size}`}>
            { ["xl","xxl"].includes(size) && ( <div className='bg-rectangle'></div> ) }
            <div className='hero-container'>
                <div className='description-container reveal-load'>
                    <h1 className={`hero-title ${ mobileDevice ? 'title text-center' : 'regular-47'} fade-in-title`}>
                        <span className={mobileDevice ? "bold-44" : "regular-47"}>¿Te</span> 
                        <span className={mobileDevice ? "bold-44" : "regular-47"}>gustaría</span> 
                        <span className={mobileDevice ? "bold-44" : "regular-47"}>aprobar</span> 
                        <span className={mobileDevice ? "bold-44" : "regular-47"}>el</span> 
                        <span className={mobileDevice ? "bold-44" : "regular-47"}>ENARM</span> 
                        <span className={mobileDevice ? "bold-44" : "regular-47"}>a</span> 
                        <span className={mobileDevice ? "bold-44" : "regular-47"}>la</span> 
                        <span className={mobileDevice ? "bold-44" : "regular-47"}>Primera?</span> 
                    </h1>
                    { mobileDevice ? (
                        <>
                            <span className='regular-14'>Ya es posible con:</span>
                            <img className='logo' src={logoHero} alt='logo-hero' />
                        </>
                    ) : (
                        <h2 className={`${ mobileDevice ? 'regular-14 text-center' : 'bold-16 hero-subtitle'}`}>
                            <span>Ya es posible con:</span>
                            <img className='logo' src={logoHero} alt='logo-hero' />
                        </h2>
                    )}
                    <button className='button-rounded-blue-48'>
                        <span className='button-text'>Inscribete ahora</span>
                    </button>
                    <ul className='hero-list'>
                        {
                            heroList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <i className='material-icons-outlined green-check'>done</i>
                                        <p className={ mobileDevice ? 'regular-14' : 'bold-16-nomb'}>{item}</p>
                                    </li>
                                )
                            })
                        } 
                    </ul>
                </div>         
                <div className='doctor-image reveal-load'>
                    <div className="hero-image-container">
                        <img src={doctorImage} alt='doctor'/>
                        <div className='circle-with-borders'></div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Hero;
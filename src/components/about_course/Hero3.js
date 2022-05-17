import React, { useState, useEffect } from 'react';
import bgImageMedium from '../../assets/imgs/Dres/ymlp.png';
import bgImageSmall from '../../assets/imgs/Dres/ymlp-xs-sm.png';
import '../../css/about_course/Hero3.css'; 

const Hero3 = ({ size, ismobile }) =>{

    const [mobileDevice, setMobileDevice] = useState(true);

    useEffect(() =>{
        const isMobileDevice = () =>{
            if(ismobile === 'true') {
                setMobileDevice(true)
                return;
            }
            setMobileDevice(false);
            return;
        }

        isMobileDevice();
    }, [ismobile]);
 
    setTimeout(() => {
        const items = document.querySelectorAll(".reveal-load");
        items.forEach(item => {
            item.classList.add("active");
        })
        
        const body = document.querySelector("body");
        body.scrollTop = 0;
    }, 100);
 
    const imageContainer = () => {
        if(size === 'xs') return `url('${bgImageSmall}')`;
        if(['sm', 'md'].includes(size)) return `url('${bgImageMedium}')`;
        if(!mobileDevice) return `url('${bgImageMedium}')`;
    }

    return (
        <div className={`hero-3 ${size}`}>
            { !mobileDevice && (<div className="bg-image" style={ { backgroundImage: imageContainer() } }></div>)}
            <div className="hero-3-container">
                <div className="gradient"></div>
                { !mobileDevice && ( <div className="triangle"></div> ) }
                <div className="hero-3-container-header reveal-load">
                    <h1 className={`${mobileDevice ? 'text-center' : ''} fade-in-title`}>
                        <span className={mobileDevice ? 'bold-39': 'regular-47'}>Obtén</span>
                        <span className={mobileDevice ? 'bold-39': 'regular-47'}>un</span>
                        <span className={mobileDevice ? 'bold-39': 'regular-47'}>seguimiento</span>
                        <span className={mobileDevice ? 'bold-39': 'regular-47'}>personalizado</span>
                        <span className={mobileDevice ? 'bold-39': 'regular-47'}>e</span>
                        <span className={mobileDevice ? 'bold-39': 'regular-47'}>intensivo</span>
                    </h1>
                    <p className={mobileDevice ? 'regular-14 text-center' : 'bold-16'}>
                        Este año queremos que más del 85% de nuestros alumnos aprueben el ENARM en su primer intento.
                    </p>
                </div> 
                <div className="hero-3-container-body reveal-load">
                    <button className='button-rounded-blue-48'>
                        <span className="button-text">
                            Obtener Curso
                        </span>
                    </button>
                    <button className='only-letters'>
                        <span>Ver Contenido del Curso</span>
                        <i className='material-icons-outlined'>chevron_right</i>
                    </button>
                </div> 
                {mobileDevice && (<div className="bg-image" style={ { backgroundImage: imageContainer() } }></div>)}
            </div>
        </div>
    )
}

export default Hero3;
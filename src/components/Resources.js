import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Resources.css';

const Resources = ({size, ismobile}) => {

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
        <div className={`resources ${size}`}>
            <div className='resources-container'>
                <div className='resources-header'>
                    <h1 className='tiny-blue-title text-center'>Recursos</h1>
                    <h1 className={`${mobileDevice ? 'subtitle' : 'bold-39'} resources-subtitle text-center reveal`}>
                        Tenemos un gran repertorio de recursos listos para ti
                    </h1> 
                </div>
                <div className='resources-body'>
                    <div className='resources-item'>
                        <i className="material-icons-outlined item-icon bg-green">play_arrow</i>
                        <p className={ mobileDevice ? 'regular-20 text-center' : 'regular-23'}>Vive la experiencia ENARM gratis</p>
                        <Link className='blue-link link-with-icon' to="#">Prueba Gratis <i className='material-icons-outlined'>chevron_right</i></Link>
                    </div>
                    <div className='resources-item'>
                        <i className="material-icons-outlined item-icon bg-blue">search</i>
                        <p className={ mobileDevice? 'regular-20 text-center' : 'regular-23'}>Guía descriptiva del curso 2021</p>
                        <Link className='blue-link link-with-icon' to="#">Descargar <i className='material-icons-outlined'>chevron_right</i></Link>
                    </div>
                    <div className='resources-item'>
                        <i className="material-icons-outlined item-icon bg-gray">tips_and_updates</i>
                        <p className={ mobileDevice? 'regular-20 text-center' : 'regular-23'}> Abarcamos todas las exigencias del ENARM</p>
                        <Link className='blue-link link-with-icon' to="#">Iniciar hoy mismo <i className='material-icons-outlined'>chevron_right</i></Link>
                    </div>
                    <div className='resources-item'>
                        <i className="material-icons-outlined item-icon bg-orange">school</i>
                        <p className={ mobileDevice? 'regular-20 text-center' : 'regular-23'}>Conoce nuestra metodología de estudio</p>
                        <Link className='blue-link link-with-icon' to="#">Ver método de estudio <i className='material-icons-outlined'>chevron_right</i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources
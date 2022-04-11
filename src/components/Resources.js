import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Resources.css';

const Resources = () => {
    return (
        <div className='resources'>
            <div className='resources-container'>
                <div className='resources-header'>
                    <h1 className='title'>Recursos</h1>
                    <h1 className='subtitle reveal'>Tenemos un gran repertorio de recursos listos para ti</h1> 
                </div>
                <div className='resources-body'>
                    <div className='resources-item'>
                        <i className="material-icons-outlined item-icon bg-green">play_arrow</i>
                        <p>Vive la experiencia ENARM gratis</p>
                        <Link className='button-link' to="#">Prueba Gratis <i className='material-icons-outlined'>chevron_right</i></Link>
                    </div>
                    <div className='resources-item'>
                        <i className="material-icons-outlined item-icon bg-blue">search</i>
                        <p>Guía descriptiva del curso 2021</p>
                        <Link className='button-link' to="#">Descargar <i className='material-icons-outlined'>chevron_right</i></Link>
                    </div>
                    <div className='resources-item'>
                        <i className="material-icons-outlined item-icon bg-gray">tips_and_updates</i>
                        <p> Abarcamos todas las exigencias del ENARM</p>
                        <Link className='button-link' to="#">Iniciar hoy mismo <i className='material-icons-outlined'>chevron_right</i></Link>
                    </div>
                    <div className='resources-item'>
                        <i className="material-icons-outlined item-icon bg-orange">school</i>
                        <p>Conoce nuestra metodología de estudio</p>
                        <Link className='button-link' to="#">Ver método de estudio <i className='material-icons-outlined'>chevron_right</i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources
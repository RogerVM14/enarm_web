import React from 'react';
import '../css/Hero3.css';
// import bgDoctors from '../assets/imgs/Dres/ymlp.png'

const Hero3 = () => {
    return (
        <div className='hero-3'>
            <div className="hero-3-container">
                <div className="bg-image"></div>
                <div className="gradient"></div>
                <div className="triangle"></div>
                <div className="sub-container">
                    <h1>Obtén un seguimiento personalizado e intensivo</h1>
                    <p>Este año queremos que más del 85% de nuestros alumnos aprueben el ENARM en su primer intento. </p>
                    <button className='rounded-blue'>Obtener Curso</button>
                    <button className='only-letters'>
                        <span>Ver Contenido del Curso</span>
                        <i className='material-icons-outlined'>chevron_right</i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero3;
import React from 'react';
import '../css/Hero2.css';
import drImage from '../assets/imgs/Dres/sepidbaft.ir6_.png'

const Hero2 = () => {
    return (
        <div className='hero-2'>
            <div className="hero-2-container">
                <div className="container-body">
                    <div className="hero-2-image">
                        <img src={drImage} alt="hero-2-img" />
                    </div>
                    <div className="hero-2-subcontainer">
                        <h1>Conoce el curso Online #1, el más completo y exitoso de todos.</h1>
                        <p>Integrado por un Equipo de más de 20 Médicos Especialistas, de casi todas las áreas de la medicina, que te llevarán de la mano para aprobar tu ENARM a la primera.</p>
                        <button>Inscribete Ahora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2
import React from 'react';
import imageDoctor from '../../assets/imgs/Dres/stock-photo-handsome-doctor-showing-thumb-smiling-small.png';
import imageDoctorXL from '../../assets/imgs/Dres/stock-photo-handsome-doctor-showing-thumb-smiling-true.png';  
import '../../css/free_test/Hero6.css';

const Hero6 = ({ size }) => { 

    setTimeout(() => {
        const items = document.querySelectorAll(".reveal-load");
        items.forEach(item => {
            item.classList.add("active");
        })
        
        const body = document.querySelector("body");
        body.scrollTop = 0;
    }, 100);

    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='hero-6' >
            <div className="triangle"></div>
            <div className="gradient"></div>
            <div className="hero-6-container">
                <div className="hero-6-container-header">
                    <h1 className='title text-center reveal-load fade-in-title'>
                        <span className={['lg', 'xl', 'xxl'].includes(size) ? 'bold-47' : 'bold-44'}>Tu</span>
                        <span className={['lg', 'xl', 'xxl'].includes(size) ? 'bold-47' : 'bold-44'}>curso</span>
                        <span className={['lg', 'xl', 'xxl'].includes(size) ? 'bold-47' : 'bold-44'}>de</span>
                        <span className={['lg', 'xl', 'xxl'].includes(size) ? 'bold-47' : 'bold-44'}>Plataforma</span>
                        <span className={['lg', 'xl', 'xxl'].includes(size) ? 'bold-47' : 'bold-44'}>ENARM</span>
                        <span className={['lg', 'xl', 'xxl'].includes(size) ? 'bold-47' : 'bold-44'}>comienza</span>
                        <span className={['lg', 'xl', 'xxl'].includes(size) ? 'bold-47' : 'bold-44'}>aquí</span>
                    </h1>
                    <p className='regular-14 text-center reveal-load'>
                        Tenemos a tu disposición una serie de recursos gratuitos 
                        para que puedas experiementar nuestro servicio inmediatamente.
                    </p>
                </div>
                <div className="hero-6-container-body">                    
                    <div className='hero-6-form'>
                        <form className='reveal-load' method='POST' onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label className='medium-14' htmlFor='name'>Nombre completo*</label>
                                <input type='text' placeholder='Nombre completo' name="name" inputMode='text'/>
                                <span className='red'>Error Message</span>
                            </div>
                            <div className='form-group'>
                                <label className='medium-14' htmlFor="email">Correo electrónico*</label>
                                <input type="text" placeholder='Correo electrónico' name="email" inputMode='email'/>
                                <span className='red'>Error Message</span>
                            </div>
                            <div className='whatsapp-input'>
                                <div className='form-group'>
                                    <label className='medium-14' htmlFor="whatsapp">Whatsapp <i>(opcional)</i></label>
                                    <input type="text" placeholder='Tu numero' name='whatsapp' inputMode='tel'/>
                                    <span className='red'>Error Message</span>
                                </div>
                                <button className='button-rounded-blue-48' type='submit'>
                                    <span className='button-text'>Comenzar Prueba</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div> 
                <div className="bg-image reveal-load">
                    <img src={ !['xl', 'xxl'].includes(size) ? imageDoctor : imageDoctorXL} alt="doctor-thumb-up" />
                </div> 
            </div> 
        </div>
    )
}

export default Hero6;
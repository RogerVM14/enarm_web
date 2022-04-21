import React from 'react';
import '../../css/free_test/Hero6.css';
import imageDoctor from '../../assets/imgs/Dres/stock-photo-handsome-doctor-showing-thumb-smiling-small.png';
import imageDoctorXL from '../../assets/imgs/Dres/stock-photo-handsome-doctor-showing-thumb-smiling-true.png';  

const Hero6 = ({width}) => {

    setTimeout(() => {
        const items = document.querySelectorAll(".reveal-load");
        items.forEach(item => {
            item.classList.add("active");
        })
        
        const body = document.querySelector("body");
        body.scrollTop = 0;
    }, 100);

    return (
        <div className='hero-6' >
            <div className="triangle"></div>
            <div className="hero-6-container">
                <div className="gradient"></div>
                <div className="hero-6-container-header">
                    <h1 className='title text-center reveal-load'>Tu curso de <br></br>Plataforma ENARM comienza aquí</h1>
                    <p className='regular-14 text-center reveal-load'>Tenemos a tu disposición una serie de recursos gratuitos para que puedas experiementar nuestro servicio inmediatamente.</p>
                </div>
                <div className="sub-container">                    
                    <div className='hero-6-form'>
                        <form className='reveal-load'>
                            <div className='form-group'>
                                <label className='medium-14' htmlFor='name'>Nombre completo*</label>
                                <input type='text' placeholder='Nombre completo' name="name" />
                                <span className='red'>Error Message</span>
                            </div>
                            <div className='form-group'>
                                <label className='medium-14' htmlFor="email">Correo electrónico*</label>
                                <input type="text" placeholder='Correo electrónico' name="email"/>
                                <span className='red'>Error Message</span>
                            </div>
                            <div className='whatsapp-input'>
                                <div className='form-group'>
                                    <label className='medium-14' htmlFor="whatsapp">Whatsapp <i>(opcional)</i></label>
                                    <input type="text" placeholder='Tu numero de Whatsapp' name='whatsapp'/>
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
                    <img src={width !== 'extra-large' ? imageDoctor : imageDoctorXL} alt="doctor-thumb-up" />
                </div>
            </div>
        </div>
    )
}

export default Hero6;
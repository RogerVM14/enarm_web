import React from 'react';
import '../css/Hero6.css';

const Hero6 = () => {
    return (
        <div className='hero-6'>
            <div className="hero-6-container"> 
                <div className="bg-image"></div>
                <div className="gradient"></div>
                <div className="triangle"></div>
                <div className="sub-container">
                    <h1 className='title'>Tu curso de <br></br>Plataforma ENARM comienza aquí</h1>
                    <p className='parraf'>Tenemos a tu disposición una serie de recursos gratuitos para que puedas experiementar nuestro servicio inmediatamente.</p>                   
                    <div className='hero-6-form'>
                        <form>
                            <div className='form-group'>
                                <label htmlFor='name'>Nombre completo*</label>
                                <input type='text' placeholder='Nombre completo' name="name" />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="email">Correo electrónico*</label>
                                <input type="text" placeholder='Correo electrónico' name="email"/>
                            </div>
                            <div className='whatsapp-input'>
                                <div className='form-group'>
                                    <label htmlFor="whatsapp">Whatsapp <i>(opcional)</i></label>
                                    <input type="text" placeholder='Tu numero de Whatsapp' name='whatsapp'/>
                                </div>
                                <button className='button-get-demo' type='submit'>Comenzar Prueba</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero6;
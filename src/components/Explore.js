import React from 'react';
import '../css/Explore.css';
import iconDrStar from '../assets/imgs/monis/PicsArt_09-18-11.18.png'
import iconDrTablet from '../assets/imgs/monis/PicsArt_09-18-11.21.png'
import iconDrPencil from '../assets/imgs/monis/PicsArt_09-21-10.28.png'

const Explore = () => {
    return (
        <div className='explore'>
            <div className='explore-container'>
                <div className='explore-container-head'>
                    <h1 className='explore-title'>EXPLORA</h1>
                    <h1 className='explore-subtitle'>Experimenta nuestra plataforma con el contenido gratuito que tenemos para ti</h1>
                </div>
                <div className='explore-container-body'>
                    <div className='explore-form'>
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
                                <button className='button-get-demo' type='submit'>Quiero mi Demo</button>
                            </div>
                        </form>
                    </div>
                    <div className='explore-cards'>
                        <div className='card-item'>
                            <div className='card-item-icon'>
                                <img className='doctor-icon' src={iconDrStar} alt="icon-card" />
                            </div>
                            <div className='card-item-text'>
                                <h1>Primera ventaja</h1>
                                <p>Esta tarjeta debería destacar detalles de la primer ventaja de obtener el Demo.</p>
                            </div>
                        </div>
                        <div className='card-item'>
                            <div className='card-item-icon'>
                                <img className='doctor-icon' src={iconDrTablet} alt="icon-card" />
                            </div>
                            <div className='card-item-text'>
                                <h1>Segunda ventaja</h1>
                                <p>Esta tarjeta debería destacar detalles de la segunda ventaja de obtener el Demo.</p>
                            </div>
                        </div>
                        <div className='card-item'>
                            <div className='card-item-icon'>
                                <img className='doctor-icon' src={iconDrPencil} alt="icon-card" />
                            </div>
                            <div className='card-item-text'>
                                <h1>Tercera ventaja</h1>
                                <p>Esta tarjeta debería destacar detalles de la tercer ventaja de obtener el Demo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore
import React from 'react';
import '../../css/homepage/Explore.css';
import iconDrStar from '../../assets/imgs/monis/PicsArt_09-18-11.18.png'
import iconDrTablet from '../../assets/imgs/monis/PicsArt_09-18-11.21.png'
import iconDrPencil from '../../assets/imgs/monis/PicsArt_09-21-10.28.png'

const Explore = ({width}) => {

    return (
        <div className='explore'>
            <div className='explore-container'>
                <div className='explore-container-head'>
                    <h1 className='tiny-blue-title text-center'>EXPLORA</h1>
                    <h1 className={width !== "extra-large" ? 'subtitle white text-center' : 'bold-39 text-center white' }>Experimenta nuestra plataforma con el contenido gratuito que tenemos para ti.</h1>
                </div>
                <div className='explore-container-body'>
                    <div className='explore-cards'>
                        <div className='card-item'>
                            <div className='card-item-icon'>
                                <img className='doctor-icon' src={iconDrStar} alt="icon-card" />
                            </div>
                            <div className='card-item-text'>
                                <h1 className='bold-14 white'>Primera ventaja</h1>
                                <p className={width !== 'extra-large' ? 'regular-14 white' : 'regular-16 white'}>Esta tarjeta debería destacar detalles de la primer ventaja de obtener el Demo.</p>                                
                            </div>
                        </div>
                        <div className='card-item'>
                            <div className='card-item-icon'>
                                <img className='doctor-icon' src={iconDrTablet} alt="icon-card" />
                            </div>
                            <div className='card-item-text'>
                                <h1 className='bold-14 white'>Segunda ventaja</h1>
                                <p className={width !== 'extra-large' ? 'regular-14 white' : 'regular-16 white'}>Esta tarjeta debería destacar detalles de la segunda ventaja de obtener el Demo.</p>
                            </div>
                        </div>
                        <div className='card-item'>
                            <div className='card-item-icon'>
                                <img className='doctor-icon' src={iconDrPencil} alt="icon-card" />
                            </div>
                            <div className='card-item-text'>
                                <h1 className='bold-14 white'>Tercera ventaja</h1>
                                <p className={width !== 'extra-large' ? 'regular-14 white' : 'regular-16 white'}>Esta tarjeta debería destacar detalles de la tercera ventaja de obtener el Demo.</p>
                            </div>
                        </div>
                    </div>
                    <div className='explore-form'>
                        <form>
                            <div className='form-group'>
                                <label className='medium-14 white' htmlFor='name'>Nombre completo*</label>
                                <input type='text' placeholder='Nombre completo' name="name" inputMode='text'/>
                                <span className="regular-4 red">Error Message...</span>
                            </div>
                            <div className='form-group'>
                                <label className='medium-14 white' htmlFor="email">Correo electrónico*</label>
                                <input type="text" placeholder='Correo electrónico' name="email" inputMode='email'/>
                                <span className="regular-4 red">Error Message...</span>
                            </div>
                            {
                                width !== 'extra-large' ? (
                                    <>
                                        <div className='whatsapp-input'>
                                            <div className='form-group'>
                                                <label className='medium-14 white' htmlFor="whatsapp">Whatsapp <i>(opcional)</i></label>
                                                <input type="text" placeholder='Tu numero de Whatsapp' name='whatsapp' inputMode='text'/>
                                                <span className="regular-4 red">Error Message...</span>
                                            </div>
                                        </div>
                                        <button className='button-rounded-blue-48' type='submit'>
                                            <span className='button-text'>Quiero mi Demo</span>
                                        </button>
                                    </>
                                ) :  (
                                    <div className='whatsapp-input'>
                                        <div className='form-group'>
                                            <label className='medium-14 white' htmlFor="whatsapp">Whatsapp <i>(opcional)</i></label>
                                            <input type="text" placeholder='Tu numero de Whatsapp' name='whatsapp' inputMode='text'/>
                                            <span className="regular-4 red">Error Message...</span>
                                        </div>
                                        <button className='button-rounded-blue-48' type='submit'>
                                            <span className='button-text'>Quiero mi Demo</span>
                                        </button> 
                                    </div>
                                )
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore;
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/RegisterPage.css';
import doctorImage from '../assets/imgs/Dres/stock-photo-doctor-wearing-white-coat-stethoscope-small.png';

const RegisterPage = ({width}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    setTimeout(() => {
        const items = document.querySelectorAll(".reveal-load");
        items.forEach(item => {
            item.classList.add("active");
        })
    }, 100);

     
    return (
        <div className='register'>
            <div className="container">
            <div className="bg-container"> 
                    <div className="triangle"></div> 
                </div>
                <div className="container-head">
                    <h1 className="title text-center">Registro</h1>
                </div>
                <div className="container-body">  
                    <div className="form-container reveal-load">
                        <form method='POST'>
                            <div className="form-group">
                                <label className='medium-14' htmlFor="form-user">Correo electrónico*</label>
                                <input type="text" name="user" id="form-user"  placeholder='Tu usuario o corréo electrónico'/>
                                <span className='regular-14 red'>Error message</span>
                            </div>
                            <div className="form-group">
                                <label className='medium-14' htmlFor="form-password">Contraseña*</label>
                                <input type="password" name="password" id="form-password"  placeholder='Tu contraseña'/>
                                <span className='regular-14 red'>Error message</span>
                            </div> 
                            <button className='button-rounded-blue-48' type="submit" onClick={handleSubmit}>
                                <span className="button-text">
                                    Registrar
                                </span>
                            </button>
                            <hr />
                            <p className='flex-row-nw jc-center gap-8'>
                                <span className='regular-14'>¿Ya eres miembro?</span>
                                <Link className='regular-14 sky-blue no-style' to='/iniciar_sesion'>Iniciar Sesión</Link>
                            </p>
                        </form>
                    </div>
                    { width === 'small' && (
                        <>
                            <div className="image-container">
                                <img src={doctorImage} alt="doctor-pic" />
                            </div>
                        </>
                    )}
                </div>
                { (width !== 'small') && (
                    <>
                        <div className="image-container">
                            <img src={doctorImage} alt="doctor-pic" />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default RegisterPage
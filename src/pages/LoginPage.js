import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css/LoginPage.css';
import doctorImage from '../assets/imgs/Dres/stock-photo-surgeon-wearing-blue-uniform-stethoscope-small.png';

const LoginPage = ({width}) => {

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
        <div className='login'>
            <div className="login-container">
                <div className="bg-container"> 
                    <div className="triangle"></div> 
                </div>
                <div className="container-head">
                    <h1 className="title text-center">¡Bienvenido de nuevo!</h1>
                </div>
                <div className="container-body">  
                    <div className="form-container reveal-load">
                        <form method='POST'>
                            <div className="form-group">
                                <label className='medium-14' htmlFor="form-user">Usuario o Correo electrónico*</label>
                                <input type="text" name="user" id="form-user"  placeholder='Tu usuario o corréo electrónico'/>
                                <span className='red regular-14'>Error message...</span>
                            </div>
                            <div className="form-group">
                                <label className='medium-14' htmlFor="form-password">Contraseña*</label>
                                <input type="password" name="password" id="form-password"  placeholder='Tu contraseña'/>
                                <span className='red regular-14'>Error message...</span>
                                <div className="sub-group">
                                    <Link className='medium14 sky-blue no-style' to='#'>Olvidé Contraseña</Link>
                                    <div className="checkbox">
                                        <input type="checkbox" name="remember" id="checkbox-remember" />
                                        <label htmlFor="checkbox-remember">Recordarme</label>
                                    </div>
                                </div> 
                            </div>
                            <button className='button-rounded-blue-48' type="submit" onClick={handleSubmit}>
                                <span className="button-text">
                                    Iniciar Sesión
                                </span>
                            </button>
                            <hr />
                            <p className='flex-row-nw jc-center gap-8'>
                                <span className='regular-14'>¿Aun no eres miembro?</span>
                                <Link className='regular-14 sky-blue no-style' to='/registrate'>Registrate Ahora</Link>
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

export default LoginPage
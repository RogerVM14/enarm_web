import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css/LoginPage.css';

const LoginPage = () => {

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
                    <div className="background-image reveal-load"></div>
                </div>
                <div className="form-container reveal-load">
                    <h1 className="title">¡Bienvenido de nuevo!</h1>
                    <form method='POST'>
                        <div className="form-group">
                            <label htmlFor="form-user">Usuario o Correo electrónico*</label>
                            <input type="text" name="user" id="form-user"  placeholder='Tu usuario o corréo electrónico'/>
                            {/* <span className='text-message'>Se ha presentado un error...</span> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="form-password">Contraseña*</label>
                            <input type="password" name="password" id="form-password"  placeholder='Tu contraseña'/>
                            {/* <span className='text-message'>Se ha presentado un error...</span> */}
                        </div>
                        <div className="form-sub-group">
                            <Link to='#'>Olvidé Contraseña</Link>
                            <div className="checkbox">
                                <input type="checkbox" name="remember" id="checkbox-remember" />
                                <label htmlFor="checkbox-remember">Recordarme</label>
                            </div>
                        </div>
                        <button type="submit" onClick={handleSubmit}>Iniciar Sesión</button>
                        <hr />
                        <p>
                            <span>¿Aun no eres miembro?</span>
                            <Link to='/registrate'>Registrate Ahora</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
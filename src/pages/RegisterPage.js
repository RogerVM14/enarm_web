import React from 'react';
import { Link } from 'react-router-dom';
import '../css/RegisterPage.css';

const RegisterPage = () => {

    const handleSubmit = (e) => {

    }
    return (
        <div className='register'>
            <div className="register-container">
                <div className="bg-container"> 
                    <div className="triangle"></div>
                    <div className="background-image"></div>
                </div>
                <div className="form-container">
                    <h1 className="title">Registro</h1>
                    <form method='POST'>
                        <div className="form-group">
                            <label htmlFor="form-user">Correo electrónico*</label>
                            <input type="text" name="user" id="form-user"  placeholder='Tu usuario o corréo electrónico'/>
                            {/* <span className='text-message'>Se ha presentado un error...</span> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="form-password">Contraseña*</label>
                            <input type="password" name="password" id="form-password"  placeholder='Tu contraseña'/>
                            {/* <span className='text-message'>Se ha presentado un error...</span> */}
                        </div> 
                        <button type="submit" onClick={handleSubmit}>Registrar</button>
                        <hr />
                        <p>
                            <span>¿Ya eres miembro?</span>
                            <Link to='/iniciar_sesion'>Iniciar Sesión</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import doctorImage from '../assets/imgs/Dres/stock-photo-surgeon-wearing-blue-uniform-stethoscope-small.png'; 
import WidthContext from '../contexts/WidthContext';
import '../css/LoginPage.css';

const LoginPage = () => {

    setTimeout(() => {
        const items = document.querySelectorAll(".reveal-load");
        items.forEach(item => {
            item.classList.add("active");
        })
    }, 100);

    const size = useContext(WidthContext);

    const isMobile = () => {
        if(['xs', 'sm', 'md'].includes(size)) return true;
        if(['lg', 'xl', 'xxl'].includes(size)) return false;
    } 
 
    return (
        <div className='login'>
            <div className="login-container">   
            { !isMobile() ? (
                <>
                    <div className='__container'>
                        <div className="container-head">
                            <h1 className="title text-center fade-in-title">
                                <span className={isMobile() ? "bold-44" : "bold-47"}>¡Bienvenido</span>
                                <span className={isMobile() ? "bold-44" : "bold-47"}>de</span>
                                <span className={isMobile() ? "bold-44" : "bold-47"}>nuevo!</span>
                            </h1>
                        </div>
                        <div className="container-body">  
                            <FormLogin size={size} mobile={isMobile()}/>
                        </div>
                    </div>
                    <div className="image-container"> <img src={doctorImage} alt="doctor-pic" /> </div>
                    <div className="triangle"></div> 
                </>
            ) : ( 
                <>
                    <div className="container-head">
                        <h1 className="title text-center">¡Bienvenido de nuevo!</h1>
                    </div>
                    <div className="container-body">  
                        <FormLogin size={size} mobile={isMobile()}/>                    
                    </div>
                    <div className="image-container"> <img src={doctorImage} alt="doctor-pic" /> </div>                
                </>
            ) } 
            </div>
        </div>
    )
}

const FormLogin = ({ size }) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const isMobile = () => {
        if(['xs', 'sm', 'md'].includes(size)) return true;
        if(['lg', 'xl', 'xxl'].includes(size)) return false;
    }  

    const fontSizeClass = (type) => {
        const fontSizePixels = isMobile() === true ? '14' : '16';
        return `${type}-${fontSizePixels}`;
    }

    return (
        <div className="form-container reveal-load">
            <form method='POST' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className={fontSizeClass('medium')} htmlFor="form-user">Usuario o Correo electrónico*</label>
                    <input type="text" name="user" id="form-user" placeholder='Tu usuario o corréo electrónico'/>
                    <span className={`${fontSizeClass('regular')} red`}>Error message...</span>
                </div>
                <div className="form-group">
                    <label className={fontSizeClass('medium')} htmlFor="form-password">Contraseña*</label>
                    <input type="password" name="password" id="form-password"  placeholder='Tu contraseña'/>
                    <span className={`${fontSizeClass('regular')} red`}>Error message...</span>
                    <div className="sub-group">
                        <Link className={`${fontSizeClass('medium')} sky-blue no-style`} to='#'>Olvidé Contraseña</Link>
                        <div className="checkbox">
                            <input type="checkbox" name="remember" id="checkbox-remember" />
                            <label className={fontSizeClass('regular')} htmlFor="checkbox-remember">Recordarme</label>
                        </div>
                    </div> 
                </div>
                <button className='button-rounded-blue-48' type="submit">
                    <span className="button-text">
                        Iniciar Sesión
                    </span>
                </button>
                <hr />
                <p className='flex-row-nw jc-center gap-8'>
                    <span className={fontSizeClass('regular')}>¿Aun no eres miembro?</span>
                    <Link className={`${fontSizeClass('regular')} sky-blue no-style`} to='/registrate'>Registrate Ahora</Link>
                </p>
            </form>
        </div>
    )
}

export default LoginPage;
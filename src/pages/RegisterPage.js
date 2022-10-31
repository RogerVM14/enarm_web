import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import doctorImage from '../assets/imgs/Dres/stock-photo-doctor-wearing-white-coat-stethoscope-small.png';
import WidthContext from '../contexts/WidthContext';
import '../css/RegisterPage.css';

const RegisterPage = () => {

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
        <div className='register'>
            <div className="register-container">
                { !isMobile() ? (
                    <>
                        <div className='__container'>
                            <div className="container-head">
                                <h1 className="title text-center fade-in-title">
                                    <span className={ isMobile() ? "bold-44" : "bold-47"}>Registro</span>
                                    </h1>
                            </div>
                            <div className="container-body">  
                                <RegisterForm size={size}/>                    
                            </div>    
                        </div>
                        <div className="image-container"><img src={doctorImage} alt="doctor-pic" /></div>
                        <div className="triangle"></div>                       
                    </>
                ) : (
                    <>
                        <div className="container-head">
                            <h1 className="title text-center">Registro</h1>
                        </div>
                        <div className="container-body">  
                            <RegisterForm size={size}/>                    
                        </div>
                        <div className="image-container"><img src={doctorImage} alt="doctor-pic" /></div>                    
                    </>
                )}
            </div>
        </div>
    )
}

const RegisterForm = ({ size }) => {
    
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
                    <label className={fontSizeClass('medium')} htmlFor="form-user">Correo electrónico*</label>
                    <input type="text" name="user" id="form-user"  placeholder='Tu usuario o corréo electrónico'/>
                    <span className={`${fontSizeClass('medium')} red`}>Error message</span>
                </div>
                <div className="form-group">
                    <label className={fontSizeClass('medium')} htmlFor="form-password">Contraseña*</label>
                    <input type="password" name="password" id="form-password"  placeholder='Tu contraseña'/>
                    <span className={`${fontSizeClass('medium')} red`}>Error message</span>
                </div> 
                <button className='button-rounded-blue-48' type="submit">
                    <span className="button-text">
                        Registrar
                    </span>
                </button>
                <hr />
                <p className='flex-row-nw jc-center gap-8'>
                    <span className={fontSizeClass('regular')}>¿Ya eres miembro?</span>
                    <Link className='regular-14 sky-blue no-style' to='/iniciar_sesion'>Iniciar Sesión</Link>
                </p>
            </form>
        </div>
    )
}
export default RegisterPage;
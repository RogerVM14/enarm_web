import React, { useState, useEffect } from 'react';
import '../../css/about_course/Contents.css';
import whatDoctorsSay from '../../assets/imgs/Dres/what-doctors-say2.jpg';

const Contents = ({ size, ismobile }) =>{

    const [mobileDevice, setMobileDevice] = useState(true);

    useEffect(() =>{
        const isMobileDevice = () =>{
            if(ismobile === 'true') {
                setMobileDevice(true)
                return;
            }
            setMobileDevice(false);
            return;
        }

        isMobileDevice();
    }, [ismobile]);

    return (
        <div className={`contents ${size}`}>
            <div className="contents-container">
                <div className="contents-container-header">
                    <h1 className="tiny-blue-title text-center">CONTENIDO</h1>
                    <h2 className="subtitle text-center">
                        Material actualizado para tú próximo ENARM
                    </h2>
                    <p className={mobileDevice ? "regular-14 text-center" : "regular-16"}>
                        Sabemos cuál es tu objetivo y juntos trabajaremos para lograrlo.
                    </p>
                    <ContentsList />
                </div>
                <div className="contents-container-body">
                    <div className="image-container">
                        <img src={whatDoctorsSay} alt="whatDoctorsSay" />
                    </div>
                    <div className="subcontainer">
                        <h1 className={mobileDevice ? "bold-14" : "bold-16"}>
                            Metodología de Estudio
                        </h1>
                        <p className={mobileDevice ? "regular-14" : "regular-16"}>
                            Conjunto de herramientas didácticas basadas en un sistema 
                            de inteligencia artificial organizada en cinco fases:
                        </p> 
                        <MetodologyList /> 
                        <button className="button-rounded-blue-48">
                            <span className='button-text'>Inscríbete Ahora</span>
                        </button>  
                    </div>
                                   
                </div>
            </div>
        </div>
    )
} 

const MetodologyList = () => {
    return (
        <ul className='metodology-list'>
            <li>
                <p className='semibold-14 sky-blue'>1.Aprende</p>
                <p className='regular-14'>Consulta nuestra bibliografía.</p>
            </li>
            <li>
                <p className='semibold-14 sky-blue'>2.Plasma</p>
                <p className='regular-14'>Realiza tu gráfico</p>
            </li> 
            <li>
                <p className='semibold-14 sky-blue'>3.Complementa</p>
                <p className='regular-14'>Con las video clases y bibliografía extra.</p>
            </li>
            <li>
                <p className='semibold-14 sky-blue'>4.Refuerza</p>
                <p className='regular-14'>Revisa tus gráficos en los distintos periodos de tiempo.</p>
            </li>
            <li>
                <p className='semibold-14 sky-blue'>5.Consolida</p>
                <p className='regular-14'>Practica en el SimuladorPro.</p>
            </li>
            <li>
                <p className='semibold-14 sky-blue'>6.Compite</p>
                <p className='regular-14'>Mejora tus resultados cada vez.</p>
            </li>
        </ul>
    )
}

const ContentsList = () => {
    return (
        <ul className='contents-list ls-none'>
            <li className='list-ip'>
                <i className="material-icons-outlined green">done</i>
                <p className="semibold-14">Guía de preparación</p>
            </li>
            <li className='list-ip'>
                <i className="material-icons-outlined green">done</i>
                <p className="semibold-14">Temario</p>
            </li>
            <li className='list-ip'>
                <i className="material-icons-outlined green">done</i>
                <p className="semibold-14">Calendario de estudio</p>
            </li>
            <li className='list-ip'>
                <i className="material-icons-outlined green">done</i>
                <p className="semibold-14">SimuladorPRO</p>
            </li>
            <li className='list-ip'>
                <i className="material-icons-outlined green">done</i>
                <p className="semibold-14">Video Clases</p>
            </li>
            <li className='list-ip'>
                <i className="material-icons-outlined green">done</i>
                <p className="semibold-14">Resúmenes</p>
            </li>
            <li className='list-ip'>
                <i className="material-icons-outlined green">done</i>
                <p className="semibold-14">Mini Resúmenes</p>
            </li>
            <li className='list-ip'>
                <i className="material-icons-outlined green">done</i>
                <p className="semibold-14">Flash Cards</p>
            </li>
            <li className='list-ip'>
                <i className="material-icons-outlined green">done</i>
                <p className="semibold-14">Tips y puntos clave</p>
            </li>
            <li className='list-ip'>
                <i className="material-icons-outlined green">done</i>
                <p className="semibold-14">Asesoría de cada especialidad</p>
            </li>
            <li className='list-ip'>
                <i className="material-icons-outlined green">done</i>
                <p className="semibold-14">Nuevos cursos enfocados al ENARM</p>
            </li>
            <li className='list-ip'>
                <ul className='courses-list ls-darkcircle'>
                    <li><p className="semibold-14">Curso Inglés Médico</p></li>
                    <li><p className="semibold-14">Curso Fisiología Médica</p></li>
                    <li><p className="semibold-14">Curso Interpretación Electrocardiograma</p></li>
                    <li><p className="semibold-14">Curso Interpretación Radiografías</p></li>
                </ul>
            </li>
            <li className='list-ip'>
                <i className="material-icons-outlined green">done</i>
                <p className="semibold-14">Curso repaso INTENSIVO (1 mes antes del ENARM)</p>
            </li>
            <li className='list-ip'>
                <i className="material-icons-outlined green">done</i>
                <p className="semibold-14">MANUAL ENARM INTENSIVO</p>
            </li>
        </ul>
    )
}
export default Contents;
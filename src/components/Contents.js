import React from 'react';
import '../css/Contents.css';

const Contents = () => {
    return (
        <div className='contents'>
            <div className="contents-container">
                <div className="contents-container-header">
                    <h1 className="title">CONTENIDO</h1>
                    <h2 className="subtitle">Material actualizado para tú próximo ENARM</h2>
                    <p className="parraf">Sabemos cuál es tu objetivo y juntos trabajaremos para lograrlo.</p>
                    <ul className='ls-none'>
                        <li className='list-ip'>
                            <i className="material-icons-outlined green">done</i>
                            <p className="text-list">Guía de preparación</p>
                        </li>
                        <li className='list-ip'>
                            <i className="material-icons-outlined green">done</i>
                            <p className="text-list">Temario</p>
                        </li>
                        <li className='list-ip'>
                            <i className="material-icons-outlined green">done</i>
                            <p className="text-list">Calendario de estudio</p>
                        </li>
                        <li className='list-ip'>
                            <i className="material-icons-outlined green">done</i>
                            <p className="text-list">SimuladorPRO</p>
                        </li>
                        <li className='list-ip'>
                            <i className="material-icons-outlined green">done</i>
                            <p className="text-list">Video Clases</p>
                        </li>
                        <li className='list-ip'>
                            <i className="material-icons-outlined green">done</i>
                            <p className="text-list">Resúmenes</p>
                        </li>
                        <li className='list-ip'>
                            <i className="material-icons-outlined green">done</i>
                            <p className="text-list">Mini Resúmenes</p>
                        </li>
                        <li className='list-ip'>
                            <i className="material-icons-outlined green">done</i>
                            <p className="text-list">Flash Cards</p>
                        </li>
                        <li className='list-ip'>
                            <i className="material-icons-outlined green">done</i>
                            <p className="text-list">Tips y puntos clave</p>
                        </li>
                        <li className='list-ip'>
                            <i className="material-icons-outlined green">done</i>
                            <p className="text-list">Asesoría de cada especialidad</p>
                        </li>
                        <li className='list-ip'>
                            <i className="material-icons-outlined green">done</i>
                            <p className="text-list">Nuevos cursos enfocados al ENARM</p>
                        </li>
                        <li className='list-ip'>
                            <ul className='ls-darkcircle'>
                                <li><p className="text-list">Curso Inglés Médico</p></li>
                                <li><p className="text-list">Curso Fisiología Médica</p></li>
                                <li><p className="text-list">Curso Interpretación Electrocardiograma</p></li>
                                <li><p className="text-list">Curso Interpretación Radiografías</p></li>
                            </ul>
                        </li>
                        <li className='list-ip'>
                            <i className="material-icons-outlined green">done</i>
                            <p className="text-list">Curso repaso INTENSIVO (1 mes antes del ENARM)</p>
                        </li>
                        <li className='list-ip'>
                            <i className="material-icons-outlined green">done</i>
                            <p className="text-list">MANUAL ENARM INTENSIVO</p>
                        </li>
                    </ul>
                </div>
                <div className="contents-container-body">
                    <div className="image-container"></div>
                    <h1 className="title">Metodología de Estudio</h1>
                    <p className="parraf">Conjunto de herramientas didácticas basadas en un sistema de inteligencia artificial organizada en cinco fases:</p>
                    <div className="sub-container">
                        <div className="column-with-circles">
                            <div className="vertical-line"></div>
                            <div className="circle circle-1"></div>
                            <div className="circle circle-2"></div>
                            <div className="circle circle-3"></div>
                            <div className="circle circle-4"></div>
                            <div className="circle circle-5"></div>
                            <div className="circle circle-6"></div>
                        </div>
                        <ul className="ls-none">
                            <li>
                                <p className='blue-text'>1.Aprende</p>
                                <p className='regular-text'>Consulta nuestra bibliografía.</p>
                            </li>
                            <li>
                                <p className='blue-text'>2.Plasma</p>
                                <p className='regular-text'>Realiza tu gráfico</p>
                            </li> 
                            <li>
                                <p className='blue-text'>3.Complementa</p>
                                <p className='regular-text'>Con las video clases y bibliografía extra.</p>
                            </li>
                            <li>
                                <p className='blue-text'>4.Refuerza</p>
                                <p className='regular-text'>Revisa tus gráficos en los distintos periodos de tiempo.</p>
                            </li>
                            <li>
                                <p className='blue-text'>5.Consolida</p>
                                <p className='regular-text'>Practica en el SimuladorPro.</p>
                            </li>
                            <li>
                                <p className='blue-text'>6.Compite</p>
                                <p className='regular-text'>Mejora tus resultados cada vaz</p>
                            </li>
                        </ul>
                    </div>   
                    <button className="rounded-blue">Inscríbete Ahora</button>                 
                </div>
            </div>
        </div>
    )
}

export default Contents;
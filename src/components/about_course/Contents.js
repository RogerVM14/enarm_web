import React from 'react';
import '../../css/about_course/Contents.css';

const Contents = () => {
    return (
        <div className='contents'>
            <div className="contents-container">
                <div className="contents-container-header">
                    <h1 className="tiny-blue-title text-center">CONTENIDO</h1>
                    <h2 className="subtitle text-center">Material actualizado para tú próximo ENARM</h2>
                    <p className="regular-14 text-center">Sabemos cuál es tu objetivo y juntos trabajaremos para lograrlo.</p>
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
                </div>
                <div className="contents-container-body">
                    <div className="image-container"></div>
                    <div className="subcontainer">
                        <h1 className="bold-14">Metodología de Estudio</h1>
                        <p className="regular-14">Conjunto de herramientas didácticas basadas en un sistema de inteligencia artificial organizada en cinco fases:</p>
                        <div className="subcontainer">
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
                        </div>   
                        <button className="button-rounded-blue-48">
                            <span className='button-text'>Inscríbete Ahora</span>
                        </button>  
                    </div>
                                   
                </div>
            </div>
        </div>
    )
}

export default Contents;
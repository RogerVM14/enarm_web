import React from 'react';
import '../css/KnowUs.css';
import docImage from '../assets/imgs/monis/Doc.png';

const KnowUs = () => {
    return (
        <div className='know-us'>
            <div className="know-us-container">
                <div className="container-body">                    
                    <div className='subcontainer'>
                        <h1 className="title">CONÓCENOS</h1>
                        <h2 className='subtitle'>Nuestra cartera de alumnos rebasa el 80% de Aceptación a su Residencia</h2>
                        <p>Contamos con una múltiple experiencia de formación para reforzar cada estilo de aprendizaje:</p>
                        <div className='list'>
                            <ul>
                                <li>
                                    <i className="material-icons-outlined">done</i>
                                    <p>Video Clases.</p>
                                </li>
                                <li>
                                    <i className="material-icons-outlined">done</i>
                                    <p>Flash Cards.</p>
                                </li>
                                <li>
                                    <i className="material-icons-outlined">done</i>
                                    <p>Esquemas.</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <i className="material-icons-outlined">done</i>
                                    <p>Resúmenes y mini resúmenes.</p>
                                </li>
                                <li>
                                    <i className="material-icons-outlined">done</i>
                                    <p>Cuadros Comparativos.</p>
                                </li>
                                <li>
                                    <i className="material-icons-outlined">done</i>
                                    <p>Tips, y ¡mucho más!</p>
                                </li>
                            </ul>
                        </div>
                        <button>Solicitar Prueba Gratis</button>
                    </div>
                    <div className="know-us-image-container">
                        <img src={docImage} alt="know-us-img" />
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default KnowUs
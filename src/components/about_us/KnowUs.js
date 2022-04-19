import React from 'react';
import '../../css/about_us/KnowUs.css';
import docImage from '../../assets/imgs/monis/Doc.png';

const KnowUs = ({width}) => {
  

    return (
        <div className='know-us'>
            <div className="know-us-container bg-blue">
                <div className="container-body">                    
                    <div className='subcontainer'>
                        <h1 className={`tiny-blue-title ${ width !== 'extra-large' ? 'text-center' : ''}`}>CONÓCENOS</h1>
                        <h2 className={`${ width !== 'extra-large' ? 'subtitle white text-center' : 'bold-39 white'} know-us-subtitle`}>Nuestra cartera de alumnos rebasa el 80% de Aceptación a su Residencia</h2>
                        <p className={`${ width !== 'extra-large' ? 'regular-14 white text-center' : 'regular-16 white'}`}>Contamos con una múltiple experiencia de formación para reforzar cada estilo de aprendizaje:</p>                        
                    </div>
                    <div className='list'>
                        <ul>
                            <li><i className="material-icons-outlined green">done</i><p className='regular-14 white'>Video Clases.</p></li>
                            <li><i className="material-icons-outlined green">done</i><p className='regular-14 white'>Flash Cards.</p></li>
                            <li><i className="material-icons-outlined green">done</i><p className='regular-14 white'>Esquemas.</p></li>
                        </ul>
                        <ul>
                            <li><i className="material-icons-outlined green">done</i><p className='regular-14 white'>Resúmenes y mini resúmenes.</p></li>
                            <li><i className="material-icons-outlined green">done</i><p className='regular-14 white'>Cuadros Comparativos.</p></li>
                            <li><i className="material-icons-outlined green">done</i><p className='regular-14 white'>Tips, y ¡mucho más!</p></li>
                        </ul>
                    </div>
                    <button className='button-rounded-blue-48'>
                        <span className="button-text">
                            Solicitar Prueba Gratis
                        </span>
                    </button>
                    {
                        width !== 'extra-large' && (
                            <div className="image-container">
                                <img src={docImage} alt="know-us-img" />
                            </div>
                        )
                    }
                </div> 
                {
                    width === 'extra-large' && (
                        <div className="image-container">
                            <img src={docImage} alt="know-us-img" />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default KnowUs
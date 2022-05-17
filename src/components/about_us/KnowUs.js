import React, { useState, useEffect } from 'react';
import docImage from '../../assets/imgs/monis/Doc.png';
import '../../css/about_us/KnowUs.css';

const KnowUs = ({ size, ismobile }) =>{


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
        <div className={`know-us ${size} bg-blue`}>
            <div className="know-us-container">
                {
                    mobileDevice ? ( 
                        <>
                            <div className="container-head">
                                <h1 className={`tiny-blue-title ${ mobileDevice ? 'text-center' : ''}`}>CONÓCENOS</h1>
                                <h2 className={`${ mobileDevice ? 'subtitle white text-center' : 'bold-39 white'} know-us-subtitle`}>
                                    Nuestra cartera de alumnos rebasa el 80% de Aceptación a su Residencia
                                </h2>
                                <p className={`${ mobileDevice ? 'regular-14 white text-center' : 'regular-16 white'}`}>
                                    Contamos con una múltiple experiencia de formación para reforzar cada estilo de aprendizaje:
                                </p>
                            </div>
                            {
                                ['xs','sm'].includes(size) ? (
                                    <div className="container-body">  
                                        <KnowList />
                                        <div className="image-container">
                                            <img src={docImage} alt="know-us-img" />
                                        </div> 
                                    </div>                                        
                                ) : ( 
                                    <div className="container-body">  
                                        <div className='subcontainer'>
                                            <KnowList />
                                        </div>
                                        <div className="image-container">
                                            <img src={docImage} alt="know-us-img" />
                                        </div> 
                                    </div>
                                )
                            }            
                        </>
                    ) : (
                        <>
                            <div className="__container">
                                <div className="container-head">
                                    <h1 className={`tiny-blue-title ${ mobileDevice ? 'text-center' : ''}`}>CONÓCENOS</h1>
                                    <h2 className={`${ mobileDevice ? 'subtitle white text-center' : 'bold-39 white'} know-us-subtitle`}>
                                        Nuestra cartera de alumnos rebasa el 80% de Aceptación a su Residencia
                                    </h2> 
                                    <p className={`${ mobileDevice ? 'regular-14 white text-center' : 'regular-16 white'}`}>
                                        Contamos con una múltiple experiencia de formación para reforzar cada estilo de aprendizaje:
                                    </p>
                                </div>
                                <div className="container-body">     
                                    <KnowList /> 
                                </div>
                            </div> 
                            <div className="image-container">
                                <img src={docImage} alt="know-us-img" />
                            </div> 
                        </>
                    )
                }
            </div> 
        </div>
    )
}

const KnowList = () => {
    return (
        <>
            <div className='list'>
                <ul>
                    <li>
                        <i className="material-icons-outlined green-check">done</i>
                        <p className='regular-14 white'> Video Clases. </p>
                    </li>
                    <li>
                        <i className="material-icons-outlined green-check">done</i>
                        <p className='regular-14 white'> Flash Cards. </p>
                    </li>
                    <li>
                        <i className="material-icons-outlined green-check">done</i>
                        <p className='regular-14 white'> Esquemas. </p>
                    </li>
                </ul>
                <ul>
                    <li><i className="material-icons-outlined green-check">done</i><p className='regular-14 white'>Resúmenes y mini resúmenes.</p></li>
                    <li><i className="material-icons-outlined green-check">done</i><p className='regular-14 white'>Cuadros Comparativos.</p></li>
                    <li><i className="material-icons-outlined green-check">done</i><p className='regular-14 white'>Tips, y ¡mucho más!</p></li>
                </ul>
            </div>
            <button className='button-rounded-blue-48'>
                <span className="button-text">
                    Solicitar Prueba Gratis
                </span>
            </button> 
        </>
    )
}

export default KnowUs;
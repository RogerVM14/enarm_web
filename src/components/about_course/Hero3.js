import React from 'react';
import '../../css/about_course/Hero3.css'; 

const Hero3 = ({width}) => {
 
    setTimeout(() => {
        const items = document.querySelectorAll(".reveal-load");
        items.forEach(item => {
            item.classList.add("active");
        })
        
        const body = document.querySelector("body");
        body.scrollTop = 0;
    }, 100);

    // useEffect(() => {

    //     document.querySelector("div.hero-3").addEventListener("load", event => {
    //         console.log("Enter ScrollTop");
    //     }, { capture: true } )
    // }, []);

    // const scrollToTop = () => {
    //     console.log("Enter ScrollTop")
    // }

    return (
        <div className='hero-3'>
            <div className="hero-3-container">
                <div className="gradient"></div>
                <div className="triangle"></div>
                <div className="hero-3-container-header reveal-load">
                    <h1 className='title text-center'>Obtén un seguimiento personalizado e intensivo</h1>
                    <p className='regular-14 text-center'>Este año queremos que más del 85% de nuestros alumnos aprueben el ENARM en su primer intento. </p>
                </div> 
                <div className="hero-3-container-body reveal-load">
                    <button className='button-rounded-blue-48'>
                        <span className="button-text">
                            Obtener Curso
                        </span>
                    </button>
                    <button className='only-letters'>
                        <span>Ver Contenido del Curso</span>
                        <i className='material-icons-outlined'>chevron_right</i>
                    </button>
                </div> 
                <div className="bg-image"> 
                </div>
            </div>
        </div>
    )
}

export default Hero3;
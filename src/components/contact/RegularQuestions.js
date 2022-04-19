import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/contact/RegularQuestions.css';

const questions_list = [
    { 
        title: '¿Qué es Plataforma ENARM?', 
        parraf: 'Somos el mejor y más completo curso Online para la preparación del ENARM, encargado de abarcar completamente las exigencias del ENARM, proporcionándoles a los médicos las mejores herramientas, nuestro único y efectivo método de estudio y las mejores técnicas para estudiar con inteligencia y así desarrollar al 100% su potencial de retención, maximizar los resultados en las pruebas, obtener un mejor aprendizaje y memorización, para lograr el éxito en el ENARM.',        
        isClicked: false
    },
    { 
        title: '¿Cuál es el método de estudio?', 
        parraf: 'Es necesario tener dominado este idioma, tanto para el ENARM, como para tu futu',  
        isClicked: false
    },
    { 
        title: '¿Qué porcentaje de alumnos que toman el curso de nuestra Plataforma ENARM es aceptado en una residencia?', 
        parraf: 'Como debes saber, constantemente salen nuevas GPC, con nosotros no te debes ',
        isClicked: false 
    },
    { 
        title: '¿Duración / Vigencia de la plataforma?', 
        parraf: 'La experiencia más parecida al ENARM cronometrada. Mismo formato. Simulacio',    
        isClicked: false
    },
    { 
        title: 'Costo y contenido de Plataforma ENARM', 
        parraf: 'Nuevas video clases, flash cards, mini resúmenes, resúmenes, tips y puntos claves',
        isClicked: false 
    },
    { 
        title: '¿Es seguro inscribirme a Plataforma ENARM?', 
        parraf: 'Nuevas video clases, flash cards, mini resúmenes, resúmenes, tips y puntos claves',
        isClicked: false 
    },
    { 
        title: '¿Cuáles son las formas de pago?', 
        parraf: 'Nuevas video clases, flash cards, mini resúmenes, resúmenes, tips y puntos claves',
        isClicked: false 
    },
    { 
        title: 'Ya realicé mi pago de inscripción, ¿cómo puedo acceder a mi Plataforma ENARM?', 
        parraf: 'Nuevas video clases, flash cards, mini resúmenes, resúmenes, tips y puntos claves',
        isClicked: false 
    },
    { 
        title: 'No puedo ver el contenido de mi Plataforma / Pasos para ingresar a la Plataforma', 
        parraf: 'Nuevas video clases, flash cards, mini resúmenes, resúmenes, tips y puntos claves',
        isClicked: false 
    },
]

const RegularQuestions = () => {

    
    const [selected, setSelected] = useState(questions_list);

    const collepsedParrafToggle = (ix) => {

        const parraf = selected[ix].parraf;

        if(selected[ix].isClicked) return parraf;

        return parraf.slice(0, 80).concat('...');
    }

    const toggleItemClick = (ix) => { 
        let newArray = [...selected];
        newArray[ix].isClicked = !selected[ix].isClicked;
        setSelected(newArray);  
    } 

    return (
        <div className='regular-questions'>
            <div className="container">
                <div className="container-head">
                    <h1 className='tiny-blue-title text-center'>PREGUNTAS FRECUENTES</h1>
                    <h2 className='subtitle text-center'>Algunos de nuestros alumnos han preguntado:</h2>
                </div>
                <div className="container-body">
                    <div className="questions-items">
                        {
                            questions_list.map((item, index) => {
                                return (                                    
                                    <div className={`item ${ selected[index].isClicked ? 'isSelected' : '' }`} key={index}>
                                        <div className="item-container">
                                            <div className="item-head"> 
                                                <h1 className='medium-29 sky-blue'>{ item.title }</h1>
                                            </div>
                                            <div className={`item-body ${selected[index].isClicked ? "flexed-column" : "flexed-row"}`}>
                                                <p className={`collapsed-parraf`}>{ collepsedParrafToggle(index) }</p>
                                                <Link to='#'  className='gray no-style' onClick={() => toggleItemClick(index) }>{ selected[index].isClicked ? "Contraer" : "Expandir"}</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        } 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegularQuestions;
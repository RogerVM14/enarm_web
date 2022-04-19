import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/about_us/News.css';

const news_list = [
    { 
        title: 'Atención personalizada', 
        parraf: 'Asesoría individual, conforme a tus necesidades específicas. El residente especialista de área te apoyará siempre que lo desees. Ajustamos tu preparación conforme tu desempeño.',        
        isClicked: false
    },
    { 
        title: 'Simulador con cientos de nuevas preguntas', 
        parraf: 'Asesoría individual, conforme a tus necesidades específicas. El residente especialista de área te apoyará siempre que lo desees. Ajustamos tu preparación conforme tu desempeño.',  
        isClicked: false
    },
    { 
        title: 'Curso inglés médico', 
        parraf: 'Asesoría individual, conforme a tus necesidades específicas. El residente especialista de área te apoyará siempre que lo desees. Ajustamos tu preparación conforme tu desempeño.',
        isClicked: false 
    },
    { 
        title: 'Todas las especialidades actualizadas', 
        parraf: 'Asesoría individual, conforme a tus necesidades específicas. El residente especialista de área te apoyará siempre que lo desees. Ajustamos tu preparación conforme tu desempeño.',    
        isClicked: false
    },
    { 
        title: 'Metodología de estudio', 
        parraf: 'Asesoría individual, conforme a tus necesidades específicas. El residente especialista de área te apoyará siempre que lo desees. Ajustamos tu preparación conforme tu desempeño.',
        isClicked: false 
    },
    { 
        title: 'Simulador Pro 2022', 
        parraf: 'Asesoría individual, conforme a tus necesidades específicas. El residente especialista de área te apoyará siempre que lo desees. Ajustamos tu preparación conforme tu desempeño.',
        isClicked: false 
    },
    { 
        title: 'Nuevo contenido 2022', 
        parraf: 'Asesoría individual, conforme a tus necesidades específicas. El residente especialista de área te apoyará siempre que lo desees. Ajustamos tu preparación conforme tu desempeño.',
        isClicked: false 
    },
]

const News = ({width}) => {

    const [selected, setSelected] = useState(news_list);

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
        <div className='news'>
            <div className={`news-container ${width}`}>
                <div className="container-head">
                    <h1 className='tiny-blue-title text-center'>NOVEDADES</h1>
                    <h2 className='subtitle text-center'>Nuestro proposito es, que pases el ENARM en tú primer intento.</h2>
                    <p className='regular-14 text-center'>Este año te ofrecemos una preparación radicalmente superior, totalmente actualizada y mejorada con nuevas herramientas y contenido, ya que nuestra meta es llegar a más del 85% de nuestros alumnos aprobados en su primer intento.</p>
                </div>
                <div className="container-body">
                    <div className="news-items">
                        {
                            news_list.map((item, index) => {
                                return (                                    
                                    <div className={`item ${ selected[index].isClicked ? 'isSelected' : '' }`} key={index}>
                                        <div className="item-container">
                                            <div className="item-head">
                                                <button>
                                                    <i className='material-icons-outlined'>{ selected[index].isClicked ? 'expand_more' : 'chevron_right' }</i>
                                                </button>
                                                <h1 className='medium-29 sky-blue'>{ item.title }</h1>
                                            </div>
                                            <div className="item-body">
                                                <p className='collapsed-parraf'>{ collepsedParrafToggle(index) }</p>
                                                <Link to='#' onClick={() => toggleItemClick(index) }>{ selected[index].isClicked ? "Contraer" : "Expandir"}</Link>
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

export default News;
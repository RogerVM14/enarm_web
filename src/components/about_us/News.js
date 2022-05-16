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
        parraf: 'Encuentra un simulador para cada una de las especialidades, que se actualizan continuamente con cientos de casos clínicos nuevos a tu simulador basados 100% en preguntas de versiones anteriores vistos en el ENARM.',
        isClicked: false
    },
    {
        title: 'Curso inglés médico',
        parraf: 'Tenemos para ti un curso que te mostrará la terminología médica en el lenguaje inglés, con las preguntas más frecuentes que encontrarás en tu ENARM.',
        isClicked: false
    },
    {
        title: 'Todas las especialidades actualizadas',
        parraf: 'Dentro de tu plataforma encontrarás el contenido y todas las actualizaciones de cada uno de los temas que se valoran en cada una de las especialidades.',
        isClicked: false
    },
    {
        title: 'Metodología de estudio',
        parraf: 'Nuestra metodología de estudio es una de las más efectiva, con la cual miles de alumnos han podido llevar a cabo su ENARM y lograr ser residentes a la primera.',
        isClicked: false
    },
    {
        title: 'Simulador Pro 2022',
        parraf: 'Experimenta la experiencia más parecida al ENARM con el mismo formato y tiempo cronometrado con más eficacia para practicar antes de tu ENARM.',
        isClicked: false
    },
    {
        title: 'Nuevo contenido 2022',
        parraf: 'Disfruta de la más amplia cobertura de información que tenemos para ti:',
        isClicked: false
    },
]

const News = ({ size }) => {

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
        <div className={`news ${size}`}>
            <div className={`news-container`}>
                <div className="container-head">
                    <h1 className='tiny-blue-title text-center'>NOVEDADES</h1>
                    <h2 className='subtitle text-center'>
                        Nuestro proposito es, que pases el ENARM en tú primer intento.
                    </h2>
                    <p className='regular-14 text-center'>
                        Este año te ofrecemos una preparación radicalmente superior,
                        totalmente actualizada y mejorada con nuevas herramientas y contenido,
                        ya que nuestra meta es llegar a más del 85% de nuestros alumnos aprobados en su primer intento.
                    </p>
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
                                                {
                                                    (selected[index].isClicked && index === 6)  && (
                                                        <ul className='new-content'>
                                                            <li><p className='regular-16'>Video clases</p></li>
                                                            <li><p className='regular-16'>Libros de consulta</p></li>
                                                            <li><p className='regular-16'>Resúmenes</p></li>
                                                            <li><p className='regular-16'>Mini resúmenes</p></li>
                                                            <li><p className='regular-16'>Flash Cards</p></li>
                                                            <li><p className='regular-16'>Cuadros comparativos</p></li>
                                                            <li><p className='regular-16'>Diagramas de flujo</p></li>
                                                            <li><p className='regular-16'>Tips ENARM</p></li>
                                                            <li><p className='regular-16'>E-book  intensivo</p></li>
                                                            <li><p className='regular-16'>Simuladores ENARM</p></li>
                                                        </ul>  
                                                    )
                                                }
                                                <Link className='regular-14 gray' to='#' onClick={() => toggleItemClick(index) }>{ selected[index].isClicked ? "Contraer" : "Expandir"}</Link>
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
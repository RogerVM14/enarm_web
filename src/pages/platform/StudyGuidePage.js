import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { saveAs } from 'file-saver';
import { PlatformResponsiveContext } from '../../contexts/platform/PlatformResponsiveContext';
import '../../css/platform/pages/StudyGuidePage.css';

const StudyGuidePage = () => {

    const savePDF = () => {
        saveAs(
            "https://plataformaenarm.com/wp-content/uploads/2017/11/Guina-ENARM-2022-1.pdf",
            "Guia-ENARM-2022-1.pdf"
        );
    }

    const { device, isSmart } = useContext(PlatformResponsiveContext);

    const navigate = useNavigate();

    return (
        <div className={`main-container ${device}`}>
            <div className={`study-wrapper ${device}`}>
                <div className={`wrapper-header ${device}`}>
                    <div>
                        <i className="material-icons" onClick={() => { navigate(-1) }}>chevron_left</i>
                        <h3 className={`medium-${isSmart ? "16" : "20"}`}>Guía de Estudio</h3>
                        <span className='regular-14 gray'>Recursos</span>
                    </div>
                </div>
                <div className={`wrapper-body ${device}`}>
                    <div>
                        <div className='guide-title'>
                            <h3 className='bold-14'>Guía de Preparacion ENARM 20</h3>
                            <span className={`regular-14 blue ${isSmart ? "lineHeight-24 fontWeight-700" : ""}`}>Primera parte 1/2</span>
                        </div>
                        {
                            !isSmart && (
                                <div className="guide-download">
                                    <button>
                                        <Link
                                            className='regular-14 noDecor black'
                                            target='_blank'
                                            onClick={savePDF}
                                            to="#">Descargar PDF</Link>
                                    </button>
                                </div>
                            )
                        }
                    </div>
                    <br />
                    <div className='guide-parrafs'>
                        <p className={`regular-14 ${isSmart ? "lineHeight-24" : ""}`}>Introducción</p>
                        <br />
                        <p className={`regular-14 ${isSmart ? "lineHeight-24" : ""}`}>Estimuado alumno:</p>
                        <p className={`regular-14 ${isSmart ? "lineHeight-24" : ""}`}>
                            Queremos darte la bienvenida y felicitarte por haber tomado una de las mejores decisiones de tu vida,
                            <span className='fw500'>una decisión que transformará totalmente tu futuro para lograr esa gran meta de convertirte en el especialista que tanto haz soñado.</span>
                        </p>
                        <br />
                        <p className={`regular-14 ${isSmart ? "lineHeight-24" : ""}`}>
                            En esta <span className='fw500'>nueva edición 2022</span> queremos brindarte la más alta seguridad de que <span className='fw500'>tendrás éxito en tu próximo ENARM</span>,
                            es por eso que hemos fortalecido y actualizado las herramientas más potentes del curso combinando el nuevo modelo de
                            aprendizaje “B-Learning” con la metodología de estudio más eficaz; además, contarás con los cambios, correcciones y
                            actualizaciones más novedosas de las Guías de Práctica Clínica Mexicanas y Normas Oficiales Mexicanas
                            (que es de donde se obtienen las respuestas correctas del ENARM), así mismo, <span className='fw500'>se incluyen los puntos clave,
                                datos preguntados, Tips e información relevante que fue preguntada en los últimos 8 ENARMs (2014-2021).</span>
                        </p>
                        <br />
                        <p className={`regular-14 ${isSmart ? "lineHeight-24" : ""}`}>
                            En este nuevo año iniciamos siendo los mejores, no solo por los grandes resultados obtenidos por nuestros alumnos,
                            sino por ser el primer y único curso que implementará el nuevo modelo de aprendizaje “B-Learnig Plataforma ENARM”
                            donde utilizaremos la más alta tecnología para crear las mejores estrategias de enseñanza-aprendizaje y así lograr
                            que con el menor esfuerzo, el alumno pueda obtener los mejores resultados en su preparación.
                        </p>
                        <br />
                        <p className={`regular-14 ${isSmart ? "lineHeight-24" : ""}`}>
                            El curso “Plataforma ENARM” es producto de la creación e innovación de 18 médicos residentes jóvenes, los cuales
                            hemos sustentado exitosamente y en años recientes el ENARM, además, de ser provenientes de los hospitales de más
                            alta jerarquía del país (INCMNSZ, Gea González, La Raza, entre otros…), añadiéndole así, una característica única y esencial al presente curso.
                        </p>
                        <br />
                        <p className={`regular-14 ${isSmart ? "lineHeight-24" : ""}`}>
                            A lo largo de más de 7 años de experiencia nos hemos dado cuenta que el ENARM más que convertirse en un examen de conocimientos,
                            se ha convertido en un gran obstáculo que pone a prueba todas las habilidades intelectuales del médico, ya que no solo valora
                            los aspectos teóricos de la medicina general, sino otros procesos cognitivos útiles como la identificación de ideas clave,
                            razonamiento diagnóstico, toma de decisiones y más...
                        </p>
                    </div>
                    {
                        isSmart && (
                            <div className="guide-download smart">
                                <button>
                                    <Link
                                        className='regular-14 noDecor black'
                                        target='_blank'
                                        onClick={savePDF}
                                        to="#">Descargar PDF</Link>
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default StudyGuidePage;
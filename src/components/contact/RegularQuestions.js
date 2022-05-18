import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/contact/RegularQuestions.css';

const questions_list = [
    {
        title: '¿Qué es Plataforma ENARM?',
        parraf: 'Somos el mejor y más completo curso Online para la preparación del ENARM, encargado ',
        content: () => {
            return (
                <p className='regular-14'>
                    Somos el mejor y más completo curso Online para la preparación del ENARM,
                    encargado de abarcar completamente las exigencias del ENARM, proporcionándoles
                    a los médicos <strong>las mejores herramientas</strong>, <strong>nuestro único y
                    efectivo método de estudio y las mejores técnicas para estudiar con inteligencia</strong>
                    y así desarrollar al 100% su potencial de retención,
                    maximizar los resultados en las pruebas,
                    obtener un mejor aprendizaje y memorización,
                    <strong> para lograr el éxito en el ENARM.</strong>
                </p>
            )
        },
        isClicked: false
    },
    {
        title: '¿Cuál es el método de estudio?',
        parraf: 'Metodología de estudio inovadora ',
        content: () => {
            return (
                <>
                    <ul className='ml-16'>
                        <li><p className='regular-14'>Metodología de estudio inovadora</p></li>
                        <li><p className='regular-14'>Científicamente comprobada y avalada por cada uno de los residentes y especialistas en formación pedagógica, con resultados reales en nuestros miles de alumnos que año con año se inscriben al curso.</p></li>
                        <li><p className='regular-14'>Te garantizamos que aumentarás tu capacidad de retención en la memoria a largo plazo.</p></li>
                    </ul>
                    <p className='regular-14'>Los resultados que ha arrojado nuestra metodología aplicada en los aspirantes al ENARM han sido los siguientes.</p>
                    <ul className='ml-16'>
                        <li><p className='regular-14'>Aumento en la retención de información en la memoria a largo plazo.</p></li>
                        <li><p className='regular-14'>Incremento del puntaje en los exámenes y simulacros tipo ENARM.</p></li>
                        <li><p className='regular-14'>Incremento desde 14 a 19 puntos en los alumnos que presentan por 2da vez su ENARM.</p></li>
                        <li><p className='regular-14'>Aprobación del ENARM A LA PRIMERA del 80 % de todos los alumnos que implementan nuestra metodología e inician desde Cero su estudio por un periodo de 6 meses.</p></li>
                        <li><p className='regular-14'>Aprobación del ENARM A LA PRIMERA del 90 % de todos los alumnos que implementan nuestra metodología e inician su estudio desde Cero por un periodo de 12 meses.</p></li>
                        <li><p className='regular-14'>8 de cada 10 alumnos obtiene su carta de Seleccionado .</p></li>
                    </ul>
                </>
            )
        },
        isClicked: false
    },
    {
        title: '¿Qué porcentaje de alumnos que toman el curso de nuestra Plataforma ENARM es aceptado en una residencia?',
        parraf: 'El porcentaje de aceptación REAL que tiene nuestro curso es del 80%',
        content: () => {
            return (
                <ul className='ml-16'>
                    <li><p className="regular-14">El porcentaje de aceptación REAL que tiene nuestro curso es del 80%, a comparación de otros cursos que te ofrecen un mayor porcentaje de alumnos aceptados, pero solo es Ficticio.</p></li>
                    <li><p className="regular-14">Observa las opiniones o pregunta a alguien que ya fue alumno de Plataforma ENARM, quien mejor que ellos para darte una recomendación sincera.</p></li>
                </ul>
            )
        },
        isClicked: false
    },
    {
        title: '¿Duración / Vigencia de la plataforma?',
        parraf: 'Desde el día en que te inscribes al curso de Plataforma ENARM ',
        content: () => {
            return (
                <ul className='ml-16'>
                    <li><p className='regular-14'>Desde el día en que te inscribes al curso de Plataforma ENARM <span><strong>hasta el ultimo día del ENARM</strong></span></p></li>
                </ul>
            )
        },
        isClicked: false
    },
    {
        title: 'Costo y contenido de Plataforma ENARM',
        parraf: 'Inscríbete hoy y obtén un increíble descuento ',
        content: () => {
            return (
                <div>
                    <h2 className='regular-23 bold mb-12'>Precio Normal: $10,000.00</h2>
                    <h2 className='regular-23 bold mb-12'>Inscríbete hoy y obtén un increíble descuento.</h2>
                    <h2 className='mb-12'><a className='regular-23 bold link-blue' href="https://plataformaenarm.com/" target="_blank" rel="noopener noreferrer">Para inscribirte haz → CLIC AQUI ←</a></h2>
                    <p className='mb-12'>
                        <img
                            alt=""
                            width="300"
                            height="300"
                            src="https://plataformaenarm.com/wp-content/uploads/2021/10/PicsArt_09-13-11.41.21-1-768x768-1-300x300.jpg"
                            />
                    </p>
                    <p className='mb-12'>
                        <img
                            alt=""
                            width="300"
                            height="300"
                            src="https://plataformaenarm.com/wp-content/uploads/2021/10/PicsArt_09-13-12.03.02-1-768x768-1-300x300.jpg" />
                    </p>
                </div>
            )
        },
        isClicked: false
    },
    {
        title: '¿Es seguro inscribirme a Plataforma ENARM?',
        parraf: 'Puedes confiar plenamente en nosotros, ya que somos un curso ',
        content: () => {
            return (
                <>
                    <p className='regular-14'>Puedes <b className='sky-blue'>confiar</b> plenamente en nosotros, ya que somos un curso élite que quiere verte triunfar.</p>
                    <p className='regular-14'>El método de pago que seleccionamos fue MercadoPago, ya que con este método, si no estuvieras contento o por alguna extraña razón no se te diera el acceso a la plataforma, puedes solicitar la devolución del %100 de tu dinero directamente con MercadoPago, ellos manejan una política de Programa de Protección al Comprador, para más información, <a className='link-blue' href="https://www.mercadopago.com.mx/ayuda/dinero-seguridad-compras_283#programa-proteccion-comprador">clic aquí</a>.</p>
                    <p className='regular-14'><b>Hemos ayudado a más de 15 mil Médicos a lograr su objetivo de ser especialistas.</b></p>
                </>
            )
        },
        isClicked: false
    },
    {
        title: '¿Cuáles son las formas de pago?',
        parraf: 'Puedes inscribirte con ',
        content: () => {
            return (
                <>
                    <h3 className='regular-16'>Puedes inscribirte con: <a className='link-blue' href="https://bit.ly/2M5p5sB" target="_blank" rel="noopener noreferrer">Para inscribirte haz: → CLIC AQUI ←</a></h3>
                    <ul className='ml-16'>
                        <li><p className="regular-14">Crédito: <span className='sky-blue'>Todas las tarjetas Visa y MasterCard.</span></p></li>
                        <li><p className="regular-14">Débito: <span className="sky-blue">Todas las tarjetas Banamex, BBVA Bancomer, Santander, HSBC, Banorte e IXE (solo tarjetas de débito de cuentas bancarias en México).</span></p></li>
                        <li><p className="regular-14">Efectivo: <span className="sky-blue">Cualquier tienda OXXO o SEVEN ELEVEN.</span></p></li>
                        <li><p className="regular-14">Depósito y Transferencia: <span className="sky-blue">Desde los bancos; Banamex, BBVA Bancomer y Santander.</span></p></li>
                    </ul>
                    <p className='regular-14'>El pago se acredita según la siguiente tabla dependiendo de tu forma de pago.</p>
                </>
            )
        },
        isClicked: false
    },
    {
        title: 'Ya realicé mi pago de inscripción, ¿cómo puedo acceder a mi Plataforma ENARM?',
        parraf: 'Inscríbete realizado tu pago ',
        content: () => {
            return (
                <>
                    <h2 className='regular-23 bold'>Pasos:</h2>
                    <ol className='ml-16'>
                        <li><p className='regular-14'>Inscríbete realizado tu pago.</p></li>
                        <li><p className='regular-14'>Envíanos screenshot o foto de la acreditación de tu pago para proporcionarte un link y te registres.</p></li>
                        <li><p className='regular-14'>Comienza a prepar tu ENARM.</p></li>
                    </ol>
                </>
            )
        },
        isClicked: false
    },
    {
        title: 'No puedo ver el contenido de mi Plataforma / Pasos para ingresar a la Plataforma',
        parraf: 'Para poder ingresar a tu PLATAFORMA ENARM ',
        content: () => {
            return (
                <>
                    <p className='regular-14'>Para poder ingresar a tu <b className='sky-blue'>PLATAFORMA ENARM</b> debiste haber enviado “foto” de tu pago de inscripción a nuestra página de Facebook: <b className='sky-blue'>Plataforma ENARM</b>, ahì te proporcionan un link para registrarte y activar tu cuenta.</p>
                    <p className='regular-14'>Si no puedes ingresar o necesitas ayuda <a className='link-blue' href="https://www.facebook.com/Plataforma-ENARM-2018-1818426895148234/?ref=br_rs">→ Haz clic aquí ←</a></p>
                </>
            )
        },
        isClicked: false
    },
]

const RegularQuestions = ({ size }) => {

    const [selected, setSelected] = useState(questions_list);
    const collapsedParrafToggle = (ix) => {

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
                                                {
                                                    selected[index].isClicked ? (
                                                        item.content()
                                                    ) : (
                                                        <p className='regular-14'>{ collapsedParrafToggle(index) }</p>
                                                    )
                                                }
                                                <Link to='#' className=' regular-14 text-right gray no-style' onClick={() => toggleItemClick(index) }>{ selected[index].isClicked ? "Contraer" : "Expandir"}</Link>
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
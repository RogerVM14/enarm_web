import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import alertIcon from '../../../assets/icons/alert.png';

const CardLegacy = (props) => {

  const [showBody, setShowBody] = useState(false);

  return (
    <div className={`c-card-legacy`}>
      <div className={`c-cardlegacy-header`} onClick={() => { setShowBody(!showBody) }}>
        <div className="title-wrapper" >
          <span>
            Plan de Estudios de {props.routePlan.toLowerCase()}
          </span>
          <i className="material-icons">{showBody ? "expand_less" : "expand_more"}</i>
        </div>
        {/* {!isSmart && <span className='gray-textColor regular-14'>Para comenzar</span>} */}
      </div>
      {/* {
        isSmart ? (
          showBody ?
            <div className={`c-cardlegacy-body `}>
              <span className='gray-textColor regular-14'>Para comenzar</span>

              <p className="regular-14">
                Los Planes de Estudio estân distribuidos en semanas.
                Comienza en la primera y ve avanzando hasta terminar.
                Realiza tus Gráficos revisando los Resúmenes ó bibliografia extra.
                Si tienes dudas sobre los Gráficos a realizar te recomendamos consultar nuestras
                <span className='regular-14 sky-blue'> Guía de Estudio parte 1</span> y <span className='regular-14 sky-blue'>Guía de Estudio parte 2</span>.<br />
                Sólo después de realizar tus gráficos deberás ver las Video-Clases. Una vez visto las video clases, repasarás los contenido con los Simuladores.
              </p>
              <img className='alert-icon' src={alertIcon} alt="alert" />
              <ul>
                <li className='relative'>

                  <p className="regular-14">
                    Antes de visualizar las Video-Clases es indispensable realizar tus "GRÁFICOS" de los temas que verás.
                  </p>
                </li>
                <li><p className="regular-14">Los Domingos practicas en tu SimuladorPRO; realiza todos los simulacros de la especialidad que estudiaste durante la semana.</p></li>
              </ul>
              <p className="regular-14">Al inicio comenzaremos con simulacros de 200 y 250 preguntas. Finalizaremos con Simulacros completos de 450 preguntas simulando al ENARM.
                <br />Nuestros Resúmenes contienen las respuestas que encontrarás como correctas en tu ENARM, no hagas caso a ningún otra bibliografìa mas.
                <br /><span className="regular-14 bold">8 de cada 10 alumnos que se prepararon con Plataforma ENARM ya son residentes, los otros 2 no le pusieron ganas, tú decides a cuáles quieres pertenecer.</span>
                <br />El plan de estudio Intensivo estará disponible 1 mes antes del ENARM (1 Agosto ).
              </p>
            </div> : null
        ) : ( */}
      <div className={`c-cardlegacy-body `}>
        <p className="regular-14">
          Los Planes de Estudio estân distribuidos en semanas.
          Comienza en la primera y ve avanzando hasta terminar.
          Realiza tus Gráficos revisando los Resúmenes ó bibliografia extra.
          Si tienes dudas sobre los Gráficos a realizar te recomendamos consultar nuestras
          <Link className='regular-14 sky-blue' to="#"> Guía de Estudio parte 1</Link> y <Link className='regular-14 sky-blue' to="#">Guía de Estudio parte 2</Link>.
        </p>
        <p className="regular-14">Sólo después de realizar tus gráficos deberás ver las Video-Clases. Una vez visto las video clases, repasarás los contenido con los Simuladores.</p>
        <ul>
          <li className='relative'>
            <img src={alertIcon} alt="alert" />
            <p className="regular-14">
              Antes de visualizar las Video-Clases es indispensable realizar tus "GRÁFICOS" de los temas que verás.
            </p>
          </li>
          <li><p className="regular-14">Los Domingos practicas en tu SimuladorPRO; realiza todos los simulacros de la especialidad que estudiaste durante la semana.</p></li>
        </ul>
        <p className="regular-14">Al inicio comenzaremos con simulacros de 200 y 250 preguntas. Finalizaremos con Simulacros completos de 450 preguntas simulando al ENARM.</p>
        <p className="regular-14">Nuestros Resúmenes contienen las respuestas que encontrarás como correctas en tu ENARM, no hagas caso a ningún otra bibliografìa mas.</p>
        <p className="regular-14 bold">8 de cada 10 alumnos que se prepararon con Plataforma ENARM ya son residentes, los otros 2 no le pusieron ganas, tú decides a cuáles quieres pertenecer.</p>
        <p className="regular-14">El plan de estudio Intensivo estará disponible 1 mes antes del ENARM (1 Agosto ).</p>
      </div>
      {/* //   )
      // } */}
    </div>
  )
}

export default CardLegacy;
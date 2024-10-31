import React, { useState } from "react";
import { Link } from "react-router-dom";
import AlertIcon from "../../../assets/icons/alert.png";
import ChevronIcon from "../../../assets/icons/chevronicon.svg";
import ui from "./index.module.css";

const PlanCourse = () => {
  const [display, setDisplay] = useState(true);

  return (
    <section>
      <div className={ui.sectionHeader}>
        <div
          className={ui.headerContent}
          onClick={() => {
            setDisplay(!display);
          }}
        >
          <h5>
            Plan de Estudio de 11 meses
            <img src={ChevronIcon} alt="chevron" data-display={display} />
          </h5>
          <span data-display={display}>Para comenzar</span>
        </div>
      </div>
      <BodyContent display={display} />
    </section>
  );
};

const BodyContent = ({ display }) => {
  if (display === false) return null;
  return (
    <div className={ui.sectionBody}>
      <p>
        Los Planes de Estudio estân distribuidos en semanas. Comienza en la primera y ve avanzando hasta terminar.
        Realiza tus Gráficos revisando los Resúmenes ó bibliografia extra. Si tienes dudas sobre los Gráficos a realizar
        te recomendamos consultar nuestras
        <a href="https://enarm-assets.s3.us-east-1.amazonaws.com/docs/Guia+ENARM+parte+1.pdf" target="_blank"> Guía de Estudio parte 1</a> y <a href="https://enarm-assets.s3.us-east-1.amazonaws.com/docs/Guia+ENARM+parte+2.pdf" target="_blank">Guía de Estudio parte 2</a>.
        <br />
        Sólo después de realizar tus gráficos deberás ver las Video-Clases. Una vez visto las video clases, repasarás
        los contenido con los Simuladores.
        Antes de comenzar, es importante también que veas el ejemplo de nuestro <a href="https://enarm-assets.s3.us-east-1.amazonaws.com/docs/Ejemplo+calendario+estudio+.htm" target="_blank">calendario de estudio</a>, donde podrás observar la manera adecuada de llevar a cabo tu curso.
      </p>
      <div className={ui.alerts}>
        <img src={AlertIcon} alt="alert" width={16} height={16} />
        <ul>
          <li>
            Antes de visualizar las Video-Clases es indispensable realizar tus "GRÁFICOS" de los temas que verás.{" "}
          </li>
          <li>
            Los Domingos practicas en tu SimuladorPRO; realiza todos los simulacros de la especialidad que estudiaste
            durante la semana.
          </li>
        </ul>
      </div>
      <p>
        Al inicio comenzaremos con simulacros de 200 y 250 preguntas. Finalizaremos con Simulacros completos de 450
        preguntas simulando al ENARM.
        <br />
        Nuestros Resúmenes contienen las respuestas que encontrarás como correctas en tu ENARM, no hagas caso a ningún
        otra bibliografìa mas.
        <br />
        <strong>
          8 de cada 10 alumnos que se prepararon con Plataforma ENARM ya son residentes, los otros 2 no le pusieron
          ganas, tú decides a cuáles quieres pertenecer.
        </strong>
        <br />
        El plan de estudio Intensivo estará disponible 1 mes antes del ENARM (1 Agosto ).
      </p>
    </div>
  );
};

export default PlanCourse;

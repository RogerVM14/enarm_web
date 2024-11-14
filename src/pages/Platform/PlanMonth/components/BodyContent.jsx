import React from "react";
import { Link } from "react-router-dom";
import AlertIcon from "../../../../assets/icons/alert";

const BodyContent = ({ display }) => {
  if (display === false) return null;
  return (
    <div className="bg-white p-6">
      <p className="poppins-regular-14">
        Los Planes de Estudio estân distribuidos en semanas. Comienza en la primera y ve avanzando hasta terminar.
        Realiza tus Gráficos revisando los Resúmenes ó bibliografia extra. Si tienes dudas sobre los Gráficos a realizar
        te recomendamos consultar nuestras
        <Link
          to="https://enarm-assets.s3.us-east-1.amazonaws.com/docs/Guia+ENARM+parte+1.pdf"
          target="_blank"
          className="poppins-regular-14 text-[#05B2FA] underline
"
        >
          {" "}
          Guía de Estudio parte 1
        </Link>{" "}
        y{" "}
        <Link
          to="https://enarm-assets.s3.us-east-1.amazonaws.com/docs/Guia+ENARM+parte+2.pdf"
          target="_blank"
          className="poppins-regular-14 text-[#05B2FA] underline
"
        >
          Guía de Estudio parte 2
        </Link>
        .
        <br />
        Sólo después de realizar tus gráficos deberás ver las Video-Clases. Una vez visto las video clases, repasarás
        los contenido con los Simuladores. Antes de comenzar, es importante también que veas el ejemplo de nuestro{" "}
        <Link
          to="https://enarm-assets.s3.us-east-1.amazonaws.com/docs/Ejemplo+calendario+estudio+.htm"
          target="_blank"
          className="poppins-regular-14 text-[#05B2FA] underline
"
        >
          calendario de estudio
        </Link>
        , donde podrás observar la manera adecuada de llevar a cabo tu curso.
      </p>
      <div className="flex flex-row justify-start gap-x-6 py-2">
        <AlertIcon />
        <ul className="list-disc">
          <li>
            <p className="poppins-regular-14">
              Antes de visualizar las Video-Clases es indispensable realizar tus "GRÁFICOS" de los temas que verás.
            </p>
          </li>
          <li>
            <p className="poppins-regular-14">
              Los Domingos practicas en tu SimuladorPRO; realiza todos los simulacros de la especialidad que estudiaste
              durante la semana.
            </p>
          </li>
        </ul>
      </div>
      <p className="poppins-regular-14">
        Al inicio comenzaremos con simulacros de 200 y 250 preguntas. Finalizaremos con Simulacros completos de 450
        preguntas simulando al ENARM.
        <br />
        Nuestros Resúmenes contienen las respuestas que encontrarás como correctas en tu ENARM, no hagas caso a ningún
        otra bibliografìa mas.
        <br />
        <strong className="poppins-semibold-14">
          8 de cada 10 alumnos que se prepararon con Plataforma ENARM ya son residentes, los otros 2 no le pusieron
          ganas, tú decides a cuáles quieres pertenecer.
        </strong>
        <br />
        El plan de estudio Intensivo estará disponible 1 mes antes del ENARM (1 Agosto).
      </p>
    </div>
  );
};
export default BodyContent;

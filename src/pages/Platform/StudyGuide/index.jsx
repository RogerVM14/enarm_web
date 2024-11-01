import React from "react";
import DashboardLayout from "../../Layouts/Dashboard";
import { Link } from "react-router-dom";
import ui from "./index.module.css";

const StudyGuidePage = () => {
  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <section id={ui.studyGuideContainer}>
          <header>
            <div className={ui.containerHeader}>
              <div className={ui.headerTitle}>
                <h5>Guía de Estudio</h5>
                <p>Documentos Enarm</p>
              </div>
              <a
                href="https://enarm-assets.s3.us-east-1.amazonaws.com/docs/Guia+ENARM+parte+1.pdf"
                target="_blank"
                rel="noreferrer"
                className={ui.documentLink}
                data-size="xl"
              >
                Descargar versión PDF
              </a>
            </div>
          </header>
          <div className={ui.containerBody}>
            <div className={ui.guideIntroduction}>
              <h2>Guía de Preparacíon ENARM 2024</h2>
              <a
                href="https://enarm-assets.s3.us-east-1.amazonaws.com/docs/Guia+ENARM+parte+1.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <p className={ui.blueParraf}>Primera parte</p>
              </a>
              <a
                href="https://enarm-assets.s3.us-east-1.amazonaws.com/docs/Guia+ENARM+parte+2.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <p className={ui.blueParraf}>segund parte</p>
              </a>
              <br />
              <p>Introducción</p>
              <br />
              <p>
                Estimado Alumno: <br />
                Queremos darte la bienvenida y felicitarte por haber tomado una
                de las mejores decisiones de tu vida,{" "}
                <strong>
                  una decisión que transformará totalmente tu futuro para lograr
                  esa gran meta de convertirte en el especialista que tanto haz
                  soñado.
                </strong>
              </p>
              <br />
              <p>
                En esta <strong>nueva edición 2024</strong> queremos brindarte
                la más alta seguridad de que{" "}
                <strong>tendrás éxito en tu próximo ENARM</strong>, es por eso
                que hemos fortalecido y actualizado las herramientas más
                potentes del curso combinando el nuevo modelo de aprendizaje
                “B-Learning” con la metodología de estudio más eficaz; además,
                contarás con los cambios, correcciones y actualizaciones más
                novedosas de las Guías de Práctica Clínica Mexicanas y Normas
                Oficiales Mexicanas (que es de donde se obtienen las respuestas
                correctas del ENARM), así mismo,{" "}
                <strong>
                  se incluyen los puntos clave, datos preguntados, Tips e
                  información relevante que fue preguntada en los últimos 8
                  ENARMs (2014-2021).
                </strong>
              </p>
              <br />
              <p>
                En este nuevo año iniciamos siendo los mejores, no solo por los
                grandes resultados obtenidos por nuestros alumnos, sino por ser
                el primer y único curso que implementará el nuevo modelo de
                aprendizaje “B-Learnig Plataforma ENARM” donde utilizaremos la
                más alta tecnología para crear las mejores estrategias de
                enseñanza-aprendizaje y así lograr que con el menor esfuerzo, el
                alumno pueda obtener los mejores resultados en su preparación.
              </p>
              <br />
              <p>
                El curso “Plataforma ENARM” es producto de la creación e
                innovación de 18 médicos residentes jóvenes, los cuales hemos
                sustentado exitosamente y en años recientes el ENARM, además, de
                ser provenientes de los hospitales de más alta jerarquía del
                país (INCMNSZ, Gea González, La Raza, entre otros…), añadiéndole
                así, una característica única y esencial al presente curso.
              </p>
              <br />
              <p>
                A lo largo de más de 7 años de experiencia nos hemos dado cuenta
                que el ENARM más que convertirse en un examen de conocimientos,
                se ha convertido en un gran obstáculo que pone a prueba todas
                las habilidades intelectuales del médico, ya que no solo valora
                los aspectos teóricos de la medicina general, sino otros
                procesos cognitivos útiles como la identificación de ideas
                clave, razonamiento diagnóstico, toma de decisiones y más...
              </p>
            </div>
            <Link to={"#"} className={ui.documentLink} data-size="sm">
              Descargar versión PDF
            </Link>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default StudyGuidePage;

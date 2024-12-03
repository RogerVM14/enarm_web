import React from "react";
import DashboardLayout from "../../Layouts/Dashboard";
import ui from "./index.module.css";

const AcademicProgramPage = () => {
  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <section className="container-section bg-white text-dark">
          <div className="full-container">
            <h1 className="main-title-bold text-center mb-8 text-cyan-600">
              AVISO LEGAL
            </h1>
            <div className="regular-parraf-20 space-y-6">
              <p>
                <span
                  className="text-cyan-800"
                  style={{ fontFamily: "PoppinsBold" }}
                >
                  {" "}
                  Bloqueo del alumno:
                </span>{" "}
                No compartas tu cuenta, evita que tu curso se Bloqueé, si en
                algún momento se detecta el uso indebido de la cuenta,
                automáticamente será dado de baja dicho alumno sin
                responsabilidad para Plataforma ENARM, además, quedará anulado
                el premio que se les otorga al finalizar, si eres seleccionado
                como Residente en el ENARM.
              </p>
              <p>
                •
                <span style={{ fontFamily: "PoppinsBold" }}>
                  {" "}
                  Puedes acceder desde 1 Dispositivo{" "}
                </span>{" "}
                (Celular, Tablet o PC) a la vez
              </p>
              <p>
                {" "}
                •
                <span style={{ fontFamily: "PoppinsBold" }}>
                  ¿Cómo detectamos el uso indebido de una cuenta?:
                </span>{" "}
                Tu dirección IP es una clave de localización y registro de todos
                tus dispositivos móviles, tabletas y PCs, cada uno está enlazado
                con tu información y se corrobora el acceso desde un único
                punto. Al detectar cambios repentinos de localización largos,
                u/ó sitios de conexión, esta dirección IP cambia y en caso de
                detectar información ajena al alumno:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <span style={{ fontFamily: "PoppinsBold" }}>
                    {" "}
                    Se anula automáticamente el premio que le otorga a todo
                    aquel alumno que es seleccionado en el ENARM.
                  </span>
                </li>
                <li>
                  <span style={{ fontFamily: "PoppinsBold" }}>
                    {" "}
                    Se dará de baja automáticamente al alumno
                  </span>{" "}
                  <span
                    className="text-cyan-600"
                    style={{ fontFamily: "PoppinsBold" }}
                  >
                    {" "}
                    sin responsabilidad para Plataforma ENARM.{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-12 regular-parraf-20">
              <h2 className="section-title text-center text-cyan-600">
                DURACIÓN / VIGENCIA
              </h2>
              <p>
                La duración del curso es desde el día en que te inscribes al
                curso de Plataforma ENARM hasta el último día del ENARM.
              </p>
            </div>
            <div className="mt-12 regular-parraf-20">
              <h2 className="section-title text-center text-cyan-600">
                ACCESO
              </h2>
              <p>
                El acceso a tu Plataforma ENARM lo podrás realizar las{" "}
                <span style={{ fontFamily: "PoppinsBold" }}>
                  {" "}
                  24 horas del día y en cualquier dispositivo Móvil, Tableta ó
                  PC, “Pero” desde 1 solo dispositivo a la vez
                </span>
              </p>
            </div>
            <div className="mt-12 regular-parraf-20">
              <h2 className="section-title text-center text-cyan-600">
                CONTACTO
              </h2>
              <p>
                Si presentas alguna duda de algún tema o especialidad, no dudes
                en enviárnosla al whatsapp{" "}
                <span style={{ fontFamily: "PoppinsBold" }}>444 509 05 43</span>
                , ahí estará un residente siempre disponible para poder resolver
                tus dudas.
              </p>{" "}
              <br />
              <p>
                <span style={{ fontFamily: "PoppinsBold" }}>
                  {" "}
                  El año pasado{" "}
                </span>{" "}
                resolvían alrededor de 1000 dudas diariamente los residentes,
                por la alta demanda del curso este año serán muchas más, por lo
                que te pedimos un poco de paciencia para poder atenderte.
              </p>
              <p>
                En caso de que tu duda no sea resuelta en menos de 12 horas
                vuélvenos a contactar, para nosotros será un gusto poder
                apoyarte.
              </p>
            </div>
            <div className="mt-12 regular-parraf-20">
              <h2 className="section-title text-center text-cyan-600">
                IMPORTANTE
              </h2>
              <p>
                Plataforma ENARM ha tenido como alumnos a los mejores promedios
                año con año de los últimos 10 ENARMs y si hay algo que destacar,
                es que todos ellos han seguido el{" "}
                <span
                  className="text-cyan-600"
                  style={{ fontFamily: "PoppinsBold" }}
                >
                  método y técnica de estudio proporcionado
                </span>{" "}
                por el conjunto de Residentes y especialistas en Pedagogía, por
                lo cual queremos hacerte la siguiente mención:
              </p>
              <ul className="list-disc pl-6 mt-5">
                <li>
                  <span style={{ fontFamily: "PoppinsBold" }}>
                    {" "}
                    El NO seguir alguna de nuestras recomendaciones, técnica o
                    metodología de estudio{" "}
                  </span>{" "}
                  <span
                    style={{ fontFamily: "PoppinsBold" }}
                    className="text-red-400"
                  >
                    {" "}
                    será bajo tu propia responsabilidad y criterio
                  </span>
                  <span style={{ fontFamily: "PoppinsBold" }}>
                    {" "}
                    ya que esto implicaría
                  </span>{" "}
                  <span
                    style={{ fontFamily: "PoppinsBold" }}
                    className="text-red-400"
                  >
                    {" "}
                    la NO aceptación a la especialidad de tu elección.
                  </span>
                </li>
                <li>
                  Nuestra metodología y técnica de estudio está enfocada en
                  lograr obtener un puntaje{" "}
                  <span style={{ fontFamily: "PoppinsBold" }}>
                    {" "}
                    &gt;80 en el ENARM,
                  </span>{" "}
                  <span
                    className="text-cyan-600"
                    style={{ fontFamily: "PoppinsBold" }}
                  >
                    {" "}
                    NO solo aprobarlo,
                  </span>{" "}
                  <span style={{ fontFamily: "PoppinsBold" }}>
                    {" "}
                    porque aprobarlo… cualquiera, nosotros estamos aquí para
                    obtener
                  </span>{" "}
                  los mejores puntajes.
                </li>
              </ul>
            </div>
            <div className="mt-12 regular-parraf-20">
              <h2 className="section-title text-center text-cyan-600">
                POR ÚLTIMO
              </h2>
              <p>
                Agradecemos mucho la confianza depositada en todo nuestro equipo
                de Residentes, una de nuestras promesas es verte{" "}
                <span style={{ fontFamily: "PoppinsBold" }}> TRIUNFAR</span> ,
                todo el equipo está listo, y{" "}
                <span
                  className="text-cyan-600"
                  style={{ fontFamily: "PoppinsBold" }}
                >
                  {" "}
                  vamos a dar todo por ti,
                </span>{" "}
                esperamos que{" "}
                <span style={{ fontFamily: "PoppinsBold" }}>
                  {" "}
                  tu también lo des TODO para ti mismo,
                </span>{" "}
                muchos de ustedes son recomendados por alumnos que les fue
                EXCELENTE en el ENARM del año pasado, ahora ustedes se darán
                cuenta, del ¿por qué?, somos los{" "}
                <span
                  className="text-cyan-600"
                  style={{ fontFamily: "PoppinsBold" }}
                >
                  {" "}
                  #1 del ENARM;
                </span>{" "}
                <span style={{ fontFamily: "PoppinsBold" }}>
                  {" "}
                  ya que la Preparación, Puntos clave, Simulador, Resúmenes y
                  material de nuestro curso
                </span>{" "}
                <span
                  className="text-cyan-600"
                  style={{ fontFamily: "PoppinsBold" }}
                >
                  {" "}
                  es lo que te van a preguntar el día de tu ENARM.
                </span>{" "}
              </p>
            </div>
            <div className="mt-12 regular-parraf-20">
              <h2 className="section-title text-center text-cyan-600">
                INICIO DE MI PREPARACIÓN:
              </h2>
              <p>
                Tu plataforma es muy práctica ya lo verás, pero como es algo
                nuevo para ti,{" "}
                <span
                  className="text-cyan-600"
                  style={{ fontFamily: "PoppinsBold" }}
                >
                  te costará un par de días acoplarte y entenderle, no te
                  desesperes.
                </span>{" "}
                <span style={{ fontFamily: "PoppinsBold" }}>
                  Te sugerimos empezar a utilizarla desde un dispositivo de mesa
                  (computadora, laptot).
                </span>{" "}
              </p>
            </div>
            <p className="text-center mt-12 regular-parraf-20">
              ¡Mucho éxito! 😊
            </p>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default AcademicProgramPage;

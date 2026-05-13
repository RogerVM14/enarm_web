import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LandingLayout from "../../Layouts/Landing";
import { ROUTES } from "../../../constants/routes";
import { SUPPORT_EMAIL } from "../../../constants/generals";
import ui from "./index.module.css";

const mailtoHref = `mailto:${SUPPORT_EMAIL}?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20datos%20(Facebook)`;

const DataDeletionPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <LandingLayout page="data-deletion">
      <section id={ui.hero}>
        <div className="full-container">
          <div className="container-section">
            <div className={ui.intro}>
              <h1 className="main-title-bold">
                Eliminación de datos de inicio de sesión con Facebook
              </h1>
              <p className={`regular-parraf ${ui.meta}`}>
                Última actualización: 12 de mayo de 2026
              </p>
              <p className="regular-parraf">
                En Plataforma ENARM puedes solicitar la eliminación de los datos
                personales asociados al inicio de sesión con Facebook. La
                plataforma no incluye hoy un formulario automático para este
                trámite; las solicitudes se atienden por correo electrónico.
              </p>
            </div>
            <article className={ui.content}>
              <section>
                <h2 className="section-subtitle blue text-left">
                  Cómo solicitar la eliminación
                </h2>
                <p className="regular-parraf">
                  Envía un correo a{" "}
                  <a
                    href={mailtoHref}
                    className={`link-blue ${ui.emailLink}`}
                  >
                    {SUPPORT_EMAIL}
                  </a>{" "}
                  con el asunto indicando que se trata de una solicitud de
                  eliminación de datos relacionados con el inicio de sesión de
                  Facebook.
                </p>
                <p className="regular-parraf">
                  También puedes escribirnos desde los canales de{" "}
                  <Link to={ROUTES.CONTACTO} className="link-blue">
                    contacto
                  </Link>{" "}
                  si necesitas orientación previa.
                </p>
              </section>

              <section>
                <h2 className="section-subtitle blue text-left">
                  Información que debe incluir tu solicitud
                </h2>
                <p className="regular-parraf">
                  Para poder identificar tu cuenta y procesar la solicitud, el
                  mensaje debe incluir:
                </p>
                <ul className={`regular-parraf ${ui.list}`}>
                  <li>Nombre completo.</li>
                  <li>Correo electrónico asociado a tu cuenta en la plataforma.</li>
                  <li>Motivo de la solicitud (breve descripción).</li>
                </ul>
              </section>

              <section>
                <h2 className="section-subtitle blue text-left">
                  Plazo de respuesta
                </h2>
                <p className="regular-parraf">
                  Una vez recibida y validada tu solicitud, procederemos a la
                  eliminación de la información aplicable dentro de un periodo
                  máximo de{" "}
                  <strong className="blue">30 días naturales</strong>. Si
                  necesitamos datos adicionales para verificar tu identidad, te
                  lo comunicaremos por el mismo medio.
                </p>
              </section>

              <section>
                <h2 className="section-subtitle blue text-left">
                  Qué datos guardamos cuando usas Facebook
                </h2>
                <p className="regular-parraf">
                  En el contexto del inicio de sesión con Facebook, los datos que
                  almacenamos y tratamos para autenticación son de carácter
                  básico, en línea con lo que el proveedor y Firebase
                  Authentication comparten con nosotros. De forma enunciativa:
                </p>
                <ul className={`regular-parraf ${ui.list}`}>
                  <li>Nombre.</li>
                  <li>Correo electrónico.</li>
                  <li>
                    Identificador de Facebook utilizado para vincular e
                    identificar tu cuenta en el sistema de autenticación.
                  </li>
                </ul>
                <div className={ui.callout}>
                  <p className="regular-parraf">
                    Esta página describe el procedimiento para solicitar la
                    eliminación de dichos datos. Para el resto de tratamientos y
                    derechos (acceso, rectificación, oposición, etc.), consulta
                    nuestra{" "}
                    <Link to={ROUTES.POLITICA_PRIVACIDAD} className="link-blue">
                      política de privacidad
                    </Link>
                    .
                  </p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
};

export default DataDeletionPage;

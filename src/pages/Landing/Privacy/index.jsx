import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LandingLayout from "../../Layouts/Landing";
import { ROUTES } from "../../../constants/routes";
import ui from "./index.module.css";

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <LandingLayout page="privacy">
      <section id={ui.hero}>
        <div className="full-container">
          <div className="container-section">
            <div className={ui.intro}>
              <h1 className="main-title-bold">Política de privacidad</h1>
              <p className={`regular-parraf ${ui.meta}`}>
                Última actualización: 12 de mayo de 2026
              </p>
              <p className="regular-parraf">
                En Plataforma ENARM respetamos tu privacidad. Este documento
                describe cómo tratamos los datos personales cuando utilizas
                nuestro sitio web, te registras, contratas el curso de
                preparación para el ENARM y accedes a la plataforma educativa
                (contenidos, simuladores, retroalimentación, recursos y área de
                cuenta).
              </p>
            </div>
            <article className={ui.content}>
              <section>
                <h2 className="section-subtitle blue text-left">
                  1. Responsable del tratamiento
                </h2>
                <p className="regular-parraf">
                  El responsable del tratamiento de los datos personales
                  recabados a través de este sitio y de la plataforma es
                  Plataforma ENARM, en adelante &quot;nosotros&quot; o &quot;la
                  plataforma&quot;, con domicilio en los datos de contacto
                  publicados en la sección de{" "}
                  <Link to={ROUTES.CONTACTO} className="link-blue">
                    contacto
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="section-subtitle blue text-left">
                  2. Datos que podemos recabar
                </h2>
                <p className="regular-parraf">
                  De forma enunciativa y no limitativa, podemos tratar:
                </p>
                <ul className={`regular-parraf ${ui.list}`}>
                  <li>
                    Identificadores de cuenta: nombre, correo electrónico y
                    datos necesarios para crear y administrar tu usuario.
                  </li>
                  <li>
                    Credenciales de acceso y datos de autenticación cuando
                    inicias sesión con correo y contraseña o mediante proveedores
                    sociales (por ejemplo Google o Facebook), conforme a la
                    información que esos proveedores compartan con nosotros y
                    con Firebase Authentication.
                  </li>
                  <li>
                    Datos de verificación de correo y recuperación de
                    contraseña (códigos o flujos enviados al email que
                    proporciones).
                  </li>
                  <li>
                    Información relacionada con tu uso del servicio educativo:
                    avance en el plan de estudios, resultados de simuladores,
                    retroalimentación y otra actividad vinculada al curso, cuando
                    la plataforma los registre para fines académicos y de
                    servicio.
                  </li>
                  <li>
                    Datos de facturación y pago cuando contratas el curso
                    (incluidos datos que procesen de forma segura pasarelas como
                    Mercado Pago o Conekta, según el método de pago elegido).
                  </li>
                  <li>
                    Datos técnicos: dirección IP, tipo de navegador, identificadores
                    de dispositivo y registros de uso necesarios para seguridad,
                    diagnóstico y mejora del servicio.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="section-subtitle blue text-left">
                  3. Finalidades del tratamiento
                </h2>
                <p className="regular-parraf">
                  Utilizamos tus datos para:
                </p>
                <ul className={`regular-parraf ${ui.list}`}>
                  <li>
                    Prestar el servicio de preparación ENARM: acceso a
                    materiales, videoclases, simuladores, resultados y
                    herramientas de estudio.
                  </li>
                  <li>
                    Administrar tu cuenta, autenticarte, verificar identidad
                    cuando corresponda y brindar soporte.
                  </li>
                  <li>
                    Gestionar pagos, confirmaciones y obligaciones contractuales
                    relacionadas con la contratación del curso.
                  </li>
                  <li>
                    Cumplir obligaciones legales y responder a requerimientos de
                    autoridad competente cuando aplique.
                  </li>
                  <li>
                    Proteger la seguridad de la plataforma, prevenir fraude y
                    abuso, y mejorar la experiencia de uso de forma agregada o
                    estadística cuando sea posible.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="section-subtitle blue text-left">
                  4. Cookies y almacenamiento local
                </h2>
                <p className="regular-parraf">
                  Para mantener tu sesión y permitir peticiones autenticadas a
                  nuestros servidores, podemos usar cookies u otros mecanismos
                  similares (por ejemplo, un token de acceso en cookie). Puedes
                  configurar tu navegador para limitar cookies; ten en cuenta que
                  algunas funciones del sitio podrían dejar de operar
                  correctamente.
                </p>
              </section>

              <section>
                <h2 className="section-subtitle blue text-left">
                  5. Proveedores y encargados
                </h2>
                <p className="regular-parraf">
                  Para operar el servicio podemos utilizar proveedores que
                  tratan datos en nuestro nombre o como co-responsables según
                  corresponda, entre ellos:
                </p>
                <ul className={`regular-parraf ${ui.list}`}>
                  <li>
                    Google Firebase y servicios asociados de Google para
                    autenticación y infraestructura en la nube.
                  </li>
                  <li>
                    Meta (Facebook) cuando elijas iniciar sesión o registrarte con
                    esa opción.
                  </li>
                  <li>
                    Pasarelas de pago (por ejemplo Mercado Pago y Conekta) para
                    procesar transacciones de conformidad con sus propias
                    políticas de privacidad y seguridad.
                  </li>
                  <li>
                    Otros proveedores técnicos (por ejemplo alojamiento de video
                    o analítica) si están integrados en el producto en un momento
                    dado.
                  </li>
                </ul>
                <p className="regular-parraf">
                  Te recomendamos revisar las políticas de privacidad de dichos
                  terceros para conocer el alcance de su tratamiento.
                </p>
              </section>

              <section>
                <h2 className="section-subtitle blue text-left">
                  6. Transferencias internacionales
                </h2>
                <p className="regular-parraf">
                  Algunos proveedores pueden almacenar o procesar datos fuera de
                  México. Cuando ello ocurra, procuramos que existan cláusulas
                  contractuales u otros mecanismos reconocidos que ofrezcan un
                  nivel adecuado de protección, en la medida en que la ley
                  aplicable lo exija.
                </p>
              </section>

              <section>
                <h2 className="section-subtitle blue text-left">
                  7. Conservación
                </h2>
                <p className="regular-parraf">
                  Conservamos tus datos el tiempo necesario para cumplir las
                  finalidades descritas, las obligaciones legales y la resolución
                  de controversias. Los plazos pueden variar según el tipo de
                  dato y la relación contractual vigente.
                </p>
              </section>

              <section>
                <h2 className="section-subtitle blue text-left">
                  8. Derechos de los titulares (ARCO y afines)
                </h2>
                <p className="regular-parraf">
                  Si la legislación mexicana en materia de protección de datos
                  personales te resulta aplicable, puedes ejercer los derechos de
                  acceso, rectificación, cancelación u oposición, así como
                  limitar el uso o divulgación de tus datos, enviando una
                  solicitud a los medios de contacto indicados en esta política o
                  en la página de{" "}
                  <Link to={ROUTES.CONTACTO} className="link-blue">
                    contacto
                  </Link>
                  . Podremos pedirte información razonable para verificar tu
                  identidad antes de atender tu solicitud.
                </p>
              </section>

              <section>
                <h2 className="section-subtitle blue text-left">
                  9. Seguridad
                </h2>
                <p className="regular-parraf">
                  Implementamos medidas técnicas y organizativas razonables para
                  proteger la información contra accesos no autorizados,
                  pérdida o alteración. Ningún sistema es infalible; si detectas
                  un uso indebido de tu cuenta, comunícate con nosotros de
                  inmediato.
                </p>
              </section>

              <section>
                <h2 className="section-subtitle blue text-left">
                  10. Menores de edad
                </h2>
                <p className="regular-parraf">
                  El servicio está dirigido principalmente a personas mayores de
                  edad con capacidad legal para contratar. Si eres menor de edad,
                  el uso del sitio y la contratación del curso deben realizarse
                  con el consentimiento y supervisión de quien ejerce la
                  patria potestad o tutor legal, según corresponda.
                </p>
              </section>

              <section>
                <h2 className="section-subtitle blue text-left">
                  11. Cambios a esta política
                </h2>
                <p className="regular-parraf">
                  Podemos actualizar esta política para reflejar cambios legales o
                  en el servicio. Publicaremos la versión vigente en esta misma
                  URL e indicaremos la fecha de última actualización. El uso
                  continuado del sitio después de los cambios puede implicar tu
                  aceptación de la política revisada, salvo que la ley exija un
                  consentimiento adicional.
                </p>
              </section>

              <section>
                <h2 className="section-subtitle blue text-left">
                  12. Contacto
                </h2>
                <p className="regular-parraf">
                  Para preguntas sobre privacidad o el ejercicio de tus
                  derechos, escríbenos a través de los canales listados en{" "}
                  <Link to={ROUTES.CONTACTO} className="link-blue">
                    contacto
                  </Link>
                  .
                </p>
              </section>
            </article>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
};

export default PrivacyPage;

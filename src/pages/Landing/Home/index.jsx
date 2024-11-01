import React, { useEffect } from "react";
import LandingLayout from "../../Layouts/Landing";
import PlataformaEnarm from "../../Assets/Images/PlataformaEnarm.png";
import HeroDoctorImage from "../../Assets/Images/HeroDoctorImage.png";
import CardPicture1 from "../../Assets/Images/CardPicture1.png";
import CardPicture2 from "../../Assets/Images/CardPicture2.png";
import CardPicture3 from "../../Assets/Images/CardPicture3.png";
import StarBlue from "../../Assets/Icons/StarBlue.png";
import CheckIcon from "../../Assets/Icons/checkIcon.svg";
import { Link } from "react-router-dom";
import DiscountSection from "../../../views/Discount";
import TestimonialCard from "../../../components/TestimonialCard";
import ResourcesSection from "../../../views/Resources";
import ui from "./index.module.css";
import FadeInTitle from "../../../components/FadeInTitle";
import { useDispatch } from "react-redux";
import { resetCheckoutInformation } from "../../../store/reducers/checkout/checkoutInformationSlice";
import { resetUserInformation } from "../../../store/reducers/user/UserInformationSlice";
import { ROUTES } from "../../../constants/routes";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetCheckoutInformation());
    dispatch(resetUserInformation());
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const wordsTitle = [
    "¿Te",
    "gustaría",
    "aprobar",
    "el",
    "ENARM",
    "a",
    "la",
    "Primera ?",
  ];

  return (
    <LandingLayout page="home">
      <section id={ui.hero}>
        <div className="full-container">
          <div className="container-section" aria-details="hero">
            <div className={ui.containerColumns}>
              <div className={ui.columnInformation}>
                <FadeInTitle words={wordsTitle} align="left" />
                <div className={ui.informationSubtitle}>
                  <p className="regular-parraf bold dark">Ya es posible con:</p>
                  <div className={ui.imageContainer}>
                    <img src={PlataformaEnarm} alt="Plataforma ENARM" />
                  </div>
                </div>
                <Link to={ROUTES.REGISTRO} className={ui.blueLink}>
                  Inscríbete Ahora
                </Link>
                <ul className={ui.heroList}>
                  <li>
                    <p className="regular-parraf bold dark">
                      Diseñado por 18 Residentes Jóvenes.
                    </p>
                  </li>
                  <li>
                    <p className="regular-parraf bold dark">
                      Basados 100% en las GPC Mexicanas.
                    </p>
                  </li>
                  <li>
                    <p className="regular-parraf bold dark">
                      Porcentaje de aceptación del 80%.
                    </p>
                  </li>
                  <li>
                    <p className="regular-parraf bold dark">
                      Simulador-PRO idéntico al del ENARM.
                    </p>
                  </li>
                  <li>
                    <p className="regular-parraf bold dark">
                      Ingreso a comunidad exclusiva de Residentes.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={ui.imageContainer} data-animate="blue-rounded">
                <img src={HeroDoctorImage} alt="Hero Doctor ENARM" />
              </div>
            </div>
          </div>
          <div datatype="small" className={ui.backgroundBlue}></div>
        </div>
      </section>

      <section id={ui.explorer}>
        <div className="full-container">
          <div className="container-section">
            <h2 className="section-subtitle uppercase text-center blue">
              Explora
            </h2>
            <div className={ui.titleContainer}>
              <h3 className="section-title text-center white">
                Experimenta nuestra plataforma con el contenido gratuito que
                tenemos para ti
              </h3>
            </div>
            <div className={ui.containerColumns}>
              <div className={ui.demoForm}>
                <form>
                  <div className={ui.formInput}>
                    <label className="input-label white" htmlFor="name">
                      Nombre completo*
                    </label>
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      name="name"
                    />
                    {/* <span className="regular-parraf danger">Error</span> */}
                  </div>
                  <div className={ui.formInput}>
                    <label className="input-label white" htmlFor="correo">
                      Correo Electrónico*
                    </label>
                    <input
                      type="email"
                      placeholder="Tu correo electrónico"
                      name="email"
                    />
                    {/* <span className="regular-parraf danger">Error</span> */}
                  </div>
                  <div className={ui.formInputColumns}>
                    <div className={ui.formInput}>
                      <label className="input-label white" htmlFor="tel">
                        WhatsApp{" "}
                        <span className={ui.italicLabel}>(Opcional)</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Tu número de WhatsApp"
                        name="tel"
                      />
                      {/* <span className="regular-parraf danger">Error</span> */}
                    </div>
                    <Link to={ROUTES.REGISTRO} className={ui.blueLink}>
                      Quiero mi curso
                    </Link>
                  </div>
                </form>
              </div>
              <div className={ui.verticalCards}>
                <div className={ui.cardAdvantage}>
                  <div className={ui.imageContainer}>
                    <img src={CardPicture1} alt="Ventaja 1" />
                  </div>
                  <div className={ui.cardDescription}>
                    <h3 className="regular-parraf white bold">
                      Nuestro contenido
                    </h3>
                    <p className="regular-parraf white">
                      Contenido 100% actualizado, didáctico y sin paja.
                    </p>
                  </div>
                </div>
                <div className={ui.cardAdvantage}>
                  <div className={ui.imageContainer}>
                    <img src={CardPicture2} alt="Ventaja 2" />
                  </div>
                  <div className={ui.cardDescription}>
                    <h3 className="regular-parraf white bold">
                      Método de aprendizaje
                    </h3>
                    <p className="regular-parraf white">
                      Aprenderás a estudiar Inteligente
                    </p>
                  </div>
                </div>
                <div className={ui.cardAdvantage}>
                  <div className={ui.imageContainer}>
                    <img src={CardPicture3} alt="Ventaja 3" />
                  </div>
                  <div className={ui.cardDescription}>
                    <h3 className="regular-parraf white bold">Simuladores</h3>
                    <p className="regular-parraf white">
                      Simulador idéntico en preguntas y formato al ENARM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Component */}
      <DiscountSection />

      <section id={ui.benefits}>
        <div className="full-container">
          <div className="container-section">
            <div className={ui.containerGrid}>
              <div className={ui.gridCard}>
                <div className={ui.cardContainer}>
                  <img src={StarBlue} alt="star" />
                  <h2 className="section-subtitle-33 text-center white">
                    Residentes exitosos
                  </h2>
                  <p className="regular-parraf white text-center">
                    Asesoría de más de 20 residentes exitosos de todo el país
                    que están listos para apoyarte de forma continua.
                  </p>
                </div>
              </div>
              <div className={ui.gridCard}>
                <div className={ui.cardContainer}>
                  <img src={StarBlue} alt="star" />
                  <h2 className="section-subtitle-33 text-center white">
                    Aprobación
                  </h2>
                  <p className="regular-parraf white text-center">
                    Más del 80% de los alumnos inscritos, aprueban su ENARM a la
                    primera.
                  </p>
                </div>
              </div>
              <div className={ui.gridCard}>
                <div className={ui.cardContainer}>
                  <img src={StarBlue} alt="star" />
                  <h2 className="section-subtitle-33 text-center white">
                    Flexible
                  </h2>
                  <p className="regular-parraf white text-center">
                    Cuando quieras y desde dónde estés, podrás prepararte de
                    manera efectiva desde cualquier dispositivo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={ui.testimonials}>
        <div className="full-container">
          <div className="container-section">
            <TestimonialCard />
            <div className={ui.titleContainer}>
              <h2 className="section-title text-center">¿Estás listo?</h2>
            </div>
            <div className={ui.containerGrid}>
              <div className={ui.gridCards}>
                <div className={`${ui.card} bg-white`}>
                  <h2 className="section-subtitle-33">
                    Hechos que te respaldan en plataforma ENARM
                  </h2>
                  <Link to={ROUTES.REGISTRO} className={ui.blueLink}>
                    Inscribirme ahora
                  </Link>
                </div>
                <div className={`${ui.card} bg-dark-blue`}>
                  <ul className={ui.cardTestimonialList}>
                    <li>
                      <img src={CheckIcon} alt="check" />
                      <p className="regular-parraf white">
                        100% de satisfacción de nuestros alumnos.
                      </p>
                    </li>
                    <li>
                      <img src={CheckIcon} alt="check" />
                      <p className="regular-parraf white">
                        Curso élite, un simulador avanzado y material de punta.
                      </p>
                    </li>
                    <li>
                      <img src={CheckIcon} alt="check" />
                      <p className="regular-parraf white">
                        Metodología de estudio didáctica actualizada.
                      </p>
                    </li>
                    <li>
                      <img src={CheckIcon} alt="check" />
                      <p className="regular-parraf white">
                        ¡Pago seguro y acceso inmediato. Inicia hoy mismo!
                      </p>
                    </li>
                    <li>
                      <img src={CheckIcon} alt="check" />
                      <p className="regular-parraf white">
                        Experimenta simulacros con preguntas identicas a las que
                        verás el día de tu ENARM.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Component */}
      <ResourcesSection />
    </LandingLayout>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
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
import ResourcesSection from "../../../views/Resources";
import ui from "./index.module.css";
import FadeInTitle from "../../../components/FadeInTitle";
import { useDispatch } from "react-redux";
import { resetCheckoutInformation } from "../../../store/reducers/checkout/checkoutInformationSlice";
import { resetUserInformation } from "../../../store/reducers/user/UserInformationSlice";
import { ROUTES } from "../../../constants/routes";
import TestimonialCarousel from "../../../components/TestimonialCarousel";
import { createGuestUser } from "../../../apis/auth/authApi";

const HomePage = () => {
  const dispatch = useDispatch();
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPassword, setGuestPassword] = useState("");

  useEffect(() => {
    dispatch(resetCheckoutInformation());
    dispatch(resetUserInformation());
  }, []);

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);

  const handleCreateGuestUser = () => {
    console.log("create guest");
    //  createGuestUser()
  };

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
                Registrate y prueba gratis
              </h3>
            </div>
            <div className={ui.containerColumns}>
              <div className={ui.demoForm}>
                <form>
                  <div className={ui.formInput}>
                    <label className="input-label white" htmlFor="correo">
                      Correo Electrónico*
                    </label>
                    <input
                      type="email"
                      placeholder="Tu correo electrónico"
                      name="email"
                      value={guestEmail}
                      onChange={(e) => {
                        setGuestEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className={ui.formInput}>
                    <label className="input-label white" htmlFor="name">
                      Contraseña*
                    </label>
                    <input
                      type="password"
                      placeholder="********"
                      name="password"
                      value={guestPassword}
                      onChange={(e) => {
                        setGuestPassword(e.target.value);
                      }}
                    />
                  </div>
                </form>
                <div className={ui.formInputColumns}>
                  <button
                    onClick={handleCreateGuestUser}
                    style={{ cursor: `${!guestEmail || !guestPassword ? "not-allowed" : "pointer"}` }}
                    className={ui.blueLink}
                    disabled={!guestEmail || !guestPassword}
                  >
                    Quiero mi curso
                  </button>
                </div>
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
            <div className={ui.titleContainer}>
              <h2 className="section-title text-center">Nuestros Alumnos</h2>
            </div>
            <TestimonialCarousel visibleItems={3} interval={4000} />
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

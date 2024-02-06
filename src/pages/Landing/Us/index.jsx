import React from "react";
import LandingLayout from "../../Layouts/Landing";
import { Link } from "react-router-dom";
import HeroDoctorImage from "../../Assets/Images/HeroDoctorImage-2.png";
import MeetUsDoc from "../../Assets/Images/MeetUsDoc.png";
import CheckIcon from "../../Assets/Icons/checkIcon.svg";
import LandingConstants from "../../../constants/Landing";
import useConstants from "./Hooks/useConstants";
import FadeInTitle from "../../../components/FadeInTitle";
import SectionPromise from "../../../components/SectionPromise";
import ui from "./index.module.css";

const UsPage = () => {

  const { card, handleSelectNewsCard, stats } = useConstants(LandingConstants);

  const wordsTitle = [
    "Conoce",
    "el",
    "curso",
    "Online",
    "#1,",
    "el",
    "más",
    "completo",
    "y",
    "exitoso",
    "de",
    "todos."
  ]
  return (
    <LandingLayout>

      <section id={ui.hero}>
        <div className="full-container">
          <div className="container-section" aria-details="section">
            <div className={ui.containerGrid}>
              <div className={ui.imageContainer}>
                <img src={HeroDoctorImage} alt="hero" />
              </div>
              <div className={ui.containerInfo}>
                <FadeInTitle words={wordsTitle} align="left" />
                <p className="regular-parraf">
                  Integrado por un Equipo de más de 20 Médicos Especialistas, de casi todas las áreas de la medicina, que te llevarán de la mano para aprobar tu ENARM a la primera.
                </p>
                <Link to="#" className={ui.blueLink}>Inscríbete ahora</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={ui.meetUs} className="bg-dark-blue">
        <div className="full-container">
          <div className="container-section">
            <div className={ui.containerGrid}>
              <div className={ui.gridColumn} data-area="title">
                <h2 className="section-subtitle blue text-left uppercase">Conócenos</h2>
                <h3 className="section-title white text-left">Nuestra cartera de alumnos rebasa el 80% de Aceptación a su Residencia</h3>
                <p className="regular-parraf white">Contamos con una múltiple experiencia de formación para reforzar cada estilo de aprendizaje:</p>
              </div>
              <div className={ui.gridColumn} data-area="list">
                <div className={ui.columnList}>
                  <ul>
                    <li><img src={CheckIcon} alt="checkicon" /><p className="regular-parraf white">Video Clases.</p></li>
                    <li><img src={CheckIcon} alt="checkicon" /><p className="regular-parraf white">Flash Cards.</p></li>
                    <li><img src={CheckIcon} alt="checkicon" /><p className="regular-parraf white">Esquemas.</p></li>
                  </ul>
                  <ul>
                    <li><img src={CheckIcon} alt="checkicon" /><p className="regular-parraf white">Resúmenes y mini resúmenes.</p></li>
                    <li><img src={CheckIcon} alt="checkicon" /><p className="regular-parraf white">Cuadros Comparativos.</p></li>
                    <li><img src={CheckIcon} alt="checkicon" /><p className="regular-parraf white">Tips, y ¡mucho más!</p></li>
                  </ul>
                </div>
                <Link to="#" className="blueLinkBtn w-282 full-width">Solicitar Prueba Gratis</Link>
              </div>
              <div className={ui.gridColumn} data-area="image">
                <div className={ui.imageContainer}>
                  <img src={MeetUsDoc} alt="Doctor Meet Us" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={ui.news}>
        <div className="full-container">
          <div className="container-section" aria-details="section">
            <h2 className="section-subtitle blue text-center uppercase">Novedades</h2>
            <h3 className="section-title gray text-center">Nuestro proposito es, que pases el ENARM en tu primer intento.</h3>
            <p className="regular-parraf gray text-center">Este año te ofrecemos una preparación radicalmente superior, totalmente actualizada y mejorada con nuevas herramientas y contenido, ya que nuestra meta es llegar a más del 85% de nuestros alumnos aprobados en su primer intento.</p>
            <div className={ui.containerCards}>
              {
                card?.map((item, index) => {
                  return (
                    <div className={ui.newsCard} data-selected={item.selected} key={index} onClick={() => { handleSelectNewsCard(index) }}>
                      <div className={ui.cardTitle}>
                        <h2 className="section-subtitle-33 blue">{item.h2}</h2>
                        <div className={ui.imageContainer}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="12" fill="#05B2FA" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 17.1498C8.90237 16.7415 8.90237 16.0794 9.29289 15.6711L12.5858 12.228L9.29289 8.78496C8.90237 8.37663 8.90237 7.71459 9.29289 7.30625C9.68342 6.89792 10.3166 6.89792 10.7071 7.30625L14.7071 11.4887C15.0976 11.897 15.0976 12.559 14.7071 12.9674L10.7071 17.1498C10.3166 17.5581 9.68342 17.5581 9.29289 17.1498Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                      <div className={ui.cardBody}>
                        <p className="regular-parraf text-left">{item.p}</p>
                        <p className="regular-parraf-14 text-right gray">{item.selected ? "Contraer" : "Expandir"}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>

      <section id={ui.facts}>
        <div className="full-container">
          <div className="container-section">
            <h2 className="section-subtitle blue text-center uppercase">Conócenos</h2>
            <h3 className="section-title white text-center">Nuestra cartera de alumnos rebasa el 80% de Aceptación a su Residencia</h3>
            <div className={ui.containerFacts}>
              <div className={ui.factsCard}>
                <div className={ui.factImage}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_29_14138)">
                      <path d="M12.0001 8.5L14.1161 13.588L19.6081 14.028L15.4241 17.612L16.7021 22.972L12.0001 20.1L7.29809 22.972L8.57609 17.612L4.39209 14.028L9.88409 13.588L12.0001 8.5ZM8.00009 2V11H6.00009V2H8.00009ZM18.0001 2V11H16.0001V2H18.0001ZM13.0001 2V7H11.0001V2H13.0001Z" fill="#05B2FA" />
                    </g>
                    <defs>
                      <clipPath id="clip0_29_14138">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="regular-parraf-20 white text-left">Más del 80% de nuestros alumnos aprueban su examen ENARM a la primera.</p>
              </div>
              <div className={ui.factsCard}>
                <div className={ui.factImage}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_29_14145)">
                      <path d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM4 5V19H20V5H4ZM8.5 14H14C14.1326 14 14.2598 13.9473 14.3536 13.8536C14.4473 13.7598 14.5 13.6326 14.5 13.5C14.5 13.3674 14.4473 13.2402 14.3536 13.1464C14.2598 13.0527 14.1326 13 14 13H10C9.33696 13 8.70107 12.7366 8.23223 12.2678C7.76339 11.7989 7.5 11.163 7.5 10.5C7.5 9.83696 7.76339 9.20107 8.23223 8.73223C8.70107 8.26339 9.33696 8 10 8H11V6H13V8H15.5V10H10C9.86739 10 9.74021 10.0527 9.64645 10.1464C9.55268 10.2402 9.5 10.3674 9.5 10.5C9.5 10.6326 9.55268 10.7598 9.64645 10.8536C9.74021 10.9473 9.86739 11 10 11H14C14.663 11 15.2989 11.2634 15.7678 11.7322C16.2366 12.2011 16.5 12.837 16.5 13.5C16.5 14.163 16.2366 14.7989 15.7678 15.2678C15.2989 15.7366 14.663 16 14 16H13V18H11V16H8.5V14Z" fill="#05B2FA" />
                    </g>
                    <defs>
                      <clipPath id="clip0_29_14145">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="regular-parraf-20 white text-left">El mejor curso, a un valor justo y competitivo. La mejor inversión para tu futuro.</p>
              </div>
              <div className={ui.factsCard}>
                <div className={ui.factImage}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_29_14152)">
                      <path d="M3.49189 8.06484L4.77789 18.9998H19.2219L20.5079 8.06484L16.4979 10.7378L11.9999 4.44084L7.50189 10.7378L3.49189 8.06484ZM2.80089 5.19984L6.99989 7.99984L11.1859 2.13984C11.2784 2.01021 11.4005 1.90454 11.5421 1.83164C11.6837 1.75874 11.8406 1.7207 11.9999 1.7207C12.1591 1.7207 12.3161 1.75874 12.4577 1.83164C12.5993 1.90454 12.7214 2.01021 12.8139 2.13984L16.9999 7.99984L21.1999 5.19984C21.3588 5.09408 21.5447 5.03604 21.7356 5.03257C21.9265 5.0291 22.1144 5.08035 22.2771 5.18026C22.4398 5.28017 22.5705 5.42456 22.6537 5.59637C22.737 5.76819 22.7693 5.96024 22.7469 6.14984L21.1039 20.1168C21.0752 20.3601 20.9583 20.5844 20.7753 20.7471C20.5922 20.9099 20.3558 20.9998 20.1109 20.9998H3.88889C3.64395 20.9998 3.40755 20.9099 3.22451 20.7471C3.04148 20.5844 2.92454 20.3601 2.89589 20.1168L1.25289 6.14884C1.23069 5.95932 1.26317 5.76741 1.34651 5.59576C1.42984 5.4241 1.56055 5.27987 1.7232 5.1801C1.88584 5.08032 2.07364 5.02916 2.26442 5.03266C2.45521 5.03616 2.641 5.09417 2.79989 5.19984H2.80089ZM11.9999 14.9998C11.4695 14.9998 10.9607 14.7891 10.5857 14.4141C10.2106 14.039 9.99989 13.5303 9.99989 12.9998C9.99989 12.4694 10.2106 11.9607 10.5857 11.5856C10.9607 11.2106 11.4695 10.9998 11.9999 10.9998C12.5303 10.9998 13.039 11.2106 13.4141 11.5856C13.7892 11.9607 13.9999 12.4694 13.9999 12.9998C13.9999 13.5303 13.7892 14.039 13.4141 14.4141C13.039 14.7891 12.5303 14.9998 11.9999 14.9998Z" fill="#05B2FA" />
                    </g>
                    <defs>
                      <clipPath id="clip0_29_14152">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="regular-parraf-20 white text-left">El mejor contenido, simulador y asesorías personalizadas por residentes especialistas.</p>
              </div>
              <div className={ui.factsCard}>
                <div className={ui.factImage}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_29_14159)">
                      <path d="M12 11C13.3261 11 14.5979 11.5268 15.5355 12.4645C16.4732 13.4021 17 14.6739 17 16V22H15V16C15 15.2348 14.7077 14.4985 14.1827 13.9417C13.6578 13.385 12.9399 13.0499 12.176 13.005L12 13C11.2348 13 10.4985 13.2923 9.94174 13.8173C9.38499 14.3422 9.04989 15.0601 9.005 15.824L9 16V22H7V16C7 14.6739 7.52678 13.4021 8.46447 12.4645C9.40215 11.5268 10.6739 11 12 11ZM5.5 14C5.779 14 6.05 14.033 6.31 14.094C6.13902 14.603 6.03777 15.1328 6.009 15.669L6 16V16.086C5.88505 16.0449 5.76549 16.018 5.644 16.006L5.5 16C5.12712 16 4.76761 16.1389 4.49158 16.3896C4.21555 16.6403 4.0428 16.9848 4.007 17.356L4 17.5V22H2V17.5C2 16.5717 2.36875 15.6815 3.02513 15.0251C3.6815 14.3687 4.57174 14 5.5 14ZM18.5 14C19.4283 14 20.3185 14.3687 20.9749 15.0251C21.6313 15.6815 22 16.5717 22 17.5V22H20V17.5C20 17.1271 19.8611 16.7676 19.6104 16.4916C19.3597 16.2156 19.0152 16.0428 18.644 16.007L18.5 16C18.325 16 18.157 16.03 18 16.085V16C18 15.334 17.892 14.694 17.691 14.096C17.95 14.033 18.221 14 18.5 14ZM5.5 8C6.16304 8 6.79893 8.26339 7.26777 8.73223C7.73661 9.20107 8 9.83696 8 10.5C8 11.163 7.73661 11.7989 7.26777 12.2678C6.79893 12.7366 6.16304 13 5.5 13C4.83696 13 4.20107 12.7366 3.73223 12.2678C3.26339 11.7989 3 11.163 3 10.5C3 9.83696 3.26339 9.20107 3.73223 8.73223C4.20107 8.26339 4.83696 8 5.5 8ZM18.5 8C19.163 8 19.7989 8.26339 20.2678 8.73223C20.7366 9.20107 21 9.83696 21 10.5C21 11.163 20.7366 11.7989 20.2678 12.2678C19.7989 12.7366 19.163 13 18.5 13C17.837 13 17.2011 12.7366 16.7322 12.2678C16.2634 11.7989 16 11.163 16 10.5C16 9.83696 16.2634 9.20107 16.7322 8.73223C17.2011 8.26339 17.837 8 18.5 8ZM5.5 10C5.36739 10 5.24021 10.0527 5.14645 10.1464C5.05268 10.2402 5 10.3674 5 10.5C5 10.6326 5.05268 10.7598 5.14645 10.8536C5.24021 10.9473 5.36739 11 5.5 11C5.63261 11 5.75979 10.9473 5.85355 10.8536C5.94732 10.7598 6 10.6326 6 10.5C6 10.3674 5.94732 10.2402 5.85355 10.1464C5.75979 10.0527 5.63261 10 5.5 10ZM18.5 10C18.3674 10 18.2402 10.0527 18.1464 10.1464C18.0527 10.2402 18 10.3674 18 10.5C18 10.6326 18.0527 10.7598 18.1464 10.8536C18.2402 10.9473 18.3674 11 18.5 11C18.6326 11 18.7598 10.9473 18.8536 10.8536C18.9473 10.7598 19 10.6326 19 10.5C19 10.3674 18.9473 10.2402 18.8536 10.1464C18.7598 10.0527 18.6326 10 18.5 10ZM12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10C10.9391 10 9.92172 9.57857 9.17157 8.82843C8.42143 8.07828 8 7.06087 8 6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2ZM12 4C11.4696 4 10.9609 4.21071 10.5858 4.58579C10.2107 4.96086 10 5.46957 10 6C10 6.53043 10.2107 7.03914 10.5858 7.41421C10.9609 7.78929 11.4696 8 12 8C12.5304 8 13.0391 7.78929 13.4142 7.41421C13.7893 7.03914 14 6.53043 14 6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4Z" fill="#05B2FA" />
                    </g>
                    <defs>
                      <clipPath id="clip0_29_14159">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="regular-parraf-20 white text-left">20 médicos especialistas y toda una comunidad respaldan nuestro curso.</p>
              </div>
            </div>
            <Link to="#" className="blueLinkBtn w-282 mx-auto full-width">Inscribirme ahora</Link>
          </div>
        </div>
      </section>

      <section id={ui.stats}>
        <div className="full-container">
          <div className="container-section">
            <div className={ui.containerStats}>
              {
                stats?.map((item, index) => {
                  const moreThanChar = index === 3;
                  return (
                    <div className={ui.stat} key={index}>
                      <div className={ui.statCircle}>
                        <div className={ui.outerCircle}></div>
                        <div className={ui.innerCircle}></div>
                        <div className={ui.smallCircle}></div>
                      </div>
                      <span className={ui.statNumber}>{
                        moreThanChar ?
                          <>
                            <label className={ui.plus}>+</label>
                            <label>{item.value}</label>
                          </>
                          : (
                            item.value
                          )
                      }</span>
                      <span className={ui.statName}>{item.name}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>

      <SectionPromise />
    </LandingLayout>
  )
}

export default UsPage;
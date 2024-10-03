import React from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../Layouts/Dashboard";
import ui from "./index.module.css";
import { cardList } from "../Constants";
import DashboardNovedadesPic from "../Assets/Images/dashboardNovedades.png";
import DashboardAvisosPic from "../Assets/Images/dashboardAvisos.png";
import DoctorWithStar from "../Assets/Images/doctorWithStar.png";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <header>
        <div className={ui.headerContainer}>
          <div className={ui.containerTree}>
            <p>Sitio Plataforma ENARM <span>/ Mesa de trabajo</span></p>
          </div>
          <h4>Mesa de Trabajo</h4>
          <div className={ui.containerGreeting}>
            <div className={ui.greetings}>
              <div className={ui.imageContainer}>
                <img src={DoctorWithStar} alt="doctorWithStar" />
              </div>
              <div className={ui.greetingsUsername}>
                <h4>Hola, <span>[Nombre de Usuario]</span>, tenemos todo listo!</h4>
                <p>Bienvenido a Plataforma ENARM</p>
              </div>
            </div>
            <div className={ui.statsContainer}>
              <div className={ui.stat} data-stat="especialidades">
                <p>Especialidades</p>
                <span>24</span>
              </div>
              <div className={ui.stat} data-stat="simuladores">
                <p>Simuladores</p>
                <span>86</span>
              </div>
              <div className={ui.stat} data-stat="recursos">
                <p>Recursos</p>
                <span>2,233</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={ui.dashboardBody}>
        <div className={ui.cardsContainer}>
          {
            cardList.map((card, index) => {
              return (
                <ResourcesCards
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  redirect={card.redirect}
                  route={card.route}
                  parraf={card.parraf}
                />
              )
            })
          }
        </div>
        <section className={ui.dashboardArticles}>
          <article data-article="advice">
            <div className={ui.articleContent}>
              <div className={ui.imageContainer}>
                <img src={DashboardAvisosPic} alt="articleAdvice" />
              </div>
              <div className={ui.contentBody}>
                <div className={ui.bodyTitle}>
                  <h5>Avisos</h5>
                </div>
                <div className={ui.bodyWrapper}>
                  <p>Mantente al tanto de todo lo relevante dentro de Plataforma ENARM para que tengas una buena experiencia.</p>
                  <p>Dentro de Avisos encontrarás:</p>
                  <ul>
                    <li>Avisos Legales.</li>
                    <li>Reportar sesiones o contraseñas.</li>
                    <li>Preguntas frecuentes.</li>
                    <li>Formas de contacto, y mucho más.</li>
                  </ul>
                  <Link to="/cursoENARM/novedades">Ver todos los avisos</Link>
                </div>
              </div>
            </div>
          </article>
          <article data-article="news">
            <div className={ui.articleContent}>
              <div className={ui.imageContainer}>
                <img src={DashboardNovedadesPic} alt="articleNews" />
              </div>
              <div className={ui.contentBody}>
                <div className={ui.bodyTitle}>
                  <h5>Novedades</h5>
                </div>
                <div className={ui.bodyWrapper}>
                  <p>Descubre las fechas en que sube el nuevo material a Plataforma ENARM.</p>
                  <ul>
                    <li><p><strong>18 de octubre</strong> para curso en <Link to="/cursoENARM/planes/1">11 meses.</Link></p></li>
                    <li><p><strong>1 de noviembre</strong> para curso en <Link to="/cursoENARM/planes/2">10 meses.</Link></p></li>
                    <li><p><strong>1 de diciembre</strong> para curso en <Link to="/cursoENARM/planes/3">9 meses.</Link></p></li>
                    <li><p><strong>1 de enero</strong> para curso en <Link to="/cursoENARM/planes/4">8 meses.</Link></p></li>
                    <li><p><strong>1 de febrero</strong> para curso en <Link to="/cursoENARM/planes/5">7 meses.</Link></p></li>
                    <li><p><strong>1 de marzo</strong> para curso en <Link to="/cursoENARM/planes/6">6 meses.</Link></p></li>
                    <li><p><strong>1 de abril</strong> para curso en <Link to="/cursoENARM/planes/7">5 meses...</Link></p></li>
                  </ul>
                  <Link to="/cursoENARM/novedades">Ver todas las fechas</Link>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </DashboardLayout >
  )
}

const ResourcesCards = (props) => {

  const { title, redirect, route, parraf } = props;

  return (
    <div className={ui.resourceCard}>
      <div className={ui.cardHeader}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M14 12.25C13.2583 12.25 12.5333 12.0301 11.9166 11.618C11.2999 11.206 10.8193 10.6203 10.5355 9.93506C10.2516 9.24984 10.1774 8.49584 10.3221 7.76841C10.4668 7.04098 10.8239 6.3728 11.3484 5.84835C11.8728 5.3239 12.541 4.96675 13.2684 4.82206C13.9958 4.67736 14.7498 4.75162 15.4351 5.03545C16.1203 5.31928 16.706 5.79993 17.118 6.41661C17.5301 7.0333 17.75 7.75832 17.75 8.5C17.75 9.49456 17.3549 10.4484 16.6517 11.1517C15.9484 11.8549 14.9946 12.25 14 12.25ZM14 6.25C13.555 6.25 13.12 6.38196 12.75 6.62919C12.38 6.87643 12.0916 7.22783 11.9213 7.63896C11.751 8.0501 11.7064 8.5025 11.7932 8.93895C11.8801 9.37541 12.0943 9.77632 12.409 10.091C12.7237 10.4057 13.1246 10.62 13.561 10.7068C13.9975 10.7936 14.4499 10.749 14.861 10.5787C15.2722 10.4084 15.6236 10.12 15.8708 9.75003C16.118 9.38002 16.25 8.94501 16.25 8.5C16.25 7.90326 16.0129 7.33097 15.591 6.90901C15.169 6.48705 14.5967 6.25 14 6.25Z" fill="#ffffff"></path> <path d="M21 19.25C20.8019 19.2474 20.6126 19.1676 20.4725 19.0275C20.3324 18.8874 20.2526 18.6981 20.25 18.5C20.25 16.55 19.19 15.25 14 15.25C8.81 15.25 7.75 16.55 7.75 18.5C7.75 18.6989 7.67098 18.8897 7.53033 19.0303C7.38968 19.171 7.19891 19.25 7 19.25C6.80109 19.25 6.61032 19.171 6.46967 19.0303C6.32902 18.8897 6.25 18.6989 6.25 18.5C6.25 13.75 11.68 13.75 14 13.75C16.32 13.75 21.75 13.75 21.75 18.5C21.7474 18.6981 21.6676 18.8874 21.5275 19.0275C21.3874 19.1676 21.1981 19.2474 21 19.25Z" fill="#ffffff"></path> <path d="M8.31999 13.06H7.99999C7.20434 12.9831 6.47184 12.5933 5.96361 11.9763C5.45539 11.3593 5.21308 10.5657 5.28999 9.77001C5.36691 8.97436 5.75674 8.24186 6.37373 7.73363C6.99073 7.22541 7.78434 6.9831 8.57999 7.06001C8.68201 7.0644 8.78206 7.08957 8.87401 7.13399C8.96596 7.1784 9.04787 7.24113 9.11472 7.31831C9.18157 7.3955 9.23196 7.48553 9.26279 7.58288C9.29362 7.68023 9.30425 7.78285 9.29402 7.88445C9.28379 7.98605 9.25292 8.08449 9.20331 8.17374C9.15369 8.26299 9.08637 8.34116 9.00548 8.40348C8.92458 8.46579 8.83181 8.51093 8.73286 8.53613C8.6339 8.56133 8.53084 8.56605 8.42999 8.55001C8.23479 8.53055 8.03766 8.55062 7.85038 8.60904C7.6631 8.66746 7.48952 8.76302 7.33999 8.89001C7.18812 9.01252 7.06216 9.16403 6.96945 9.33572C6.87673 9.50741 6.81913 9.69583 6.79999 9.89001C6.77932 10.0866 6.79797 10.2854 6.85488 10.4747C6.91178 10.6641 7.0058 10.8402 7.13144 10.9928C7.25709 11.1455 7.41186 11.2716 7.58673 11.3638C7.76159 11.456 7.95307 11.5125 8.14999 11.53C8.47553 11.5579 8.80144 11.4808 9.07999 11.31C9.24973 11.2053 9.45413 11.1722 9.64824 11.2182C9.84234 11.2641 10.0102 11.3853 10.115 11.555C10.2198 11.7248 10.2528 11.9292 10.2069 12.1233C10.1609 12.3174 10.0397 12.4853 9.86999 12.59C9.40619 12.8858 8.86998 13.0484 8.31999 13.06Z" fill="#ffffff"></path> <path d="M3 18.5C2.80189 18.4974 2.61263 18.4176 2.47253 18.2775C2.33244 18.1374 2.25259 17.9481 2.25 17.75C2.25 15.05 2.97 13.25 6.5 13.25C6.69891 13.25 6.88968 13.329 7.03033 13.4697C7.17098 13.6103 7.25 13.8011 7.25 14C7.25 14.1989 7.17098 14.3897 7.03033 14.5303C6.88968 14.671 6.69891 14.75 6.5 14.75C4.15 14.75 3.75 15.5 3.75 17.75C3.74741 17.9481 3.66756 18.1374 3.52747 18.2775C3.38737 18.4176 3.19811 18.4974 3 18.5Z" fill="#ffffff"></path>
          </g>
        </svg>
        <h2 className={ui.title}>{title}</h2>
        {
          redirect
            ? <Link className={ui.resourceLink} to={route}>Ir</Link>
            : null
        }
      </div>
      <div className={ui.cardBody}>
        <p>{parraf}</p>
      </div>
    </div>
  )
}

export default DashboardPage;
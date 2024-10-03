import React from "react";
import DashboardLayout from "../../Layouts/Dashboard";
import ui from "./index.module.css";

const AdvicePage = () => {
  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <section id={ui.adviceContainer}>
          <header>
            <div className={ui.containerHeader}>
              <div className={ui.headerTitle}>
                <h5>Novedades</h5>
                <p className="regular-parraf">Fechas de planes de estudio</p>
              </div>
            </div>
          </header>
          <div className={ui.containerBody}>
            <div className={ui.adviceInformation}>
              <h2>A continuación te mostramos todas las fechas de nuestros Planes de Estudio.</h2>
              <ul className={ui.informationList}>
                <li><p className="regular-parraf-14">18 de octubre para curso en 11 meses.</p></li>
                <li>
                  <p className="regular-parraf-14">
                    Tienes dos días para revisar los temas de cada Video-Clase de tu temario. <br />
                    <span className="strong">Ejemplo:</span> El temario de Infectología está dividido en 5 Video-Clases, en tu calendario observarás que se le dan 10 días a Infectología, es decir 2 días  para revisar los temas de las Video-Clases. <br />
                    Los Domingos son de <span className="strong">Simulador-Pro</span>.
                  </p>
                </li>
              </ul>
              <ul className={ui.informationList}>
                <li><p className="regular-parraf-14">18 de octubre para curso en 10 meses.</p></li>
                <li>
                  <p className="regular-parraf-14">
                    Tienes dos días para revisar los temas de cada Video-Clase de tu temario. <br />
                    <span className="strong">Ejemplo:</span> El temario de Infectología está dividido en 5 Video-Clases, en tu calendario observarás que se le dan 10 días a Infectología, es decir 2 días  para revisar los temas de las Video-Clases. <br />
                    Los Domingos son de <span className="strong">Simulador-Pro</span>.
                  </p>
                </li>
              </ul>
              <ul className={ui.informationList}>
                <li><p className="regular-parraf-14">18 de octubre para curso en 9 meses.</p></li>
                <li>
                  <p className="regular-parraf-14">
                    Tienes dos días para revisar los temas de cada Video-Clase de tu temario. <br />
                    <span className="strong">Ejemplo:</span> El temario de Infectología está dividido en 5 Video-Clases, en tu calendario observarás que se le dan 10 días a Infectología, es decir 2 días  para revisar los temas de las Video-Clases. <br />
                    Los Domingos son de <span className="strong">Simulador-Pro</span>.
                  </p>
                </li>
              </ul>
              <ul className={ui.informationList}>
                <li><p className="regular-parraf-14">18 de octubre para curso en 8 meses.</p></li>
                <li>
                  <p className="regular-parraf-14">
                    Tienes dos días para revisar los temas de cada Video-Clase de tu temario. <br />
                    <span className="strong">Ejemplo:</span> El temario de Infectología está dividido en 5 Video-Clases, en tu calendario observarás que se le dan 10 días a Infectología, es decir 2 días  para revisar los temas de las Video-Clases. <br />
                    Los Domingos son de <span className="strong">Simulador-Pro</span>.
                  </p>
                </li>
              </ul>
              <ul className={ui.informationList}>
                <li><p className="regular-parraf-14">18 de octubre para curso en 7 meses.</p></li>
                <li>
                  <p className="regular-parraf-14">
                    Tienes dos días para revisar los temas de cada Video-Clase de tu temario. <br />
                    <span className="strong">Ejemplo:</span> El temario de Infectología está dividido en 5 Video-Clases, en tu calendario observarás que se le dan 10 días a Infectología, es decir 2 días  para revisar los temas de las Video-Clases. <br />
                    Los Domingos son de <span className="strong">Simulador-Pro</span>.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}

export default AdvicePage;
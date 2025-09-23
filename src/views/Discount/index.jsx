import React from "react";
import DoctorsThumbUp from "../../pages/Assets/Images/DoctorsThumbUp.png";
import DoctorsThumbUpSmall from "../../pages/Assets/Images/DoctorsThumbUp-small.png";
import CheckIcon from "../../pages/Assets/Icons/checkIcon.svg";
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import ui from "./index.module.css";
import { ROUTES } from "../../constants/routes";

const DiscountSection = () => {
  const { breakout } = useWindowSize();

  return (
    <section datatype="sharedSection" data-component="discount">
      <div className="full-container">
        <div className="container-section">
          <div className={ui.containerFlex}>
            <div className={ui.imageContainer}>
              {["xl", "xxl"].includes(breakout) ? (
                <img src={DoctorsThumbUp} alt="Doctores pulgar arriba" />
              ) : (
                <img src={DoctorsThumbUpSmall} alt="Doctores pulgar arriba" />
              )}
            </div>
            <div className={ui.flexInformation}>
              <h2 className="section-subtitle uppercase text-left blue">
                Descuento
              </h2>
              <p className="regular-parraf">
                Obten una beca del{" "}
                <span className="strong">65% del descuento.</span>
              </p>
              <h3
                className="section-title"
                style={{
                  marginBottom: "2px",
                }}
              >
                Valor Normal{" "}
                <span
                  className="section-title"
                  style={{
                    textDecoration: "line-through",
                    marginBottom: "20px",
                  }}
                >
                  {" "}
                  $18,000
                </span>
              </h3>
              <p
                className="regular-parraf danger"
                style={{
                  textDecorationLine: "strikethrough",
                  marginBottom: "20px",
                }}
              >
                -65% de descuento, a solo  $6,300 MXN
              </p>
              <ul className={ui.discountList}>
                <li>
                  <img src={CheckIcon} alt="list-item" />
                  <p className="regular-parraf">
                    8 de cada 10 estudiantes logran aprobar el ENARM a la
                    primera.
                  </p>
                </li>
                <li>
                  <img src={CheckIcon} alt="list-item" />
                  <p className="regular-parraf">
                    Hemos ayudado a más de 20 mil médicos a ser especialistas.
                  </p>
                </li>
                <li>
                  <img src={CheckIcon} alt="list-item" />
                  <p className="regular-parraf">
                    Contenido 100% actualizado, original y didáctico.
                  </p>
                </li>
              </ul>
              <Link to={ROUTES.REGISTRO} className={ui.blueLink}>
                Inscribirme ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;

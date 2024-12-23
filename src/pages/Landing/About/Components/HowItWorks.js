import React, { useState, useEffect } from "react";
import vectorLineSmall from "../../../Assets/Icons/VectorSmall.png";
import vectorLineMedium from "../../../Assets/Icons/VectorMedium.png";
import vectorLine from "../../../Assets/Icons/VectorLarge.png";
import drThumb from "../../../Assets/Icons/DoctorThumbUp.png";
import bookImg from "../../../Assets/Icons/Book.png";
import starImg from "../../../Assets/Icons/Star.png";
import halfBookImg from "../../../Assets/Icons/HalfBook.png";
import halfStarImg from "../../../Assets/Icons/HalfStar.png";
import drWalking from "../../../Assets/Icons/RunningDoctor.png";
import halfDr from "../../../Assets/Icons/HalfDoctor.png";
import "./HowItWorks.css";

const cards_list = [
  {
    title: "Video clases",
    parraf: "El contenido de cada una de las video clases abarcará los temas más preguntados en el ENARM."
  },
  {
    title: "Libros de consulta",
    parraf: "Tenemos la más amplia gama de libros de consulta basados en la literatura médica."
  },
  {
    title: "Resúmenes",
    parraf: "El Resumen te mostrará a fondo la patología que desees estudiar, lo que te permitirá una compresión completa del tema."
  },
  {
    title: "Mini resúmenes",
    parraf: "Te ahorrará tiempo de estudio, quitando toda la paja hasta dejar lo más importante y relevante de cada patología."
  },
  {
    title: "Flash Cards",
    parraf: "Encontrarás lo más relevante de cada tema sintetizada en una sola imagen."
  },
  {
    title: "Cuadros comparativos",
    parraf: "Estos cuadros te ayudarán a comparar y diferenciar dos o más patologías relacionadas en un caso clínico."
  },
  {
    title: "Diagramas de flujo",
    parraf: "Correlaciona diferentes temas y patologías que llevan un seguimiento para llegar a un resultado."
  },
  {
    title: "Tips ENARM",
    parraf: "Estos Tips te mostrarán de forma divertida los puntos más preguntados en el ENARM."
  },
  {
    title: "E-book intensivo",
    parraf: "Realiza tu repaso intensivo con los temas de cada especialidad más preguntados en tu examen."
  },
  {
    title: "Simuladores ENARM",
    parraf: "Con nuestros simuladores, puedes practicar cada una de las especialidades que repasaste en tu plataforma con el formato más parecido al ENARM."
  },
];

const HowItWorks = ({ size, ismobile }) => {

  const [mobileDevice, setMobileDevice] = useState(true);

  useEffect(() => {
    const isMobileDevice = () => {
      if (ismobile) {
        setMobileDevice(true)
        return;
      }
      setMobileDevice(false);
      return;
    }

    isMobileDevice();
  }, [ismobile]);


  const imageSource = () => {
    if (size === "sm" || size === "xs") return vectorLineSmall;
    if (size === "md" || size === "lg") return vectorLineMedium;
    return vectorLine;
  }

  const tabletDeviceIcons = (idx) => {
    if (idx === 0) return (<img className="hiw-icon icon-4 reveal" src={drWalking} alt="drWalking" />)
    if (idx === 2) return (
      <>
        <img className="hiw-icon icon-5 reveal" src={halfDr} alt="halfDr" />
        <img className="hiw-icon icon-2 reveal" src={bookImg} alt="bookImg" />
      </>
    )
    if (idx === 5) return (<img className="hiw-icon icon-3 reveal" src={starImg} alt="starImg" />)
    if (idx === 9) return (<img className="hiw-icon icon-1 reveal" src={drThumb} alt="drThumb" />)
  }

  const desktopIcons = (idx) => {

    if (idx === 1) return (<img className="hiw-icon icon-4 reveal" src={drWalking} alt="drWalking" />);
    if (idx === 2) return (<img className="hiw-icon icon-2 reveal" src={bookImg} alt="bookImg" />);
    if (idx === 3) return (<img className="hiw-icon icon-5 reveal" src={halfDr} alt="halfDr" />);
    if (idx === 8) return (<img className="hiw-icon icon-3 reveal" src={starImg} alt="starImg" />);
    if (idx === 10) return (<img className="hiw-icon icon-1 reveal" src={drThumb} alt="drThumb" style={{ position: "absolute!important" }} />);

  }

  return (
    <div className="how-it-works" style={{ background: "#1E73BE" }}>
      <div className="hiw-container">
        {["xl", "xxl"].includes(size) && (<img className="vector-line-img" src={imageSource()} alt="vector-line" />)}
        <div className="hiw-container-header">
          <h2 className="tiny-blue-title text-center">CÓMO FUNCIONA</h2>
          <h3 className="subtitle text-center white">Conoce a detalle todos los métodos de estudio</h3>
          <button className="button-rounded-blue-48">
            {/* <span className="button-text">Solicitar Prueba Gratis</span> */}
            <span className="button-text">Inicia ahora mismo</span>
          </button>
        </div>
        <div className="hiw-container-body">
          {(size === "md" || size === "lg") && (<img className="vector-line-img" src={imageSource()} alt="vector-line" />)}
          <div className="hiw-card-container">
            {
              cards_list.map((item, index) => {
                return (
                  <div className={`hiw-card no-card-${index + 1}`} key={index}>
                    {(size === "md" || size === "lg") && tabletDeviceIcons(index)}
                    {(["xl", "xxl"].includes(size) && [1, 2, 3, 8, 10].includes(index + 1)) && desktopIcons(index + 1)}
                    <div className="card-number">
                      <span>{index + 1}</span>
                    </div>
                    <div className="card-text">
                      <h3 className={mobileDevice ? "bold-14" : "bold-16"}>{item.title}</h3>
                      <p className={mobileDevice ? "regular-14" : "regular-16"}>{item.parraf}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          {["xs", "sm"].includes(size) && (
            <>
              <img className="hiw-icon icon-4 reveal" src={drWalking} alt="drWalking" />
              <img className="hiw-icon icon-1 reveal" src={drThumb} alt="dr-thumb" />
              <img className="hiw-icon icon-2 reveal" src={halfBookImg} alt="book" />
              <img className="hiw-icon icon-3 reveal" src={halfStarImg} alt="star" />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;
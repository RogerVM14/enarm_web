import React, { useState } from "react";
import { Link } from "react-router-dom";
import Item1 from "./Items/Item1";
import Item2 from "./Items/Item2";
import Item3 from "./Items/Item3";
import Item4 from "./Items/Item4";
import Item5 from "./Items/Item5";
import Item6 from "./Items/Item6";
import Item7 from "./Items/Item7";
import Item8 from "./Items/Item8";
// import Item9 from "./Items/Item9";
import ui from "./index.module.css";

const questions = [
  {
    title: "¿Qué es Plataforma ENARM?",
    parraf: "Somos el mejor y más completo curso Online para la preparación del ENARM, encargado ",
    content: <Item1 />,
    selected: false
  },
  {
    title: "¿Cuál es el método de estudio?",
    parraf: "Metodología de estudio inovadora ",
    content: <Item2 />,
    selected: false
  },
  {
    title: "¿Qué porcentaje de alumnos que toman el curso de nuestra Plataforma ENARM es aceptado en una residencia?",
    parraf: "El porcentaje de aceptación REAL que tiene nuestro curso es del 80%",
    content: <Item3 />,
    selected: false
  },
  {
    title: "¿Duración / Vigencia de la plataforma?",
    parraf: "Desde el día en que te inscribes al curso de Plataforma ENARM ",
    content: <Item4 />,
    selected: false
  },
  {
    title: "Costo y contenido de Plataforma ENARM",
    parraf: "Inscríbete hoy y obtén un increíble descuento ",
    content: <Item5 />,
    selected: false
  },
  {
    title: "¿Es seguro inscribirme a Plataforma ENARM?",
    parraf: "Puedes confiar plenamente en nosotros, ya que somos un curso ",
    content: <Item6 />,
    selected: false
  },
  {
    title: "¿Cuáles son las formas de pago?",
    parraf: "Puedes inscribirte con ",
    content: <Item7 />,
    selected: false
  },
  {
    title: "Ya realicé mi pago de inscripción, ¿cómo puedo acceder a mi Plataforma ENARM?",
    parraf: "Inscríbete realizado tu pago ",
    content: <Item8 />,
    selected: false
  },
  // {
  //   title: "No puedo ver el contenido de mi Plataforma / Pasos para ingresar a la Plataforma",
  //   parraf: "Para poder ingresar a tu PLATAFORMA ENARM ",
  //   content: <Item9 />,
  //   selected: false
  // },
]

const SectionQuestions = () => {

  const [list, setList] = useState(questions);

  const handleSelect = (i) => {
    setList((prev) => {
      return prev?.map((item, index) => {
        return index === i
          ? { ...item, selected: !item.selected }
          : item
      });
    });
  }

  return (
    <section id={ui.questions}>
      <div className="full-container">
        <div className="container-section">
          <div className={ui.containerHead}>
            <h1 className="tiny-blue-title text-center">PREGUNTAS FRECUENTES</h1>
            <h2 className="subtitle text-center">Algunos de nuestros alumnos han preguntado:</h2>
          </div>
          <div className={ui.containerBody}>
            <div className={ui.questionItems}>
              {
                list?.map((item, index) => {
                  return (
                    <QuestionCard
                      key={index}
                      index={index}
                      item={item}
                      handleSelect={(e) => handleSelect(e)}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const QuestionCard = ({
  item,
  index,
  handleSelect = () => { }
}) => {
  const { parraf, selected, title, content } = item;

  return (
    <div className={ui.questionCard} aria-selected={selected} onClick={() => handleSelect(index)} >
      <div className={ui.cardContainer}>
        <div className={ui.containerHead}>
          <h3 className="section-subtitle-33 blue">{title}</h3>
        </div>
        <div className={ui.containerBody} aria-selected={selected}>
          {
            selected
              ? content
              : <p className="regular-parraf">{parraf}...</p>
          }
          <Link to="#" className="regular-parraf-14 text-right gray"> {selected ? "Contraer" : "Expandir"} </Link>
        </div>
      </div>
    </div>
  )
}

export default SectionQuestions;
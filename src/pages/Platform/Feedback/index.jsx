import React, { useContext, useEffect, useState } from "react"
import DashboardLayout from "../../Layouts/Dashboard/";
import ui from "./index.module.css";
import { SimulatorContext } from "../../../contexts/SimulatorContext";
import CorrectIcon from "../Assets/Icons/correctIcon.svg";
import IncorrectIcon from "../Assets/Icons/incorrectIcon.svg";
import NullIcon from "../Assets/Icons/nullIcon.svg";
import FlashCardImage from "../Assets/Images/Flashcard.png";
import SpecialitiesList from "../../../components/platform/SpecialitiesList";
import GraphicResults from "../Assets/Images/graphicResults.png";
import GraphicSmall from "../Assets/Images/GraphicSmall.png";
import { Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

const FeedbackPage = () => {

  const { questions } = useContext(SimulatorContext);
  const [filters, setFilters] = useState([
    { filter: "all", selected: true, label: "Todas", counter: 50 },
    { filter: "correct", selected: false, label: "Correctas", counter: 37 },
    { filter: "incorrect", selected: false, label: "Incorrectas", counter: 13 },
    { filter: "categories", selected: false, label: "Categorias", counter: null }
  ]);
  const [filterPosition, setFilterPosition] = useState(0);
  const [indexPosition, setIndexPosition] = useState(0);
  const [displayFeedback, setDisplayFeedback] = useState(false);
  const [displaySpecialities, setDisplaySpecialities] = useState(false);
  const [displaySpecialContent, setDisplaySpecialContent] = useState(false);
  const [asideSize, setAsizeSize] = useState(null);

  const handleSelectFilterPosition = (index) => {
    setFilters((prev) => {
      return prev?.map((item, i) => {
        return i === index
          ? { ...item, selected: true }
          : { ...item, selected: false }
      });
    })

    setFilterPosition(index);
    if (displaySpecialContent === true) {
      setDisplaySpecialContent(false);
    }
  }

  useEffect(() => {
    function handleAsideContent() {

      if (filterPosition === 3 && displaySpecialities === false) {
        setDisplaySpecialities(true);
        return;
      }

      if (
        (filterPosition === 3 && displaySpecialities === true) ||
        (filterPosition !== 3 && displaySpecialities === false)
      ) { return; }

      if (filterPosition !== 3 && displaySpecialities === true) {
        setDisplaySpecialities(false);
      }
    }

    handleAsideContent();
  }, [filterPosition, displaySpecialities])

  useEffect(() => {

    function getSectionComponentSize() {
      const windowSize = window.innerWidth;
      const sectionTag = document.getElementById("feedbackSection");
      const sectionHeight = windowSize < 992
        ? "unset"
        : sectionTag.getBoundingClientRect().height + "px";

      setAsizeSize(sectionHeight);
    }

    getSectionComponentSize();

  }, [])

  const selectSpecialityFeedback = () => {
    setDisplaySpecialities(false);
    setDisplayFeedback(true);
    setDisplaySpecialContent(true);
  }

  const handleOnChangeFeedback = (e, type) => {
    // TYPE = TRUE: Is the display graphic active
    if (type === true) return;
    let index = indexPosition + e;
    if (index < 0) index = 0;
    if (index > 49) index = 49;
    setIndexPosition(index);
  }

  const handleOnClickFeedback = (e) => {
    setIndexPosition(e);
    setDisplayFeedback(true);
    if (displaySpecialContent === true) {
      setDisplaySpecialContent(false);
      return
    }
  }

  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.gridContainer}>
          <aside style={{ height: asideSize }} data-display={displayFeedback}>
            <div className={ui.asideContainer}>
              <div className={ui.containerHead}>
                <div className={ui.filters}>
                  <FilterList
                    list={filters}
                    handleSelect={(e) => { handleSelectFilterPosition(e); }}
                  />
                </div>
              </div>
              <div className={ui.containerBody}>
                {
                  displaySpecialities
                    ? <SpecialitiesList
                      displayContainer={false}
                      handleDisplay={() => { selectSpecialityFeedback() }}
                    />
                    : <FeedbackList
                      list={questions}
                      filter={filterPosition}
                      handleOnClickFeedback={(e) => { handleOnClickFeedback(e) }}
                      feedbackSelected={indexPosition}
                    />
                }
              </div>

            </div>
          </aside>
          <section style={{ height: "min-content" }} id="feedbackSection" data-display={displayFeedback}>
            <FeedbackContainer
              feed={questions[indexPosition]}
              position={indexPosition}
              handleOnChangeFeedback={(e) => { handleOnChangeFeedback(e, type) }}
              backToFeedbackList={() => { setDisplayFeedback(false); setDisplaySpecialContent(false); }}
              displaySpecial={displaySpecialContent}
            />
          </section>
        </div>
      </div>

    </DashboardLayout>
  )
}

const FeedbackContainer = ({
  feed,
  position,
  handleOnChangeFeedback = () => { },
  backToFeedbackList = () => { },
  displaySpecial
}) => {

  return (
    <div className={ui.sectionContainer}>
      <header>
        <div className={ui.containerHead} datatype="large">
          <p>
            Infectologia / Panel Simulador / <strong>Retroalimentación Primer Intento</strong>
          </p>
          <ArrowButtons handleOnClick={(e) => { handleOnChangeFeedback(e, displaySpecial) }} />
        </div>
      </header>
      <div className={ui.containerBody}>
        <div className={ui.bodyContent}>
          <div className={ui.contentHead} datatype="small">
            <button type="button" className={ui.backButton} onClick={() => { backToFeedbackList(); }}>
              Regresar
            </button>
            <ArrowButtons handleOnClick={(e) => { handleOnChangeFeedback(e, displaySpecial) }} />
          </div>
          {
            displaySpecial === true
              ? <GraphicBodyContent />
              : (
                <FeedbackBodyContent
                  feed={feed}
                  position={position}
                />
              )
          }
          <ArrowButtons handleOnClick={(e) => { handleOnChangeFeedback(e, displaySpecial) }} />
        </div>
      </div >
    </div >
  )
}

const GraphicBodyContent = () => {
  return (
    <React.Fragment>
      <h5>Chagas</h5>
      <Link className={ui.blueLink}>🔥 Mini-Resumen: Chagas M-R</Link>
      <Link className={ui.blueLink} style={{ marginBottom: "24px" }}>🔥 Caso Clínico: Chagas C-C</Link>
      <div className={ui.imageContainer}>
        <img src={GraphicResults} alt="graphic" datatype="large" />
        <img src={GraphicSmall} alt="graphic" datatype="small" />
      </div>
    </React.Fragment>
  )
}

const FeedbackBodyContent = ({ feed, position }) => {

  const {
    case: situation,
    answer_selected,
    answers_list,
    correct_answer_position,
    response,
    tip_response,
    question
  } = feed;

  const olLetters = ["A", "B", "C", "D"];
  const isSelectedWasCorrect = answer_selected === correct_answer_position;


  return (
    <React.Fragment>
      <h5>Pregunta {position + 1}</h5>
      <p className={ui.feedbackCase}>{situation}</p>
      <h5>{question}</h5>
      <ul>
        {answers_list?.map((item, i) => {
          const correctAnswer = (i === correct_answer_position)
            ? "correct"
            : ((answer_selected === i) && (i !== correct_answer_position))
              ? "incorrect"
              : null;
          return (
            <li key={i} className={ui.answerList} datatype={correctAnswer}>
              {olLetters[i]}. {item}
            </li>
          )
        })}
      </ul>
      <h5>Respuesta {isSelectedWasCorrect ? "correcta" : "incorrecta"}</h5>
      <p className={ui.feedbackResponse}>
        {response}
      </p>
      <p className={ui.feedbackTip}>
        🔥 Tip ENARM: {tip_response}
      </p>
      <div className={ui.flashCard}>
        <img src={FlashCardImage} alt="flashcard" />
      </div>
    </React.Fragment>
  )
}

const FilterList = ({ list, handleSelect = () => { } }) => {
  return (
    list?.map((item, index) => {
      return (
        <div
          className={ui.filter}
          data-filter={item.filter}
          data-selected={item.selected}
          onClick={() => { handleSelect(index); }}
          key={index}
        >
          <h5>{item.label}</h5>
          {
            item.counter !== null
              ? <span>{item.counter}</span>
              : null
          }
        </div>
      )
    })
  )
}

const ArrowButtons = ({ handleOnClick = () => { } }) => {
  return (
    <div className={ui.arrowButtons}>
      <button type="button" title="Anterior" onClick={() => { handleOnClick(-1) }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path d="M14.9282 8.04698H4.47999L10.7336 2.61841C10.8336 2.53091 10.7728 2.36841 10.6407 2.36841H9.06035C8.9907 2.36841 8.92463 2.39341 8.87285 2.43805L2.12463 8.29341C2.06283 8.34698 2.01326 8.41322 1.97929 8.48762C1.94532 8.56203 1.92773 8.64287 1.92773 8.72466C1.92773 8.80645 1.94532 8.88729 1.97929 8.9617C2.01326 9.0361 2.06283 9.10233 2.12463 9.15591L8.91213 15.047C8.93892 15.0702 8.97106 15.0827 9.00499 15.0827H10.6389C10.7711 15.0827 10.8318 14.9184 10.7318 14.8327L4.47999 9.40412H14.9282C15.0068 9.40412 15.0711 9.33984 15.0711 9.26127V8.18984C15.0711 8.11127 15.0068 8.04698 14.9282 8.04698Z" fill="black" fillOpacity="0.85" />
        </svg>
      </button>
      <button type="button" title="Siguiente" onClick={() => { handleOnClick(1) }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path d="M14.8751 8.29341L8.12871 2.43805C8.07693 2.39341 8.01085 2.36841 7.94121 2.36841H6.36085C6.22871 2.36841 6.168 2.53269 6.268 2.61841L12.5216 8.04698H2.07157C1.993 8.04698 1.92871 8.11127 1.92871 8.18984V9.26127C1.92871 9.33984 1.993 9.40412 2.07157 9.40412H12.5198L6.26621 14.8327C6.16621 14.9202 6.22693 15.0827 6.35907 15.0827H7.993C8.02693 15.0827 8.06085 15.0702 8.08585 15.047L14.8751 9.15769C14.937 9.10394 14.9865 9.03754 15.0205 8.96299C15.0545 8.88844 15.072 8.80747 15.072 8.72555C15.072 8.64363 15.0545 8.56266 15.0205 8.48811C14.9865 8.41356 14.937 8.34717 14.8751 8.29341Z" fill="black" fillOpacity="0.85" />
        </svg>
      </button>
    </div>
  )
}

const FeedbackList = ({
  list,
  filter,
  handleOnClickFeedback = () => { },
  feedbackSelected
}) => {
  return (
    <div className={ui.feedbackList}>
      {
        list?.map((item, index) => {
          const {
            question,
            answer_selected: selected,
            correct_answer_position: correct
          } = item;
          const isCorrect = selected === null ? null : selected === correct;
          const filterTag = selected === null ? "null" : selected === correct ? "correct" : "incorrect";
          const isVisible = (filter === 0)
            ? true
            : (isCorrect === true & filter === 1)
              ? true
              : (isCorrect === false & filter === 2)
                ? true
                : false;

          return (
            <div
              className={ui.listItem}
              key={index}
              data-filter={filterTag}
              data-visible={isVisible}
              data-selected={feedbackSelected === index}
              onClick={() => handleOnClickFeedback(index)}
            >
              <div className={ui.itemContent}>
                <div className={ui.itemAnswerValidation}>
                  <IconValidation flag={isCorrect} />
                </div>
                <div className={ui.itemCase}>
                  <p>{item.case}</p>
                </div>
                <p className={ui.itemNumQuestion}>Pregunta {index + 1}.</p>
                <p className={ui.itemQuestion}>
                  {question}
                </p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

const IconValidation = ({ flag }) => {

  let icon = NullIcon;
  if (flag === true) { icon = CorrectIcon; }
  if (flag === false) { icon = IncorrectIcon; }
  return (
    <img src={icon} alt="result" />
  )
}

export default FeedbackPage;
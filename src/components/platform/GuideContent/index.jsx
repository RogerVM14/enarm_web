import React, { useState } from "react";
import { Link } from "react-router-dom";
import ui from "./index.module.css";

const GuideContent = () => {


  const [guideList,] = useState([
    {
      title: "Guía de Estudio ENARM",
      url: "https://plataformaenarm.com/wp-content/uploads/2018/02/GUIA-DE-ESTUDIO-ENFERMEDADES-INFECCIOSAS-1a-VUELTA.pdf"
    },
    {
      title: "Programa Académico Infectología 2022",
      url: "https://plataformaenarm.com/wp-content/uploads/2017/11/Infectologia-2022-.pdf"
    },
    {
      title: "1. Fiebre de Origen Desconocido",
      url: null,
    },
    {
      title: "2. Fiebre Tifoidea",
      url: null,
      subtitles: [
        { title: "GPC FOD niños ER", url: "http://www.cenetec-difusion.com/CMGPC/IMSS-350-13/ER.pdf" },
        { title: "GPC Fiebre Tifoidea ER", url: "#" },
        { title: "GPC FOD niños RR11", url: "http://www.cenetec-difusion.com/CMGPC/IMSS-350-13/ER.pdf" },
        { title: "GPC Fiebre Tifoidea RR", url: "#" },
        { title: "FOD Adultos Extra", url: "#" },
        { title: "🔥 Mini-Resumen Fiebre de origen desconocido M-R", url: "#" },
        { title: "🔥 Mini-Resumen Fiebre Tifoidea F-C", url: "#" },
        { title: "🔥 Flash-Card Fiebre de origen desconocido F-C", url: "#" },
        { title: "🔥 Flash-Card Fiebre Tifoidea F-C", url: "#" },
      ]
    },
    {
      title: "3. Fiebre Tifoidea",
      url: null,
      subtitles: [
        { title: "NOM Brucelosis", url: "#" },
        { title: "GPC Brucelosis", url: "#" },
        { title: "🔥 Mini-Resumen Bruceslosis M-R", url: "#" },
        { title: "🔥 Flash-Card Brucelosis F-C", url: "#" }
      ]
    }
  ])

  return (
    <div className={ui.studyGuideContent}>
      <ul className={ui.organizedLinks}>
        {
          guideList?.map((guide, indexGuide) => {
            const { title, url, subtitles } = guide;
            const guideClass = url === null ? ui.guideHasNoUrl : ui.guideHasUrl;
            return (
              <li key={indexGuide}>
                <Link
                  to={url}
                  className={guideClass}
                  target="_blank"
                >
                  {title}
                </Link>
                <UnorganizedLinksList list={subtitles} />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}


const UnorganizedLinksList = ({ list }) => {
  if (list === undefined || list === null) return null;
  return (
    <ul className={ui.unorganizedSublinks}>
      {
        list?.map((item, index) => {
          const { title, url } = item;
          const linkClass = url === null
            ? ui.linkHasNoUrl
            : ui.linkHasUrl;
          return (
            <li key={index}>
              <Link
                to={url}
                target="_blank"
                className={linkClass}
              >
                {title}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default GuideContent;
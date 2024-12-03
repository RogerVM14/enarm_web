// import React, { useContext } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cardImage from "../../../assets/imgs/novedades-img.png";
// import { AsidePositionContext } from "../../../contexts/platform/AsideLeftPositionContext";
import "../../../css/platform/components/BigCard.css"

const BigCardNews = (props) => {

  // const { handleNavSubLink } = useContext(AsidePositionContext);
  // const { device } = props;
  const navigate = useNavigate();

  const navigationRoute = (route, index) => {
    // handleNavSubLink(index + 1);
    navigate(route, { replace: false });
  }

  // const handleNavigate = () => {
  //   navigate("/u/planes/aviso_novedades");
  // }

  return (
    // <div className={`c-big-card ${device}`}>
    <div className="c-big-card">
      <div className="big-card-container">
        {/* <div className={`big-card__image-box ${device}`}> */}
        <div className="big-card__image-box">
          <img className="image-box__image" src={cardImage} alt="advice-img" />
        </div>
        {/* <div className={`bc-c-text-container ${device}`}> */}
        <div className="bc-c-text-container">
          {/* <h1 className={`regular-${device === "smart" ? "14" : "16"} fw500`}>Novedades</h1> */}
          <h1 className="regular-16 fw500">Novedades</h1>
          {/* {
            device === "smart" ? (
              <>
                <p className="regular-12">Descubre las fechas en que sube el nuevo material a Plataforma ENARM.</p>
                <ul>
                  <li><span className="regular-12"><span className="regular-12" style={{ fontWeight: "600" }}>18 de octubre</span> p...</span><span className="regular-12 lineHeight-18 sky-blue noDecor" onClick={() => { handleNavigate() }}>Ver todas las fechas</span></li>
                </ul>
              </>
            ) :
              ( */}
          <>
            <p className="regular-14">Descubre las fechas en que sube el nuevo material a Plataforma ENARM.</p>
            <ul>
              <li><span className="regular-14"><span className="fw500">18 de octubre</span> para curso en <span onClick={() => navigationRoute("/u/planes/1", 0)} className="blue pointer noDecor regular-14 fw500">11 meses.</span></span></li>
              <li><span className="regular-14"><span className="fw500">1 de noviembre</span> para curso en <span onClick={() => navigationRoute("/u/planes/2", 1)} className="blue pointer noDecor regular-14 fw500">10 meses.</span></span></li>
              <li><span className="regular-14"><span className="fw500">1 de diciembre</span> para curso en <span onClick={() => navigationRoute("/u/planes/3", 2)} className="blue pointer noDecor regular-14 fw500">9 meses.</span></span></li>
              <li><span className="regular-14"><span className="fw500">1 de enero</span> para curso en <span onClick={() => navigationRoute("/u/planes/4", 3)} className="blue pointer noDecor regular-14 fw500">8 meses.</span></span></li>
              <li><span className="regular-14"><span className="fw500">1 de febrero</span> para curso en <span onClick={() => navigationRoute("/u/planes/5", 4)} className="blue pointer noDecor regular-14 fw500">7 meses.</span></span></li>
              <li><span className="regular-14"><span className="fw500">1 de marzo</span> para curso en <span onClick={() => navigationRoute("/u/planes/6", 5)} className="blue pointer noDecor regular-14 fw500">6 meses.</span></span></li>
              <li><span className="regular-14"><span className="fw500">1 de abril</span> para curso en <span onClick={() => navigationRoute("/u/planes/7", 6)} className="blue pointer noDecor regular-14 fw500">5 meses...</span></span></li>
            </ul>
            <br />
            {/* <Link className="regular-14 sky-blue noDecor" to="/u/planes/aviso_novedades">Ver todas las fechas</Link> */}
          </>
          {/* )
          } */}
        </div>
      </div>
    </div>
  )
}

export default BigCardNews;
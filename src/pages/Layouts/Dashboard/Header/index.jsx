import React from "react";
import ui from "../index.module.css";
import UserDefaultIcon from "../../Assets/Icons/DefaultUser.png";
import BurgerIcon from "../../Assets/Icons/BurgerIcon.svg";
import SearchIcon from "../../Assets/Icons/SearchIcon.svg";
import QuestionIcon from "../../Assets/Icons/QuestionIcon.svg";
import WhiteSearchIcon from "../../Assets/Icons/WhiteSearchIcon.svg";
import WhiteQuestionIcon from "../../Assets/Icons/WhiteQuestionIcon.svg";
import { Link } from "react-router-dom";

const DashboardHeaderTemplate = ({ handleShowMenu }) => {
  return (
    <header>
      <div className={ui.headerContainer}>
        <nav data-size="xl">
          <div className={ui.navContainer}>
            <button type="button" title="Buscar">
              <img src={WhiteQuestionIcon} alt="question" />
            </button>
            <button type="button">
              <img src={WhiteSearchIcon} alt="search" />
            </button>
            <div className={ui.containerUser}>
              <div>
                <img src={UserDefaultIcon} alt="User icon" width={24} height={24} />
              </div>
              <p>Username</p>
            </div>
          </div>
        </nav>
        <nav data-size="sm">
          <div className={ui.navContainer}>
            <Link className={ui.mainLinkBlue} to="/u/dashboard">Plataforma ENARM</Link>
            <button type="button" className={ui.doubtsButton}>
              <img src={QuestionIcon} alt="question" />
            </button>
            <button type="button" className={ui.burgerMenu} onClick={() => { handleShowMenu() }}>
              <img src={BurgerIcon} alt="burgerMenu" />
            </button>
          </div>
        </nav>
        <div className={ui.searchBar}>
          <div className={ui.searchbarInput}>
            <input type="text" name="search" id="searchbar" placeholder="Buscar palabra clave" />
            <button type="button" className={ui.searchIconButton}>
              <img src={SearchIcon} alt="search" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeaderTemplate;
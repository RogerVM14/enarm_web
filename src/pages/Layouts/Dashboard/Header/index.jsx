import React, { useState } from "react";
import ui from "../index.module.css";
import UserDefaultIcon from "../../Assets/Icons/DefaultUser.png";
import BurgerIcon from "../../Assets/Icons/BurgerIcon.svg";
import SearchIcon from "../../Assets/Icons/SearchIcon.svg";
import QuestionIcon from "../../Assets/Icons/QuestionIcon.svg";
import WhiteSearchIcon from "../../Assets/Icons/WhiteSearchIcon.svg";
import WhiteQuestionIcon from "../../Assets/Icons/WhiteQuestionIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectFullUserName } from "../../../../store/reducers/user/UserInformationSlice";
import { logout } from "../../../../utils/auth";

const DashboardHeaderTemplate = ({ handleShowMenu }) => {
  const [open, setOpen] = useState(false);
  const userFullname = useSelector(selectFullUserName);
  const firstName = userFullname.split(" ")[0];
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
            <div
              className={ui.containerUser}
              onMouseEnter={() => {
                setOpen(true);
              }}
            >
              <div>
                <img
                  src={UserDefaultIcon}
                  alt="User icon"
                  width={24}
                  height={24}
                />
              </div>
              <p>
                <strong>{firstName}</strong>
              </p>
            </div>
          </div>
        </nav>
        <UserDialogMenu
          open={open}
          handleFocus={() => {
            setOpen(false);
          }}
        />
        <nav data-size="sm">
          <div className={ui.navContainer}>
            <Link className={ui.mainLinkBlue} to="/cursoENARM">
              Plataforma ENARM
            </Link>
            <button type="button" className={ui.doubtsButton}>
              <img src={QuestionIcon} alt="question" />
            </button>
            <button
              type="button"
              className={ui.burgerMenu}
              onClick={() => {
                handleShowMenu();
              }}
            >
              <img src={BurgerIcon} alt="burgerMenu" />
            </button>
          </div>
        </nav>
        <div className={ui.searchBar}>
          <div className={ui.searchbarInput}>
            <input
              type="text"
              name="search"
              id="searchbar"
              placeholder="Buscar palabra clave"
            />
            <button type="button" className={ui.searchIconButton}>
              <img src={SearchIcon} alt="search" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const UserDialogMenu = ({ open, handleFocus = () => {} }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(dispatch, navigate);
  };
  return open ? (
    <div onMouseLeave={handleFocus} className={ui.dropDownMenu}>
      <ul>
        {/* <li>
          <Link to="/cursoENARM/MiCuenta" className="regular-parraf-14">
            Mi cuenta
          </Link>
        </li> */}
        <li>
          <Link to="/" onClick={handleLogout} className="regular-parraf-14">
            Cerrar Sesión
          </Link>
        </li>
      </ul>
    </div>
  ) : null;
};

export default DashboardHeaderTemplate;

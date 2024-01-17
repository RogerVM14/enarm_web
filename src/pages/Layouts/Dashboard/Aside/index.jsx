import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import EnarmLogo from "../../Assets/Images/EnarmLogo.jpg";
import BurgerMenuIcon from "../../Assets/Icons/BurgerMenu.png";
import ArrowDown from "../../Assets/Icons/ArrowDown.png"
import ArrowUp from "../../Assets/Icons/ArrowUp.png"
import ui from "../index.module.css";
import { GeneralContext } from "../../../../contexts/GeneralContext";
import CloseIcon from "../../Assets/Icons/CloseIcon.svg";
import UserDefaultIcon from "../../Assets/Icons/DefaultUser.png";
import Chevron from "../../Assets/Icons/ArrowDown.png";

const DashboardAsideTemplate = ({
  smallDevice,
  isMenuActive,
  handleShowMenu = () => { }
}) => {

  const [displayTools, setDisplayTools] = useState(false);

  const {
    menu,
    current,
    menuPlans,
    menuDocuments,
    handleMenuSelected
  } = useContext(GeneralContext);

  const navigate = useNavigate();

  return (
    <aside
      className={ui.asideStyle}
      data-portability={smallDevice}
      data-active={isMenuActive}
    >
      <div className={ui.asideBackground}></div>
      <div className={ui.asideContainer}>
        <div className={ui.logoContainer} onClick={() => { navigate("/u/dashboard") }} >
          <div className={ui.imageContainer}>
            <img src={EnarmLogo} alt="Enarm Logo" />
          </div>
          Plataforma ENARM
        </div>
        <nav>
          <ul className={ui.menuList}>
            <li data-portability={smallDevice}>
              <button type="button" className={ui.closeButton} onClick={() => { handleShowMenu() }}>
                <img src={CloseIcon} alt="close" />
              </button>
            </li>
            {
              menu?.map((item, index) => {
                const { isActive, label, route, list, alt } = item;
                const isSelected = (isActive && (current === index));
                const optionClass = isSelected ? ui.optionLinkSelected : ui.optionLink;
                return (
                  <li key={index} className={ui.listOption}>
                    <NavLink className={optionClass} to={route} onClick={() => handleMenuSelected(index)} >
                      <NavigationIcon item={item} />
                      {label}
                      <ChevronIcon list={list} isActive={isActive} />
                    </NavLink>
                    <NavigationPlansSubmenu list={list} isActive={isActive} alt={alt} toggle={menuPlans} />
                    <NavigationDocumentsSubmenu list={list} isActive={isActive} alt={alt} toggle={menuDocuments} />
                  </li>
                );
              })
            }
          </ul>
          <div className={ui.asideFooter}>
            <div
              className={ui.containerUser}
              data-portability={smallDevice}
              onClick={() => { setDisplayTools(!displayTools) }}
            >
              <img src={UserDefaultIcon} alt="User icon" width={"24px"} height={"24px"} />
              <p>Username</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.46477 5.15013C1.07424 5.54065 1.07424 6.17382 1.46477 6.56434C1.85529 6.95487 2.48846 6.95487 2.87898 6.56434L5.00028 4.44305L7.1216 6.56437C7.51212 6.95489 8.14529 6.95489 8.53581 6.56437C8.92633 6.17384 8.92633 5.54068 8.53581 5.15016L5.71349 2.32784C5.71147 2.32579 5.70945 2.32374 5.70741 2.3217C5.32299 1.93728 4.70345 1.93127 4.31168 2.30368C4.30546 2.30959 4.2993 2.3156 4.2932 2.3217C4.29319 2.32171 4.29318 2.32172 4.29317 2.32173C4.2931 2.3218 4.29303 2.32187 4.29296 2.32194L1.46477 5.15013Z" fill="black" />
              </svg>
            </div>
            <UserTools display={displayTools} />
            <div className="menu-toggle">
              <button
                className="toggle-button-menu"
                onClick={() => {
                  if (smallDevice === false) return;
                  handleShowMenu()
                }}
              >
                <img src={BurgerMenuIcon} alt="menu" className="menu-icon" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

const UserTools = ({ display }) => {
  if (display === false) return null;
  return (
    <div className={ui.userTools}>
      <Link>Mi cuenta</Link>
      <button type="button">
        Cerrar Sesión
      </button>
    </div>
  )
}

const NavigationPlansSubmenu = ({
  list = [],
  isActive,
  alt,
  toggle
}) => {
  if (alt !== "dashboard" || toggle === false) return null;
  return (list && isActive) ? (
    <ul>
      {
        list?.map((i, index) => {
          return (
            <li key={index} className={ui.listOption}>
              <NavLink to={i.route} className={ui.optionSublink}>
                {i.label}
              </NavLink>
            </li>
          )
        })
      }
    </ul>
  ) : null
}

const NavigationDocumentsSubmenu = ({
  list = [],
  isActive,
  alt,
  toggle
}) => {
  if (alt !== "documents" || toggle === false) return null;
  return (list && isActive) ? (
    <ul>
      {
        list?.map((i, index) => {
          return (
            <li key={index} className={ui.listOption}>
              <NavLink to={i.route} className={ui.optionSublink}>
                {i.label}
              </NavLink>
            </li>
          )
        })
      }
    </ul>
  ) : null
}

const NavigationIcon = ({ item }) => {

  const { activeIcon, isActive, alt, inactiveIcon } = item;

  if (activeIcon === undefined) return null;

  return (
    <img
      className={ui.linkIcon}
      src={isActive ? activeIcon : inactiveIcon}
      alt={alt}
    />
  )

}

const ChevronIcon = ({ list, isActive, handleEventList }) => {
  return list
    ? (
      <button type="button" className={ui.chevronButton} onClick={() => { handleEventList() }}>
        <img
          className={ui.linkArrow}
          src={isActive ? ArrowUp : ArrowDown}
          alt="ArrowMenu"
        />
      </button>
    ) : null
}

export default DashboardAsideTemplate;

import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import EnarmLogo from "../../Assets/Images/EnarmLogo.jpg";
import BurgerMenuIcon from "../../Assets/Icons/BurgerMenu.png";
import ArrowDown from "../../Assets/Icons/ArrowDown.png"
import ArrowUp from "../../Assets/Icons/ArrowUp.png"
import ui from "../index.module.css";
import { GeneralContext } from "../../../../contexts/GeneralContext";

const DashboardAsideTemplate = () => {

  const {
    menu,
    current,
    menuPlans,
    menuDocuments,
    handleMenuSelected
  } = useContext(GeneralContext);

  const asideStyle = {
    position: "relative",
    zIndex: 1010,
    boxShadow: "4px 0px 18px 0px #00000012"
  };

  const navigate = useNavigate();

  return (
    <aside style={asideStyle}>
      <div className={ui.asideContainer}>
        <div className={ui.logoContainer} onClick={() => { navigate("/u/dashboard") }}>
          <div className={ui.imageContainer}>
            <img src={EnarmLogo} alt="Enarm Logo" />
          </div>
          Plataforma ENARM
        </div>
        <nav>
          <ul className={ui.menuList}>
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
            <div className="menu-toggle">
              <button className="toggle-button-menu" >
                <img src={BurgerMenuIcon} alt="menu" className="menu-icon" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

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

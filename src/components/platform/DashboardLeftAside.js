import React, { useContext, useState } from "react";
import "../../css/platform/components/LeftAside.css";
import { NavLink, useNavigate } from "react-router-dom";
import ResIcon from "../../assets/icons/platform/resources-icon.png";
import SimIcon from "../../assets/icons/platform/simulator-icon.png";
import DocIcon from "../../assets/icons/platform/documents-icon.png";
import ResBlueIcon from "../../assets/icons/platform/resources-icon-blue.png";
import SimBlueIcon from "../../assets/icons/platform/simulator-icon-blue.png";
import DocBlueIcon from "../../assets/icons/platform/documents-icon-blue.png";
import ArrowDown from "../../assets/icons/platform/arrow_down.png";
import ArrowUp from "../../assets/icons/platform/arrow_up.png";
import MenuToggleIcon from "../../assets/icons/platform/MenuFold.png";
import { DashAsideContext } from "../../contexts/platform/DashboardAsideContext";
import enarmLogo from "../../assets/imgs/enarm-platform-logo.jpg";
import { AsidePositionContext } from "../../contexts/platform/AsideLeftPositionContext";
import { CurrentCourseContext } from "../../contexts/platform/CurrentCourseContext";
import { PlanRoutesContext } from "../../contexts/platform/PlanRoutesContext";
import userIcon from "../../assets/icons/platform/default-user-icon.png";

import { useDispatch, useSelector } from "react-redux";
import { selectUserEmail } from "../../store/reducers/user/UserInformationSlice";

const activeStyle = { color: "rgba(30, 115, 190, 1)" };
const subMenuActiveStyle = {
  background: "#e6f7ff",
  color: "rgba(30, 115, 190, 1)",
};

const navlinks_active = [
  { pos: 0, isActive: true, class: "", activeStyle: activeStyle },
  {
    pos: 1,
    isActive: false,
    class: "sub-link",
    activeStyle: subMenuActiveStyle,
  },
  {
    pos: 2,
    isActive: false,
    class: "sub-link",
    activeStyle: subMenuActiveStyle,
  },
  {
    pos: 3,
    isActive: false,
    class: "sub-link",
    activeStyle: subMenuActiveStyle,
  },
  {
    pos: 4,
    isActive: false,
    class: "sub-link",
    activeStyle: subMenuActiveStyle,
  },
  {
    pos: 5,
    isActive: false,
    class: "sub-link",
    activeStyle: subMenuActiveStyle,
  },
  {
    pos: 6,
    isActive: false,
    class: "sub-link",
    activeStyle: subMenuActiveStyle,
  },
  {
    pos: 7,
    isActive: false,
    class: "sub-link",
    activeStyle: subMenuActiveStyle,
  },
  { pos: 8, isActive: false, class: "sub-link", activeStyle: activeStyle },
  { pos: 9, isActive: false, class: "sub-link", activeStyle: activeStyle },
  { pos: 10, isActive: false, class: "", activeStyle: activeStyle },
  {
    pos: 11,
    isActive: false,
    class: "sub-link",
    activeStyle: subMenuActiveStyle,
  },
  {
    pos: 12,
    isActive: false,
    class: "sub-link",
    activeStyle: subMenuActiveStyle,
  },
];

const navlinks_arrow = [
  { pos: 0, isSelected: true },
  { pos: 10, isSelected: false },
];

const topMenuLinks = [0, 8, 9, 10];

const DashboardLeftAside = (props) => {
  const [active, setActive] = useState(navlinks_active);
  const [plansMenu, setPlansMenu] = useState(true);
  const [plansTopMenu, setPlansTopMenu] = useState(true);
  const [docsMenu, setDocsMenu] = useState(false);
  const [docsTopMenu, setDocsTopMenu] = useState(false);
  const [selected, setSelected] = useState(navlinks_arrow);
  const [isShowingSessionTools, setSessionTools] = useState(false);
  const { deviceType, isSmart, menuActive } = props;

  const userName = useSelector(selectUserEmail);
  const { isShort, handleDashboardAsideMenu } = useContext(DashAsideContext);
  const { currentPosition, subPosition, handleNavLink, handleNavSubLink } =
    useContext(AsidePositionContext);
  const { handleRoutePlan } = useContext(CurrentCourseContext);

  const { setRouteString } = useContext(PlanRoutesContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(dispatch, navigate);
  };

  const asideNavigationItems = [
    /* pos: 0 */ {
      route: "/u/planes",
      label: "Planes_de_Estudio",
      hasDDL: true,
      icon: () => (active[0].isActive || plansTopMenu ? DocBlueIcon : DocIcon),
      alt: "dashboard",
    },
    /* pos: 1 */ {
      route: "/u/planes/11_meses",
      label: "11 Meses",
      hasDDL: false,
    },
    /* pos: 2 */ {
      route: "/u/planes/10_meses",
      label: "10 Meses",
      hasDDL: false,
    },
    /* pos: 3 */ {
      route: "/u/planes/9_meses",
      label: "9 Meses",
      hasDDL: false,
    },
    /* pos: 4 */ {
      route: "/u/planes/8_meses",
      label: "8 Meses",
      hasDDL: false,
    },
    /* pos: 5 */ {
      route: "/u/planes/7_meses",
      label: "7 Meses",
      hasDDL: false,
    },
    /* pos: 6 */ {
      route: "/u/planes/6_meses",
      label: "6 Meses",
      hasDDL: false,
    },
    /* pos: 7 */ {
      route: "/u/planes/5_meses",
      label: "5 Meses",
      hasDDL: false,
    },
    /* pos: 8 */ {
      route: "/u/recursos",
      label: "Recursos",
      hasDDL: false,
      icon: () => (active[8].isActive ? ResBlueIcon : ResIcon),
      alt: "resources",
    },
    /* pos: 9 */ {
      route: "/u/simulador",
      label: "Simuladores",
      hasDDL: false,
      icon: () => (active[9].isActive ? SimBlueIcon : SimIcon),
      alt: "simulator",
    },
    /* pos: 10 */ {
      route: "/u/documentos/guia",
      label: "Documentos_ENARM",
      hasDDL: true,
      icon: () => (active[10].isActive || docsTopMenu ? DocBlueIcon : DocIcon),
      alt: "documents",
    },
    /* pos: 11 */ {
      route: "/u/documentos/guia",
      label: "Guía de Estudio",
      hasDDL: false,
    },
    /* pos: 12 */ {
      route: "/u/documentos/programa_academico",
      label: "Programa Académico",
      hasDDL: false,
    },
  ];

  const toggleArrowed = (index) => {
    return selected.map((item) => {
      if (item.pos === index) {
        return { ...item, isSelected: true };
      }
      return { ...item, isSelected: false };
    });
  };

  const toggleNavLinkList = (i, type) => {
    // console.log(type);

    if (type === true) {
      handleNavLink(i);
    } else {
      handleRoutePlan({
        route: asideNavigationItems[i].route,
        plan_month: asideNavigationItems[i].label,
      });
      setRouteString(asideNavigationItems[i].label.replace(" ", "_"));

      handleNavSubLink(i);
    }

    const plansTopFlag = i > 7 ? false : true;
    setPlansMenu(plansTopFlag);

    const docsMenuDisplay = i >= 10 ? true : false;
    setDocsMenu(docsMenuDisplay);

    const newSet = active.map((item) => {
      if (item.pos === i) {
        if (topMenuLinks.includes(i)) {
          return {
            ...item,
            isActive: true,
            activeStyle: activeStyle,
            class: "",
          };
        }
        return {
          ...item,
          isActive: true,
          activeStyle: subMenuActiveStyle,
          class: "sub-link",
        };
      }
      return { ...item, isActive: false, activeStyle: null };
    });

    setActive(newSet);

    if (i === 0 || i === 10) {
      setSelected(toggleArrowed(i));
      if (i === 0) {
        setPlansTopMenu(true);
        setDocsTopMenu(false);
      }
      if (i === 10) {
        setDocsTopMenu(true);
        setPlansTopMenu(false);
      }
      return;
    }
    const toggleArrow = selected.map((item) => {
      return { ...item, isSelected: false };
    });

    const plansFlag = i >= 0 && i <= 7 ? true : false;
    setPlansTopMenu(plansFlag);

    const docsFlag = i >= 10 ? true : false;
    setDocsTopMenu(docsFlag);
    setSelected(toggleArrow);
  };

  const arrowOrientation = (i) => {
    const arrow = selected.filter((item) => item.pos === i);
    return arrow[0].isSelected ? ArrowUp : ArrowDown;
  };

  const isDropDownMenuActive = (index) => {
    if (index >= 1 && index <= 7) {
      return plansMenu ? "plans-on" : "plans-off";
    }
    if (index > 10) {
      return docsMenu ? "docs-on" : "docs-off";
    }
    return;
  };

  const navLinkClass = (index, isAct) => {
    //console.log({index, isAct})
    let isActiveNav = false;
    if ([0, 8, 9, 10].includes(index)) {
      const position = index > 0 ? index - 7 : index;
      isActiveNav = currentPosition[position].active;
    } else {
      const position = index <= 7 ? index - 1 : index - 4;
      //console.log(subPosition)
      isActiveNav = subPosition[position].active;
    }

    let classString = "platform-link";
    if (!topMenuLinks.includes(index)) {
      classString += " sub-link";
    }
    if (isActiveNav) {
      classString += " active";
    }
    if (isShort) {
      classString += " pLink-minimized";
    }
    if ((index === 0 || index === 10) && isAct) {
      classString += " forced-link-active";
    }

    return classString;
  };

  return (
    <aside
      className={`platform-el ${deviceType} ${isShort ? "minimized" : ""}`}
      style={
        isSmart
          ? menuActive
            ? { display: "block" }
            : { display: "none" }
          : { display: "block" }
      }
    >
      <nav>
        <div className="navigation-wrapper">
          <div className={`logo-name ${deviceType}`}>
            <img src={enarmLogo} alt="logo" className="logo-enarm" />
            {!isShort && (
              <span className="semibold-14 sky-blue">Plataforma ENARM</span>
            )}
          </div>
          {isSmart && (
            <div
              className="menu-close"
              onClick={() => {
                props.handleCloseMenu();
              }}
            >
              <span className="menu-close__button">+</span>
            </div>
          )}
          <ul className="enarm-list">
            {asideNavigationItems.map((item, index) => {
              return (
                <li className={`${isDropDownMenuActive(index)}`} key={index}>
                  <NavLink
                    to={item.route}
                    className={({ isActive }) => navLinkClass(index, isActive)}
                    onClick={() => {
                      const isNavLink = [0, 8, 9, 10].includes(index);
                      toggleNavLinkList(index, isNavLink);
                    }}
                  >
                    <div>
                      {item.icon && <img src={item.icon()} alt={item.alt} />}
                      {!isShort && (
                        <span className="regular-14"> {item.label} </span>
                      )}
                    </div>
                    {!isShort && item.hasDDL && (
                      <img
                        src={arrowOrientation(index)}
                        alt="ddl"
                        className="dropdownicon"
                      />
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="aside-footer">
          {isSmart ? (
            <div className="session-user smart">
              <div
                className="user-info"
                onClick={() => {
                  setSessionTools(!isShowingSessionTools);
                }}
              >
                <img src={userIcon} alt="user-img" className="user-icon" />
                <span className="roboto-14 black">{userName}</span>
                <i
                  className="material-icons"
                  style={{
                    fontSize: "16px",
                    marginLeft: "auto",
                    fontWeight: "bold",
                  }}
                >
                  expand_less
                </i>
              </div>
              {isShowingSessionTools && (
                <div className="session-container-tools">
                  <div>
                    <i className="material-icons">settings</i>
                    <span className="roboto-14">Mi cuenta</span>
                  </div>
                  <div onClick={handleLogout}>
                    <i className="material-icons">logout</i>
                    <span className="roboto-14" style={{ fontWeight: "400" }}>
                      Cerrar Sesión
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="menu-toggle">
              <button
                className="toggle-button-menu"
                onClick={handleDashboardAsideMenu}
              >
                <img src={MenuToggleIcon} alt="menu" className="menu-icon" />
              </button>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default DashboardLeftAside;

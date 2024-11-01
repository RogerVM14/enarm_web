import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import EnarmLogo from "../../Assets/Images/EnarmLogo.jpg";
import ArrowDown from "../../Assets/Icons/ArrowDown.png";
import ArrowUp from "../../Assets/Icons/ArrowUp.png";
import CloseIcon from "../../Assets/Icons/CloseIcon.svg";
import UserDefaultIcon from "../../Assets/Icons/DefaultUser.png";
import ui from "../index.module.css";
import { ROUTES } from "../../../../constants/routes";
import { useDispatch } from "react-redux";
import { logout } from "../../../../utils/auth";
import DashboardBlueIcon from "../../../Layouts/Assets/Icons/DashboardBlue.svg";
import DashboardBlackIcon from "../../../Layouts/Assets/Icons/DashboardBlack.svg";
import DocumentsBlackIcon from "../../../Layouts/Assets/Icons/DocumentsBlack.png";
import DocumentsBlueIcon from "../../../Layouts/Assets/Icons/DocumentsBlue.png";
import ResourcesBlackIcon from "../../../Layouts/Assets/Icons/ResourcesBlack.png";
import ResourcesBlueIcon from "../../../Layouts/Assets/Icons/ResourcesBlue.png";
import SimulatorBlackIcon from "../../../Layouts/Assets/Icons/SimulatorBlack.png";
import SimulatorBlueIcon from "../../../Layouts/Assets/Icons/SimulatorBlue.png";
import { GeneralContext } from "../../../../contexts/GeneralContext";

const DashboardAsideTemplate = ({ smallDevice, isMenuActive, handleShowMenu = () => {} }) => {
  const [displayTools, setDisplayTools] = useState(false);
  const [menuPlansSelected, setMenuPlansSelected] = useState(false);
  const [menuItemSelected, setMenuItemSelected] = useState(null);
  const [menuPlans, setMenuPlans] = useState([
    { route: "/cursoENARM/planes/11_meses", label: "11 Meses", isActive: false },
    { route: "/cursoENARM/planes/10_meses", label: "10 Meses", isActive: false },
    { route: "/cursoENARM/planes/9_meses", label: "9 Meses", isActive: false },
    { route: "/cursoENARM/planes/8_meses", label: "8 Meses", isActive: false },
    { route: "/cursoENARM/planes/7_meses", label: "7 Meses", isActive: false },
    { route: "/cursoENARM/planes/6_meses", label: "6 Meses", isActive: false },
    { route: "/cursoENARM/planes/5_meses", label: "5 Meses", isActive: false },
  ]);
  const [menuDocumentsSelected, setMenuDocumentsSelected] = useState(false);
  const [menuDocuments, setMenuDocuments] = useState([
    { route: "/cursoENARM/documentos/guia", label: "Guía de Estudio", isActive: false },
    { route: "/cursoENARM/documentos/programa_academico", label: "Programa Académico", isActive: false },
  ]);
  const [menu, setMenu] = useState([
    {
      route: "/cursoENARM/planes/11_meses",
      label: "Planes de Estudio",
      isActive: false,
      active: DashboardBlueIcon,
      inactive: DashboardBlackIcon,
    },
    {
      route: "/cursoENARM/recursos",
      label: "Recursos",
      isActive: false,
      active: ResourcesBlueIcon,
      inactive: ResourcesBlackIcon,
    },
    {
      route: "/cursoENARM/simuladores",
      label: "Simuladores",
      isActive: false,
      active: SimulatorBlueIcon,
      inactive: SimulatorBlackIcon,
    },
    {
      route: "/cursoENARM/documentos/guia",
      label: "Documentos ENARM",
      isActive: false,
      active: DocumentsBlueIcon,
      inactive: DocumentsBlackIcon,
    },
  ]);

  const navigateTo = useNavigate();
  const { globalMenuSelected, setGlobalMenuSelected } = useContext(GeneralContext);

  const onClickEventMenu = (index, route) => {
    setGlobalMenuSelected(index);
    if (index === 0) setMenuPlansSelected(!menuPlansSelected);
    if (index === 3) setMenuDocumentsSelected(!menuDocumentsSelected);
    navigateTo(route);
  };

  useEffect(() => {
    setMenu((prev) => {
      const _array_ = prev?.map((item, index) => {
        return index === globalMenuSelected
          ? {
              ...item,
              isActive: true,
            }
          : item;
      });
      return _array_;
    });
  }, [globalMenuSelected]);

  return (
    <aside className={ui.asideStyle} data-portability={smallDevice} data-active={isMenuActive}>
      <div className={ui.asideBackground}></div>
      <div className={ui.asideContainer}>
        <Link
          className={ui.logoContainer}
          to="/cursoENARM"
          style={{ cursor: "pointer" }}
          onClick={() => setGlobalMenuSelected(null)}
        >
          <div className={ui.imageContainer}>
            <img src={EnarmLogo} alt="Enarm Logo" />
          </div>
          Plataforma ENARM
        </Link>
        <nav>
          <ul className={ui.menuList}>
            <li data-portability={smallDevice}>
              <button type="button" className={ui.closeButton} onClick={() => handleShowMenu()}>
                <img src={CloseIcon} alt="close" />
              </button>
            </li>

            {menu?.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => onClickEventMenu(index, item.route)}
                  className={item.isActive ? ui.buttonMenuItemSelected : ui.buttonMenuItem}
                >
                  <img src={item.isActive ? item.active : item.inactive} alt="" />
                  {item.label}
                </button>
                <Submenu submenu={menuPlans} visible={item.isActive && globalMenuSelected === 0} />
                <Submenu submenu={menuDocuments} visible={item.isActive && globalMenuSelected === 3} />
              </li>
            ))}
          </ul>
          <div className={ui.asideFooter}>
            <div
              className={ui.containerUser}
              data-portability={smallDevice}
              onClick={() => {
                setDisplayTools(!displayTools);
              }}
            >
              <img src={UserDefaultIcon} alt="User icon" width={"24px"} height={"24px"} />
              <p>Username</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.46477 5.15013C1.07424 5.54065 1.07424 6.17382 1.46477 6.56434C1.85529 6.95487 2.48846 6.95487 2.87898 6.56434L5.00028 4.44305L7.1216 6.56437C7.51212 6.95489 8.14529 6.95489 8.53581 6.56437C8.92633 6.17384 8.92633 5.54068 8.53581 5.15016L5.71349 2.32784C5.71147 2.32579 5.70945 2.32374 5.70741 2.3217C5.32299 1.93728 4.70345 1.93127 4.31168 2.30368C4.30546 2.30959 4.2993 2.3156 4.2932 2.3217C4.29319 2.32171 4.29318 2.32172 4.29317 2.32173C4.2931 2.3218 4.29303 2.32187 4.29296 2.32194L1.46477 5.15013Z"
                  fill="black"
                />
              </svg>
            </div>
            <UserTools display={displayTools} />
          </div>
        </nav>
      </div>
    </aside>
  );
};

const Submenu = ({ submenu, visible }) => {
  return visible ? (
    <ul className={ui.submenuList}>
      {submenu?.map((sub, index) => {
        return (
          <li key={index}>
            <Link to={sub.route} className={ui.buttonMenuItem}>
              {sub.label}
            </Link>
          </li>
        );
      })}
    </ul>
  ) : null;
};

const UserTools = ({ display }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(dispatch, navigate);
  };
  return display ? (
    <div className={ui.userTools}>
      <Link to="/cursoENARM/MiCuenta">Mi cuenta</Link>
      <Link to={ROUTES.LOGIN} onClick={handleLogout}>
        Cerrar Sesión
      </Link>
    </div>
  ) : null;
};

export default DashboardAsideTemplate;

import DashboardBlueIcon from "../../../Layouts/Assets/Icons/DashboardBlue.svg";
import DashboardBlackIcon from "../../../Layouts/Assets/Icons/DashboardBlack.svg";
import DocumentsBlackIcon from "../../../Layouts/Assets/Icons/DocumentsBlack.png";
import DocumentsBlueIcon from "../../../Layouts/Assets/Icons/DocumentsBlue.png";
import ResourcesBlackIcon from "../../../Layouts/Assets/Icons/ResourcesBlack.png";
import ResourcesBlueIcon from "../../../Layouts/Assets/Icons/ResourcesBlue.png";
import SimulatorBlackIcon from "../../../Layouts/Assets/Icons/SimulatorBlack.png";
import SimulatorBlueIcon from "../../../Layouts/Assets/Icons/SimulatorBlue.png";
import React, { useContext, useMemo, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EnarmLogo from "../../Assets/Images/EnarmLogo.jpg";
import CloseIcon from "../../Assets/Icons/CloseIcon.svg";
import UserDefaultIcon from "../../Assets/Icons/DefaultUser.png";
import ui from "../index.module.css";
import { ROUTES } from "../../../../constants/routes";
import { useDispatch } from "react-redux";
import { logout } from "../../../../utils/auth";
import { GeneralContext } from "../../../../contexts/GeneralContext";
import { useQuery } from "react-query";
import { getStudyPlans } from "../../../../apis/platform";
import { useSelector } from "react-redux";
import { selectIsGuestUserRole } from "../../../../store/reducers/user/UserInformationSlice";
const DashboardAsideTemplate = ({
  smallDevice,
  isMenuActive,
  handleShowMenu = () => {},
}) => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const isGuestUser = useSelector(selectIsGuestUserRole);

  const [displayTools, setDisplayTools] = useState(false);
  const { data: studyPlans } = useQuery(
    ["study-plans"],
    () => getStudyPlans(dispatch, navigateTo),
    { staleTime: Infinity }
  );

  const {
    globalMenuSelected,
    setGlobalMenuSelected,
    simulatorIsActive,
    setSimulatorCooldownAdvice,
  } = useContext(GeneralContext);

  const menuPlans = useMemo(() => {
    if (isGuestUser) {
      return studyPlans?.slice(0, 1).map((plan) => ({
        id: plan?.study_plan_id,
        route: `/cursoENARM/planes?id=${plan.study_plan_id}&name=${plan.study_plan_name}`,
        label: plan?.study_plan_name,
      }));
    }
    return studyPlans?.map((plan) => ({
      id: plan?.study_plan_id,
      route: `/cursoENARM/planes?id=${plan.study_plan_id}&name=${plan.study_plan_name}`,
      label: plan?.study_plan_name,
    }));
  }, [studyPlans, isGuestUser]);

  const menuItems = useMemo(() => {
    if (isGuestUser) {
      return [
        {
          route: "#",
          label: "Planes de Estudio",
          activeIcon: DashboardBlueIcon,
          inactiveIcon: DashboardBlackIcon,
          submenu: menuPlans,
        },
      ];
    }
    return [
      {
        route: "#",
        label: "Planes de Estudio",
        activeIcon: DashboardBlueIcon,
        inactiveIcon: DashboardBlackIcon,
        submenu: menuPlans,
      },
      // {
      //   route: "/cursoENARM/recursos",
      //   label: "Recursos",
      //   activeIcon: ResourcesBlueIcon,
      //   inactiveIcon: ResourcesBlackIcon,
      // },
      {
        route: "/cursoENARM/simuladores",
        label: "Simuladores",
        activeIcon: SimulatorBlueIcon,
        inactiveIcon: SimulatorBlackIcon,
      },
      {
        route: "/cursoENARM/documentos/guia",
        label: "Documentos ENARM",
        activeIcon: DocumentsBlueIcon,
        inactiveIcon: DocumentsBlackIcon,
        submenu: [
          { route: "/cursoENARM/documentos/guia", label: "Guía de Estudio" },
          { route: ROUTES.PLATAFORMA_AVISOS_ENARM, label: "Avisos" },
        ],
      },
    ];
  }, [isGuestUser, menuPlans]);

  const onClickEventMenu = (index, route) => {
    if (simulatorIsActive) {
      setSimulatorCooldownAdvice(true);
      return;
    }
    setGlobalMenuSelected(index);
    navigateTo(route);
  };

  return (
    <aside
      className={ui.asideStyle}
      data-portability={smallDevice}
      data-active={isMenuActive}
    >
      <div className={ui.asideBackground}></div>
      <div className={ui.asideContainer}>
        <Link
          className={ui.logoContainer}
          style={{ cursor: "pointer" }}
          to={ROUTES.HOME}
          onClick={() => {
            if (simulatorIsActive) {
              setSimulatorCooldownAdvice(true);
              return;
            }
            setGlobalMenuSelected(null);
            navigateTo(ROUTES.HOME, { replace: true });
          }}
        >
          <div className={ui.imageContainer}>
            <img src={EnarmLogo} alt="Enarm Logo" />
          </div>
          Plataforma ENARM
        </Link>
        <nav>
          <ul className={ui.menuList}>
            <li data-portability={smallDevice} style={{ display: "none" }}>
              <button
                type="button"
                className={ui.closeButton}
                onClick={() => handleShowMenu()}
              >
                <img src={CloseIcon} alt="close" />
              </button>
            </li>
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    if (globalMenuSelected === 0 && index === 0) {
                      return;
                    }
                    onClickEventMenu(index, item.route);
                  }}
                  className={
                    globalMenuSelected === index
                      ? ui.buttonMenuItemSelected
                      : ui.buttonMenuItem
                  }
                >
                  <img
                    src={
                      globalMenuSelected === index
                        ? item.activeIcon
                        : item.inactiveIcon
                    }
                    alt={item.label}
                  />
                  {item.label}
                </button>
                {item.submenu && globalMenuSelected === index && (
                  <ul className={ui.submenuList}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <button
                          type="button"
                          onClick={() => {
                            if (simulatorIsActive) {
                              setSimulatorCooldownAdvice(true);
                              return;
                            }
                            navigateTo(subItem.route);
                          }}
                          className={ui.buttonSubMenuItem}
                        >
                          {subItem.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className={ui.asideFooter}>
            <div
              className={ui.containerUser}
              onClick={() => setDisplayTools(!displayTools)}
            >
              <img
                src={UserDefaultIcon}
                alt="User icon"
                width="24"
                height="24"
              />
              <p>Username</p>
            </div>
            <UserTools display={displayTools} />
          </div>
        </nav>
      </div>
    </aside>
  );
};

const UserTools = React.memo(({ display }) => {
  const { setSimulatorIsActive, setSimulatorCooldownAdvice } =
    useContext(GeneralContext);
  setSimulatorIsActive(false);
  setSimulatorCooldownAdvice(false);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const handleLogout = useCallback(() => {
    setSimulatorIsActive(false);
    setSimulatorCooldownAdvice(false);
    logout(dispatch, navigateTo);
  }, [dispatch, navigateTo, setSimulatorIsActive, setSimulatorCooldownAdvice]);

  return display ? (
    <div className={ui.userTools}>
      <Link to="/cursoENARM/MiCuenta">Mi cuenta</Link>
      <Link to={ROUTES.LOGIN} onClick={handleLogout}>
        Cerrar Sesión
      </Link>
    </div>
  ) : null;
});

export default DashboardAsideTemplate;

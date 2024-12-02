import { useState } from "react";
import DashboardBlueIcon from "../../Assets/Icons/DashboardBlue.svg";
import DashboardBlackIcon from "../../Assets/Icons/DashboardBlack.svg"; 
import DocumentsBlackIcon from "../../Assets/Icons/DocumentsBlack.png";
import DocumentsBlueIcon from "../../Assets/Icons/DocumentsBlue.png"; 
import ResourcesBlackIcon from "../../Assets/Icons/ResourcesBlack.png";
import ResourcesBlueIcon from "../../Assets/Icons/ResourcesBlue.png"; 
import SimulatorBlackIcon from "../../Assets/Icons/SimulatorBlack.png";
import SimulatorBlueIcon from "../../Assets/Icons/SimulatorBlue.png";
import { ROUTES } from "../../../../constants/routes";

const useMenuNavigation = () => {

  const [menuPlans, setMenuPlans] = useState(true);
  const [menuDocuments, setMenuDocuments] = useState(false);
  const [current, setCurrent] = useState(0);
  const [menu, setMenu] = useState([
    {
      // route: "/u/planes",
      route: "#",
      label: "Planes de Estudio",
      isActive: true,
      activeIcon: DashboardBlueIcon,
      inactiveIcon: DashboardBlackIcon,
      alt: "dashboard",
      list: [
        { route: "/u/planes/11_meses", label: "11 Meses", selected: false },
        // { route: "/u/planes/10_meses", label: "10 Meses", selected: false },
        // { route: "/u/planes/9_meses", label: "9 Meses", selected: false },
        // { route: "/u/planes/8_meses", label: "8 Meses", selected: false },
        // { route: "/u/planes/7_meses", label: "7 Meses", selected: false },
        // { route: "/u/planes/6_meses", label: "6 Meses", selected: false },
        // { route: "/u/planes/5_meses", label: "5 Meses", selected: false },
      ],
    }, {
      route: "/u/recursos",
      label: "Recursos",
      isActive: false,
      activeIcon: ResourcesBlueIcon,
      inactiveIcon: ResourcesBlackIcon,
      alt: "resources",
    }, {
      route: "/u/simulador",
      label: "Simuladores",
      isActive: false,
      activeIcon: SimulatorBlueIcon,
      inactiveIcon: SimulatorBlackIcon,
      alt: "simulator",
    }, {
      // route: "/u/documentos/guia",
      route: "#",
      label: "Documentos ENARM",
      isActive: false,
      activeIcon: DocumentsBlueIcon,
      inactiveIcon: DocumentsBlackIcon,
      alt: "documents",
      list: [
        { route: "/u/documentos/guia", label: "Guía de Estudio", selected: false },
        { route: ROUTES.PLATAFORMA_AVISOS_ENARM, label: "Avisos", selected: false }
      ],
    }
  ]);

  const handleMenuSelected = (i) => {
    if (i === current) return;
    setMenu((menu) => {
      const list = menu.map((item, index) => {
        if (index !== i) return { ...item, isActive: false };
        return { ...item, isActive: !item.isActive }
      });
      return list;
    });

    setCurrent(i);

    if (i === 0) {
      setMenuPlans(!menuPlans);
      if (menuDocuments === true) setMenuDocuments(false);
      return;
    }
    if (i === 3) {
      setMenuDocuments(!menuDocuments);
      if (menuPlans === true) setMenuPlans(false);
      return;
    }
  }
 
  return {
    menu,
    current,
    menuPlans,
    setMenuPlans,
    menuDocuments,
    setMenuDocuments,
    handleMenuSelected
  }
}

export default useMenuNavigation;
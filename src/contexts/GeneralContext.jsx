import { createContext, useState } from "react";
import DashboardBlueIcon from "../pages/Layouts/Assets/Icons/DashboardBlue.svg";
import DashboardBlackIcon from "../pages/Layouts/Assets/Icons/DashboardBlack.svg";
import DocumentsBlackIcon from "../pages/Layouts/Assets/Icons/DocumentsBlack.png";
import DocumentsBlueIcon from "../pages/Layouts/Assets/Icons/DocumentsBlue.png";
import ResourcesBlackIcon from "../pages/Layouts/Assets/Icons/ResourcesBlack.png";
import ResourcesBlueIcon from "../pages/Layouts/Assets/Icons/ResourcesBlue.png";
import SimulatorBlackIcon from "../pages/Layouts/Assets/Icons/SimulatorBlack.png";
import SimulatorBlueIcon from "../pages/Layouts/Assets/Icons/SimulatorBlue.png";

export const GeneralContext = createContext(null);

const GeneralProvider = (props) => {

  const [feedbackModal, setFeedbackModal] = useState(false);
  const [importantModal, setImportantModal] = useState(false);
  const [simulationOnCourse, setSimulationOnCourse] = useState(false);
  const [menuPlans, setMenuPlans] = useState(true);
  const [menuDocuments, setMenuDocuments] = useState(false);
  const [current, setCurrent] = useState(0);
  const [menu, setMenu] = useState([
    {
      route: "/cursoENARM/planes",
      label: "Planes de Estudio",
      isActive: true,
      activeIcon: DashboardBlueIcon,
      inactiveIcon: DashboardBlackIcon,
      alt: "dashboard",
      list: [
        { route: "/cursoENARM/planes/11_meses", label: "11 Meses", selected: false },
        { route: "/cursoENARM/planes/10_meses", label: "10 Meses", selected: false },
        { route: "/cursoENARM/planes/9_meses", label: "9 Meses", selected: false },
        { route: "/cursoENARM/planes/8_meses", label: "8 Meses", selected: false },
        { route: "/cursoENARM/planes/7_meses", label: "7 Meses", selected: false },
        { route: "/cursoENARM/planes/6_meses", label: "6 Meses", selected: false },
        { route: "/cursoENARM/planes/5_meses", label: "5 Meses", selected: false },
      ],
    }, {
      route: "/cursoENARM/recursos",
      label: "Recursos",
      isActive: false,
      activeIcon: ResourcesBlueIcon,
      inactiveIcon: ResourcesBlackIcon,
      alt: "resources",
    }, {
      route: "/cursoENARM/simuladores",
      label: "Simuladores",
      isActive: false,
      activeIcon: SimulatorBlueIcon,
      inactiveIcon: SimulatorBlackIcon,
      alt: "simulator",
    }, {
      // route: "/cursoENARM/documentos/guia",
      route: "#",
      label: "Documentos ENARM",
      isActive: false,
      activeIcon: DocumentsBlueIcon,
      inactiveIcon: DocumentsBlackIcon,
      alt: "documents",
      list: [
        { route: "/cursoENARM/documentos/guia", label: "Guía de Estudio", selected: false },
        { route: "/cursoENARM/documentos/programa_academico", label: "Programa Académico", selected: false }
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

  return (
    <GeneralContext.Provider value={{
      feedbackModal,
      setFeedbackModal,
      importantModal,
      setImportantModal,
      menu,
      current,
      menuPlans,
      setMenuPlans,
      menuDocuments,
      setMenuDocuments,
      handleMenuSelected,
      simulationOnCourse, 
      setSimulationOnCourse
    }}>
      {props.children}
    </GeneralContext.Provider>
  )
}

export default GeneralProvider;
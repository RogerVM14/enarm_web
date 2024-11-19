import { useState } from "react";
import ChevronIcon from "../../Assets/Icons/chevronicon.svg";
import CardBody from "./CardBody";
import ui from "./index.module.css";

const SimulatorCard = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div className={ui.simulatorCard}>
      <div
        className={ui.cardHeader}
        onClick={() => {
          setDisplay(!display);
        }}
      >
        <div className={ui.headerTitle}>
          <img src={ChevronIcon} alt="chevron" width={12} height={12} data-selected={display} />
          <h4>Simulador Infectología #1</h4>
        </div>
        <p>Practica en nuestro simulador</p>
      </div>
      <CardBody display={display} />
    </div>
  );
};

export default SimulatorCard;

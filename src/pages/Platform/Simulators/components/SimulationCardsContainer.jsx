import ui from "../index.module.css";
import SimulatorCard from "./CardBody";
import BackIcon from "../../Assets/Icons/backicon.svg";
import { useEffect, useState } from "react";
import SimulatorsAdvice from "./SimulatorAdvice/SimulatorsAdvice";
const SimulationCardsContainer = ({ displayContainer, handleDisplay = () => {}, smallDevice, resourcesContent }) => {
  const [simulators, setSimulators] = useState([]);
  const [open, setOpen] = useState(false);
  const [dataQuery, setDataQuery] = useState({});

  useEffect(() => {
    if (
      resourcesContent.length === undefined ||
      resourcesContent.length === 0 ||
      !resourcesContent ||
      resourcesContent === undefined
    )
      return;
    const list = Object.values(resourcesContent[0]).reduce((acc, item) => {
      item.forEach((element) => {
        const { type } = element;

        if (!acc[type]) {
          acc[type] = [];
        }
        acc[type].push(element);
      });
      return acc;
    }, {});
    const [[, array]] = Object.entries(list).filter((element) => element[0] === "Simulador");
    console.log({array})
    setSimulators(array);
  }, [resourcesContent]);

  const onSelectSimulator = ({ specialty_id }) => {
    setOpen(true);
    setDataQuery({ simulator: specialty_id, plan: 1 });
  };

  if (displayContainer === false && smallDevice === true) return null;

  return (
    <>
      <section id={ui.simulatorsSection} data-size="">
        <div className={ui.sectionContainer}>
          <button type="button" className={ui.backButton} onClick={() => handleDisplay()}>
            <img src={BackIcon} alt="chevron" />
            Volver
          </button>
          <div className={ui.containerBody}>
            {simulators?.map((simulator, index) => {
              return (
                <SimulatorCard data={simulator} key={index} count={index + 1} onSelectSimulator={onSelectSimulator} />
              );
            })}
          </div>
        </div>
      </section>

      <SimulatorsAdvice open={open} onClose={() => setOpen(false)} query={dataQuery} />
    </>
  );
};

export default SimulationCardsContainer;

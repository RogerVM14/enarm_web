
import SimulatorCard from "./CardBody";
// import BackIcon from "../../Assets/Icons/backicon.svg";
import { useEffect, useState } from "react";
import SimulatorsAdvice from "./SimulatorAdvice/SimulatorsAdvice";

const SimulationCardsContainer = ({ displayContainer, handleDisplay = () => {}, smallDevice, simulatorsList }) => {
  const [simulators, setSimulators] = useState([]);
  const [open, setOpen] = useState(false);
  const [dataQuery, setDataQuery] = useState({});

  useEffect(() => {
    if (simulatorsList === undefined || Object.entries(simulatorsList).length === 0) return;
    const _array = simulatorsList?.map(element => {
      return {
        isCompleted: element.is_completed,
        totalAttempts: element.simulator_attempts,
        id: element.simulator_id,
        name: element.simulator_name,
        userAttempts: element.user_attempts,
        nextAttempt: element.user_attempts + 1,
        specialtyName: element.specialty_name,
        specialtyId: element.specialty_id,
        totalQuestions: element.total_questions,
        duration: element.simulator_duration
      }
    })
    setSimulators(_array);
  }, [simulatorsList]);

  const onSelectSimulator = ({ specialty_id }) => {
    setOpen(true);
    setDataQuery({ simulator: specialty_id, plan: 1 });
  };

  if (displayContainer === false && smallDevice === true) return null;

  return (
    <>
      <div>
        {/* <button type="button" onClick={handleDisplay}>
          <img src={BackIcon} alt="chevron" />
          Volver
        </button> */}
        <div>
          {simulators?.map((simulator, index) => {
            return (
              <SimulatorCard data={simulator} key={index} count={index + 1} onSelectSimulator={onSelectSimulator} />
            );
          })}
        </div>
      </div>
      <SimulatorsAdvice open={open} onClose={() => setOpen(false)} query={dataQuery} />
    </>
  );
};

export default SimulationCardsContainer;

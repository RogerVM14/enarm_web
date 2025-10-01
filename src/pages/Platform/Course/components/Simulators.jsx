import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SimulatorsAdvice from "../components/SimulatorsAdvice";
import ui from "../index.module.css";
import ChevronIcon from "../../Assets/Icons/chevronicon.svg";
import { useSelector } from "react-redux";
import { selectIsGuestUserRole } from "../../../../store/reducers/user/UserInformationSlice";
import ConfirmDialogModal from "../../../../components/ConfirmDialogModal";
import { ROUTES } from "../../../../constants/routes";

const Simulators = ({ simulators, cardDisplay, plan, tabSelected }) => { 
  const [open, setOpen] = useState(false);
  const [dataQuery, setDataQuery] = useState({});
  const [simulatorsDisplay, setSimulatorsDisplay] = useState([]);
  const isGuestUser = useSelector(selectIsGuestUserRole);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleAcceptConfirm = () => {
    setIsConfirmModalOpen(false);
    navigate(ROUTES.CHECKOUT);
  };

  const handleCancelConfirm = () => {
    setIsConfirmModalOpen(false);
  };

  useEffect(() => {
    if (simulators === undefined || simulators?.length === 0) return;
    const base = simulators?.map((element) => ({ ...element, isDisplayed: false }));
    setSimulatorsDisplay(base);
  }, [simulators]);

  // Filtrar por la especialidad seleccionada en el tab
  const filteredSimulators = (simulatorsDisplay || []).filter(
    (e) => e?.specialty_name === tabSelected?.name
  );

  const handleDisplaySimulatorById = (simulatorId) => {
    setSimulatorsDisplay((prev) =>
      prev.map((element) =>
        element.simulator_id === simulatorId
          ? { ...element, isDisplayed: !element.isDisplayed }
          : element
      )
    );
  };

  const durationSplitted = (duration) => {
    if (duration === undefined || duration === null) return;
    const [hh, mm] = duration.split(":");
    const hour = parseInt(hh) === 1 ? "1 hora" : parseInt(hh) === 0 ? "" : `${parseInt(hh)} horas`;
    const minutes = parseInt(mm) === 0 ? "" : `${parseInt(mm)} ${parseInt(mm) === 1 ? "minuto" : "minutos"}`;
    return `${hour} ${minutes}`;
  };

  return filteredSimulators.length > 0 ? (
    <>
      {filteredSimulators.map((simulator, index) => {
        return (
          <div className="bg-[#FAFAFA] mb-2" key={index}>
            <div
              className="border-[1px] border-solid border-[#d9d9d9] py-3 px-4 hover:cursor-pointer"
              onClick={() => handleDisplaySimulatorById(simulator.simulator_id)}
            >
              <div className="flex flex-row gap-3 justify-start items-center">
                <img
                  src={ChevronIcon}
                  alt="chevron"
                  width={12}
                  height={12}
                  data-selected={cardDisplay[3]}
                  className={`transition-transform duration-200 ${simulator?.isDisplayed ? 'rotate-90' : 'rotate-0'}`}
                />

                <h5 className="poppins-semibold-14">
                  4.{index + 1} Simulador {simulator?.resource_name}
                </h5>
              </div>
              <div className={ui.cardDescription}>
                <p className="poppins-regular-14">Practica en nuestro simulador</p>
              </div>
            </div>
            {simulator?.isDisplayed === true ? (
              <div className="bg-white p-4 border-solid border-[1px] border-[#d9d9d9] border-t-0">
                <ul className="ml-2">
                  <li className="min-h-10 flex flex-row items-center">
                    <p className="poppins-regulñar-14">
                      Simulador con{" "}
                      <strong className="poppins-semibold-14">{simulator?.total_questions} preguntas.</strong>
                    </p>
                  </li>
                  <li className="min-h-10 flex flex-row items-center">
                    <p className="poppins-regulñar-14">
                      Tiempo para resolverlo:{" "}
                      <strong className="poppins-semibold-14">{durationSplitted(simulator?.simulator_duration)}</strong>
                    </p>
                  </li>
                  <li className="min-h-10 flex flex-row items-center">
                    <p className="poppins-regular-14">
                      🔥<strong className="poppins-semibold-14"> {simulator.simulator_attempts} intentos</strong>{" "}
                      permitidos para resolverlo
                    </p>
                  </li>
                  <li className="min-h-10 flex flex-row items-center">
                    <p className="poppins-regular-14">
                      Conoce tus resultados al finalizar presionando{" "}
                      <strong className="poppins-semibold-14">Finish Quiz.</strong>
                    </p>
                  </li>
                </ul>
                <div className="flex flex-row gap-x-6 py-4 items-center">
                  <Link
                    to={
                      simulator?.user_attempts > 0
                        ? `/cursoENARM/resultados?plan=1&simulator=${simulator?.simulator_id}`
                        : "#"
                    }
                    className={`max-h-10 min-h-10 rounded-sm border-solid border-[1px] border-[#d9d9d9] ${
                      simulator?.user_attempts > 0
                        ? "bg-white cursor-pointer text-black"
                        : "bg-[#f5f5f5] cursor-default text-[#00000040]"
                    } py-2 px-4 poppins-regular-14`}
                  >
                    Ir al panel de resultados
                  </Link>
                  {simulator?.is_completed === true ? null : (
                    <button
                      type="button"
                      className="max-h-10 min-h-10 rounded-sm border-solid border-[1px] border-[#05B2FA] bg-[#05B2FA] text-white poppins-regular-14 py-2 px-4"
                      onClick={() => {
                        if (isGuestUser && simulator?.user_attempts > 0) {
                          setIsConfirmModalOpen(true);
                        }
                        if (simulator?.is_completed === true) {
                          window.alert("Haz realido todos intentos para este simulador.");
                          return;
                        }
                        setOpen(true);
                        setDataQuery({ simulator: simulator.simulator_id, plan: plan });
                      }}
                    >
                      Comenzar Simulador
                    </button>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
      <SimulatorsAdvice open={open} onClose={() => setOpen(false)} query={dataQuery} />
      <ConfirmDialogModal
        isOpen={isConfirmModalOpen}
        onAccept={handleAcceptConfirm}
        onCancel={handleCancelConfirm}
        title="Realiza tu pago"
        description="Paga por nuestro curso para poder disfrutar de todo el contenido que tenemos para ti"
      />
    </>
  ) : null;
};

export default Simulators;

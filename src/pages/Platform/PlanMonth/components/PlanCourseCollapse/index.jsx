import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ui from "./index.module.css";
import DotIcon from "../../../../../assets/icons/dot-icon";
import { useSelector } from "react-redux";
import { selectIsGuestUserRole } from "../../../../../store/reducers/user/UserInformationSlice";
import ConfirmDialogModal from "../../../../../components/ConfirmDialogModal";
import { ROUTES } from "../../../../../constants/routes";

const PlanCourseCollapse = ({ weeksList, planID }) => {
  const navigate = useNavigate();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const isGuestUser = useSelector(selectIsGuestUserRole);

  const handleShowBodyContent = (week, isLocked) => {
    if (isLocked) {
      setIsConfirmModalOpen(true);
      return;
    }
    navigate(`/cursoENARM/planes_contenido?plan=${planID}&week=${week}`);
  };
  //FALTA COLOCAR LAS FUNCIONES PARA EL PAGO
  const handleAcceptConfirm = () => {
    setIsConfirmModalOpen(false);
    navigate(ROUTES.CHECKOUT)

  };

  const handleCancelConfirm = () => {
    setIsConfirmModalOpen(false);
  };

  return (
    <section>
      <div className={ui.courseContainer}>
        {weeksList.length > 0 &&
          weeksList?.map((week, index) => {
            const isLocked = isGuestUser && index > 0;
            return (
              <button
                type="button"
                className={`${ui.courseItem} ${isLocked ? ui.lockedItem : ""}`}
                key={week?.week_id}
                onClick={() =>
                  handleShowBodyContent(week?.week_number, isLocked)
                }
              >
                <div className={ui.itemContent}>
                  <div className={ui.contentHead}>
                    <div className={ui.headTop}>
                      <div className={ui.courseWeekTitle}>
                        <DotIcon />
                        <h6 className={ui.courseWeek}>
                          Semana {week.week_number} -{" "}
                          {week?.week_names.join(" / ")}
                        </h6>
                      </div>
                    </div>
                    <div className={ui.headBottom}>
                      <div className={ui.classDays}>
                        {week?.resources.map((resource, index) => {
                          return (
                            <div className={ui.dayClass} key={index}>
                              <p>{resource[0]} - </p>
                              <span>{resource[1]}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
      </div>
      <ConfirmDialogModal
        isOpen={isConfirmModalOpen}
        onAccept={handleAcceptConfirm}
        onCancel={handleCancelConfirm}
        title="Realiza tu pago"
        description="Paga por nuestro curso para poder disfrutar de todo el contenido que tenemos para ti"
      />
    </section>
  );
};

export default PlanCourseCollapse;

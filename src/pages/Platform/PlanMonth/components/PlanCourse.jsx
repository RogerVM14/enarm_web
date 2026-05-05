import React, { useState } from "react";
import ChevronIcon from "../../../../assets/icons/chevron-right.jsx";
import BodyContent from "./BodyContent.jsx";
import { getPlanCourseHeading } from "../clasesVirtualesEnarmPlan.js";

const PlanCourse = ({ planId, planName }) => {
  const [display, setDisplay] = useState(true);

  return (
    <section>
      <div className="px-6 py-4 bg-white shadow-custom">
        <div className="cursor-pointer flex flex-row justify-between" onClick={() => setDisplay(!display)}>
          <h5 className="flex flex-row items-center gap-x-2">
            {getPlanCourseHeading(planId, planName)}
            <div className={display ? "transition-all rotate-0" : "rotate-180 transition-all"}>
              <ChevronIcon />
            </div>
          </h5>
          <span className="poppins-regular-14 text-[#00000073]">Para comenzar</span>
        </div>
      </div>
      <BodyContent display={display} planId={planId} />
    </section>
  );
};

export default PlanCourse;

import React from "react";
import VimeoPlayer from "./VimeoPlayer";
import ChevronIcon from "../icons/ChevronRight";
import { isClasesVirtualesEnarmPlan } from "../../PlanMonth/clasesVirtualesEnarmPlan.js";

const Videos = ({ handleDisplayCardBody, cardDisplay, videos, tabSelected, planId }) => {
  const videosForTab = (videos || []).filter((e) => e[0] === tabSelected?.name);
  const virtualLayout = isClasesVirtualesEnarmPlan(planId);

  if (videosForTab.length === 0) return null;

  return (
    <div className="mb-2">
      <div
        className="py-3 px-4 bg-[#fafafa] border-solid border-[1px] border-[#d9d9d9]"
        onClick={() => handleDisplayCardBody(2)}
      >
        <div className="flex flex-row gap-x-3 justify-start items-baseline">
          <div className={`transition-transform duration-200 ${cardDisplay ? "rotate-90" : "rotate-0"}`}>
            <ChevronIcon />
          </div>
          <div>
            <h5 className="poppins-bold-14">{virtualLayout ? "Clases Virtuales" : "3. Video-Clases"}</h5>
            <div className="flex flex-row flex-wrap gap-x-3 gap-y-1 items-center">
              <p className="poppins-regular-14">
                {virtualLayout
                  ? "Videoclases de esta especialidad, según el calendario del plan."
                  : "Repasa tus gráficos con las video-clases"}
              </p>
              <span className="poppins-regular-14 text-[#00000073]">
                {videosForTab.length} video-clases
              </span>
            </div>
          </div>
        </div>
      </div>
      {!cardDisplay ? null : (
        <div className="p-4 border-solid border-[1px] border-[#d9d9d9] border-t-0 bg-white">
          <div
            className={
              virtualLayout ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "flex flex-col gap-y-4"
            }
          >
            {videosForTab.map((video, index) => (
              <VimeoPlayer
                videoUrl={video}
                key={video[3] ?? `${video[4]}-${index}`}
                title={video[4]}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;

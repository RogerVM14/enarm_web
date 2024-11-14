import React from "react";
import VimeoPlayer from "./VimeoPlayer";
import ChevronIcon from "../icons/ChevronRight";

const Videos = ({ handleDisplayCardBody, cardDisplay, videos }) => {
  return (
    <div className="mb-2">
      <div
        className="py-3 px-4 bg-[#fafafa] border-solid border-[1px] border-[#d9d9d9]"
        onClick={() => handleDisplayCardBody(2)}
      >
        <div className="flex flex-row gap-x-3 justify-start items-baseline">
          <ChevronIcon />
          <div>
            <h5 className="poppins-bold-14">3. Video-Clases</h5>
            <div className="flex flex-row gap-x-3 items-center">
              <p className="poppins-regular-14">Repasa tus gráficos con las video-clases</p>
              <span className="poppins-regular-14 text-[#00000073]">{videos?.length} video-clases</span>
            </div>
          </div>
        </div>
      </div>
      {!cardDisplay ? null : (
        <div className="p-4 border-solid border-[1px] border-[#d9d9d9] border-t-0 bg-white">
          <div className="flex flex-col gap-y-4">
            {videos?.map((video, index) => {
              return <VimeoPlayer videoUrl={video} key={index} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;

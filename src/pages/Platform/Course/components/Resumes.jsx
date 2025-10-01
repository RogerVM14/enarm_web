import React from "react"; 
import GuideContent from "./GuideContent";
import ChevronIcon from "../icons/ChevronRight";

const Resumes = ({ handleDisplayCardBody, cardDisplay, resume = { recursos: [], especialidades: [], tipo_recursos: [] }, tabSelected = {}, refetch }) => { 
  if (!resume?.recursos || !Array.isArray(resume.recursos)) {
    return null;
  }

  return (
    <div className="mb-2">
      <div
        className="py-3 px-4 bg-[#fafafa] border-solid border-[1px] border-[#d9d9d9]"
        onClick={() => handleDisplayCardBody(0)}
      >
        <div className="flex flex-row gap-x-3 justify-start items-baseline">
          <div className={`transition-transform duration-200 ${cardDisplay ? 'rotate-90' : 'rotate-0'}`}>
            <ChevronIcon />
          </div>
          <div>
            <h5 className="poppins-bold-14">1. Resúmenes</h5>
            <div className="flex flex-row gap-x-3 items-center">
              <p className="poppins-regular-14">Resúmenes, Flash cards y Tips</p>
              <span className="poppins-regular-14 text-[#00000073]">{resume?.recursos?.length || 0} recursos</span>
            </div>
          </div>
        </div>
      </div>
      {!cardDisplay ? null : (
        <div className="p-4 border-solid border-[1px] border-[#d9d9d9] border-t-0 bg-white">
          <GuideContent resumeData={resume} tabSelected={tabSelected} refetch={refetch}/>
        </div>
      )}
    </div>
  );
};

export default Resumes;

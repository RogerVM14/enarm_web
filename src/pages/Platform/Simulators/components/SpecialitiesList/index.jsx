import React, { useEffect, useState } from "react";

const SpecialitiesList = ({ handleDisplay = () => {}, data, selectSpecialty }) => {
  const [specialities, setSpecialities] = useState([]);

  const handleSelectSpeciality = (i) => {
    setSpecialities((prev) => {
      return prev?.map((item, index) => {
        return index === i ? { ...item, isActive: !item.isActive } : { ...item, isActive: false };
      });
    });
    handleDisplay();
  };

  useEffect(() => {
    if (!data) return;
    const list = data.map((item) => ({ id: item.specialty_id, name: item.specialty_name, isActive: false }));
    setSpecialities(list);
  }, [data]);

  return (
    <aside className="border-solid border-[1px] border-[#d9d9d9]">
      <ul>
        <li className=" bg-white w-full list-none flex h-14 max-h-14 min-h-14 text-start items-center justify-start border-b border-solid border-[#d9d9d9] relative">
          <p className="pl-4 poppins-regular-14 text-gray-400">Especialidades</p>
        </li>
      </ul>
      <div className="w-full overflow-y-auto h-[calc(100dvh_-_154px)]">
        <ul>
          {specialities?.map((speciality, index) => {
            const { isActive, name, id } = speciality;
            return (
              <li key={index} className={index === 0 ? "" : "border-t border-solid border-t-[#d9d9d9]"}>
                <button
                  type="button"
                  className={`w-full list-none flex h-14 max-h-14 min-h-14 text-start items-center justify-start border-none shadow-[0px_-1px_0px_0px_#f0f0f0f_inset] relative pl-4 hover:bg-[#D3F2FF] bg-[#FFF] ${
                    isActive
                      ? "before:content-[''] before:w-[3px] before:absolute before:h-14 before:left-0 before:top-0 shadow-[3px_0px_0px_0px_#05b2fa_inset] z-[100px] "
                      : null
                  }`}
                  onClick={() => {
                    handleSelectSpeciality(index, id);
                    selectSpecialty(id);
                  }}
                >
                  <span className="poppins-regular-14">{name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default SpecialitiesList;

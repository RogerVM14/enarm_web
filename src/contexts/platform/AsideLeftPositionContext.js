import React, { createContext, useState } from "react";

export const AsidePositionContext = createContext();

const AsideLeftPositionContext = (props) => {
  const links = [
    { pos: 0, active: true }, // label: "Planes_de_Estudio",
    { pos: 1, active: false }, // label: "Recursos",
    { pos: 2, active: false }, // label: "Simuladores",
    { pos: 3, active: false }, // label: "Documentos_ENARM",
  ];

  const subLinks = [
    { pos: 0, active: false }, // label: "11_Meses",
    { pos: 1, active: false }, // label: "10_Meses",
    { pos: 2, active: false }, // label: "9_Meses",
    { pos: 3, active: false }, // label: "8_Meses",
    { pos: 4, active: false }, // label: "7_Meses",
    { pos: 5, active: false }, // label: "6_Meses",
    { pos: 6, active: false }, // label: "5_Meses",
    { pos: 7, active: false }, // label: "Guía_de_Estudio",
    { pos: 8, active: false }, // label: "Programa_Académico",
  ];

  const [currentPosition, setCurrentPosition] = useState(links);
  const [subPosition, setSubPosition] = useState(subLinks);

  const handleNavLink = (i) => {
    setCurrentPosition((items) => {
      const position = i > 0 ? i - 7 : i;
      const newArray = items.map((posItem, posIndex) => {
        if (posItem.pos === position) {
          return { ...posItem, pos: position, active: !posItem.active };
        }
        return { ...posItem, pos: posIndex, active: false };
      });
      return newArray;
    });

    if (i === 10) {
      handleNavSubLink(11);
    }
  };

  const handleNavSubLink = (i) => {
    setSubPosition((items) => {
      const position = i <= 7 ? i - 1 : i - 4;

      const newArray = items.map((posItem, posIndex) => {
        if (posItem.pos === position) {
          return { ...posItem, pos: position, active: !posItem.active };
        }
        return { ...posItem, pos: posIndex, active: false };
      });
      return newArray;
    });
  };

  return (
    <AsidePositionContext.Provider value={{ currentPosition, subPosition, handleNavLink, handleNavSubLink }}>
      {props.children}
    </AsidePositionContext.Provider>
  );
};

export default AsideLeftPositionContext;

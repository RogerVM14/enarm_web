import React from "react";
import ui from "../index.module.css";
import { Link } from "react-router-dom";

import GraphicResults from "../../Assets/Images/graphicResults.png";
import GraphicSmall from "../../Assets/Images/GraphicSmall.png";

const GraphicBodyContent = () => {
  return (
    <React.Fragment>
      <h5>Chagas</h5>
      <Link className={ui.blueLink}>🔥 Mini-Resumen: Chagas M-R</Link>
      <Link className={ui.blueLink} style={{ marginBottom: "24px" }}>
        🔥 Caso Clínico: Chagas C-C
      </Link>
      <div className={ui.imageContainer}>
        <img src={GraphicResults} alt="graphic" datatype="large" />
        <img src={GraphicSmall} alt="graphic" datatype="small" />
      </div>
    </React.Fragment>
  );
};

export default GraphicBodyContent;

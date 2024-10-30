import React from "react";
import { Link } from "react-router-dom";

const Item5 = () => {
  return (
    <div>
      <h2 className="regular-parraf-20">Precio Normal: $10,000.00</h2>
      <h2 className="regular-parraf-20">Inscríbete hoy y obtén un increíble descuento.</h2>
      <Link className="regular-parraf-20 blue" to="/registrate">Para inscribirte haz → CLIC AQUI ←</Link>
      <div style={{ marginBottom: "12px" }}>
        <img alt="enarm" src="https://plataformaenarm.com/wp-content/uploads/2021/10/PicsArt_09-13-12.03.02-1-768x768-1-300x300.jpg" />
      </div>
      <div>
        <img alt="enarm" src="https://plataformaenarm.com/wp-content/uploads/2021/10/PicsArt_09-13-12.03.02-1-768x768-1-300x300.jpg" />
      </div>

    </div>
  )
}

export default Item5;
import React from "react"
import { Link } from "react-router-dom";

const Item7 = () => {
  return (
    <React.Fragment>
      <h3 className="regular-16">Puedes inscribirte con: <Link className="regular-23 bold link-blue" to="/registrate">Para inscribirte haz → CLIC AQUI ←</Link></h3>
      <ul className="ml-16">
        <li><p className="regular-parraf">Crédito: <span className="sky-blue">Todas las tarjetas Visa y MasterCard.</span></p></li>
        <li><p className="regular-parraf">Débito: <span className="sky-blue">Todas las tarjetas Banamex, BBVA Bancomer, Santander, HSBC, Banorte e IXE (solo tarjetas de débito de cuentas bancarias en México).</span></p></li>
        <li><p className="regular-parraf">Efectivo: <span className="sky-blue">Cualquier tienda OXXO o SEVEN ELEVEN.</span></p></li>
        <li><p className="regular-parraf">Depósito y Transferencia: <span className="sky-blue">Desde los bancos; Banamex, BBVA Bancomer y Santander.</span></p></li>
      </ul>
      <p className="regular-parraf">El pago se acredita según la siguiente tabla dependiendo de tu forma de pago.</p>
    </React.Fragment>
  )
}

export default Item7;
import React from "react";
import { Link } from "react-router-dom";
import closeButton from "./closeButton.png";
import "./index.css";

const PopUp = ({ open, closeModal }) => {

  return open ? (
    <div className="modal">
      <span className="close-background" onClick={() => { closeModal() }}></span>
      <div className="modal-container">
        <Link to="#" onClick={() => { closeModal() }}>
          <img className="close-button" src={closeButton} alt="close"></img>
        </Link>
        <h1 className="title">Adquiere tu curso hoy mismo y obtén una beca del 40%.</h1>
        <h2 className="subtitle">Ingresa a tu curso de plataforma ENARM y comienza hoy a preparte para aprobar el ENARM a la primera.</h2>
        <ul className="ls-none">
          <li className="list-ip">
            <i className="material-icons-outlined green">done</i>
            <p className="text-list">Hemos ayudado a más de 20 mil médicos a ser especialistas.</p>
          </li>
          <li className="list-ip">
            <i className="material-icons-outlined green">done</i>
            <p className="text-list">Diseñado por más de 20 Residentes Jóvenes con experiencia en el ENARM.</p>
          </li>
          <li className="list-ip">
            <i className="material-icons-outlined green">done</i>
            <p className="text-list">Con más de 7 años de experiencia educando jóvenes, para aprobar el ENARM.</p>
          </li>
          <li className="list-ip">
            <i className="material-icons-outlined green">done</i>
            <p className="text-list">Basados 100% en las GPC Mexicanas.</p>
          </li>
          <li className="list-ip">
            <i className="material-icons-outlined green">done</i>
            <p className="text-list">Porcentaje de aceptación de más del 80%.</p>
          </li>
          <li className="list-ip">
            <i className="material-icons-outlined green">done</i>
            <p className="text-list">Simulador-PRO idéntico al del ENARM.</p>
          </li>
          <li className="list-ip">
            <i className="material-icons-outlined green">done</i>
            <p className="text-list">Ingreso a comunidad exclusiva de Residentes.</p>
          </li>
        </ul>
        <button className="rounded-blue">Quiero mi descuento</button>
      </div>
    </div>
  ) : null
}

export default PopUp;
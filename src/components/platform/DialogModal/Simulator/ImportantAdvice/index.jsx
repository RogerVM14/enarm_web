import React from "react"
import ui from "../index.module.css";

const ImportantAdvice = ({
  open = false,
  handleRunSimulation = () => { },
  closeImportantModal = () => { }
}) => {

  return open === false ? null : (
    <div className={ui.dialogModal}>
      <div className={ui.modalContainer}>
        <div className={ui.closeButtonModal}>
          <button type="button" onClick={() => { closeImportantModal(); }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_2656_57461)">
                <path d="M11.9997 10.586L16.9497 5.63599L18.3637 7.04999L13.4137 12L18.3637 16.95L16.9497 18.364L11.9997 13.414L7.04974 18.364L5.63574 16.95L10.5857 12L5.63574 7.04999L7.04974 5.63599L11.9997 10.586Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_2656_57461">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className={ui.containerHead}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <g clipPath="url(#clip0_2863_1971)">
              <path d="M7 0.875C3.61758 0.875 0.875 3.61758 0.875 7C0.875 10.3824 3.61758 13.125 7 13.125C10.3824 13.125 13.125 10.3824 13.125 7C13.125 3.61758 10.3824 0.875 7 0.875ZM6.5625 4.04688C6.5625 3.98672 6.61172 3.9375 6.67188 3.9375H7.32812C7.38828 3.9375 7.4375 3.98672 7.4375 4.04688V7.76562C7.4375 7.82578 7.38828 7.875 7.32812 7.875H6.67188C6.61172 7.875 6.5625 7.82578 6.5625 7.76562V4.04688ZM7 10.0625C6.82827 10.059 6.66476 9.98831 6.54455 9.86562C6.42434 9.74294 6.35701 9.57801 6.35701 9.40625C6.35701 9.23449 6.42434 9.06956 6.54455 8.94688C6.66476 8.82419 6.82827 8.75351 7 8.75C7.17173 8.75351 7.33524 8.82419 7.45545 8.94688C7.57566 9.06956 7.64299 9.23449 7.64299 9.40625C7.64299 9.57801 7.57566 9.74294 7.45545 9.86562C7.33524 9.98831 7.17173 10.059 7 10.0625Z" fill="#FAAD14" />
            </g>
            <defs>
              <clipPath id="clip0_2863_1971">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h5>Importante</h5>
        </div>
        <div className={ui.containerBody}>
          <ul className={ui.adviceList}>
            <li>Asegura una conexión a internet estable.</li>
            <li>Espacio libre de interrupciones por al menos <strong>10 horas</strong> (5 horas del simulador y 5 horas de revisión).</li>
            <li>Utiliza una computadora de escritorio o portátil.</li>
            <li>El dispositivo móvil no es ideal para llevar a cabo el simulador.</li>
          </ul>
        </div>
        <div className={ui.containerFooter}>
          <div className={ui.footerButtons}>
            <button
              type="button"
              className={ui.buttonCancel}
              onClick={() => { closeImportantModal() }}
            >
              <span>No, volver</span>
            </button>
            <button
              className={ui.linkButtonBlue}
              onClick={() => { handleRunSimulation(); }}
            >
              <span>Si, quiero comenzar el simulador</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ImportantAdvice;
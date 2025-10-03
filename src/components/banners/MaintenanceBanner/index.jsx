import React from "react";
import ui from "./index.module.css";
import { BANNER_CONFIG } from "../../../constants/bannerConfig";

const MaintenanceBanner = () => {
  // Si el banner está deshabilitado en la configuración, no renderizar nada
  if (!BANNER_CONFIG.MAINTENANCE_BANNER_ENABLED) {
    return null;
  }
  // Obtener la fecha de mañana
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formattedDate = tomorrow.toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className={ui.maintenanceBanner}>
      <div className={ui.bannerContent}>
        <div className={ui.iconContainer}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={ui.icon}
          >
            <path 
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" 
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={ui.textContent}>
          <h3 className={ui.title}>Aviso de Mantenimiento</h3>
          <p className={ui.message}>
            Con el fin de mejorar nuestro servicio y entregar el mejor contenido, 
            nuestra plataforma entrará en mantenimiento el día <strong>{formattedDate}</strong> 
            a partir de las 8:00 PM por actualización de nuevo contenido que tenemos para ti.
          </p>
          <p className={ui.apology}>
            Esperamos que esta actualización no cause inconvenientes en tu experiencia de estudio. 
            Trabajamos constantemente para brindarte la mejor calidad educativa y contenido actualizado 
            que te ayude a alcanzar tus objetivos académicos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceBanner;

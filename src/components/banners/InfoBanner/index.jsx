import React, { useState } from "react";
import { BANNER_CONFIG } from "../../../constants/bannerConfig";

const InfoBanner = () => {
  const [isVisible, setIsVisible] = useState(BANNER_CONFIG.INFO_BANNER_ENABLED);

  // Si el banner está deshabilitado en la configuración, no renderizar nada
  if (!BANNER_CONFIG.INFO_BANNER_ENABLED || !isVisible) {
    return null;
  }

  const handleClose = () => {
    if (BANNER_CONFIG.BANNER_DISMISSIBLE) {
      setIsVisible(false);
    }
  };

  const getBannerStyles = () => {
    const baseStyles = "fixed start-0 z-50 flex justify-between w-full p-4 border-t border-gray-200";
    const positionStyles = BANNER_CONFIG.BANNER_POSITION === "top" ? "top-0" : "bottom-0";
    const typeStyles = {
      info: "bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-600",
      warning: "bg-yellow-50 dark:bg-yellow-900 border-yellow-200 dark:border-yellow-600",
      success: "bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-600",
      error: "bg-red-50 dark:bg-red-900 border-red-200 dark:border-red-600"
    };
    
    return `${baseStyles} ${positionStyles} ${typeStyles[BANNER_CONFIG.BANNER_TYPE] || typeStyles.info}`;
  };

  const getIconStyles = () => {
    const typeStyles = {
      info: "bg-blue-200 dark:bg-blue-600 text-blue-500 dark:text-blue-400",
      warning: "bg-yellow-200 dark:bg-yellow-600 text-yellow-500 dark:text-yellow-400",
      success: "bg-green-200 dark:bg-green-600 text-green-500 dark:text-green-400",
      error: "bg-red-200 dark:bg-red-600 text-red-500 dark:text-red-400"
    };
    
    return `inline-flex p-1 me-3 rounded-full w-6 h-6 items-center justify-center ${typeStyles[BANNER_CONFIG.BANNER_TYPE] || typeStyles.info}`;
  };

  return (
    <div
      id="info-banner"
      tabIndex="-1"
      className={getBannerStyles()}
    >
      <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          <span className={getIconStyles()}>
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M18.435 7.546A2.32 2.32 0 0 1 17.7 5.77a3.354 3.354 0 0 0-3.47-3.47 2.322 2.322 0 0 1-1.776-.736 3.357 3.357 0 0 0-4.907 0 2.281 2.281 0 0 1-1.776.736 3.414 3.414 0 0 0-2.489.981 3.372 3.372 0 0 0-.982 2.49 2.319 2.319 0 0 1-.736 1.775 3.36 3.36 0 0 0 0 4.908A2.317 2.317 0 0 1 2.3 14.23a3.356 3.356 0 0 0 3.47 3.47 2.318 2.318 0 0 1 1.777.737 3.36 3.36 0 0 0 4.907 0 2.36 2.36 0 0 1 1.776-.737 3.356 3.356 0 0 0 3.469-3.47 2.319 2.319 0 0 1 .736-1.775 3.359 3.359 0 0 0 0-4.908ZM8.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 9.063a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.207-6.856-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Info</span>
          </span>
          <span>
            {BANNER_CONFIG.BANNER_MESSAGE}
          </span>
        </p>
      </div>
      {BANNER_CONFIG.BANNER_DISMISSIBLE && (
        <div className="flex items-center">
          <button
            onClick={handleClose}
            type="button"
            className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close banner</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default InfoBanner;
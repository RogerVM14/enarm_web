import React from "react";

const ConfirmDialogModal = ({
  isOpen,
  onAccept,
  onCancel,
  title = "¿Estás seguro?",
  description = "¿Realmente deseas continuar?",
  acceptText = "Sí, continuar",
  cancelText = "No, cancelar",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center overflow-y-auto">
      <div className="absolute inset-0 bg-gray-200 bg-opacity-80"></div>

      <div className="relative p-4 w-full max-w-sm sm:max-w-md max-h-full z-60">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onCancel}
          >
            <svg
              className="w-4 h-4"
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
            <span className="sr-only">Cerrar modal</span>
          </button>

          <div className="p-4 sm:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-cyan-600 w-10 h-10 sm:w-12 sm:h-12 dark:text-cyan-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-4 text-base sm:text-lg font-medium text-gray-500 dark:text-gray-400">
              {title}
            </h3>
            <p className="mb-4 text-sm sm:text-base text-gray-500 dark:text-gray-400">
              {description}
            </p>
            <div className="flex justify-center gap-2">
              <button
                onClick={onAccept}
                type="button"
                className="w-full sm:w-auto text-white bg-cyan-700 hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2 sm:px-5 sm:py-2.5 text-center"
              >
                {acceptText}
              </button>
              <button
                onClick={onCancel}
                type="button"
                className="w-full sm:w-auto py-2 px-4 sm:py-2.5 sm:px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                {cancelText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialogModal;

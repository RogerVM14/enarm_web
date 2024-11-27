import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdfjs/pdf.worker.min.js`;

const Viewer = ({ isOpen, onClose, fileUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1); // Reinicia a la primera página
    adjustScale();
  };

  const adjustScale = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      const calculatedScale = Math.min(
        containerWidth / 800,
        containerHeight / 1000
      );
      setScale(calculatedScale > 1 ? 1 : calculatedScale);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[2000]">
      <div
        ref={containerRef}
        className="relative bg-white w-full h-full max-w-[100%] max-h-[100%] overflow-auto rounded-lg shadow-lg"
      >
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Cerrar"
        >
          ✕
        </button>

        {/* Contenedor del PDF */}
        <div className="relative">
          <Document
            file={fileUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) =>
              setError("No se pudo cargar el archivo PDF.")
            }
            className="pdf-document flex justify-center items-center"
            loading={
              <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-90 z-50 mt-56">
                <div className="loader border-t-4 border-blue-500 rounded-full w-10 h-10 animate-spin mb-4"></div>
                <p className="text-gray-600 font-medium text-sm ml-5">
                  Cargando el documento, espera por favor.
                </p>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              className="pdf-page mx-auto shadow-md border rounded-md"
              renderMode="canvas"
            />
          </Document>
        </div>

        {/* Controles de navegación */}
        {numPages && (
          <div className="flex flex-col items-center w-full p-4 bg-gray-100 border-t fixed bottom-0 left-0">
            <div className="flex justify-between items-center w-full">
              <button
                onClick={() => setScale((prev) => Math.max(prev - 0.2, 0.5))}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Zoom -
              </button>
              <button
                onClick={() => setScale((prev) => Math.min(prev + 0.2, 2))}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Zoom +
              </button>
              <button
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber((prev) => prev - 1)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Anterior
              </button>
              <p className="text-gray-600 text-sm">
                Página <span className="font-medium">{pageNumber}</span> de{" "}
                <span className="font-medium">{numPages}</span>
              </p>
              <button
                disabled={pageNumber >= numPages}
                onClick={() => setPageNumber((prev) => prev + 1)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente
              </button>
            </div>

            {/* Disclaimer */}
            <p className="mt-2 text-gray-500 text-xs text-center">
              Presiona <span className="font-semibold">ESC</span> para cerrar.
            </p>
          </div>
        )}

        {/* Mensaje de error */}
        {error && (
          <div className="absolute inset-0 flex justify-center items-center bg-white">
            <p className="text-red-600 font-medium text-lg">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

Viewer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fileUrl: PropTypes.string.isRequired,
};

export default Viewer;

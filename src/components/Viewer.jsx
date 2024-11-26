import React, { useState } from "react";
import PropTypes from "prop-types";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Viewer = ({ isOpen, onClose, fileUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); 

  // Validar si el archivo es un PDF o una imagen
  const isPDF = fileUrl?.toLowerCase().endsWith(".pdf");
  const isImage = fileUrl?.toLowerCase().match(/\.(png|jpe?g)$/);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  if (!isOpen || !fileUrl) return null; // Si no hay archivo o el modal no está abierto, no renderiza

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[2000]">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl h-[90%] overflow-hidden">
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
        >
          ✕
        </button>

        {/* Contenido del modal */}
        <div className="h-full flex flex-col">
          {isPDF && (
            <div className="flex-1 overflow-auto">
              <Document
                file={fileUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                className="pdf-document"
              >
                <Page
                  pageNumber={pageNumber}
                  className="pdf-page mx-auto shadow-md"
                  renderMode="canvas"
                />
              </Document>
            </div>
          )}

          {isImage && (
            <div className="h-full flex items-center justify-center">
              <img
                src={fileUrl}
                alt="visualizador"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}

          {/* Controles para PDF */}
          {isPDF && (
            <div className="flex justify-between items-center p-4 bg-gray-100 border-t">
              <button
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber((prev) => prev - 1)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Anterior
              </button>
              <p>
                Página {pageNumber} de {numPages}
              </p>
              <button
                disabled={pageNumber >= numPages}
                onClick={() => setPageNumber((prev) => prev + 1)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente
              </button>
            </div>
          )}

          {/* Mensaje para formatos no soportados */}
          {!isPDF && !isImage && (
            <div className="flex justify-center items-center h-full">
              <p className="text-red-500 text-lg">
                Formato no soportado o archivo inválido.
              </p>
            </div>
          )}
        </div>
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
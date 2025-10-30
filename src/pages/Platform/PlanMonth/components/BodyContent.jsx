import React, { useState } from "react";
import { Link } from "react-router-dom";

const BodyContent = ({ display }) => {
  const [showVideo, setShowVideo] = useState(false);

  if (display === false) return null;
  return (
    <div className="bg-white p-6">
      <ol className="list-decimal pl-6 poppins-regular-14 space-y-2">
        <li>
          Revisar la guía de estudio: {" "}
          <button
            type="button"
            onClick={() => setShowVideo(true)}
            className="underline text-[#05B2FA]"
          >
            ver video aquí
          </button>
        </li>
        <li>
          Realiza tu calendario de estudio a continuación el ejemplo: {" "}
          <Link
            to="https://enarm-assets.s3.us-east-1.amazonaws.com/docs/Ejemplo+calendario+estudio+.htm"
            target="_blank"
            className="poppins-regular-14 text-[#05B2FA] underline"
          >
            calendario de estudio
          </Link>
        </li>
        <li>
          Sigue en orden semana a semana tu plan de estudio
        </li>
        <li>
          Metodología de estudio
          <ul className="pl-6 mt-2 space-y-1">
            <li>a) Inicia leyendo el tema de nuestros resúmenes o bibliografia extra</li>
            <li>b) después deberás realizar tu gráfico a puño y letra (realiza un mapa mental, tarjeta o resumen)</li>
            <li>c) posteriormente revisarás las videoclases para complementar tus gráficos</li>
            <li>d) Al finalizar te pondrás a prueba con el simulador</li>
            <li>e) Repasa tus gráficos a las 24h, 7 días, 1 mes, 6 meses, 1 mes antes del ENARM</li>
          </ul>
        </li>
        <li>
          Nuestros Resúmenes contienen las respuestas que encontrarás como correctas en tu ENARM, no hagas caso a ningún otra bibliografìa mas.
        </li>
        <li>
          De cada 10 médicos que se preparan con nuestro curso 8 consiguen su plaza, deberás tener disciplina y constancia para pertenecer a ese grupo selecto.
        </li>
      </ol>

      {showVideo && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowVideo(false)}></div>
          <div className="relative w-full max-w-4xl mx-4">
            <button
              type="button"
              aria-label="Cerrar"
              onClick={() => setShowVideo(false)}
              className="absolute -top-3 -right-3 bg-white text-gray-700 rounded-full w-8 h-8 shadow flex items-center justify-center hover:bg-gray-100"
            >
              ×
            </button>
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <video
                controls
                src="https://player.vimeo.com/progressive_redirect/playback/1132234127/rendition/1080p/file.mp4?loc=external&log_user=0&signature=4424f70db34ec376c4b966bff1ad20117e0cc2ca60155f6fba852611e242a24e"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default BodyContent;

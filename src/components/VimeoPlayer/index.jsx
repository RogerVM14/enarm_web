import React from "react";

// Función para extraer el ID del video de la URL de Vimeo
const extractVimeoId = (url) => {
  const regex = /vimeo\.com\/(\d+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const VimeoPlayer = ({ videoUrl, title }) => {
  const videoId = extractVimeoId("https://vimeo.com/318834075");

  if (!videoId) {
    return <div>Error: No se pudo obtener el ID del video de la URL.</div>;
  }

  const paddingStyle = {
    paddingTop: "56.25%", // Relación de aspecto 16:9 fija para todos los videos
    position: "relative",
  };

  return (
    <div style={paddingStyle}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        title={title}
      ></iframe>
    </div>
  );
};

export default VimeoPlayer;

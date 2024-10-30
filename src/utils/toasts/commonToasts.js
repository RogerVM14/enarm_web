import { toast } from "react-hot-toast";

// Helper para mostrar los diferentes tipos de notificación
const showToast = {
  success: (message) => {
    toast.success(message, {
      style: {
        background: "#4CAF50",
        color: "#fff",
        fontFamily: "PoppinsRegular",
      },
    });
  },
  error: (message) => {
    toast.error(message, {
      style: {
        background: "#FF6347",
        color: "#fff",
        fontFamily: "PoppinsRegular",
      },
    });
  },
  warning: (message) => {
    toast(message, {
      style: {
        background: "#FFA500",
        color: "#fff",
        fontFamily: "PoppinsRegular",
      },
    });
  },
  forbidden: (message) => {
    toast(message, {
      style: {
        background: "#8B0000",
        color: "#fff",
        fontFamily: "PoppinsRegular",
      },
    });
  },
  info: (message) => {
    toast(message, {
      style: {
        background: "#1E90FF",
        color: "#fff",
        fontFamily: "PoppinsRegular",
      },
    });
  },
};

export default showToast;

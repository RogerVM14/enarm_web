import toast from "react-hot-toast";

export const errorToast = (errorMessage) => {
  toast.error(errorMessage, {
    style: {
      fontFamily: "MontserratMedium",
      fontSize:"23px",
      height: "55px",

    },
    duration: 7000,
  });
};

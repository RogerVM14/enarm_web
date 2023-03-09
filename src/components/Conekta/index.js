import React, { useEffect } from "react";
// import React, { useCallback, useEffect } from "react";
// import { createClientConekta } from "../../apis/conekta/conektaApi";
const { REACT_APP_CONEKTA_API_KEY } = process.env;

const Conekta = (props) => {
  const { isReady, checkoutId, handleSuccess } = props;

  // const createOrderAndClientConekta =   useCallback(
  //     () => {
  //       createClientConekta()
  //     },
  //     [],
  //   )

  useEffect(() => {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.innerHTML = window.ConektaCheckoutComponents.Integration({
      targetIFrame: "#conektaIframeContainer",
      checkoutRequestId: "8373ceef-1442-4366-994b-c675c63f79df",
      publicKey: REACT_APP_CONEKTA_API_KEY,
      options: {
        options: {
            theme: 'dark'
       },
        styles: {
          logo: {
            size: "large", // small | medium | large
            typeImage: "url", // url | base64
            source:
              "https://assets-enarm-general.s3.amazonaws.com/logos/logoEnarm.png",
          },
        },
      },
      styles: {},
      onFinalizePayment: function (e) {
        console.log(e);
        console.log(e.charge.status);
        let estadoPag = e.charge.status;
        let orderConekta = e.id;
        if (estadoPag === "paid") {
          console.log("Pagado");
          console.log(orderConekta);
        } else {
          console.log("En espera de pago");
        }
      },
    });

    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return <div id="conektaIframeContainer" style={{ height: "1350px" }}></div>;
};

export default Conekta;

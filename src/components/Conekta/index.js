import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  createClientConekta,
  createOrderConekta,
} from "../../apis/conekta/conektaApi";
import { ROUTES } from "../../constants/routes";
import { selectUserInformation } from "../../store/reducers/user/UserInformationSlice";
const { REACT_APP_CONEKTA_API_KEY, REACT_APP_APP_HOST } = process.env;

const Conekta = (props) => {
  const [checkoutId, setCheckoutId] = useState("");
  const [orderId, setOrderId] = useState("");
  const [isReadyToRenderIFrame, setisReadyToRenderIFrame] = useState(false);
  console.log(orderId);
  const userInformation = useSelector(selectUserInformation);

  const handleCreateOrderAndClientConekta = useCallback(() => {
    const { userName, email, phone } = userInformation;
    createClientConekta(userName, email, phone).then(({ data }) => {
      createOrderConekta(data, phone, userName, email).then(({ data }) => {
        const { idCheckout, idOrder } = data;
        setCheckoutId(idCheckout);
        setOrderId(idOrder);
        setisReadyToRenderIFrame(true);
      });
    });
  }, [userInformation]);

  useEffect(() => {
    handleCreateOrderAndClientConekta();
  }, [handleCreateOrderAndClientConekta]);

  useEffect(() => {
    if (isReadyToRenderIFrame) {
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.innerHTML = `
    window.ConektaCheckoutComponents.Integration({
        targetIFrame: "#conektaIframeContainer",
        checkoutRequestId: "${checkoutId}",
        publicKey: "${REACT_APP_CONEKTA_API_KEY}",
        options: {
          styles: {
            logo: {
              size: "large", // small | medium | large
              typeImage: "url", // url | base64
              source:
                "https://assets-enarm-general.s3.amazonaws.com/logos/logoEnarm.png",
            },
          },
        },
        onFinalizePayment: function (e) {
          console.log(e.charge.status)
          var estadoPag = e.charge.status;
          if (estadoPag === "paid") {
            console.log("Pagado");
            localStorage.setItem("accessToken","ASDADASDASDASDAS")
            setTimeout(() => {
              window.location.replace('${REACT_APP_APP_HOST}${ROUTES.CHECKOUT_SUCCESS}');
            }, 3000);
          } else {
            console.log("En espera de pago");
          }
        },
    })
    `;

      document.body.appendChild(s);
      return () => {
        document.body.removeChild(s);
      };
    }
  }, [checkoutId, isReadyToRenderIFrame]);

  return <div id="conektaIframeContainer" style={{ height: "1350px" }}></div>;
};

export default Conekta;

import React, { useContext, useState } from "react";
import "../css/checkout/CheckoutPage.css";
import { useNavigate } from "react-router-dom";
import PaymentOptionsContainer from "../components/checkout/PaymentOptionsContainer";
import PaymentDetailsContainer from "../components/checkout/PaymentDetailsContainer";
import WidthContext from "../contexts/WidthContext";
// import { useSelector } from "react-redux";
// import { selectUserInformation } from "../store/reducers/user/UserInformationSlice";
// import { CreateNewUser, loginUser } from "../apis/auth/authApi";
// import moment from "moment";
// import { getExpirationDate } from "../utils/DateFormats";
// import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../constants/Messages";
// import { setCookie } from "../utils/auth/cookieSession";
// import { errorToast } from "../utils/toasts/commonToasts";
import Conekta from "../components/Conekta";
// import { ROUTES } from "../constants/routes";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [stepDetails, setStepDetails] = useState(false);
  const [loading] = useState(false);
  // const [cardTokenId, setCardTokenId] = useState("");
  // const { nameUser, email, phoneNumber, password } = useSelector(
  //   selectUserInformation
  // );

  const size = useContext(WidthContext);
  const isMobile = () => {
    if (["xs", "sm", "md"].includes(size)) return true;
    if (["lg", "xl", "xxl"].includes(size)) return false;
  };

  // const [paymentCheckoutiInfo, setPaymentCheckoutInfo] = useState({
  //   cardNumber: "",
  //   cvv: "",
  //   expiredDate: "",
  //   cardOwnerName: "",
  // });

  // const toastError = (errorMessage) => {
  //   return toast.error(errorMessage, {
  //     style: {
  //       fontFamily: "PoppinsMedium",
  //       height: "55px",
  //     },
  //     duration: 7000,
  //   });
  // };

  // const successCallback = (res) => {
  //   setLoading(true);
  //   const payload = {
  //     name: nameUser,
  //     phone: phoneNumber,
  //     email: email,
  //     token_id: res.id,
  //   };
  //   const order = createOrder(payload);
  //   //4242424242424242
  //   order
  //     .then((res) => {
  //       if (res?.data?.message === "Pago realizado con éxito") {
  //         const userInformation = {
  //           name: nameUser,
  //           phone_number: phoneNumber,
  //           email: email,
  //           password: password,
  //           status: 1,
  //           created_date: moment(),
  //           subscription_start: moment(),
  //           subscription_end: getExpirationDate(),
  //           type_user_id: 1,
  //         };
  //         console.log(userInformation);
  //         CreateNewUser(userInformation)
  //           .then((res) => {
  //             if (
  //               res.data.message === SUCCESS_MESSAGES.USER_CREATED_SUCCESSFULLY
  //             ) {
  //               loginUser({ email, password }).then((res) => {
  //                 if (res.data.statusCode === 200) {
  //                   setCookie("accessToken", res?.data?.token);
  //                   navigate("/checkout_thankful");
  //                   setLoading(false);
  //                 }
  //               });
  //             }
  //           })
  //           .catch((err) => {
  //             setLoading(false);
  //             let errorMessageFromApi = err.response.data.message;
  //             errorToast(ERROR_MESSAGES[errorMessageFromApi]);
  //             console.log(err.response.data);
  //           });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("Error: ", err.response.data.message);
  //     });
  // };

  // const errorCallback = (err) => {
  //   errorToast("Tarjeta inválida, intente nuevamente")
  // };

  // const handleSubmitPaymentInformation = async () => {
  //   const { cardNumber, cvv, expiredDate, cardOwnerName } =
  //     paymentCheckoutiInfo;

  //   if (cardNumber === "" || cardNumber.length !== 16) {
  //     errorToast("Favor de introducir un numero de tarjeta valido.");
  //     return;
  //   }

  //   if (cvv === "") {
  //     errorToast("Favor de introducir el CVV de su tarjeta.");
  //     return;
  //   }

  //   if (expiredDate === "") {
  //     errorToast("Favor de introducir la fecha de vencimiento de su tarjeta.");
  //     return;
  //   }

  //   if (cardOwnerName === "") {
  //     errorToast("Favor de introducir su nombre tal como viene en su tarjeta.");
  //     return;
  //   }

  //   if (cardNumber && cvv && expiredDate && cardOwnerName) {
  //     conektaHelper.tokenize(
  //       paymentCheckoutiInfo.cardNumber,
  //       paymentCheckoutiInfo.cardOwnerName,
  //       paymentCheckoutiInfo.expiredDate.substring(0, 2),
  //       paymentCheckoutiInfo.expiredDate.substring(
  //         3,
  //         paymentCheckoutiInfo.expiredDate.length
  //       ),
  //       paymentCheckoutiInfo.cvv,
  //       (res) => successCallback(res),
  //       (err) => errorCallback(err)
  //     );
  //   }
  // };

  // const handleSuccessPayment = (e) => {
  //   console.log(e);
  //   const paymentStatus = e.charge.status;
  //   if (paymentStatus === "paid") {
  //     navigate(ROUTES.CHECKOUT_SUCCESS)
  //   }
  // };
  return !isMobile() ? (
    <>
      <div className={`background-gradial ${size}`}></div>
      <div className={`checkout-container ${size}`}>
        <h1 className="bold-47">Información de Pago</h1>
        <div className="payment-container">
          <PaymentOptionsContainer
            size={size}
            isMobile={isMobile()}
          // paymentInfoSetState={setPaymentCheckoutInfo}
          />

          <Conekta />

          <PaymentDetailsContainer
            size={size}
            isMobile={isMobile()}
            // handleSubmitPayment={handleSubmitPaymentInformation}
            isLoading={loading}
          />
        </div>
        <button
          type="submit"
          className={`backpage-btn ${size}`}
          onClick={() => {
            navigate(-1);
          }}
        >
          <i className="material-icons">chevron_left</i>
          <span className="montse-18">Volver</span>
        </button>
      </div>
    </>
  ) : (
    <>
      <div className={`background-gradial ${size}`}></div>
      <div className={`checkout-container ${size}`}>
        {!stepDetails && (
          <h1 className={`bold-${isMobile() ? "44 text-center" : "47"}`}>
            Seleccione método de Pago
          </h1>
        )}
        <div className="payment-container">
          {!stepDetails ? (
            <PaymentOptionsContainer
              size={size}
              isMobile={isMobile()}
            // paymentInfoSetState={setPaymentCheckoutInfo}
            />
          ) : (
            <PaymentDetailsContainer
              size={size}
              isMobile={isMobile()}
            // handleSubmitPayment={handleSubmitPaymentInformation}
            />
          )}
        </div>
        {!stepDetails && (
          <button
            type="submit"
            className={`button-rounded-blue-48 ${size}`}
            onClick={() => {
              setStepDetails(true);
            }}
          >
            <span className="button-text">Continuar a Detalles de Compra</span>
          </button>
        )}
      </div>
    </>
  );
};

export default CheckoutPage;

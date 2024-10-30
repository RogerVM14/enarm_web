import { createSlice } from "@reduxjs/toolkit";

// Estado inicial para el slice
const initialState = {
  paymentMethod: "card",
  cardNumber: "",
  cvvCode: "",
  expirationDate: "",
  cardOwnerName: "",
};

export const CheckoutInformationSlice = createSlice({
  name: "checkoutInformation",
  initialState,
  reducers: {
    setPaymentMethod(state, { payload }) {
      state.paymentMethod = payload;
    },
    setCardNumber(state, { payload }) {
      state.cardNumber = payload;
    },
    setCvvCode(state, { payload }) {
      state.cvvCode = payload;
    },
    setExpirationDate(state, { payload }) {
      state.expirationDate = payload;
    },
    setCardOwnerName(state, { payload }) {
      state.cardOwnerName = payload;
    },
    resetCheckoutInformation: () => initialState,
  },
});

export const {
  setPaymentMethod,
  setCardNumber, 
  setCvvCode,
  setExpirationDate,
  setCardOwnerName,
  resetCheckoutInformation,
} = CheckoutInformationSlice.actions;

// Selector para obtener la información de la tarjeta
export const selectCardInformation = (state) => {
  return {
    cardNumber: state.checkout.cardNumber,
    cvv: state.checkout.cvvCode,
    expirationDate: state.checkout.expirationDate,
    cardOwnerName: state.checkout.cardOwnerName,
  };
};

// Selector para obtener el método de pago seleccionado
export const currentPaymenthMethodSelected = (state) =>
  state.checkout.paymentMethod;

export default CheckoutInformationSlice.reducer;

// Función para despachar acciones de actualización
// En el slice (checkoutInformationSlice.js)
export const updateCardInformation = (name, value) => {
    return (dispatch) => {
      switch (name) {
        case "cardNumber":
          dispatch(setCardNumber(value));
          break;
        case "cvv":
          dispatch(setCvvCode(value));
          break;
        case "expirationDate":
          dispatch(setExpirationDate(value));
          break;
        case "cardOwnerName":
          dispatch(setCardOwnerName(value));
          break;
        default:
          break;
      }
    };
  };
  
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  changingPass: false,
  step: 0,
  userId: "",
  email: "",
  authCode: "",
};

export const ForgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    setNextStepOnForgotPassword(state, { payload }) {
      state.step = payload;
    },
    setIsUserOnProcess(state, { payload }) {
      state.changingPass = payload;
    },
    setForgotPassEmail(state, { payload }) {
      state.email = payload;
    },
    setAuthCode(state, { payload }) {
      state.authCode = payload;
    },
    setUserIdForForgotPass(state, { payload }) {
      state.userId = payload;
    },
    resetForgotPasswordProcess: () => initialState,
  },
});

export const {
  setNextStepOnForgotPassword,
  setIsUserOnProcess,
  setUserIdForForgotPass,
  setForgotPassEmail,
  resetForgotPasswordProcess,
  setAuthCode,
} = ForgotPasswordSlice.actions;

export const selectCurrentForgotPasswordStep = (state) =>
  state.forgotPassword.step;
export const selectIsOnForgotPasswordProcess = (state) =>
  state.forgotPassword.changingPass;
export const selectUserIdForForgotPassword = (state) =>
  state.forgotPassword.userId;
export const selectEmailForRestablishPass = (state) =>
  state.forgotPassword.email;
export const selectCurrentAuthCode = (state) => state.forgotPassword.authCode;

export default ForgotPasswordSlice.reducer;

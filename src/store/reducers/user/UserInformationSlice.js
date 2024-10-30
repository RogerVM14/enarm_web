import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInformation: {
    auth_token: "",
    user_id: null,
    user_role_id: null,
    role_name: "",
    fullname: "",
    info_completed: false,
    subscription_start: "",
    subscription_end: "",
    expiration_date: null,
    is_verified: false,
    has_payments: false,
  },
  userRegisterInformation: {
    user_email: "",
    password: "",
    user_id: "",
  },
};

export const UserInformationSlice = createSlice({
  name: "userInformation",
  initialState,
  reducers: {
    setCheckoutUserInformation(state, { payload }) {
      state.userRegisterInformation = payload;
    },
    setUserInformation(state, { payload }) {
      state.userInformation = payload;
    },
    setUserFullname(state, { payload }) {
      state.userInformation.fullname = payload;
    },
    setInfoCompleted(state, { payload }) {
      state.userInformation.info_completed = payload;
    },
    setCheckoutUserId(state, { payload }) {
      state.userRegisterInformation.user_id = payload;
    },
    setCheckoutUserEmail(state, { payload }) {
      state.userRegisterInformation.user_email = payload;
    },

    resetUserInformation: () => initialState,
  },
});

export const {
  setUserInformation,
  setCheckoutUserInformation,
  resetUserInformation,
  setUserFullname,
  setInfoCompleted,
  setCheckoutUserId,
  setCheckoutUserEmail
} = UserInformationSlice.actions;

export const selectUserInformation = (state) => state.user.userInformation;
export const selectUserEmail = (state) => state.user.userInformation.email;
export const selectUserCheckoutInformation = (state) =>
  state.user.userRegisterInformation;
export const selectUserCheckoutEmail = (state) =>
  state.user.userRegisterInformation.user_email;
export const selectIsVerifiedUser = (state) =>
  state.user.userInformation.is_verified;
export const selectUserInfoComplete = (state) =>
  state.user.userInformation.info_completed;
export const selectFullUserName = (state) =>
  state.user.userInformation.fullname;

export default UserInformationSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInformation: {
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    email_verified: false,
    picture: "",
    create_at: "",
    isMemberActive: null,
  },
  userPaymentInformation: {
    phone: "",
    userName: "",
    email: "",
  },
};

export const UserInformationSlice = createSlice({
  name: "userInformation",
  initialState,
  reducers: {
    setUserInformation(state, { payload }) {
      state.userInformation = payload;
    },
    setUserPaymentInformation(state, { payload }) {
      state.userPaymentInformation = payload;
    },
    resetUserInformation: () => initialState,
  },
});

export const { setUserInformation, resetUserInformation } = UserInformationSlice.actions;

export const selectUserInformation = (state) => state.user.userInformation;
export const selectUserEmail = (state) => state.user.userInformation.email;

export default UserInformationSlice.reducer;

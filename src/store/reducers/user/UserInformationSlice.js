import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInformation: {
    fullname: "",
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
    setUserPaymentInformation(state, { payload}){
      state.userPaymentInformation = payload;
    }
  },
});

export const { setUserInformation } = UserInformationSlice.actions;

export const selectIsAuthorized = (state) => state.user.isAuthorized;

export default UserInformationSlice.reducer;

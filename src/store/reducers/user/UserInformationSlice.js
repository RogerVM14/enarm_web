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
  userRegisterInformation: {
    email: "",
    password: "",
  },
};

export const UserInformationSlice = createSlice({
  name: "userInformation",
  initialState,
  reducers: {
    setCheckoutUserInformation(state, { payload }) {
      state.userRegisterInformation = payload;
    },
    
    resetUserInformation: () => initialState,
  },
});

export const { setUserInformation, setCheckoutUserInformation } = UserInformationSlice.actions;

export const selectUserInformation = (state) => state.user.userInformation;
export const selectUserEmail = (state) => state.user.userInformation.email;
export const selectUserCheckoutInformation = (state) => state.user.userRegisterInformation;


export default UserInformationSlice.reducer;

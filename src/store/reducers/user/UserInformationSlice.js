import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    first: "",
    last: "",
    email: "",
    email_verified: false,
    picture: "",
    updated_at: "",
    isMemberActive: null,
  },
  userPayData: {
    phone: "",
    userName: "",
    email: "",
  },
};

export const UserInformationSlice = createSlice({
  name: "userInformation",
  initialState,
  reducers: {
    setUserPayData(state, { payload }) {
      state.userPayData = payload;
    },
  },
});

export const { setUserPayData } = UserInformationSlice.actions;

export const selectIsAuthorized = (state) => state.user.isAuthorized;

export default UserInformationSlice.reducer;

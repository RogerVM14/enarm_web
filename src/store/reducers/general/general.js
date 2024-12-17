import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoadingContent: false,
  isGuestUser: false,
};

export const general = createSlice({
  name: "general",
  initialState,
  reducers: {
    setIsLoadingContent(state, { payload }) {
      state.isLoadingContent = payload;
    },
    setIsGuestUser(state, { payload }) {
      state.isGuestUser = payload;
    },
  },
});

export const { setIsLoadingContent, setIsGuestUser } = general.actions;

export const SelectIsLoadingContent = (state) =>
  state.general.isLoadingContent || false;
export const selectIsGuestUser = (state) => state.general.isGuestUser || false;

export default general.reducer;

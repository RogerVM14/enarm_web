import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoadingContent: false,
};

export const general = createSlice({
  name: "general",
  initialState,
  reducers: {
    setIsLoadingContent(state, { payload }) {
      state.isLoadingContent = payload;
    },
  },
});

export const { setIsLoadingContent } = general.actions;

export const SelectIsLoadingContent = (state) =>
  state.general.isLoadingContent || false;

export default general.reducer;

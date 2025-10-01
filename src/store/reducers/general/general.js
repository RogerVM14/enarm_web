import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoadingContent: false,
  isGuestUser: false,
  simulatorQuestionQuantity: null,
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
    setSimulatorQuestionQuantity(state, { payload }) {
      state.simulatorQuestionQuantity = payload;
    },
  },
});

export const { setIsLoadingContent, setIsGuestUser, setSimulatorQuestionQuantity } = general.actions;

export const SelectIsLoadingContent = (state) =>
  state.general.isLoadingContent || false;
export const selectIsGuestUser = (state) => state.general.isGuestUser || false;
export const selectSimulatorQuestionQuantity = (state) =>
  state.general.simulatorQuestionQuantity || null;

export default general.reducer;

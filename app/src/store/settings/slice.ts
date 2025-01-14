import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { easeFns } from "mayonation";

type Settings = {
  duration: number;
  ease?: keyof typeof easeFns;
};

const initialState: Settings = {
  duration: 1000,
  ease: "easeInOut",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateSettings: (state, action: PayloadAction<Settings>) => {
      return { ...state, ...action.payload };
    },
  },
});

// Export actions
export const { updateSettings } = settingsSlice.actions;

// Selectors
export const selectSettings = (state: { settings: Settings }) => state.settings;
export const selectEaseFnsList = () =>
  Object.keys(easeFns) as (keyof typeof easeFns)[];

// Export reducer
export default settingsSlice.reducer;

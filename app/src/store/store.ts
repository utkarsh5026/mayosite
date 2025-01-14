import { configureStore } from "@reduxjs/toolkit";
import { animationSlice } from "./playground/slice";
import { settingsSlice } from "./settings/slice";

export const store = configureStore({
  reducer: {
    animation: animationSlice.reducer,
    settings: settingsSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

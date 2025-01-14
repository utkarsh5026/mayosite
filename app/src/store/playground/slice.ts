import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AnimationConfig } from "mayonation";

interface AnimationState {
  config: AnimationConfig;
  loading: boolean;
  error: string | null;
}

const initialState: AnimationState = {
  config: {},
  loading: false,
  error: null,
};

export const animationSlice = createSlice({
  name: "animation",
  initialState,
  reducers: {
    setAnimationConfig: (
      state,
      action: PayloadAction<{
        key: keyof AnimationConfig;
        value: AnimationConfig[keyof AnimationConfig] | undefined;
      }>
    ) => {
      const { key, value } = action.payload;
      if (value === undefined) {
        delete state.config[key];
      } else {
        state.config[key] = value as any;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setAnimationConfig, setLoading, setError } =
  animationSlice.actions;

export const selectAnimationConfig = (state: { animation: AnimationState }) =>
  state.animation.config;
export const selectAnimationLoading = (state: { animation: AnimationState }) =>
  state.animation.loading;
export const selectAnimationError = (state: { animation: AnimationState }) =>
  state.animation.error;

export default animationSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    mode: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
export const selectThemeMode = (state) => state.settings.mode;

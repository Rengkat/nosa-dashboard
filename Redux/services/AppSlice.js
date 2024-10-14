"use client";
import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "appSlice",
  initialState: {
    isSideBarOpen: false,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});
export default AppSlice.reducer;
export const { toggleSideBar } = AppSlice.actions;

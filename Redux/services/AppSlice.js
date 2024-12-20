"use client";
import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "appSlice",
  initialState: {
    isSideBarOpen: false,
    admin: null,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    getAdminDetail: (state, action) => {
      state.admin = action.payload;
    },
  },
});
export default AppSlice.reducer;
export const { toggleSideBar } = AppSlice.actions;

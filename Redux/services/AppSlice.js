"use client";
import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "appSlice",
  initialState: {
    isSideBarOpen: false,
    isLogin: Boolean(localStorage.getItem("admin")),
    admin: JSON.parse(localStorage.getItem("admin")) || null,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    addAdminDetail: (state, action) => {
      state.admin = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.isLogin = true;
    },
  },
});
export default AppSlice.reducer;
export const { toggleSideBar, addAdminDetail } = AppSlice.actions;

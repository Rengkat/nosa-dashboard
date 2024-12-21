"use client";
import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarOpen: false,
    isLogin: typeof window !== "undefined" && Boolean(localStorage.getItem("admin")),
    admin: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("admin")) || null : null,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    addAdminDetail: (state, action) => {
      state.admin = action.payload;
      localStorage.setItem("admin", JSON.stringify(action.payload));
      state.isLogin = true;
    },
  },
});

export default AppSlice.reducer;
export const { toggleSideBar, addAdminDetail } = AppSlice.actions;

"use client";
import { createSlice } from "@reduxjs/toolkit";
import CryptoJS from "crypto-js";

const secretKey = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

const decryptData = (ciphertext) => {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.error("Decryption failed:", error);
    return null;
  }
};

// Fetch admin data securely
const storedAdmin = typeof window !== "undefined" ? localStorage.getItem("admin") : null;
const admin = storedAdmin ? decryptData(storedAdmin) : null;

const AppSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarOpen: false,
    isLogin: !!admin,
    admin: admin,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    addAdminDetail: (state, action) => {
      state.admin = action.payload;
      localStorage.setItem("admin", encryptData(action.payload)); // Store encrypted data
      state.isLogin = true;
    },
  },
});

export default AppSlice.reducer;
export const { toggleSideBar, addAdminDetail } = AppSlice.actions;

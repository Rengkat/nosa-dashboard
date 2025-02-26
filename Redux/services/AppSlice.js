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
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedData) {
      throw new Error("Invalid or corrupted data");
    }
    return JSON.parse(decryptedData);
  } catch (error) {
    console.error("Decryption failed:", error);
    localStorage.removeItem("admin");
    return null;
  }
};

const validateAdminData = (data) => {
  return data && typeof data === "object" && "id" in data && "email" in data; // Adjust based on your admin data structure
};

const storedAdmin = typeof window !== "undefined" ? localStorage.getItem("admin") : null;
const admin = storedAdmin ? decryptData(storedAdmin) : null;
const isValidAdmin = admin && validateAdminData(admin);

const AppSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarOpen: false,
    isLogin: !!isValidAdmin,
    admin: isValidAdmin ? admin : null,
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
    logoutAdmin: (state) => {
      state.admin = null;
      state.isLogin = false;
      localStorage.removeItem("admin");
    },
  },
});

export default AppSlice.reducer;
export const { toggleSideBar, addAdminDetail, logoutAdmin } = AppSlice.actions;

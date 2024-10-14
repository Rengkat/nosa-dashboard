import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "../Redux/services/AppSlice";
export const store = configureStore({
  reducer: {
    app: AppSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

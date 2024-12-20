import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "../Redux/services/AppSlice";
import { authApiSlice } from "./services/AuthSlice";
export const store = configureStore({
  reducer: {
    app: AppSlice,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApiSlice.middleware),
  devTools: true,
});

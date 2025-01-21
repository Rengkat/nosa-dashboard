import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "../Redux/services/AppSlice";
import { authApiSlice } from "./services/AuthSlice";
import { statsApiSlice } from "./services/StatsApiSlice";
import { usersApiSlice } from "./services/UsersApiSlice";
import { setApiSlice } from "./services/NosaSetApiSlice";
import { setEventsSlice } from "./services/SetEventsSliceApi";
import { setMediaSlice } from "./services/setMediaApiSlice";
export const store = configureStore({
  reducer: {
    app: AppSlice,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [statsApiSlice.reducerPath]: statsApiSlice.reducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
    [setApiSlice.reducerPath]: setApiSlice.reducer,
    [setEventsSlice.reducerPath]: setEventsSlice.reducer,
    [setMediaSlice.reducerPath]: setMediaSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApiSlice.middleware)
      .concat(statsApiSlice.middleware)
      .concat(usersApiSlice.middleware)
      .concat(setApiSlice.middleware)
      .concat(setEventsSlice.middleware)
      .concat(setMediaSlice.middleware),
  devTools: true,
});

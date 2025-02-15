import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "../Redux/services/AppSlice";
import { authApiSlice } from "./services/AuthSlice";
import { statsApiSlice } from "./services/StatsApiSlice";
import { usersApiSlice } from "./services/UsersApiSlice";
import { setApiSlice } from "./services/NosaSetApiSlice";
import { setEventsSlice } from "./services/SetEventsSliceApi";
import { setMediaSlice } from "./services/setMediaApiSlice";
import { setAdminApiSlice } from "./services/SetAminApiSlice";
import { blogApiSlice } from "./services/BlogsSliceApi";
export const store = configureStore({
  reducer: {
    app: AppSlice,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [statsApiSlice.reducerPath]: statsApiSlice.reducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
    [setApiSlice.reducerPath]: setApiSlice.reducer,
    [setEventsSlice.reducerPath]: setEventsSlice.reducer,
    [setMediaSlice.reducerPath]: setMediaSlice.reducer,
    [setAdminApiSlice.reducerPath]: setAdminApiSlice.reducer,
    [blogApiSlice.reducerPath]: blogApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApiSlice.middleware)
      .concat(statsApiSlice.middleware)
      .concat(usersApiSlice.middleware)
      .concat(setApiSlice.middleware)
      .concat(setEventsSlice.middleware)
      .concat(setAdminApiSlice.middleware)
      .concat(setMediaSlice.middleware)
      .concat(blogApiSlice.middleware),
  devTools: true,
});

import { configureStore } from "@reduxjs/toolkit";
import { projectsApi } from "./projectsApi";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    [projectsApi.reducerPath]: projectsApi.reducer,
    user: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Features/Auth/Auth";
import userReducer from "../Features/user/userSlice.js"

export const Store = configureStore({
  reducer: {
    Auth: authSlice,
    user: userReducer,
  },
});

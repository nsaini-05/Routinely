import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./src/features/authentication/authSlice";
import displayReducer from "./src/ui/displaySlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    displayControls: displayReducer,
  },
});

export default store;

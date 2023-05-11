import { configureStore } from "@reduxjs/toolkit";

import passwordReducer from "./slices/PasswordSlice";

const reducer = {
  password: passwordReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});

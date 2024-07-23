import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducer";

export const store = () => {
  return configureStore({
    reducer: reducers,
  });
};

export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];

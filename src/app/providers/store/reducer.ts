import { combineReducers } from "@reduxjs/toolkit";
import { companySlice } from "entities/company/model/slice";

export const reducers = combineReducers({
  company: companySlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;

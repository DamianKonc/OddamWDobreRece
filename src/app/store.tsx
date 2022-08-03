import { configureStore } from "@reduxjs/toolkit";
import datasReducer from "./datasSlicer";
import charityReducer from "./chariitySlicer";

export const store = configureStore({
  reducer: {
    datas: datasReducer,
    yourCharity: charityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

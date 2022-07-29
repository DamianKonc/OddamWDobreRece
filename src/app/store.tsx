import { configureStore } from "@reduxjs/toolkit";
import datasReducer from "./datasSlicer";

export const store = configureStore({
  reducer: {
    datas: datasReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

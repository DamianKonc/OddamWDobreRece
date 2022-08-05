import { configureStore } from "@reduxjs/toolkit";
import datasReducer from "./datasSlicer";
import charityReducer from "./chariitySlicer";
import activeReducer from "./activesSlicer";

export const store = configureStore({
  reducer: {
    datas: datasReducer,
    yourCharity: charityReducer,
    actives: activeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

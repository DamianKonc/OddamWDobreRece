import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaceConfig";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Data {
  name: string;
  mission: string;
  need: string;
  ID: number;
}

export interface DatasState {
  dataFromDB: Data[];
}

const initialState: DatasState = {
  dataFromDB: [],
};

if (initialState.dataFromDB.length === 0) {
  console.log("downloading");
}

export const datasSlicer = createSlice({
  name: "datas",
  initialState,
  reducers: {
    fetchData: (state, action: PayloadAction<Data[]>) => {
      state.dataFromDB = action.payload;
    },
  },
});

export const { fetchData } = datasSlicer.actions;

export default datasSlicer.reducer;

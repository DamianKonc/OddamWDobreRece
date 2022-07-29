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
  dataFromDB: [
    // {
    //   name: "Dbam o  Zdrowie",
    //   mission: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    //   need: "ubrania, meble, jedzenie, sprzęt AGD",sss
    //   ID: 2,
    // },
  ],
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
    // change: fund => dispatch => {
    //   //zapytanie o zmianę itemów z fundacji
    //   //then
    //   dispatch(fetchData())
    // } curring
  },
});

export const { fetchData } = datasSlicer.actions;

export default datasSlicer.reducer;

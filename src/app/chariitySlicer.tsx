import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";

interface YourCharity {
  yourCity: string;
  whoToHelp: string;
  stuff: string;
  howManyBags: number;
  localisation: string;
  street: string;
  zipCode: string;
  phoneNumber: string;
  pickingData: string;
  pickingHour: string;
  organizationName?: string;
  notesForTheCourier?: string;
}

const initialState: YourCharity = {
  yourCity: "Brwinów",
  whoToHelp: "",
  stuff: "xyz",
  howManyBags: 0,
  localisation: "",
  street: "",
  zipCode: "",
  phoneNumber: "",
  pickingData: "",
  pickingHour: "",
  organizationName: "",
  notesForTheCourier: "",
};

export const YourCharitySlicer = createSlice({
  name: "yourCharity",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<{ key: string; value: any }>) => {
      state[action.payload.key] = [action.payload.value];
      console.log("gowno");
    },
  },
});

export const { change } = YourCharitySlicer.actions;
export default YourCharitySlicer.reducer;

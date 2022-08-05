import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface YourCharity {
  yourCity: string;
  whoToHelp: string;
  stuff: string;
  howManyBags: number | string;
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
  yourCity: "",
  whoToHelp: "helping",
  stuff: "",
  howManyBags: "--- wybierz ---",
  localisation: "--- wybierz ---",
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
    },
  },
});

export const { change } = YourCharitySlicer.actions;
export default YourCharitySlicer.reducer;

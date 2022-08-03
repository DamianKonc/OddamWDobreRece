import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
  yourCity: "",
  whoToHelp: "",
  stuff: "",
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
    localisationHelpToNameOfOrganization: (
      state,
      action: PayloadAction<string>
    ) => {
      state.localisation = action.payload;
      state.organizationName = action.payload;
      state.whoToHelp = action.payload;
    },
    // addresAndDeadline: (state, action: PayloadAction<YourCharity>) => {
    //   state.street = "";
    //   state.yourCity = "";
    //   state.zipCode = "";
    //   state.phoneNumber = "";
    //   state.pickingData = "";
    //   state.notesForTheCourier = "";
    // },
    // change: (state, {key, value}: { payload: {key, value} }) => {
    //   state[key] = value
    // },
    stuffPicking: (state, action: PayloadAction<string>) => {
      state.stuff = action.payload;
    },
    bagsQuantity: (state, action: PayloadAction<number>) => {
      state.howManyBags = action.payload;
    },
    localisation: (state, action: PayloadAction<string>) => {
      state.localisation = action.payload;
    },
    organisationName: (state, action: PayloadAction<string>) => {
      state.organizationName = action.payload;
    },
    whotoHelp: (state, action: PayloadAction<string>) => {
      state.whoToHelp = action.payload;
    },

    setStreet: (state, action: PayloadAction<string>) => {
      state.street = action.payload;
    },
    setYourCity: (state, action: PayloadAction<string>) => {
      state.yourCity = action.payload;
    },
    setZipCode: (state, action: PayloadAction<string>) => {
      state.zipCode = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setPickingData: (state, action: PayloadAction<string>) => {
      state.pickingData = action.payload;
    },
    notesForTheCourier: (state, action: PayloadAction<string>) => {
      state.notesForTheCourier = action.payload;
    },
    setHour: (state, action: PayloadAction<string>) => {
      state.pickingHour = action.payload;
    },
  },
});

const city = (state) => state.yourCharity.yourCity;
const helpTo = (state) => state.yourCharity.whoToHelp;
const items = (state) => state.yourCharity.stuff;
const bagQuantity = (state) => state.yourCharity.howManyBags;
const helpLocalisation = (state) => state.yourCharity.localisation;
const yourStreet = (state) => state.yourCharity.street;
const yourZipcode = (state) => state.yourCharity.zipCode;
const yourPhoneNumber = (state) => state.yourCharity.phoneNumber;
const whenPicking = (state) => state.yourCharity.pickingData;
const whatOurToPick = (state) => state.yourCharity.pickingHour;
const whitchOrganization = (state) => state.yourCharity.organizationName;
const courierNotes = (state) => state.yourCharity.notesForTheCourier;

export const helpingDatas = {
  city,
  helpTo,
  items,
  bagQuantity,
  helpLocalisation,
  yourStreet,
  yourZipcode,
  yourPhoneNumber,
  whenPicking,
  whatOurToPick,
  whitchOrganization,
  courierNotes,
};

export const {
  stuffPicking,
  bagsQuantity,
  localisation,
  organisationName,
  whotoHelp,
  setStreet,
  setYourCity,
  setZipCode,
  setPhoneNumber,
  setPickingData,
  notesForTheCourier,
  setHour,
} = YourCharitySlicer.actions;
export default YourCharitySlicer.reducer;

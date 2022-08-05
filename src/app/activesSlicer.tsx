import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Actives {
  activeOrganization: string;
  activePaginationButton: number;
  activeGivingItems: string;
}

const initialState: Actives = {
  activeOrganization: "Fundacjom",
  activePaginationButton: 1,
  activeGivingItems: "",
};

export const ActivesSlicer = createSlice({
  name: "actives",
  initialState,
  reducers: {
    switchActive: (state, action: PayloadAction<{ key: any; value: any }>) => {
      state[action.payload.key] = [action.payload.value];
    },
  },
});

export const { switchActive } = ActivesSlicer.actions;
export default ActivesSlicer.reducer;

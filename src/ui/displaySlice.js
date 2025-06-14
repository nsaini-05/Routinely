import { createSlice } from "@reduxjs/toolkit";
import { months } from "../utils/date-utils";
const date = new Date();
const selectedMonth = months[date.getMonth()];

const initialState = {
  selectedMonth,
};

const displaySlice = createSlice({
  name: "displayControls",
  initialState,
  reducers: {
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
  },
});

export const { setSelectedMonth } = displaySlice.actions;
export default displaySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface RegisterState {
  filters: any;
}

const initialState = { filters: {} } as RegisterState;

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<number>) {
      state.filters = action.payload;
    },
  },
});

export const { setFilters } = registerSlice.actions;

export default registerSlice.reducer;

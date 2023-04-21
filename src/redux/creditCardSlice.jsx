import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const creditCardsSlice = createSlice({
  name: "creditCards",
  initialState,
  reducers: {
    addCreditCard: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCreditCard } = creditCardsSlice.actions;

export default creditCardsSlice.reducer;
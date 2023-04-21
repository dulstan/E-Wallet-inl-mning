import { configureStore } from "@reduxjs/toolkit";
import creditCardsReducer from "./creditCardSlice";

export const store = configureStore({
  reducer: {
    creditCards: creditCardsReducer,
  },
});
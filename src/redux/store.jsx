import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./Slices/gameSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

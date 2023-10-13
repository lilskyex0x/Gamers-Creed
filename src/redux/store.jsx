import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './Slices/gameSlice';

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export default store;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const API_URL = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15';

const initialState = {
  gameData: [],
};

export const fetchGamesAsync = createAsyncThunk(
  'games/fetchGames',
  async () => {
    const response = await axios.get(API_URL)
    console.log('response.data ', response.data)
    return response.data;
})

export const HomeSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = HomeSlice.actions

export default HomeSlice.reducer
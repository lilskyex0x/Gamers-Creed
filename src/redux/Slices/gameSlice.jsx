import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const API_URL = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15';

const initialState = {
  gameData: [],
  loading: false,
  error: '',
};

export const fetchGamesAsync = createAsyncThunk(
  'games/fetchGames',
  async () => {
    try {
      const response = await axios.get(API_URL);
      console.log('response.data ', response.data)
      return response.data;
    } catch (error) {
      return error.message;
    }
})

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGamesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGamesAsync.fulfilled, (state, action) => {
        state.gameData = action.payload.map((game) => ({
          id: game.gameID,
          name: game.title,
          rating: game.steamRatingPercent,
          textRating: game.steamRatingText,
          score: game.metacriticScore,
          normalPrice: game.normalPrice,
          salePrice: game.salePrice,
          thumb: game.thumb,
        }));
        state.loading = false;
      })
      .addCase(fetchGamesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
})

// export const { increment, decrement, incrementByAmount } = gameSlice.actions

export default gameSlice.reducer
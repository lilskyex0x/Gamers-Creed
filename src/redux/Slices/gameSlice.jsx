import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
  gameData: [],
  gameDetail: null,
  loading: false,
  error: '',
};

export const fetchGamesByTitle = createAsyncThunk(
  'games/fetchGamesByTitle',
  async (input) => {
    const apiUrl = 'https://www.cheapshark.com/api/1.0/games';
    const response = await axios.get(`${apiUrl}?title=${input}`);
    const transformedData = response.data.map((game) => ({
      id: game.gameID,
      name: game.external,
      salePrice: game.cheapest,
      thumb: game.thumb,
    }));

    return transformedData;
  },
);

export const fetchGameDetails = createAsyncThunk(
  'games/fetchGameDetails',
  async (gameId) => {
    const apiUrl = `https://www.cheapshark.com/api/1.0/games?id=${gameId}`;
    const response = await axios.get(apiUrl);
    return response.data;
  },
);

export const fetchGamesAsync = createAsyncThunk(
  'games/fetchGames',
  async (lowerPrice) => {
    const apiUrl = `https://www.cheapshark.com/api/1.0/deals?storeID=3&lowerPrice=${lowerPrice}`;
    const response = await axios.get(apiUrl);
    return response.data.map((game) => ({
      id: game.gameID,
      name: game.title,
      rating: game.steamRatingPercent,
      textRating: game.steamRatingText,
      score: game.metacriticScore,
      normalPrice: game.normalPrice,
      salePrice: game.salePrice,
      thumb: game.thumb,
    }));
  },
);

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGamesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGamesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.gameData = action.payload;
      })
      .addCase(fetchGamesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchGamesByTitle.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGamesByTitle.fulfilled, (state, action) => {
        state.loading = false;
        state.gameData = action.payload;
      })
      .addCase(fetchGamesByTitle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchGameDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGameDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.gameDetail = action.payload;
      })
      .addCase(fetchGameDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { filterGamesByTitle } = gameSlice.actions;
export default gameSlice.reducer;

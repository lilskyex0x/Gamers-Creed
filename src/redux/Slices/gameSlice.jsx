import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  gameData: [],
  gameDetail: null,
  loading: false,
  error: "",
};

export const fetchGamesByTitle = createAsyncThunk(
  "games/fetchGamesByTitle",
  async (input) => {
    const apiUrl = 'https://www.cheapshark.com/api/1.0/games';
    const response = await axios.get(`${apiUrl}?title=${input}`);
    console.log('response.data ', response.data);
    const transformedData = response.data.map((game) => ({
      id: game.gameID,
      name: game.external,
      salePrice: game.cheapest,
      thumb: game.thumb,
    }));

    return transformedData;
  }
);

export const fetchGameDetails = createAsyncThunk(
  "games/fetchGameDetails",
  async (gameId) => {
    const apiUrl = `https://www.cheapshark.com/api/1.0/games?id=${gameId}`;
    const response = await axios.get(apiUrl);
    return response.data;
  }
);


export const fetchGamesAsync = createAsyncThunk(
  "games/fetchGames",
  async (lowerPrice) => {
    const apiUrl = `https://www.cheapshark.com/api/1.0/deals?storeID=2&lowerPrice=${lowerPrice}`;
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
  }
);

const handleAsyncAction = (state, action) => {
  state.loading = action.meta.requestStatus === 'pending';
  if (action.meta.requestStatus === 'fulfilled') {
    state.gameData = action.payload;
  }
  state.error = action.meta.requestStatus === 'rejected' ? action.error.message : '';
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    filterGamesByTitle: (state, action) => {
      const { title } = action.payload;
      state.gameData = state.gameData.filter((game) => game.name.includes(title));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGamesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGamesAsync.fulfilled, handleAsyncAction)
      .addCase(fetchGamesAsync.rejected, handleAsyncAction)
      .addCase(fetchGamesByTitle.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGamesByTitle.fulfilled, handleAsyncAction)
      .addCase(fetchGamesByTitle.rejected, handleAsyncAction)
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

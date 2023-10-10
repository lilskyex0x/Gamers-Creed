import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  gameData: [],
  loading: false,
  error: "",
};

export const fetchGamesByTitle = createAsyncThunk(
  "games/fetchGamesByTitle",
  async (input) => {
    const apiUrl = 'https://www.cheapshark.com/api/1.0/games';
    const response = await axios.get(`${apiUrl}?title=${input}`);
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

export const fetchCombinedGames = createAsyncThunk(
  "games/fetchCombinedGames",
  async (_, { dispatch }) => {
    try {
      const gamesByTitle = await dispatch(fetchGamesByTitle('batman'));
      const gamesByPrice = await dispatch(fetchGamesAsync(15));

      const combinedGames = [...gamesByTitle, ...gamesByPrice];
      return combinedGames;
    } catch (error) {
      console.error("Error fetching games:", error);
      throw error;
    }
  }
);

const handleAsyncAction = (state, action) => {
  state.loading = action.meta.requestStatus === 'pending';
  state.gameData = action.payload || [];
  state.error = action.meta.requestStatus === 'rejected' ? action.error.message : '';
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
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
      .addCase(fetchCombinedGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCombinedGames.fulfilled, handleAsyncAction)
      .addCase(fetchCombinedGames.rejected, handleAsyncAction);
  },
});

// export const { increment, decrement, incrementByAmount } = gameSlice.actions

export default gameSlice.reducer;

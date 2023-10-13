import gameReducer, {
  fetchGameDetails,
  fetchGamesAsync,
  fetchGamesByTitle,
  initialState,
} from '../redux/Slices/gameSlice';

describe('test all reducer', () => {
  it('test initial state', () => {
    expect(gameReducer(initialState, {})).toEqual({
      gameData: [],
      gameDetail: null,
      loading: false,
      error: '',
    });
  });

  it('test fetchGamesAsync working properly', () => {
    const payload = [
      {
        id: 191458,
        name: 'SOULCALIBUR VI Deluxe Edition',
        rating: 0,
        textRating: null,
        score: 0,
        normalPrice: '89.99',
        salePrice: '11.48',
        thumb: 'https://gamersgatep.imgix.net/0/6/d/276387a0ccc7a64ca7cc0bb79cc88f58d9446d60.jpg?auto=&w=',
      },
    ];
    const state = gameReducer(initialState, fetchGamesAsync.fulfilled(payload));
    expect(state.loading).toBe(false);
    expect(state.gameData.length).toEqual(1);
    expect(state.error).toEqual('');
  });

  it('test fetchGameDetail working properly', () => {
    const payload = [
      {
        id: 191458,
        name: 'SOULCALIBUR VI Deluxe Edition',
        rating: 0,
        textRating: null,
        score: 0,
        normalPrice: '89.99',
        salePrice: '11.48',
        thumb: 'https://gamersgatep.imgix.net/0/6/d/276387a0ccc7a64ca7cc0bb79cc88f58d9446d60.jpg?auto=&w=',
      },
    ];
    const state = gameReducer(initialState, fetchGameDetails.fulfilled(payload));
    expect(state.loading).toBe(false);
    expect(state.gameDetail.length).toEqual(1);
    expect(state.error).toEqual('');
  });

  it('test fetchGamesByTitle working properly', () => {
    const payload = [
      {
        id: 191458,
        name: 'SOULCALIBUR VI Deluxe Edition',
        rating: 0,
        textRating: null,
        score: 0,
        normalPrice: '89.99',
        salePrice: '11.48',
        thumb: 'https://gamersgatep.imgix.net/0/6/d/276387a0ccc7a64ca7cc0bb79cc88f58d9446d60.jpg?auto=&w=',
      },
    ];
    const state = gameReducer(initialState, fetchGamesByTitle.fulfilled(payload));
    expect(state.loading).toBe(false);
    expect(state.gameData.length).toEqual(1);
    expect(state.error).toEqual('');
  });
});

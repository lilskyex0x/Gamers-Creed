import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import GameItems from '../components/gameItems/GameItems';

const mockStore = configureStore([]);

describe('GameItems Component', () => {
  it('renders game items properly', () => {
    const initialState = {
      game: {
        gameData: [
          {
            id: 1,
            name: 'Game 1',
            rating: 4.5,
            textRating: 'Excellent',
            normalPrice: 19.99,
            salePrice: 9.99,
            thumb: 'game1.jpg',
          },
          {
            id: 2,
            name: 'Game 2',
            rating: 3.8,
            textRating: 'Good',
            normalPrice: 29.99,
            salePrice: 19.99,
            thumb: 'game2.jpg',
          },
        ],
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <GameItems searchQuery="" />
        </BrowserRouter>
      </Provider>,
    );

    const gameItemElements = screen.getAllByRole('listitem');
    expect(gameItemElements.length).toBeGreaterThan(0);
  });
});

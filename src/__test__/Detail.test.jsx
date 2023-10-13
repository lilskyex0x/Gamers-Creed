import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Detail from '../pages/Detail';

const mockStore = configureStore([thunk]);

describe('Detail Component', () => {
  it('renders game details properly', () => {
    const initialState = {
      game: {
        gameDetail: {
          info: {

            title: 'Game Title',
            thumb: 'game.jpg',
          },
          cheapestPriceEver: {
            price: 9.99,
          },
          deals: [
            {
              id: 1,
              price: 8.99,
              retailPrice: 19.99,
              savings: 11.0,
            },
          ],
        },
        gameData: [
          {
            id: '1',
            rating: 4.5,
            textRating: 'Excellent',
            score: 85,
            normalPrice: 19.99,
            salePrice: 9.99,
          },
        ],
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Detail />
        </BrowserRouter>
      </Provider>,
    );

    const gameTitleElement = screen.getByText('Game Title');

    expect(document.body.contains(gameTitleElement)).toBe(true);
  });
});

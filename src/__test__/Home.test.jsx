import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

const mockStore = configureStore([thunk]);

describe('Home Component', () => {
  it('renders without errors', () => {
    const initialState = {
      game: {
        gameData: [],
        gameDetail: null,
        loading: false,
        error: '',
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
  });
});

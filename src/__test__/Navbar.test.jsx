import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/navBar/Navbar';

test('Navbar component snapshot', () => {
  const data = 'Sample Data';
  const year = 2023;

  const { asFragment } = render(
    <MemoryRouter>
      <Navbar data={data} year={year} />
    </MemoryRouter>,
  );

  expect(asFragment()).toMatchSnapshot();
});

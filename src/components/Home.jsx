import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGamesAsync } from '../redux/Slices/HomeSlice';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGamesAsync());
  }, [dispatch]);

  return (
    <div>
      <h1>Gamers' Creed</h1>
      <h2>testing</h2>
    </div>
  );
}

export default Home;

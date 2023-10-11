import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PriceInput from "../components/features/PriceInput";
import GameItems from "../components/gameItems/GameItems";
import Navbar from "../components/navbar/Navbar";
import { fetchGamesAsync } from "../redux/Slices/gameSlice";
import SearchGames from "../components/features/SearchGames";
import '../App.css';

function Home() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePriceInputChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const handlePriceFilter = () => {
    dispatch(fetchGamesAsync(priceFilter));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar data="Gamers' Creed" year={2023} />
      <header className="hero">
        <h1 className="hero__title">Gaming Is Not A Crime</h1>
        <SearchGames
          searchQuery={searchQuery}
          handleSearchInputChange={handleSearchInputChange}
          handleSearchSubmit={handleSearchSubmit}
        />
      </header>
      <div id="filterContainer">
        <PriceInput
          priceFilter={priceFilter}
          handlePriceInputChange={handlePriceInputChange}
          handlePriceFilter={handlePriceFilter}
        />
      </div>
      <div className="games__container">
        <GameItems searchQuery={searchQuery} />
      </div>
    </>
  );
}

export default Home;

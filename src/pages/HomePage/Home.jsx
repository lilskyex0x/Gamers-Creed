import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PriceInput from "../../components/PriceInput/PriceInput";
import GameItems from "../../components/GameItem/GameItem";
import Navbar from "../../components/NavBar/Navbar";
import { fetchGamesAsync, fetchGamesByTitle } from "../../redux/Slices/gameSlice";
import { BsSearch } from 'react-icons/bs';

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

  const handleSearch = () => {
    dispatch(fetchGamesByTitle(searchQuery));
  };

  const handlePriceFilter = () => {
    dispatch(fetchGamesAsync(priceFilter));
  };

  return (
    <>
      <Navbar year={2023} />
      <div id="filterContainer">
        <form id="form">
          <BsSearch />
          <input
            id="searchInput"
            type="search"
            placeholder="Search Games"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button onClick={handleSearch}>Search</button>
        </form>
        <PriceInput priceFilter={priceFilter} handlePriceInputChange={handlePriceInputChange} handlePriceFilter={handlePriceFilter} />
      </div>
      <div className="games__container">
        <GameItems />
      </div>
    </>
  );
}

export default Home;

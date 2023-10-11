import React from "react";
import { BsSearch } from "react-icons/bs";
import '../styles/SearchGames.css'

function SearchGames({
  searchQuery,
  handleSearchInputChange,
  handleSearchSubmit,
}) {
  return (
    <form id="form" onSubmit={handleSearchSubmit}>
      <input
        id="searchInput"
        type="search"
        placeholder="Search Games"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <BsSearch />
    </form>
  );
}

export default SearchGames;

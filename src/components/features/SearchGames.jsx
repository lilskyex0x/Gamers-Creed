import React from 'react';
import { BsSearch } from 'react-icons/bs';
import '../styles/SearchGames.css';
import PropTypes from 'prop-types';

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
        autoComplete="off"
      />
      <BsSearch />
    </form>
  );
}

SearchGames.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleSearchInputChange: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
};

export default SearchGames;

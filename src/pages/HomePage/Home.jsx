import React from "react";
import PriceInput from "../../components/PriceInput/PriceInput";
import GameItems from "../../components/GameItem/GameItem";
import Navbar from "../../components/NavBar/Navbar";
import { BsSearch } from 'react-icons/bs';

function Home() {

  return (
    <>
      <Navbar year={2023} />
      <div id="filterContainer">
        <form id="form">
          <BsSearch />
          <input id="searchInput" type="search" placeholder="Search Games" />
        </form>
        <PriceInput />
      </div>
      <div className="games__container">
        <GameItems />
      </div>
    </>
  );
}

export default Home;

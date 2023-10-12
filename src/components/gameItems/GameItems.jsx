import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGamesByTitle } from "../../redux/Slices/gameSlice";
import { BsArrowRightCircle } from "react-icons/bs";
import '../styles/GameItems.css';

function GameItems({ searchQuery }) {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.game.gameData);

  const games = searchQuery
    ? allGames.filter((game) =>
      game.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : allGames;

  useEffect(() => {
    if (searchQuery && searchQuery.trim() !== "") {
      dispatch(fetchGamesByTitle(searchQuery));
    }
  }, [dispatch, searchQuery]);

  return (
    <>
      {games.map((game) => (
        <li className="game__item" key={game.id}>
          <Link to={`/game/${game.id}`}>
            <div className="img__container">
              <img src={game.thumb} alt="" className="game__img" />
            </div>
            <div className="content__container">
              <h2 className="game__title">{game.name}</h2>
              <span className="line__through"><BsArrowRightCircle /></span>
              <div className="about__game">
                <p className="game__rating">{game.rating} <span>- Rating</span></p>
                <p className="game__textRating">{game.textRating}</p>
                <p className="game__Nprice">${game.normalPrice} - Normal Price</p>
                <p className="game__Sprice">${game.salePrice} - Sale Price</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
}

export default GameItems;

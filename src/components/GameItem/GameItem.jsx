import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGamesByTitle } from "../../redux/Slices/gameSlice";

function GameItems({ searchQuery }) {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.gameData);

  useEffect(() => {
    if (searchQuery && searchQuery.trim() !== "") {
      dispatch(fetchGamesByTitle(searchQuery)); // Use the searchQuery in the API request
    }
  }, [dispatch, searchQuery]);

  return (
    <div>
      {games.map((game) => (
        <li className="game__item" key={game.id}>
          <Link to={`/game/${game.id}`}>
            <div className="img__container">
              <img src={game.thumb} alt="" className="game__img" />
            </div>
            <div className="content__container">
              <h2 className="game__title">{game.name}</h2>
              <p className="game__rating">Rating {game.rating}</p>
              <p className="game__textRating">{game.textRating}</p>
              <p className="game__Nprice">Normal Price - {game.normalPrice}</p>
              <p className="game__Sprice">Sale Price - {game.salePrice}</p>
            </div>
          </Link>
        </li>
      ))}
    </div>
  );
}

export default GameItems;

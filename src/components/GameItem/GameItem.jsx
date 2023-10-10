import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCombinedGames } from "../../redux/Slices/gameSlice";

function GameItems() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.gameData);

  useEffect(()=>{
    fetchCombinedGames();
  }, [dispatch]);

  return (
    <div>
      {games.map((game) => (
        <li className="game__item" key={game.id}>
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
        </li>
      ))}
    </div>
  );
}

export default GameItems;

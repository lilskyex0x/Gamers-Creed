import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGamesAsync } from "../../redux/Slices/gameSlice";

function Home() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.gameData);
  useEffect(() => {
    dispatch(fetchGamesAsync());
  }, [dispatch]);

  return (
    <div className="games__container">
      {games.map((game) => (
        <li className="game__item" key={game.id}>
          <div className="img__container">
            <img src={game.thumb} alt="" className="game__img" />
          </div>
          <div className="content__container">
            <h2 className="game__title">{game.name}</h2>
            <p className="game__rating">Rating {game.rating}</p>
            <p className="game_textRating">{game.textRating}</p>
          </div>
        </li>
      ))}
    </div>
  );
}

export default Home;

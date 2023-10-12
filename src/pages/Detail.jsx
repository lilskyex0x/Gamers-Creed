import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGameDetails, fetchGamesAsync } from "../redux/Slices/gameSlice";
import Navbar from "../components/navBar/Navbar";
import '../App.css';

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const gameDetail = useSelector((state) => state.game.gameDetail);
  const gameData = useSelector((state) => state.game.gameData);

  useEffect(() => {
    dispatch(fetchGameDetails(id));
    dispatch(fetchGamesAsync(""));
  }, [dispatch, id]);

  return (
    <>
      <Navbar data="Game Details" />
      <main className="detail__container">
        {gameDetail ? (
          <div className="detail__contents">
            <h2>{gameDetail.info.title}</h2>
            <img src={gameDetail.info.thumb} alt="" />
            <p>
              Cheapest price right now: ${gameDetail.cheapestPriceEver.price}
            </p>
            {gameData ? (
              <div>
                {gameData.find((game) => game.id === id) ? (
                  gameData.map((game) => {
                    if (game.id === id) {
                      return (
                        <div key={game.id}>
                          <p>Rating: {game.rating}</p>
                          <p>Text Rating: {game.textRating}</p>
                          <p>Metacritic Score: {game.score}</p>
                          <p>Normal Price: {game.normalPrice}</p>
                          <p>Sale Price: {game.salePrice}</p>
                        </div>
                      );
                    }
                    return null;
                  })
                ) : (
                  <div>No available game data from API...</div>
                )}
              </div>
            ) : (
              <div className="loading">Loading game data...</div>
            )}
            {gameDetail.deals && gameDetail.deals.length > 0 ? (
              <div className="deals">
                <h2>Deals Available!</h2>
                {gameDetail.deals.slice(0, 3).map((deal, index) => (
                  <div className="deal" key={index}>
                    <h3>Deal {index + 1}</h3>
                    <p>Deal price: {deal.price}</p>
                    <p>Retail Price: ${deal.retailPrice}</p>
                    <p>You will save: ${deal.savings}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-deals">No deals available</p>
            )}
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </main>

    </>
  );
}

export default Detail;

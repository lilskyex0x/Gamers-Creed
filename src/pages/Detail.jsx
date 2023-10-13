import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGameDetails, fetchGamesAsync } from '../redux/Slices/gameSlice';
import Navbar from '../components/navBar/Navbar';
import '../App.css';

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const gameDetail = useSelector((state) => state.game.gameDetail);
  const gameData = useSelector((state) => state.game.gameData);

  useEffect(() => {
    dispatch(fetchGameDetails(id));
    dispatch(fetchGamesAsync(''));
  }, [dispatch, id]);

  return (
    <>
      <Navbar data="Game Details" />
      <main className="detail__container">
        {gameDetail ? (
          <div className="detail__contents">
            <div className="header__detail">
              <h2>{gameDetail.info.title}</h2>
              <img src={gameDetail.info.thumb} alt="" />
            </div>
            <div className="lineThrough" />
            <div className="cheapPrice">
              <span className="container">
                <h2 className="title">
                  <span className="title-word title-word-1">Cheapest</span>
                  <span className="title-word title-word-2">Price</span>
                  <span className="title-word title-word-3">Right</span>
                  <span className="title-word title-word-4">Now!</span>
                </h2>
              </span>
              <span>
                <h2>
                  &quot; $
                  {gameDetail.cheapestPriceEver.price}
                  {' '}
                  &quot;
                </h2>
              </span>
            </div>
            <div className="lineThrough" />
            {gameData ? (
              <div className="rating__detail">
                {gameData.find((game) => game.id === id) ? (
                  gameData.map((game) => {
                    if (game.id === id) {
                      return (
                        <div className="ratings" key={game.id}>
                          <p>
                            Rating:
                            {game.rating ? game.rating : 10}
                          </p>
                          <p>
                            Text Rating:
                            {game.textRating ? game.textRating : 'No rating'}
                          </p>
                          <p>
                            Metacritic Score:
                            {game.score}
                          </p>
                          <p>
                            Normal Price:  $
                            {game.normalPrice}
                          </p>
                          <p>
                            Sale Price: $
                            {game.salePrice}
                          </p>
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
                  <div className="deal" key={deal.id}>
                    <h3>
                      Deal-
                      {index + 1}
                    </h3>
                    <p>
                      Deal price: $
                      {deal.price}
                    </p>
                    <p>
                      Retail Price: $
                      {deal.retailPrice}
                    </p>
                    <p>
                      You will save: $
                      {deal.savings}
                    </p>
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

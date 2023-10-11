import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGameDetails } from '../../redux/Slices/gameSlice';
import Navbar from '../../components/NavBar/Navbar';

function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const gameDetail = useSelector((state) => state.game.gameDetail);
    console.log('gameDetail ', gameDetail)

    useEffect(() => {
        dispatch(fetchGameDetails(id));
    }, [dispatch, id]);

    return (
        <div>
            <Navbar data="Game Details" />
            <main>
                <div>
                    {gameDetail ? (
                        <div>
                            <h2>{gameDetail.info.title}</h2>
                            <img src={gameDetail.info.thumb} alt="" />
                            <p>Cheapest price right now: {gameDetail.cheapestPriceEver.price}</p>
                            <p>retail Price: {gameDetail.deals[0].retailPrice}</p>
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Detail;

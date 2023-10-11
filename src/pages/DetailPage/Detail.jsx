import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGameDetails } from '../../redux/Slices/gameSlice';
import Navbar from '../../components/NavBar/Navbar';

function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const gameDetail = useSelector((state) => state.game.gameDetail);

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
                            <h2>{gameDetail.name}</h2>
                            <p>Rating: {gameDetail.rating}</p>
                            <p>Text Rating: {gameDetail.textRating}</p>
                            <p>Normal Price: {gameDetail.normalPrice}</p>
                            <p>Sale Price: {gameDetail.salePrice}</p>
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

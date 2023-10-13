import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { fetchGamesAsync } from '../../redux/Slices/gameSlice';
import '../styles/PriceInput.css';

const PriceInput = () => {
  const dispatch = useDispatch();
  const [selectedLowerPrice, setSelectedLowerPrice] = useState();

  useEffect(() => {
    dispatch(fetchGamesAsync(selectedLowerPrice));
  }, [selectedLowerPrice, dispatch]);

  return (
    <>
      <span>
        <p>
          Selected Lower Price: $
          {selectedLowerPrice}
        </p>
      </span>
      <div className="price__input">
        <label htmlFor="lowerPrice">Enter Base Price:</label>
        <input
          type="number"
          id="lowerPrice"
          name="lowerPrice"
          placeholder="     $"
          value={selectedLowerPrice}
          onChange={(e) => {
            const newLowerPrice = e.target.value;
            setSelectedLowerPrice(newLowerPrice);
          }}
        />
      </div>
    </>
  );
};

export default PriceInput;

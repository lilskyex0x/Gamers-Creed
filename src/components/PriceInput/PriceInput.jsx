import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchGamesAsync } from "../../redux/Slices/gameSlice";

const PriceInput = () => {
  const dispatch = useDispatch();
  const [selectedLowerPrice, setSelectedLowerPrice] = useState();

  useEffect(() => {
    dispatch(fetchGamesAsync(selectedLowerPrice));
  }, [selectedLowerPrice, dispatch]);

  return (
    <div>
      <label htmlFor="lowerPrice">Enter Base Price:</label>
      <input
        type="number"
        id="lowerPrice"
        name="lowerPrice"
        value={selectedLowerPrice}
        onChange={(e) => {
          const newLowerPrice = e.target.value;
          setSelectedLowerPrice(newLowerPrice);
        }}
      />
      <p>Selected Lower Price: ${selectedLowerPrice}</p>
    </div>
  );
}

export default PriceInput;

import React, { useState } from "react";

import { useRecoilState } from "recoil";
import { cityState } from "./../../state/atoms/cityState";
import "./index.css";

const SearchBar = () => {
  const setCity = useRecoilState(cityState)[1];

  const [key, setKey] = useState("");
  
  const handleOnChange = (event) => {
    setKey(event.target.value);
  };

  const handleOnSubmit = () => {
    setCity(key);
  };

  return (
    <div className="search-bar">
      <div className="search-bar-child">
        <h5 className="text-white">Search weather on your city</h5>
        <div className="search-wrapper">
          <input
            type="text"
            name="city"
            id="inputSearchCity"
            onChange={handleOnChange}
            placeholder="Search City..."
          />
          <button
            className="btn btn-primary text-white"
            onClick={handleOnSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

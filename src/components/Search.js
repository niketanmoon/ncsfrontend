import React, { useState } from "react";
import "./Search.css";

import { useDispatch } from "react-redux";
import saveMovieList from "../features/movieSlice";

const Search = () => {
  const [searchText, setSearchText] = React.useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;

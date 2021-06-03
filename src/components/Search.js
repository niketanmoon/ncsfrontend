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

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (searchText.length > 1) {
      dispatch(saveMovieList(searchText));
    }
  };
  return (
    <div className="search">
      <input type="text" value={searchText} onChange={handleOnChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;

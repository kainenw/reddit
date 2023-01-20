import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm, setSearchTerm } from "./SearchBarSlice.js";
import { FetchSearchPosts } from "../PostList/PostListSlice.js";
import SearchBar from "../../presentation/SearchBar.js";
import { Navigate } from "react-router-dom";

const SearchBarLogic = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(setSearchTerm(value));
    <Navigate to={"/search/" + value} replace={true} />;
  };

  const searchTerm = useSelector(selectSearchTerm);

  return <SearchBar searchTerm={searchTerm} handleChange={handleChange} />;
};

export default SearchBarLogic;

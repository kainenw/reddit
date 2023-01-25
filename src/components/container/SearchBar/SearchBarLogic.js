import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSearchTerm, setSearchTerm } from "./SearchBarSlice.js";
import SearchBar from "../../presentation/SearchBar.js";

const SearchBarLogic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(setSearchTerm(value));
    navigate("/search/" + value);
  };

  const searchTerm = useSelector(selectSearchTerm);

  return <SearchBar searchTerm={searchTerm} handleChange={handleChange} />;
};

export default SearchBarLogic;

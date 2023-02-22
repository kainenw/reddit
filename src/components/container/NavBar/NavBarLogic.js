import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSearchTerm, setSearchTerm, setSort } from "./NavBarSlice";
import NavBar from "../../presentation/NavBar";

const NavBarLogic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    dispatch(setSearchTerm(value));
    navigate("/search/" + value);
  };

  const handleSortChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    console.log(value);
    dispatch(setSort(value));
  };

  const searchTerm = useSelector(selectSearchTerm);

  return (
    <NavBar
      searchTerm={searchTerm}
      handleSearchChange={handleSearchChange}
      handleSortChange={handleSortChange}
    />
  );
};

export default NavBarLogic;

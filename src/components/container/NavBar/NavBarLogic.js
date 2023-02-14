import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSearchTerm, setSearchTerm, setSort } from "./NavBarSlice";
import NavBar from "../../presentation/NavBar";

const NavBarLogic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(setSearchTerm(value));
    navigate("/search/" + value);
  };

  const handleClick = (event) => {
    const value = event.target.value;
    console.log(value)
    dispatch(setSort(value))
  }

  const searchTerm = useSelector(selectSearchTerm);

  return <NavBar searchTerm={searchTerm} handleChange={handleChange} handleClick={handleClick} />;
};

export default NavBarLogic;

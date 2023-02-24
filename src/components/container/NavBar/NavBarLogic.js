import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSearchTerm, setSearchTerm, setSort } from "./NavBarSlice";
import NavBar from "../../presentation/NavBar";

const NavBarLogic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let isDark = false;

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

  const root = document.querySelector(":root");

  const handleColorChange = (event) => {
    const value = event.target.value;
    root.style.setProperty("--accent", value);
    const navBarMenus = document.body.getElementsByClassName("navbar-menus");
    console.log(navBarMenus);
    const isYellow = value === "#DECF00" || value === "#4BAB33";
    const newTextColor = isYellow ? "black" : "white";
    console.log(isYellow)
    const icon = document.getElementById("icon");
    icon.style.filter = isYellow ? "invert(1)" : "invert(0)";
    for (let item of navBarMenus) {
      console.log(newTextColor);
      item.style.color = newTextColor;
      item.style.border = "1px solid " + newTextColor;
    }
  };

  const handleDarkLightClick = (event) => {
    if (!isDark) {
      root.style.setProperty("--background", "black");
      root.style.setProperty("--presentation", "#292929");
      root.style.setProperty("--mainText", "white");
      event.target.innerHTML = "light"
    } else {
      root.style.setProperty("--background", "lightgrey");
      root.style.setProperty("--presentation", "white");
      root.style.setProperty("--mainText", "black");
      event.target.innerHTML = "dark";
    }
    isDark = !isDark;
  };

  const searchTerm = useSelector(selectSearchTerm);

  return (
    <NavBar
      searchTerm={searchTerm}
      isDark={isDark}
      handleDarkLightClick={handleDarkLightClick}
      handleColorChange={handleColorChange}
      handleSearchChange={handleSearchChange}
      handleSortChange={handleSortChange}
    />
  );
};

export default NavBarLogic;

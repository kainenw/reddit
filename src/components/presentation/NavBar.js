import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../../img/favicon.ico";

const NavBar = (props) => {
  return (
    <header>
      <NavLink id="home-button" to="/" replace={true}>
        <img src={icon} id="icon" alt="Reddit Icon" />
      </NavLink>
      <select
        name="sort"
        className="navbar-menus"
        onChange={props.handleSortChange}
      >
        <option value="top">Top</option>
        <option value="hot">Hot</option>
        <option value="new">New</option>
      </select>

      <select
        name="color"
        className="navbar-menus"
        onChange={props.handleColorChange}
      >
        <option value="#244C7A">Blue</option>
        <option value="#A33931">Red</option>
        <option value="#4BAB33">Green</option>
        <option value="#DECF00">Yellow</option>
      </select>

      <button className="navbar-menus" onClick={props.handleDarkLightClick}>
        {props.isDark ? "light" : "dark"}
      </button>

      <form id="search" onSubmit={(event) => event.preventDefault()}>
        <input
          onChange={props.handleSearchChange}
          className="search"
          type="text"
          value={props.searchTerm}
          placeholder={"Search"}
        />
      </form>
      {/* <TitleBar /> */}
    </header>
  );
};

export default NavBar;

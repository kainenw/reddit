import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <header>
      <NavLink id="home-button" to="/" replace={true}>
        <h1>
          <span>Red</span>dit{" "}
        </h1>
      </NavLink>
      <label></label>
      <select name="sort" id="sort" onChange={props.handleSortChange}>
        <option value="top">Top</option>
        <option value="hot">Hot</option>
        <option value="new">New</option>
      </select>

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

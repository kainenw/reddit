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
      <form id="sort" onClick={props.handleClick}>
        <div>
          <input type="radio" id="hot" name="sort" value="hot" />
          <label for="hot">Hot</label>
        </div>
        <div>
        <input type="radio" id="new" name="sort" value="new" />
          <label for="new">New</label>
          </div>
        <div>
          <input type="radio" id="top" name="sort" value="top" />
          <label for="top">Top</label>
        </div>
      </form>

      <form onSubmit={(event) => event.preventDefault()}>
        <inputs
          onChange={props.handleChange}
          className="search"
          type="text"
          id="search"
          value={props.searchTerm}
          placeholder={"Search"}
        />
      </form>
      {/* <TitleBar /> */}
    </header>
  );
};

export default NavBar;

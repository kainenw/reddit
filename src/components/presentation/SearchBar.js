import React from "react";

const SearchBar = (props) => {
  return (
      <form onSubmit={event => event.preventDefault()}>
        <input
          onChange={props.handleChange}
          className="search"
          type="text"
          id="search"
          value={props.searchTerm}
          placeholder={"Search"}
        />
      </form>
  );
};

export default SearchBar;

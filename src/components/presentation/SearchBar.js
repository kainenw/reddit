import React from "react";

const SearchBar = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default SearchBar;

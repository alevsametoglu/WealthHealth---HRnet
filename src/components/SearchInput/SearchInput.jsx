import React from "react";
import "./SearchInput.scss";

const SearchInput = ({ onChange, onSearch }) => {
  return (
    <div className="search-form" aria-labelledby="search input">
      <i className="fas fa-search"></i>
      <input
        className="search-input"
        type="search"
        placeholder="Search an employee"
        onChange={(e) => e.target.value}
        onKeyDown={(e) =>
          e.key === "Enter" && onSearch && onSearch(e.currentTarget.value)
        }
      />
    </div>
  );
};

export default SearchInput;

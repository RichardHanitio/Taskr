import React from "react";
import "./searchbar.scss";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = ({ className, handleSearchInput }) => {
  return (
    <div className={`searchbar ${className}`}>
      <div className="searchbar-container">
        <div className="search-icon-container">
          <AiOutlineSearch className="search-icon" />
        </div>
        <div className="searchbar-input">
          <input
            type="text"
            className="searchbar-input-field"
            onChange={handleSearchInput}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Searchbar;

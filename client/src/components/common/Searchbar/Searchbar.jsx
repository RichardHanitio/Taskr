import React from 'react'
import "./searchbar.scss"
import Button from "../Button/Button";
import {AiOutlineSearch} from "react-icons/ai";

const Searchbar = ({className}) => {
  return (
    <div className={`searchbar ${className}`}>
      <div className="searchbar-container">
        <div className="search-icon-container">
          <AiOutlineSearch className="search-icon"/>
        </div>
        <div className="searchbar-input">
          <input type="text" className="searchbar-input-field"/>
        </div>
        <div className="searchbar-button-container">
          <Button variant="primary" height="90%" width="100%">Search</Button>
        </div>
      </div>
    </div>
  )
}

export default Searchbar
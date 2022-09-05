import React from 'react'
import "./navbar.scss";
import { AiOutlinePlus, AiFillCalendar, AiFillSetting } from "react-icons/ai";
import {FaClipboardList} from "react-icons/fa";
import { RiArchiveDrawerFill } from "react-icons/ri";
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-add-btn">
        <AiOutlinePlus className="navbar-add-icon" />
      </Link>
      <div className="navbar-btns">
        <ul className="navbar-top-btn">
          <Link to="/lists">
            <FaClipboardList className="navbar-icon" />
          </Link>
          <Link to="/calendar">
            <AiFillCalendar className="navbar-icon" />
          </Link>
        </ul>
        <ul className="navbar-bottom-btn">
          <Link to="/archived" >
            <RiArchiveDrawerFill className="navbar-icon" />
          </Link>
          <li>
            <AiFillSetting className="navbar-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
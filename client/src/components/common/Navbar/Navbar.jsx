import React from 'react'
import "./navbar.scss";
import { AiOutlinePlus, AiFillCalendar, AiFillSetting } from "react-icons/ai";
import {FaClipboardList} from "react-icons/fa";
import {RiStickyNoteFill} from "react-icons/ri";


const Navbar = () => {
  return (
    <div className="navbar-outer-container">
      <div className="navbar-add-btn">
        <AiOutlinePlus className="navbar-add-icon" />
      </div>
      <div className="navbar-btns">
        <ul className="navbar-top-btn">
          <li>
            <FaClipboardList className="navbar-icon" />
          </li>
          <li>
            <AiFillCalendar className="navbar-icon" />
          </li>
        </ul>
        <ul className="navbar-bottom-btn">
          <li>
            <RiStickyNoteFill className="navbar-icon" />
          </li>
          <li>
            <AiFillSetting className="navbar-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
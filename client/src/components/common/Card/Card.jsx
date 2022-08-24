import React from 'react'
import "./card.scss"
import { BsCalendar2Week, BsClock } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import moment from "moment";
import {Link} from "react-router-dom";

const Card = ({task, deleteTask}) => {
  return (
    <div className="card-container">
      <div className="card-left">
        <img src="/assets/unsplash-default-img.jpg" alt="pattern" />
        <div
          className={`card-priority card-priority-${task.priority}`}
        ></div>
      </div>
      <div className="card-right">
        <div className="card-right-container">
          <div className="card-caption-container">
            <h1 className="card-title">{task.task}</h1>
            <div className="card-desc">{task.desc}</div>
            <div className="card-due-date">
              <div className="card-due-date-item">
                <BsCalendar2Week className="card-due-date-icon" />
                <span>{moment(task.dueDate).format("dddd, DD MMMM YYYY")}</span>
              </div>
              <div className="card-due-date-item">
                <BsClock className="card-due-date-icon" />
                <span>{moment(task.dueDate).format("h:mm A")}</span>
              </div>
            </div>
          </div>
          <div className="card-edit-delete">
            <Link to={`/update?id=${task._id}`}>
              <BiEdit className="card-edit-delete-icon" />
            </Link>
            <MdDeleteOutline
              className="card-edit-delete-icon"
              onClick={deleteTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card



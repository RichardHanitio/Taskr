import React from 'react'
import "./card.scss"
import { BsCalendar2Week, BsClock } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import moment from "moment";
import {Link} from "react-router-dom";

const Card = ({task, deleteTask}) => {
  return (
    <div className="view-task-container">
      <div className="view-task-image">
        <img src="/assets/unsplash-default-img.jpg" alt="pattern" />
        <div
          className={`priority-circle priority-circle-${task.priority}`}
        ></div>
      </div>
      <div className="view-task-caption">
        <div className="view-task-caption-container">
          <div className="view-task-caption-inner-container">
            <h1 className="task-title">{task.task}</h1>
            <div className="task-desc">{task.desc}</div>
            <div className="task-due-date">
              <div className="task-due-date-item">
                <BsCalendar2Week className="task-due-date-icon" />
                <span>{moment(task.dueDate).format("dddd, DD MMMM YYYY")}</span>
              </div>
              <div className="task-due-date-item">
                <BsClock className="task-due-date-icon" />
                <span>{moment(task.dueDate).format("h:mm A")}</span>
              </div>
            </div>
          </div>
          <div className="task-edit-delete">
            <Link to={`/update?id=${task._id}`}>
              <BiEdit className="task-edit-delete-icon" />
            </Link>
            <Link to="/">
              <MdDeleteOutline
                className="task-edit-delete-icon"
                onClick={() => deleteTask(task._id)}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card



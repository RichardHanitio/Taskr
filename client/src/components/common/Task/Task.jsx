import React from "react";
import "./task.scss";
import { GoPrimitiveDot } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import {Link} from "react-router-dom";
import moment from "moment";

const Task = ({ task, id, description, dueDate, priority, deleteTask }) => {
  const date = new Date(dueDate);
  const now = new Date();
  let formattedDate;
  if(date.getDate()!==now.getDate()) {
    formattedDate = moment(date).format("llll");
  } else {
    formattedDate = moment(date).format("[Today, ]lll");
  }

  return (
    <Link className="task" to={`/view?id=${id}`}>
      <div className="task-container">
        <div className="task-priority">
          <GoPrimitiveDot className={`priority-dot priority-dot-${priority}`} />
        </div>
        <div className="task-name-due">
          <div className="task-name">{task}</div>
          <div className="task-due">{formattedDate}</div>
        </div>
        <div className="task-update-delete">
          <Link to={`/update?id=${id}`}>
            <BiEdit className="task-btn task-update-btn"/>
          </Link>
          <Link to="/">
            <MdDeleteOutline
              className="task-btn task-delete-btn"
              onClick={deleteTask}
            />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Task;

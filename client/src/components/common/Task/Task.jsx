import React from "react";
import "./task.scss";
import { GoPrimitiveDot } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import {Link} from "react-router-dom";
import moment from "moment";

const Task = ({ task, id, description, dueDate, priority, deleteTask, updateTask }) => {
  let color;
  if (priority === "high") color = "danger";
  else if (priority === "medium") color = "warning";
  else color = "success";

  const day = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  const month = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const date = new Date(dueDate);
  const now = new Date();

  let formattedDate;
  if(date.getDate()!==now.getDate()) {
    formattedDate = moment(date).format("llll");
  } else {
    formattedDate = moment(date).format("[Today, ]lll");
  }


  return (
    <div className="task">
      <div className="task-container">
        <div className="task-priority">
          <GoPrimitiveDot className={`priority-dot priority-dot-${color}`} />
        </div>
        <div className="task-name-due">
          <div className="task-name">{task}</div>
          <div className="task-due">{formattedDate}</div>
        </div>
        <div className="task-update-delete">
          <Link to={`/update?id=${id}`}>
            <BiEdit className="task-btn task-update-btn" />
          </Link>
          <MdDeleteOutline
            className="task-btn task-delete-btn"
            onClick={deleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;

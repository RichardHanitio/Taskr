import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
import { FiArchive } from "react-icons/fi";
import { IoRefreshOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import moment from "moment";
import "./task.scss";

const Task = ({ task, id, description, dueDate, priority, dateArchived, deleteTask, archiveTask, restoreTask }) => {

  const formatDate = (d) => {
    const date = new Date(d);
    const now = new Date();
    if (moment(date).format("l") !== moment(now).format("l")) {
      return moment(date).format("llll");
    }
    return moment(date).format("[Today, ]lll");
  };

  return (
    <Link className="task" to={`/view?id=${id}`}>
      <div className="task-container">
        <div className="task-priority">
          <GoPrimitiveDot className={`priority-dot priority-dot-${priority}`} />
        </div>
        <div className="task-name-due">
          <div className="task-name">{task}</div>
          <div className="task-due">{formatDate(dueDate)}</div>
        </div>
        <div className="task-update-archive">
          {dateArchived ? (
            <>
              <Link to={{}} onClick={restoreTask}>
                <IoRefreshOutline className="task-btn task-update-btn" />
              </Link>
              <Link to={{}} onClick={deleteTask}>
                <RiDeleteBinLine className="task-btn task-archive-btn" />
              </Link>
            </>
          ) : (
            <>
              <Link to={`/update?id=${id}`}>
                <BiEdit className="task-btn task-update-btn" />
              </Link>
              <Link to={{}} onClick={archiveTask}>
                <FiArchive className="task-btn task-archive-btn" />
              </Link>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Task;

import React, {useContext} from "react";
import "./task.scss";
import {GoPrimitiveDot} from "react-icons/go"
import {BiEdit} from "react-icons/bi";
import {MdDeleteOutline} from "react-icons/md";
import {ModalContext} from "../../../routes/NewTask/NewTask"
import PopUp from "../PopUp/PopUp";

const Task = ({task, id, description, dueDate, priority, deleteTask}) => {
  let color;
  if (priority === "high") color = "danger";
  else if (priority === "medium") color = "warning";
  else color = "success";

  const {modalIsOpen, closeModal} = useContext(ModalContext)

  return (

    <div className="task">
      <div className="task-container">
        <div className="task-priority">
          <GoPrimitiveDot className={`priority-dot priority-dot-${color}`} />
        </div>
        <div className="task-name-due">
          <div className="task-name">{task}</div>
          <div className="task-due">{dueDate}</div>
        </div>
        <div className="task-edit-delete">
          <BiEdit className="task-btn task-edit-btn" />
          <MdDeleteOutline
            className="task-btn task-delete-btn"
            onClick={deleteTask}
          />
        </div>
      </div>
      <PopUp
        open={modalIsOpen}
        close={closeModal}
        image="/assets/man-with-calendar.png"
      >
        Task deleted successfully
      </PopUp>
    </div>
  );
}

export default Task
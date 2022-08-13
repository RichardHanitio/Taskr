import "./task.scss";
import {GoPrimitiveDot} from "react-icons/go"
import {BiEdit} from "react-icons/bi";
import {MdDeleteOutline} from "react-icons/md";

const Task = ({task, description, dueDate, priority}) => {
  let color;
  if (priority === "high") color = "danger";
  else if (priority === "medium") color = "warning";
  else color = "success";

  return (
    <div className="task">
      <div className="task-container">
        <div className="task-priority">
          <GoPrimitiveDot className={`priority-dot priority-dot-${color}`}
          />
        </div>
        <div className="task-name-due">
          <div className="task-name">{task}</div>
          <div className="task-due">{dueDate}</div>
        </div>
        <div className="task-edit-delete">
          <BiEdit className="task-btn task-edit-btn" />
          <MdDeleteOutline className="task-btn task-delete-btn"/>
        </div>
      </div>
    </div>
  )
}

export default Task
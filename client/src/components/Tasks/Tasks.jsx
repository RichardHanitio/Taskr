import React from "react";
import "./tasks.scss";
import Task from "../common/Task/Task";

const Tasks = ({archiveTask, updateTask, tasks, className, deleteTask, message, restoreTask}) => {
  return (
    <div className={`${className} tasks`}>
      {tasks.length === 0 && (
        <div className="tasks-message">
          {
            message || "No tasks currently ╮(＾▽＾)╭ "
          }
        </div>
      )}
      {tasks.length > 0 && (
        <div className="tasks-container">
          <div className="tasks-inner-container">
            {
              tasks.map((task) => {
                const date = new Date(task.dueDate);
                return (
                  <Task
                    key={task._id}
                    task={task.task}
                    id={task._id}
                    description={task.desc}
                    dueDate={date.toLocaleString()}
                    priority={task.priority}
                    dateArchived={task.dateArchived}
                    archiveTask={() => archiveTask(task._id)}
                    updateTask = {() => updateTask(task._id)}
                    deleteTask = {() => deleteTask(task._id)}
                    restoreTask = {() => restoreTask(task._id)}
                  />
                );
              })
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;

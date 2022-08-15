import React, {useEffect, useState, useCallback} from "react";
import "./tasks.scss";
import Task from "../common/Task/Task";
import {httpGetTasks} from "../../hooks/requests";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = useCallback(async() => {
    httpGetTasks().then(resp => setTasks(resp.data));
  }, [])

  // fetch tasks from API
  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <div className="tasks">
      
      {/* <div className="no-task">No tasks currently ╮(＾▽＾)╭</div> */}
      <div className="tasks-container">
        <div className="tasks-recent">Recently created</div>
        <div className="tasks-inner-container">
          {
            tasks.map((task) => {
              const date = new Date(task.dueDate);
              return (
                <Task
                  key={task.task}
                  task={task.task}
                  description={task.desc}
                  dueDate={date.toLocaleString()}
                  priority={task.priority}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Tasks;

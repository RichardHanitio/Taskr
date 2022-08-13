import React from "react";
import "./tasks.scss";
import Task from "../common/Task/Task";

const Tasks = () => {
  return (
    <div className="tasks">
      <div className="no-task">No tasks currently ╮(＾▽＾)╭</div>
      {/* <div className="tasks-container">
        <div className="tasks-recent">Recently created</div>
        <div className="tasks-inner-container">
          <Task
            task="Do Dishes"
            description="none"
            dueDate="Today, 15:00"
            priority="high"
          />

          <Task
            task="Program this project"
            description="none"
            dueDate="Today, 13:00"
            priority="low"
          />

          <Task
            task="Program this project"
            description="none"
            dueDate="Today, 13:00"
            priority="low"
          />

          <Task
            task="Program this project"
            description="none"
            dueDate="Today, 13:00"
            priority="low"
          />

          <Task
            task="Do Dishes"
            description="none"
            dueDate="Today, 15:00"
            priority="high"
          />

          <Task
            task="Program this project"
            description="none"
            dueDate="Today, 13:00"
            priority="low"
          />

          <Task
            task="Program this project"
            description="none"
            dueDate="Today, 13:00"
            priority="low"
          />

          <Task
            task="Program this project"
            description="none"
            dueDate="Today, 13:00"
            priority="low"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Tasks;

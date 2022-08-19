import React from "react";
import "./form.scss";
import Button from "../common/Button/Button";
import moment from "moment";

const Form = ({mode, createTask, updateTask, isLoad, task}) => {
  if(mode==="create"){
    return (
      <div className="form">
        <form className="form-container" method="post" onSubmit={createTask}>
          <h1 className="form-title">New Task</h1>
          <div className="form-fields">
            <div className="form-field">
              <label htmlFor="task">Task</label>
              <input type="text" name="task" id="task" required />
            </div>
            <div className="form-field">
              <label htmlFor="description">Desc</label>
              <textarea name="description" id="description" />
            </div>
            <div className="form-field">
              <label htmlFor="due-date">Due Date</label>
              <input
                type="datetime-local"
                name="due-date"
                id="due-date"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="priority">Priority</label>
              <select
                id="priority"
                defaultValue={"high"}
                name="priority"
                required
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <Button variant="primary" type="submit" height="30px">
              Create Task
            </Button>
          </div>
        </form>
      </div>
    );
  } else if (mode==="update" && isLoad) { 
      return (
        <div className="form">
          <form className="form-container" method="post" onSubmit={updateTask}>
            <h1 className="form-title">Update Task</h1>
            <div className="form-fields">
              <div className="form-field">
                <label>Task ID</label>
                <input type="text" name="taskid" defaultValue={task._id} disabled />
              </div>
              <div className="form-field">
                <label htmlFor="task">Task</label>
                <input
                  type="text"
                  name="task"
                  id="task"
                  defaultValue={task.task}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="description">Desc</label>
                <textarea
                  name="description"
                  id="description"
                  defaultValue={task.desc}
                />
              </div>
              <div className="form-field">
                <label htmlFor="due-date">Due Date</label>
                <input
                  type="datetime-local"
                  name="due-date"
                  id="due-date"
                  // defaultValue="2018-06-12T19:30"
                  defaultValue={moment(task.dueDate).format("yyyy-MM-DDThh:mm")}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="priority">Priority</label>
                <select
                  id="priority"
                  defaultValue={task.priority}
                  name="priority"
                  required
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <Button variant="primary" type="submit" height="30px">
                Update Task
              </Button>
            </div>
          </form>
        </div>
      );
  }
};

export default Form;

import React, { useState, useCallback } from "react";
import "./form.scss";
import Button from "../common/Button/Button";
import { httpCreateTask } from "../../hooks/requests";

const Form = () => {
  const [task, setTask] = useState({});

  const submitDataToAPI = useCallback(async(data) => {
    await httpCreateTask(data)
      .then((resp) => setTask(resp))
      .catch((err) => console.log(err.printStackTrace));
  }, [])

  const handleFormOnSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const task = data.get("task");
    const desc = data.get("description");
    const dueDate = new Date(data.get("dueDate"));
    const priority = data.get("priority");

    const dataObj = { task, desc, dueDate, priority };
    submitDataToAPI(dataObj);
    
    e.target.reset();
  };

  return (
    <div className="form">
      <form
        className="form-container"
        method="post"
        onSubmit={handleFormOnSubmit}
      >
        <h1 className="form-title">New Task</h1>
        <div className="form-fields">
          <div className="form-field">
            <label htmlFor="task">Task</label>
            <input type="text" name="task" id="task" required />
          </div>
          <div className="form-field">
            <label htmlFor="description">Description</label>
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
};

export default Form;

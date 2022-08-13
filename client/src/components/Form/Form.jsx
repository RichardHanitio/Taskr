import React from 'react'
import "./form.scss";
import Button from "../common/Button/Button";

const Form = () => {
  return (
    <div className="form">
      <form className="form-container" method="post">
        <h1 className="form-title">New Task</h1>
        <div className="form-fields">
          <div className="form-field full-width">
            <label htmlFor="task">Task</label>
            <input type="text" name="task" id="task"/>
          </div>
          <div className="form-field full-width">
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description"/>
          </div>
          <div className="form-field">
            <label htmlFor="due-date">Due Date</label>
            <input type="datetime-local" name="due-date" id="due-date"/>
          </div>
          <div className="form-field">
            <label htmlFor="priority">Priority</label>
            <select id="priority">
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <Button variant="primary" type="submit" height="30px">Create Task</Button>
        </div>
      </form>
    </div>
  );
}

export default Form
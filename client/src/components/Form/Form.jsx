import React, { useContext } from "react";
import "./form.scss";
import Button from "../common/Button/Button";
import PopUp from "../common/PopUp/PopUp";
import {ModalContext} from "../../routes/NewTask/NewTask";

const Form = ({createTask}) => {
  const {modalIsOpen, closeModal} = useContext(ModalContext);

  return (
    <div className="form">
      <form
        className="form-container"
        method="post"
        onSubmit={createTask}
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
          <PopUp open={modalIsOpen} close={closeModal} image="/assets/man-with-calendar.png">
            Task successfully created!
          </PopUp>
        </div>
      </form>
    </div>
  );
};

export default Form;

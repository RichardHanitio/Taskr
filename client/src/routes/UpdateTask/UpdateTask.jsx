import React from 'react'
import "./updatetask.scss";
import Form from "../../components/Form/Form";
import useTasks from "../../hooks/useTasks";
import {IoChevronBackCircleSharp} from "react-icons/io5";
import {Link} from "react-router-dom"
import PopUp from "../../components/common/PopUp/PopUp";


const UpdateTask = () => {
  const {task, updateTask, isLoad, isOpen, closeModal, content} = useTasks();
  return (
    <section className="update-task">
      <Link to="/" className="update-link">
        <div className="update-back-btn">
          <IoChevronBackCircleSharp className="update-back-btn-icon" />
          <span>Back</span>
        </div>
      </Link>

      <Form mode="update" task={task} isLoad={isLoad} updateTask={updateTask} />

      <PopUp open={isOpen} close={closeModal} image={content.image}>
        {content.message}
      </PopUp>
    </section>
  );
}

export default UpdateTask
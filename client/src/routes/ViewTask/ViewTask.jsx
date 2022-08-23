import React from 'react'
import "./viewtask.scss";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import {Link} from "react-router-dom";
import Card from "../../components/common/Card/Card";
import useTasks from "../../hooks/useTasks";
import PopUp from "../../components/common/PopUp/PopUp";

const ViewTask = () => {
  const {task, deleteTask, updateTask, isOpen, closeModal, content} = useTasks();

  return (
    <section className="view-task">
      <Link to="/" className="view-back-btn">
        <IoChevronBackCircleSharp className="view-back-btn-icon" />
        <span>Back</span>
      </Link>

      <Card task={task} deleteTask={deleteTask} updateTask={updateTask}/>
      
      <PopUp open={isOpen} close={closeModal} image={content.image}>
        {content.message}
      </PopUp>
    </section>
  );
}

export default ViewTask
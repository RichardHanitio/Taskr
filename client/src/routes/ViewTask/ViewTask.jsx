import React from 'react'
import "./viewtask.scss";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import Card from "../../components/common/Card/Card";
import useTasks from "../../hooks/useTasks";
import PopUp from "../../components/common/PopUp/PopUp";

const ViewTask = () => {
  const {task, deleteTask, updateTask, isOpen, closeModal, content} = useTasks();
  const navigate = useNavigate();

  return (
    <section className="viewtask-section">
      <div className="viewtask-container">
        <div className="viewtask-back-btn" onClick={() => navigate(-1)}>
          <IoChevronBackCircleSharp className="viewtask-back-btn-icon" />
          <span>Back</span>
        </div>

        <Card task={task} deleteTask={deleteTask} updateTask={updateTask} className="viewtask-card"/>

        <PopUp open={isOpen} close={closeModal} image={content.image}>
          {content.message}
        </PopUp>
      </div>
    </section>
  );
}

export default ViewTask
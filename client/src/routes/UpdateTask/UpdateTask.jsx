import React from "react";
import "./updatetask.scss";
import Form from "../../components/Form/Form";
import useTasks from "../../hooks/useTasks";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import PopUp from "../../components/common/PopUp/PopUp";

const UpdateTask = () => {
  const { task, updateTask, isLoad, isOpen, closeModal, content } = useTasks();
  const navigate = useNavigate();
  return (
    <section className="updatetask-section">
      <div className="updatetask-container">
        <div className="updatetask-back-container" onClick={() => navigate(-1)}>
          <IoChevronBackCircleSharp className="updatetask-back-icon" />
          <span>Back</span>
        </div>

        <Form mode="update" task={task} isLoad={isLoad} updateTask={updateTask} className="updatetask-form"/>

        <PopUp open={isOpen} close={closeModal} image={content.image}>
          {content.message}
        </PopUp>
      </div>
    </section>
  );
};

export default UpdateTask;

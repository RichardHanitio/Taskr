import React from "react";
import "./updatetask.scss";
import Form from "../../components/Form/Form";
import useTasks from "../../hooks/useTasks";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import PopUp from "../../components/common/PopUp/PopUp";
import useModals from "../../hooks/useModals";

const UpdateTask = () => {
  const { isOpen, closeModal, modalContent, content } = useModals();

  const { task, updateTask} = useTasks({modalContent});
  const navigate = useNavigate();
  return (
    <section className="updatetask-section">
      <div className="updatetask-container">
        <div className="updatetask-back-container" onClick={() => navigate(-1)}>
          <IoChevronBackCircleSharp className="updatetask-back-icon" />
          <span>Back</span>
        </div>

        <Form mode="update" task={task} updateTask={updateTask} className="updatetask-form"/>

        <PopUp open={isOpen} close={closeModal} image={content.image}>
          {content.message}
        </PopUp>
      </div>
    </section>
  );
};

export default UpdateTask;

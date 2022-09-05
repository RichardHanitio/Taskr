import React from "react";
import "./newtask.scss";
import Navbar from "../../components/common/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Tasks from "../../components/Tasks/Tasks";
import useTasks from "../../hooks/useTasks";
import PopUp from "../../components/common/PopUp/PopUp";
import useModals from "../../hooks/useModals";

const NewTask = () => {
  const { isOpen, closeModal, modalContent, content } = useModals();

  const { tasks, createTask, archiveTask, updateTask } = useTasks({
    modalContent,
  });

  return (
    <section className="newtask-section">
      <div className="newtask-container">
        <Navbar />

        <Form mode="create" createTask={createTask} className="newtask-form" />

        {tasks.length !== 0 && (
          <div className="newtask-recent">Recently created</div>
        )}

        <Tasks
          tasks={tasks}
          archiveTask = {archiveTask}
          updateTask={updateTask}
          className="newtask-tasks"
        />

        <PopUp open={isOpen} close={closeModal} image={content.image}>
          {content.message}
        </PopUp>
      </div>
    </section>
  );
};

export default NewTask;

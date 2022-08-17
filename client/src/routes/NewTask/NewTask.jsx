import React from "react";
import "./newtask.scss";
import Navbar from "../../components/common/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Tasks from "../../components/Tasks/Tasks";
import useTasks from "../../hooks/useTasks";
import PopUp from "../../components/common/PopUp/PopUp";

const NewTask = () => {
  const {
    tasks,
    createTask,
    deleteTask,
    updateTask,
    isOpen,
    closeModal,
    content,
  } = useTasks();

  return (
    <section className="newtask-section">
      <Navbar />
      <Form createTask={createTask}/>
      <Tasks tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
      <PopUp open={isOpen} close={closeModal} image={content.image}>
        {content.message}
      </PopUp>
    </section>
  );
};

export default NewTask;

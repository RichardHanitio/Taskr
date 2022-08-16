import React from "react";
import "./newtask.scss";
import Navbar from "../../components/common/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Tasks from "../../components/Tasks/Tasks";
import useTasks from "../../hooks/useTasks";

export const ModalContext = React.createContext();

const NewTask = () => {
  const {tasks, createTask, deleteTask, updateTask, modalIsOpen, closeModal} = useTasks();
  

  return (
    <ModalContext.Provider value={{modalIsOpen, closeModal}}>
      <Navbar />
      <Form createTask={createTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </ModalContext.Provider>
  );
};

export default NewTask;

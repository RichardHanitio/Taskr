import { useEffect, useState, useCallback } from "react";
import { httpGetTasks, httpCreateTask, httpDeleteTask } from "./requests";
import useModals from "../hooks/useModals";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const { closeModal, openModal, isOpen, modalContent, content } = useModals();

  // GET tasks
  const getTasks = useCallback(async () => {
    httpGetTasks().then((resp) => {
      setTasks(resp.data);
    });
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  // DELETE task
  const deleteTask = useCallback(async (taskId) => {
    await httpDeleteTask(taskId).catch((err) => console.log(err));

    setTasks(getTasks());
    modalContent("/assets/man-success.jpg","Task deleted successfully")
    openModal();
  }, []);

  // POST task
  const createTask = useCallback(async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const task = data.get("task");
    const desc = data.get("description");
    const dueDate = new Date(data.get("due-date"));
    const priority = data.get("priority");

    const dataObj = { task, desc, dueDate, priority };

    await httpCreateTask(dataObj).catch((err) => console.log(err));

    setTasks(getTasks());
    modalContent("/assets/man-success.jpg", "Task created successfully")
    openModal();
    
    e.target.reset();

  }, []);

  // PATCH task
  const updateTask = useCallback(async (taskId) => {});

  return {
    tasks,
    deleteTask,
    createTask,
    updateTask,
    isOpen,
    closeModal,
    content
  };
};

export default useTasks;

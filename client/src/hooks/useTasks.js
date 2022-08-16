import { useEffect, useState, useCallback } from "react";

import { httpGetTasks, httpCreateTask, httpDeleteTask } from "./requests";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
    setModalIsOpen(true);
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
    setModalIsOpen(true);
    e.target.reset();
  }, []);

  // PATCH task
  const updateTask = useCallback(async (taskId) => {});

  return {
    tasks,
    deleteTask,
    createTask,
    updateTask,
    modalIsOpen,
    closeModal,
  };
};

export default useTasks;

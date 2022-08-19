import { useEffect, useState, useCallback } from "react";
import {
  httpGetTasks,
  httpCreateTask,
  httpDeleteTask,
  httpUpdateTask,
  httpGetTask,
} from "./requests";
import useModals from "../hooks/useModals";
import { useSearchParams } from "react-router-dom";

const useTasks = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const { closeModal, openModal, isOpen, modalContent, content } = useModals();
  const id = searchParams.get("id");

  // GET tasks
  const getTasks = useCallback(async () => {
    httpGetTasks().then((resp) => {
      setTasks(
        resp.data.sort((a, b) => {
          return (
            Number(new Date(b.dateCreated).getTime()) -
            Number(new Date(a.dateCreated).getTime())
          );
        })
      );
    });
  }, []);

  // GET task
  const getTask = useCallback(async (taskId) => {
    taskId &&
      (await httpGetTask(taskId)
        .then((resp) => setTask(resp.data))
        .catch((err) => console.log(err)));

    setIsLoad(true);
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  useEffect(() => {
    getTask(id);
  }, [getTask, id]);

  // DELETE task
  const deleteTask = useCallback(async (taskId) => {
    await httpDeleteTask(taskId).catch((err) => console.log(err));

    setTasks(getTasks());
    modalContent("/assets/man-success.jpg", "Task deleted successfully");
    openModal();
  }, [getTasks, modalContent, openModal]);

  // POST task
  const createTask = useCallback(async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const task = data.get("task");
    const desc = data.get("description");
    const dueDate = new Date(data.get("due-date"));
    const priority = data.get("priority");
    const dateCreated = new Date().toLocaleString();

    const dataObj = { task, desc, dueDate, priority, dateCreated };

    await httpCreateTask(dataObj).catch((err) => console.log(err));

    setTasks(getTasks());
    modalContent("/assets/man-success.jpg", "Task created successfully");
    openModal();

    e.target.reset();
  }, [getTasks, modalContent, openModal]);

  // PATCH task
  const updateTask = useCallback(async (taskId, updatedTask) => {
    await httpUpdateTask(taskId).catch((err) => console.log(err));
  }, []);

  return {
    createTask,
    updateTask,
    deleteTask,
    tasks,
    task,
    isLoad,
    isOpen,
    closeModal,
    content,
  };
};

export default useTasks;

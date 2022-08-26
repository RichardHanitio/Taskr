import { useEffect, useState, useCallback } from "react";
import {
  httpGetTasks,
  httpCreateTask,
  httpDeleteTask,
  httpUpdateTask,
  httpGetTask,
} from "./requests";
import { useSearchParams } from "react-router-dom";

const useTasks = ({modalContent}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const id = searchParams.get("id");

  // GET tasks
  const getTasks = useCallback(async() => {
    try {
      const resp = await httpGetTasks();
      setTasks(
        resp.data.sort((a, b) => {
          return (
            Number(new Date(b.dateCreated).getTime()) -
            Number(new Date(a.dateCreated).getTime())
          );
        })
      )
    } catch (err) {
      modalContent("/assets/man-stress.png",err.response.data.error)
    }
  }, []);

  // GET task
  const getTask = useCallback(async (taskId) => {
    if(taskId!==null) {
      try {
        const resp = await httpGetTask(taskId);
        setTask(resp.data);
        return task;
      } catch (err) {
        modalContent("/assets/man-stress.png", err.response.data.error);
      }
    }
  }, []);

  // DELETE task
  const deleteTask = useCallback(async(taskId) => {
    try {
      const resp = await httpDeleteTask(taskId);
      await getTasks();
      modalContent("/assets/man-success.jpg", resp.data.msg);
    } catch (err) {
      modalContent("/assets/man-stress.png", err.response.data.error);
    }
  },[getTasks, modalContent]);

  // POST task
  const createTask = useCallback(
    async (e) => {
      e.preventDefault();
      // * task, desc, dll namanya harus sama dengan schema db
      const data = new FormData(e.target);
      const task = data.get("task");
      const desc = data.get("description");
      const dueDate = new Date(data.get("due-date"));
      const priority = data.get("priority");
      const dateCreated = new Date().toLocaleString();

      const dataObj = { task, desc, dueDate, priority, dateCreated };

      try {
        const resp = await httpCreateTask(dataObj);
        await getTasks();
        modalContent("/assets/man-success.jpg", resp.data.msg);
        e.target.reset();

      } catch (err) {
        modalContent("/assets/man-stress.png", err.response.data.error);
      }
    },[getTasks, modalContent]
  );

  // PATCH task
  const updateTask = useCallback(
    async (e) => {
      e.preventDefault();
      // * task, desc, dll namanya harus sama dengan schema db
      const data = new FormData(e.target);
      const task = data.get("task");
      const desc = data.get("description");
      const dueDate = new Date(data.get("due-date"));
      const priority = data.get("priority");
      const dateCreated = new Date().toLocaleString();

      const updatedTask = { task, desc, dueDate, priority, dateCreated };

      try {
        const resp = await httpUpdateTask(id, updatedTask);
        modalContent("/assets/man-success.jpg", resp.data.msg);

      } catch (err) {
        modalContent("/assets/man-stress.png", err.response.data.error);
      }
    },[modalContent, id]
  );

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  useEffect(() => {
    getTask(id);
  }, [getTask, id]);

  return {
    createTask,
    updateTask,
    deleteTask,
    tasks,
    task,
  };
};

export default useTasks;

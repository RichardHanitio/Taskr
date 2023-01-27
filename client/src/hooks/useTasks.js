import { useEffect, useState, useCallback } from "react";
import {
  httpGetTasks,
  httpCreateTask,
  httpDeleteTask,
  httpUpdateTask,
  httpGetTask,
  httpGetArchivedTasks,
  httpClearArchivedTasks,
  httpRestoreTask,
} from "./requests";
import { useSearchParams } from "react-router-dom";

const useTasks = ({modalContent}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);
  const [task, setTask] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const id = searchParams.get("id");

  // GET tasks
  const getTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      const resp = await httpGetTasks();
      setTasks(
        resp.data.sort((a, b) => {
          return (
            Number(new Date(b.dateCreated).getTime()) -
            Number(new Date(a.dateCreated).getTime())
          );
        })
      );
      setIsLoading(false);
    } catch (err) {
      modalContent("/assets/man-stress.png", err.response.data.error);
    }
  }, []);

  // GET archived tasks
  const getArchivedTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      const resp = await httpGetArchivedTasks();
      setArchivedTasks(
        resp.data.sort((a, b) => {
          return (
            Number(new Date(b.dateCreated).getTime()) -
            Number(new Date(a.dateCreated).getTime())
          );
        })
      );
      setIsLoading(false);
    } catch (err) {
      modalContent("/assets/man-stress.png", err.response.data.error);
    }
  }, []);

  // DELETE archived tasks
  const clearArchivedTasks = useCallback(async() => {
    try {
      const resp = await httpClearArchivedTasks();
      getArchivedTasks();
      modalContent("/assets/man-success.jpg", resp.data.msg);
    } catch (err) {
      modalContent("/assets/man-stress.png", err.response.data.error);
    }
  }, [modalContent, getArchivedTasks]);

  const restoreArchivedTask = useCallback(async(taskId) => {
    try {
      const resp = await httpRestoreTask(taskId);
      getArchivedTasks();
      modalContent("/assets/man-success.jpg", resp.data.msg);
    } catch (err) {
      modalContent("/assets/man-stress.png", err.response.data.error);
    }
  }, [modalContent, getArchivedTasks]);

  // GET task
  const getTask = useCallback(async (taskId) => {
    if (taskId !== null) {
      try {
        const resp = await httpGetTask(taskId);
        setTask(resp.data);
      } catch (err) {
        modalContent("/assets/man-stress.png", err.response.data.error);
      }
    }
  }, []);

  // DELETE task
  const deleteTask = useCallback(
    async (taskId) => {
      try {
        const resp = await httpDeleteTask(taskId);
        await getArchivedTasks();
        modalContent("/assets/man-success.jpg", resp.data.msg);
      } catch (err) {
        modalContent("/assets/man-stress.png", err.response.data.error);
      }
    },
    [getTasks, modalContent]
  );

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
    },
    [getTasks, modalContent]
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
    },
    [modalContent, id]
  );

  const archiveTask = useCallback(
    async (taskId) => {
      const dateArchived = new Date();
      try {
        const resp = await httpUpdateTask(taskId, { dateArchived });
        await getTasks();
        modalContent("/assets/man-success.jpg", resp.data.msg);
      } catch (err) {
        modalContent("/assets/man-stress.png", err.response.data.error);
      }
    },
    [modalContent, getTasks]
  );

  useEffect(() => {
    getTasks();
    getArchivedTasks();
  }, [getTasks, getArchivedTasks]);

  useEffect(() => {
    getTask(id);
  }, [getTask, id]);

  return {
    createTask,
    updateTask,
    deleteTask,
    archiveTask,
    tasks,
    task,
    archivedTasks,
    clearArchivedTasks,
    restoreArchivedTask,
    isLoading
  };
};

export default useTasks;

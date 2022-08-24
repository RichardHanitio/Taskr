import { useEffect, useState, useCallback } from "react";
import {
  httpGetTasks,
  httpCreateTask,
  httpDeleteTask,
  httpUpdateTask,
  httpGetTask,
} from "./requests";
import useModals from "../hooks/useModals";
import { useSearchParams, useNavigate } from "react-router-dom";

const useTasks = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const { closeModal, isOpen, modalContent, content } = useModals();
  const id = searchParams.get("id");
  const navigate = useNavigate();

  // GET tasks
  const getTasks = useCallback(async () => {
    httpGetTasks()
      .then((resp) => {
        setTasks(
          resp.data.sort((a, b) => {
            return (
              Number(new Date(b.dateCreated).getTime()) -
              Number(new Date(a.dateCreated).getTime())
            );
          })
        );
      })
      .catch((err) => {
        modalContent(
          "/assets/man-stress.png",
          err.response.data.error
        );
        // openModal();
      });
  }, []);

  // GET task
  const getTask = useCallback(async (taskId) => {
    taskId &&
      (await httpGetTask(taskId)
        .then((resp) => {
          setTask(resp.data);
          setIsLoad(true);
        })
        .catch((err) => {
          modalContent(
            "/assets/man-stress.png",
            err.response.data.error
          );
          // openModal();
        }));
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  useEffect(() => {
    getTask(id);
  }, [getTask, id]);

  // DELETE task
  const deleteTask = useCallback(
    async (taskId) => {
      await httpDeleteTask(taskId)
        .then((resp) => {
          setTasks(getTasks());
          modalContent("/assets/man-success.jpg", resp.data.msg);
          // openModal();
        })
        .catch((err) => {
          modalContent(
            "/assets/man-stress.png",
            err.response.data.error
          );
          console.log(isOpen);
          // openModal();
        });
    },
    [getTasks, modalContent, isOpen]
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

      await httpCreateTask(dataObj)
        .then((resp) => {
          setTasks(getTasks());
          modalContent("/assets/man-success.jpg", resp.data.msg);
          // openModal();
          e.target.reset();
        })
        .catch((err) => {
          modalContent(
            "/assets/man-stress.png",
            err.response.data.error
          );
          // openModal();
        });
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

      await httpUpdateTask(id, updatedTask)
        .then((resp) => {
          modalContent("/assets/man-success.jpg", resp.data.msg);
          // openModal();
        })
        .catch((err) => {
          modalContent(
            "/assets/man-stress.png",
            err.response.data.error
          );
          // openModal();
        });
    },[modalContent, id]
  );

  return {
    createTask,
    updateTask,
    deleteTask,
    getTask,
    tasks,
    task,
    isLoad,
    isOpen,
    closeModal,
    content,
    id
  };
};

export default useTasks;

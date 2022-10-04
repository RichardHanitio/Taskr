import React, { useState, useEffect } from "react";
import "./listtasks.scss";
import Navbar from "../../components/common/Navbar/Navbar";
import Searchbar from "../../components/common/Searchbar/Searchbar";
import Tasks from "../../components/Tasks/Tasks";
import useTasks from "../../hooks/useTasks";
import PopUp from "../../components/common/PopUp/PopUp";
import useModals from "../../hooks/useModals";
import LoadingTasks from "../../components/common/LoadingTasks/LoadingTasks";

const ListTasks = () => {
  const { isOpen, closeModal, modalContent, content } = useModals();
  const { tasks, deleteTask, archiveTask, isLoading } = useTasks({modalContent});
  const [search, setSearch] = useState("");
  const [filteredAndSortedTask, setFilteredAndSortedTask] = useState(tasks);
  const [sortby, setSortby] = useState("date-created");

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSortOnChange = (e) => {
    setSortby(e.target.value);
  };

  useEffect(() => {
    // filter
    let filteredtasks;

    if(tasks) {
      if (search !== "") {
        filteredtasks = tasks.filter((obj) => {
          const nameArr = obj.task.split(" ");
          let flag = false;
          nameArr.forEach((name) => {
            const valid =
              name.slice(0, search.length).toLowerCase() === search.toLowerCase();
            if (valid) flag = true;
          });
          return flag;
        });
      } else {
        filteredtasks = tasks;
      }

      // sort
      if (sortby === "date-created") {
        setFilteredAndSortedTask([
          ...filteredtasks.sort((a, b) => {
            return (
              Number(new Date(b.dateCreated).getTime()) -
              Number(new Date(a.dateCreated).getTime())
            );
          }),
        ]);
      } else if (sortby === "due-date") {
        setFilteredAndSortedTask([
          ...filteredtasks.sort((a, b) => {
            return (
              Number(new Date(a.dueDate).getTime()) -
              Number(new Date(b.dueDate).getTime())
            );
          }),
        ]);
      } else if (sortby === "priority") {
        const priorityMap = new Map();
        priorityMap.set("high", 1);
        priorityMap.set("medium", 2);
        priorityMap.set("low", 3);

        setFilteredAndSortedTask([
          ...filteredtasks.sort((a, b) => {
            return (
              Number(priorityMap.get(a.priority)) -
              Number(priorityMap.get(b.priority))
            );
          }),
        ]);
      }
    }
  }, [search, sortby, tasks]);

  return (
    <section className="listtasks-section">
      <div className="listtasks-container">
        <div className="listtasks-searchbar">
          <Searchbar handleSearchInput={handleSearchInput} />
        </div>
        <div className="listtasks-sort-by">
          <span>Sort By</span>
          <select defaultValue="date-created" onChange={handleSortOnChange}>
            <option value="priority">Priority</option>
            <option value="due-date">Due Date</option>
            <option value="date-created">Date Created</option>
          </select>
        </div>
        <Navbar />

        <Tasks
          tasks={filteredAndSortedTask}
          className="listtasks-tasks"
          message={search && `No tasks with name "${search}" found`}
          deleteTask={deleteTask}
          archiveTask={archiveTask}
          isLoading={isLoading}
        />

        <PopUp open={isOpen} close={closeModal} image={content.image}>
          {content.message}
        </PopUp>
      </div>
    </section>
  );
};

export default ListTasks;

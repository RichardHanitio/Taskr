import React from 'react'
import "./listtasks.scss";
import Navbar from "../../components/common/Navbar/Navbar";
import Searchbar from "../../components/common/Searchbar/Searchbar";
import Tasks from "../../components/Tasks/Tasks";
import useTasks from "../../hooks/useTasks";

const ListTasks = () => {
  const {tasks} = useTasks();
  return (
    <section className="listtasks-section">
      <div className="listtasks-container">
        <div className="listtasks-searchbar">
          <Searchbar />
        </div>
        <div className="listtasks-sort-by">
          <span>Sort By</span>
          <select>
            <option value="priority">Priority</option>
            <option value="due-date">Due Date</option>
            <option value="date-created">Date Created</option>
          </select>
        </div>
        <Navbar />
        <Tasks tasks={tasks} className="listtasks-tasks"/>
      </div>
    </section>
  )
}

export default ListTasks
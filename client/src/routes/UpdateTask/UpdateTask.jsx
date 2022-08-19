import React from 'react'
import "./updatetask.scss";
import Form from "../../components/Form/Form";
import useTasks from "../../hooks/useTasks";

const UpdateTask = () => {
  const {task, getTask, updateTask} = useTasks();
  return (
    <section className="update-task">
      <Form mode="update" task={task} getTask={getTask} updateTask={updateTask}/>
    </section>
  )
}

export default UpdateTask
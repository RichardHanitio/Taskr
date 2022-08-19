import React from 'react'
import "./updatetask.scss";
import Form from "../../components/Form/Form";
import useTasks from "../../hooks/useTasks";

const UpdateTask = () => {
  const {task, updateTask, isLoad} = useTasks();
  return (
    <section className="update-task">
      <Form mode="update" task={task} isLoad={isLoad} updateTask={updateTask}/>
    </section>
  )
}

export default UpdateTask
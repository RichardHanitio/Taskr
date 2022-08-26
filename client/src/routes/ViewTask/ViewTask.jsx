import React, {useState, useEffect} from 'react'
import "./viewtask.scss";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import Card from "../../components/common/Card/Card";
import useTasks from "../../hooks/useTasks";
import PopUp from "../../components/common/PopUp/PopUp";
import axios from "axios";

const ViewTask = () => {
  const {deleteTask, updateTask, isOpen, closeModal, content, task} = useTasks();
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleCardDelete = () => {
    deleteTask(task._id)
  }

  const fetchImage = async() => {
    const page = Math.floor(Math.random() * (2 + 1));
    const query = "japan";
    const result = Math.floor(Math.random() * (10 + 1));

    await axios.get(
      `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=5NQBKN3TzC7F_U7hH5wLnSfv5cHfuE7AWCTJIsByOcE`
    ).then(resp => setImage(resp.data.results[result].urls.regular))
  }

  useEffect(() => {
    fetchImage();
  }, [])

  return (
    <section className="viewtask-section">
      <div className="viewtask-container">
        <div className="viewtask-back-btn" onClick={() => navigate(-1)}>
          <IoChevronBackCircleSharp className="viewtask-back-btn-icon" />
          <span>Back</span>
        </div>

        <Card task={task} deleteTask={handleCardDelete} updateTask={() => updateTask(task._id)} className="viewtask-card" image={image}/>

        <PopUp open={isOpen} close={closeModal} image={content.image}>
          {content.message}
        </PopUp>
      </div>
    </section>
  );
}

export default ViewTask
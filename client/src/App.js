import React from "react";
import Form from "./components/Form/Form";
import Navbar from "./components/common/Navbar/Navbar";
import Tasks from "./components/Tasks/Tasks";
import PopUp from "./components/common/PopUp/PopUp";

const App = () => {
  return (
    <div className="app">
      <div className="app-container">
        <Navbar />
        <Form />
        <Tasks />
        {/* <PopUp /> */}
      </div>
    </div>
  );
};

export default App;

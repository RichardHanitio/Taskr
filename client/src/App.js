import React from "react";
import NewTask from "./routes/NewTask/NewTask";
import UpdateTask from "./routes/UpdateTask/UpdateTask";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<NewTask />} />
            <Route path="update">
              <Route index element={<UpdateTask />} />
              {/* <Route path=":taskId" element={<UpdateTask />} /> */}
            </Route>
          </Route>
        </Routes>
      
      </Router>
    </div>
  );
};

export default App;

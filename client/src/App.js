import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Loading from "./components/common/Loading/Loading";

const NewTask = lazy(() => import("./routes/NewTask/NewTask"));
const UpdateTask = lazy(() => import("./routes/UpdateTask/UpdateTask"));

const App = () => {
  return (
    <div className="app">
      <img className="default-logo" src="/assets/taskr-white-logo.png" />
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/">
              <Route index element={<NewTask />} />
              <Route path="update">
                <Route index element={<UpdateTask />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;

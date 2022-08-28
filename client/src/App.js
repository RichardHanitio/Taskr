import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Loading from "./components/common/Loading/Loading";

const NewTask = lazy(() => import("./routes/NewTask/NewTask"));
const UpdateTask = lazy(() => import("./routes/UpdateTask/UpdateTask"));
const ListTasks = lazy(() => import("./routes/ListTasks/ListTasks"));
const Calendar = lazy(() => import("./routes/Calendar/Calendar"));
const ViewTask = lazy(() => import("./routes/ViewTask/ViewTask"));
const NotFound = lazy(() => import("./routes/NotFound/NotFound"))

const App = () => {
  return (
    <div className="app">
      <Router>
        <Link to="/">
          <img className="default-logo" src="/assets/taskr-white-logo.png" />
        </Link>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/">
              <Route index element={<NewTask />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/lists" element={<ListTasks />} />
              <Route path="update">
                <Route index element={<UpdateTask />} />
              </Route>
              <Route path="view">
                <Route index element={<ViewTask />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;

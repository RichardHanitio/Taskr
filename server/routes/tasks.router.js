const express = require("express");
const tasksRouter = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  getAllArchivedTasks,
  clearArchivedTasks,
  restoreArchivedTask,
  deleteArchivedTask
} = require("../controllers/tasks.controller");

tasksRouter.route("/").get(getAllTasks).post(createTask);
tasksRouter
  .route("/archived")
  .get(getAllArchivedTasks)
  .delete(clearArchivedTasks);
tasksRouter.route("/archived/:id").delete(deleteArchivedTask).patch(restoreArchivedTask);

tasksRouter.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = tasksRouter;

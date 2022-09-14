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
} = require("../controllers/tasks.controller");

tasksRouter.route("/").get(getAllTasks).post(createTask);
tasksRouter
  .route("/archived")
  .get(getAllArchivedTasks)
  .delete(clearArchivedTasks);
tasksRouter
  .route("/archived/:id")
  .patch(restoreArchivedTask)
  .delete(deleteTask)
  .get(getTask);

tasksRouter.route("/:id").get(getTask).patch(updateTask);

module.exports = tasksRouter;

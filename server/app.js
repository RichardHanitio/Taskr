const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasks.router");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to taskr api");
})

app.use("/api/v1/tasks", tasksRouter);

module.exports = app;
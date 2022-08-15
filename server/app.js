const express = require("express");
const app = express();
const cors = require("cors"); 
const tasksRouter = require("./routes/tasks.router");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to taskr api");
})

app.use("/api/v1/tasks", tasksRouter);

module.exports = app;
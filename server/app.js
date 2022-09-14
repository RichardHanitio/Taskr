require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors"); 
const tasksRouter = require("./routes/tasks.router");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/tasks", tasksRouter);

module.exports = app;
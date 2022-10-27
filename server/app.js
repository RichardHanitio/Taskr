require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const tasksRouter = require("./routes/tasks.router");
const authRouter = require("./routes/auth.router");
const path = require("path");
const helmet = require("helmet");
const passportSetup = require("./passport");
const passport = require("passport");
const cookieSession = require("cookie-session");

// * for deployment purposes only
// app.set("trust proxy", 1);
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(helmet());
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY_1, process.env.COOKIE_KEY_2],
    maxAge: 3 * 24 * 60 * 60 * 1000,
    sameSite: "none",
    // * for deployment purposes only
    // httpOnly: true,
    // secure: true,
    // domain: "taskr-tasktracker.herokuapp.com",
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


// Routers
app.use("/api/v1/tasks", tasksRouter);
app.use("/auth", authRouter);


// Frontend Router
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


module.exports = app;

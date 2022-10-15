require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const tasksRouter = require("./routes/tasks.router");
const path = require("path");
const helmet = require("helmet");
const { Strategy } = require("passport-google-oauth20");
const passport = require("passport");
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:5000",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
// );

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const AUTH_OPTIONS = {
  clientID:
    "853428429386-g6ijmg4hjt6gjorf85sh9637u089hkis.apps.googleusercontent.com",
  clientSecret: config.CLIENT_SECRET,
  // callbackURL: "/auth/google/callback",
  callbackURL: "https://taskr-tasktracker.herokuapp.com/auth/google/callback",
};

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

// app.use(helmet());
app.use(passport.initialize());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


// Tasks Router
app.use("/api/v1/tasks", tasksRouter);

// Google Auth Router
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile", "https://www.googleapis.com/auth/calendar"],
  }),
  (req, res) => {
    console.log("tes");
  }
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
    session: false,
  }),
  (req, res) => {
    console.log("Google called us back");
  }
);

// Frontend Router
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log("Google profile", profile);
  done(null, profile);
}

module.exports = app;

require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const tasksRouter = require("./routes/tasks.router");
const path = require("path");
const helmet = require("helmet");
const { Strategy } = require("passport-google-oauth20");
const passport = require("passport");
const cookieSession = require("cookie-session");

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
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};

const AUTH_OPTIONS = {
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  // callbackURL: "http://localhost:5000/auth/google/callback",
  callbackURL: "https://taskr-tasktracker.herokuapp.com/auth/google/callback",
  // callbackURL : "/auth/google/callback",
};

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(helmet());
app.use(
  cookieSession({
    name: "session",
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
    maxAge: 3 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true, 
    sameSite: "none"
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


// Tasks Router
app.use("/api/v1/tasks", tasksRouter);

// Google Auth Router
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile", "https://www.googleapis.com/auth/calendar"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "https://taskr-tasktracker.herokuapp.com",
  }),
  (req, res) => {
    console.log("google called us back");
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

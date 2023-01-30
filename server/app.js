require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const passport = require("passport");
const jwt = require("jsonwebtoken")

const app = express();
const tasksRouter = require("./routes/tasks.router");
const authRouter = require("./routes/auth.router");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const passportSetup = require("./passport")
const {setCredentials} = require("./routes/auth.router");


// * for deployment purposes only
app.set("trust proxy", 1);

// * for development purposes only
// app.use(cors({
//   origin: "http://localhost:3000",
//   methods : "GET, POST, PATCH, PUT, DELETE",
//   credentials: true,
// }));

// * for deployment purposes only
app.use(
  cors({
    origin: "https://taskr-tasktracker.netlify.com",
    methods: "GET, POST, PATCH, PUT, DELETE",
    credentials: true,
  })
);

app.use(helmet());
app.use(passport.initialize());
app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY_1, process.env.COOKIE_KEY_2],
    maxAge: 3 * 24 * 60 * 60 * 1000,
    // * for deployment purposes only
    sameSite: "none",
    httpOnly: true,
    secure: true,
    domain: "taskr-tasktracker.netlify.com",
  })
);
app.use(passport.session());
app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));
app.use(
  async(req, res, next) => {
    try {
      // check if there's token cookie
      if(req.cookies.token) {
        jwt.verify(req.cookies.token, process.env.JWT, (err, decoded) => {
          const {iat, ...tokens} = decoded;
          setCredentials(tokens)
        })
      }
    } catch (err) {
    }
    next()
  }
)

// Routers
app.use("/api/v1/tasks", tasksRouter);
app.use("/auth", authRouter);

// Frontend Router
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// app.get("/", (req, res) => {
//   res.send("Welcome to Taskr API")
// })

module.exports = app;
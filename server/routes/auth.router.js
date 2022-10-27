require("dotenv").config();

const express = require("express");
const authRouter = express.Router();
const passport = require("passport");

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile", "https://www.googleapis.com/auth/calendar"],
  })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: `${process.env.CLIENT_URL}/calendar`,
  }),
);

module.exports = authRouter;
require("dotenv").config();

const express = require("express");
const authRouter = express.Router();
const passport = require("passport");

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile", "https://www.googleapis.com/auth/calendar"],
    // harus ada accessType:offline untuk bs mendapatkan refresh token
    // refresh token hanya diberikan SEKALI saat PERTAMA SEKALI autorisasi
    accessType: "offline",
  })
);

authRouter.get(
  "/google/callback",

  passport.authenticate("google", {
    successRedirect: `${process.env.CLIENT_URL}/calendar`,
  })
)

authRouter.get("/login/success", (req, res) => {
  if(req.user) {
    return res.status(200).json({
      msg: "Login successful",
      user: req.user
    })
  }
})

module.exports = authRouter;
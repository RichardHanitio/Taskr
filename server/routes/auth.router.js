require("dotenv").config();

const express = require("express");
const authRouter = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken")

const {oAuth2Client} = require("../calendar");
const {getToken} = require("../token");

async function setCredentials(tokens) {
  const {accessToken, refreshToken} = tokens;
  if(!(accessToken || refreshToken)) {
    return;
  }
  oAuth2Client.setCredentials({
    access_token : accessToken,
    refresh_token : refreshToken,
    scope: "https://www.googleapis.com/auth/calendar",
    access_type: 'offline',
  });
}

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile", "https://www.googleapis.com/auth/calendar"],
    accessType: "offline",
  })
);

authRouter.get(
  "/google/callback",

  passport.authenticate("google", {
    passReqToCallback: true
  }), async(req, res) => {
    try {
      const tokens = await getToken(req.user.emails[0].value)
      const jwtToken = await new Promise((resolve, reject) => {
        jwt.sign(
          {accessToken: tokens.accessToken, refreshToken: tokens.refreshToken},
          process.env.JWT,
          (err, token) => {
            if(err) reject(err);
            else resolve(token);
          }
        )
      })
      res.cookie("token", jwtToken, {maxAge: 24 * 60 * 60 * 1000, httpOnly: true})
      await setCredentials(tokens)
      res.redirect(`${process.env.CLIENT_URL}/calendar`)

    } catch (err) {
      console.log(err)
    }
  }
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
module.exports.setCredentials = setCredentials;
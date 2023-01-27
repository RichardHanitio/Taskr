require("dotenv").config();

const express = require("express");
const authRouter = express.Router();
const passport = require("passport");
const {oAuth2Client} = require("../calendar");
const {getToken} = require("../token");


async function setCredentials(email) {
  const token = await getToken(email);
  if(!token) {
    return;
  }
  oAuth2Client.setCredentials({
    access_token : token.accessToken,
    refresh_token : token.refreshToken,
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
    // successRedirect: `${process.env.CLIENT_URL}/calendar`,
    passReqToCallback: true
  }), async(req, res) => {
    try {
      await setCredentials(req.user.emails[0].value)
      res.redirect(`${process.env.CLIENT_URL}/calendar`)
    } catch (err) {
      console.log(err)
    }
  }
)

authRouter.get("/login/success", (req, res) => {
  if(req.user) {
    return res.cookie("email", req.user.emails[0].value, {httpOnly: false, maxAge: 1000000000}).status(200).json({
      msg: "Login successful",
      user: req.user
    })
  }
})

module.exports = authRouter;
module.exports.setCredentials = setCredentials;
require("dotenv").config();

const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");

const AUTH_OPTIONS = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "auth/google/callback",
};

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

app.use(passport.initialize());

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile", "https://www.googleapis.com/auth/calendar"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/",
    session: false,
  })
);

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log("Google profile", profile);
  done(null, profile);
}
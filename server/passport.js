require("dotenv").config();

const { Strategy:GoogleStrategy } = require("passport-google-oauth20");
const passport = require("passport");
const fs = require("fs");

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const AUTH_OPTIONS = {
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  // * for deployment purposes only
  // callbackURL: "https://taskr-tasktracker.herokuapp.com/auth/google/callback",

  // * for development purposes only
  callbackURL: "/auth/google/callback",
};

passport.use(new GoogleStrategy(AUTH_OPTIONS, verifyCallback));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

function verifyCallback(accessToken, refreshToken, profile, done) {
  const tokens = {
    accessToken : accessToken,
    refreshToken : refreshToken,
  }

  fs.writeFile("token.json", JSON.stringify(tokens), {encoding: "utf8", flag: "w"}, (err) => console.log(err))

  done(null, profile);
}

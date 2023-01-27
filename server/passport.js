require("dotenv").config();

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
// const fs = require("fs");
const {saveToken} = require("./token")

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

async function verifyCallback(accessToken, refreshToken, profile, done) {
  // const tokens = {
  //   accessToken : accessToken,
  //   refreshToken : refreshToken,
  // }

  // fs.writeFile("token.json", JSON.stringify(tokens), {encoding: "utf8", flag: "w"}, (err) => console.log(err))

  console.log(profile.emails[0].value)
  await saveToken(profile.emails[0].value, accessToken, refreshToken)

  done(null, profile);
}

require("dotenv").config();
const { google } = require("googleapis");
const { OAuth2 } = google.auth;

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

const oAuth2Client = new OAuth2(
  config.CLIENT_ID,
  config.CLIENT_SECRET,
  // * for deployment purposes only
  // callbackURL: "https://taskr-tasktracker.herokuapp.com/auth/google/callback",

  // * for development purposes only
  "/auth/google/callback",
);

oAuth2Client.setCredentials({
  access_token: process.env.ACCESS_TOKEN,
  refresh_token: process.env.REFRESH_TOKEN,
  scope: "https://www.googleapis.com/auth/calendar",
  // access_type: 'offline',
  // expiry_date: '1469787756005'
});

const calendar = google.calendar({ version: "v3", auth: oAuth2Client });


module.exports = calendar;
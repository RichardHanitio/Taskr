require("dotenv").config();
const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const oAuth2Client = new OAuth2(
  config.CLIENT_ID,
  config.CLIENT_SECRET,
  // * for deployment purposes only
  "https://taskr-tasktracker.netlify.com/auth/google/callback",

  // * for development purposes only
  // "/auth/google/callback",
);

const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

module.exports = {
  calendar,
  oAuth2Client
};
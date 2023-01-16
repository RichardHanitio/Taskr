require("dotenv").config();
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const fs = require("fs");
const path = require("path");
const process = require("process");

const TOKEN_PATH = path.join(process.cwd(), "token.json")

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
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
  access_token: JSON.parse(fs.readFileSync(TOKEN_PATH)).accessToken,
  refresh_token: JSON.parse(fs.readFileSync(TOKEN_PATH)).refreshToken,
  scope: "https://www.googleapis.com/auth/calendar",
  access_type: 'offline',
  expiry_date: '1469787756005'
});

const calendar = google.calendar({ version: "v3", auth: oAuth2Client });


module.exports = calendar;
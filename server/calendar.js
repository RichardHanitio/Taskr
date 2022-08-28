const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(
  "853428429386-h72n332nu3le2b4teqs9he2qnkc6v66o.apps.googleusercontent.com",
  "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"
);

oAuth2Client.setCredentials({
  refresh_token:
    "1//04lV7C8b2j07eCgYIARAAGAQSNwF-L9Ir9EhFtDih7-S7Zbjm1qYcYMkpUJVGh83sd0ysBGtAXLLhdSqczxnYeuU12OCBXmS7SwI",
});

const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

module.exports = calendar;
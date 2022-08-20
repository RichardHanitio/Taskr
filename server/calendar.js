const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(
  "853428429386-llvqnkomv3igo6ghdaqjtd9msp3orvki.apps.googleusercontent.com",
  "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"
);

oAuth2Client.setCredentials({
  refresh_token:
    "1//04Ejq2wj831EhCgYIARAAGAQSNwF-L9Irns7b20T8Tw_oC37-q54Y0ZTDXqy4h8cYQ39YI-4qWExXzOkCfmPRvDJJTafU7ng1pw8",
});

const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

module.exports = calendar;
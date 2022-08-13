require("dotenv").config();

const http = require("http");
const app = require("./app");

const myServer = http.createServer(app);

myServer.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});

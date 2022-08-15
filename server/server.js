require("dotenv").config();

const http = require("http");
const app = require("./app");
const connectDB = require("./db");

const myServer = http.createServer(app);

const startServer = async() => {
  await connectDB(process.env.MONGODB_URL).then(resp => console.log(resp))
  .catch(err => console.log(err))

  myServer.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}...`);
  });
}

startServer();

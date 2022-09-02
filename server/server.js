require("dotenv").config();

const http = require("http");
const app = require("./app");
const connectDB = require("./db");

const PORT = process.env.PORT ||5000;

const myServer = http.createServer(app);

const startServer = async() => {
  await connectDB(process.env.MONGODB_URL).then(resp => console.log(resp))
  .catch(err => console.log(err))

  myServer.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();

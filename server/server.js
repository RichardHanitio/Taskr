require("dotenv").config();

const http = require("http");
const app = require("./app");
const connectDB = require("./db");

const port = process.env.PORT || 5000;

const myServer = http.createServer(app);

const startServer = async() => {
  await connectDB(
    "mongodb+srv://richardhan:JMc1LqHR6mf3FfDC@taskr-tasktracker-clust.genyqxo.mongodb.net/taskr?retryWrites=true&w=majority"
  )
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));

  myServer.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
}

startServer();

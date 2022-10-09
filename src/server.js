const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const http = require("http");
const socketIo = require("socket.io");
const server = http.Server(app);
const io = socketIo(server);

require("./app_config/defineEnv")();
require("./app_config/mainRouter")(app);
require("./app_config/db")();

const port = process.env.PORT || 8000;

const exportServer = server.listen(port, () =>
  console.log(`Listening on ${port}`)
);
module.exports = exportServer;

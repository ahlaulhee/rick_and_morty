const express = require("express");
const getCharById = require("./controllers/getCharById");
const cors = require("cors");
const router = require("./routes");
const server = express();
const PORT = 3001;
const { conn } = require("./DB_connection");

conn();
server.use(cors());
server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log(`Server raised in port: ${PORT}`);
});

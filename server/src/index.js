const express = require("express");
const getCharById = require("./controllers/getCharById");
// const cors = require("cors");
const router = require("./routes");
const server = express();
const PORT = 3001;

// server.use(cors());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(express.json());
server.use("/rickandmorty", router);

// server.get("/rickandmorty/character/:id", async (req, res) => {
//   try {
//     const characterId = req.params.id;
//     const char = await getCharById(req, res);
//     res.json(char);
//   } catch (err) {
//     console.error(err);
//     res
//       .status(500)
//       .send("An error occurred while fetching the character data.");
//   }
//   // res.status(200).send(getCharById());
// });
// server.get("/login", (req, res) => {
//   res.send("Hello World!");
// });
// server.post("/postFav", (req, res) => {
//   res.send("Hello World!");
// });
// server.delete("/postFav", (req, res) => {
//   res.send("Hello World!");
// });

server.listen(PORT, () => {
  console.log(`Server raised in port: ${PORT}`);
});

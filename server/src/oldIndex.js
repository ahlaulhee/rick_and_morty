var http = require("http");
var url = require("url");
const getCharById = require("./controllers/getCharById");

// var characters = require("./utils/data");

const PORT = 3001;

module.exports = http
  .createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const parsedUrl = url.parse(req.url);
    const urlSegments = parsedUrl.pathname.split("/");

    if (urlSegments[1] === "rickandmorty" && urlSegments[2] === "character") {
      // res.writeHead(200, { "Content-Type": "application/json" });

      // const characterId = urlSegments[3];
      // let char = {};
      // characters.forEach((element) => {
      //   if (element.id == characterId) {
      //     char = element;
      //   }
      // });
      // res.end(JSON.stringify(char));

      res.writeHead(200, { "Content-Type": "application/json" });
      const characterId = urlSegments[3];
      let char = await getCharById(characterId);
      console.log(char);
      res.end(JSON.stringify(char));
    }
  })
  .listen(PORT, "localhost");

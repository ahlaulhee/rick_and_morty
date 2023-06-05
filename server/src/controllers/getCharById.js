const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;
  return axios
    .get(`${URL}${id}`)
    .then((response) => response.data)
    .then(
      (data) => {
        const char = {
          id: data.id,
          name: data.name,
          image: data.gender,
          species: data.species,
          origin: data.origin,
          image: data.image,
          status: data.status,
        };
        res.status(200).json(char);
      },
      (err) => {
        res.status(404).send(err.message);
      }
    )
    .catch((err) => {
      return res.status(500).send(err.message);
    });
};

module.exports = getCharById;

// const axios = require("axios");

// const getCharById = (id) => {
//   return axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then((data) => {
//       const char = {
//         id: data.id,
//         name: data.name,
//         image: data.gender,
//         species: data.species,
//         origin: data.origin,
//         image: data.image,
//         status: data.status,
//       };
//       return {
//         status: 200,
//         data: char,
//       };
//     })
//     .catch((err) => {
//       return { status: 500, "Content-Type": "text-plain", error: err.message };
//     });
// };

// module.exports = getCharById;

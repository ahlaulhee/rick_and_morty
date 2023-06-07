const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${URL}${id}`);
    const char = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.gender,
      species: response.data.species,
      origin: response.data.origin,
      image: response.data.image,
      status: response.data.status,
    };
    // if (response.data.name) {
    res.status(200).json(char);
    // } else {
    //   res.status(404).json({ error: "Not Found" });
    // }
  } catch (error) {
    res.status(500).json(error.message);
  }
  // return axios
  //   .get(`${URL}${id}`)
  //   .then((response) => response.data)
  //   .then(
  //     (data) => {
  //       const char = {
  //         id: data.id,
  //         name: data.name,
  //         image: data.gender,
  //         species: data.species,
  //         origin: data.origin,
  //         image: data.image,
  //         status: data.status,
  //       };
  //       res.status(200).json(char);
  //     },
  //     (err) => {
  //       res.status(404).send(err.message);
  //     }
  //   )
  //   .catch((err) => {
  //     return res.status(500).send(err.message);
  //   });
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

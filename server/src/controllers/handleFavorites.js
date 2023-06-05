let myFavorites = [];

const postFav = (req, res) => {
  const char = req.body;
  myFavorites.push(char);
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const id = req.params.id;
  myFavorites.filter((f) => f.id !== id);
  res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};

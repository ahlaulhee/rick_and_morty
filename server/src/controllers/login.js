const myUsers = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  myUsers.forEach((element) => {
    if (email === element.email && password === element.password) {
      res.status(200).json({ access: true });
    }
  });

  // res.status(404).json({ access: false });
};

module.exports = login;

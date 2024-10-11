const { User } = require("../../models/Users");

const registerctrls = (req, res) => {
  // implement logic to register user and handle response
  const user = new User(req.body);
  user
    .save()
    .then((d) => {
      res.status(200).json({ message: "User registered successfully" });
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to register user" + err });
    });
};

module.exports = registerctrls;

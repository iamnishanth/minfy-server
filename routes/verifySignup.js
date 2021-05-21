const User = require("../models/users");

const verifySignup = async (req, res) => {
  User.findOne({ randomString: req.body.hash }, async (err, result) => {
    if (result) {
      result.isActive = true;
      result.randomString = "";
      await result.save();
      res.json({ verified: true, message: "URL verfied. Account activated." });
    } else {
      res.json({ verfied: false, message: "Invalid URL" });
    }
  });
};

module.exports = verifySignup;

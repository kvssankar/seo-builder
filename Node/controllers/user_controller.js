const User = require("../models/user");

module.exports.createSession = async function (req, res) {
  console.log("creating session");

  return res.redirect("/");
};

module.exports.destroySession = function (req, res) {
  req.logout();

  return res.redirect("/");
};

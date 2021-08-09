module.exports.home = function (req, res) {
  res.render("home", { user: req.user });
};

module.exports.login = function (req, res) {
  res.render("login");
};

module.exports.upload = function (req, res) {
  res.render("upload");
};


module.exports.uploadfile = async function (req, res) {
  link = req.file.location;
  
  res.render("success",{link:link});
};

var path = require("path");
var friends = require("../data/friends.js")

module.exports = function (app) {

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.post("/api/friends", function(req, res) {
    var newfriend = req.body;
  
    console.log(newfriend);
    friends.push(newfriend);
  })
}
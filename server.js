// Dependencies
var express = require("express");
var router = express.Router();
var path = require("path");
var friends = require("./app/data/friends.js")

// Intializes express app
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Static assets that wont be routed
app.use(express.static("app/public"));
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);


app.post("/api/friends", function(req, res) {
  var newfriend = req.body;

  console.log(newfriend);
  friends.push(newfriend);
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
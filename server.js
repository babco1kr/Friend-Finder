// Dependencies
var express = require("express");
var path = require("path");

// Intializes express app
var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
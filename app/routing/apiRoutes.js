var friends = require("../data/friends.js");

module.exports = function(app) {
// Shows array of friends on the page
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    //assigning the request info to a variable
    var newfriend = req.body;
  
    console.log(newfriend);
    var totalDifference = 99999999999999;
    var match;

    for (i = 0; i < friends.length; i++) {
      var newTotalDifference = 0;

      // Runs through the users finding the difference between users scores and potential matches
      for (j = 0; j < friends[i].scores.length; j++){
        newTotalDifference += Math.abs(parseInt(newfriend.scores[j]) - parseInt(friends[i].scores[j]));
      }
      // Checks to see if the users scores are closer to
      if (newTotalDifference < totalDifference) {
        totalDifference = newTotalDifference;
        match = friends[i];
      }
      
    }
    // Pushes new users info to the friends array to be used later when other users submit
    friends.push(newfriend);
    res.json(match);
  })
  
}
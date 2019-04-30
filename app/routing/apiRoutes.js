const express = require("express");

const app = express();

app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
  
    console.log(newFriend);
  
    // todo Compatibility comparison setup

    friends.push(newFriend);
  
    res.json(newFriend);
  });
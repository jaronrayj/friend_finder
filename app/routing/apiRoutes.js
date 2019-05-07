var friends = require("../data/friends");

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;

        console.log(newFriend);

        // todo Compatibility comparison setup

        let compareScore = 100;

        for (let i = 0; i < friends.length; i++) {

            let currentFriend = friends[i];

            newBestFriend(newFriend, currentFriend, compareScore)

            compareScore = newBFF.score;
            console.log("TCL: compareScore", compareScore);

        }

        friends.push(newFriend);

        res.json(newFriend);
    });

    function newBestFriend(newFriend, currentFriend, compareScore) {
        let newFriend = newFriend;
        let currentFriend = currentFriend
        let combineFriendsScore = [];
        let newBFF;

        for (let i = 0; i < newFriend.score.length; i++) {
            let newFriendQ = newFriend.score[i];
            let currentFriendQ = currentFriend.score[i];

            let combinedScore = Math.abs(newFriendQ - currentFriendQ);
            combineFriendsScore.push(combinedScore);
        }

        let friendTotal = 0;

        for (let i = 0; i < combineFriendsScore.length; i++) {
            friendTotal += combineFriendsScore[i];
        }

        if (friendTotal < compareScore) {
            newBFF = {
                currentFriend: currentFriend,
                score: friendTotal
            };
            return newBFF;
        } else {
            return currentFriend;
        }


    }
}


totalDifference;

for (var i = 0; i<friends.lengh; i++){
    var currentFriend = friends[i];
    totalDifference = 0;

    for (let j = 0; j < currentFriend.score.length; j++) {
        var currentFriendScore = currentFriend.score[j];
        var currentUserScore = userScore[j];

        totalDifference += Math.abs(parseInt(currentUserScore) - Math.abs(parseInt(currentFriendScore)));
    }
}
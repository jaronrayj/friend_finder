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

        let newFriendScore = addScores(newFriend.score);

        let newBFF;

        for (let i = 0; i < friends.length; i++) {

            let currentFriendScore = addScores(friends[i].score);



            let compareFriendScore = Math.abs(newFriendScore - currentFriendScore);
            if (compareFriendScore < compareScore) {
                compareScore = currentFriendScore
                newBFF = friends[i];
            }

        }

        console.log(newFriend);

        friends.push(newFriend);

        res.json(newBFF);
    });

    function addScores(userScores) {
        let combinedScore = 0;
        for (let i = 0; i < userScores.length; i++) {
            let currentScore = parseInt(userScores[i]);
            combinedScore += currentScore;
        }
        return combinedScore;
    }

}
let friends = require('../data/friends')
module.exports = function (app) {


    app.get('/api/friends', (req, res) => {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        console.log("req body: ", req.body)
        let newFriend = req.body;
        let likeness;
        let arr = [];

        friends.forEach(friend => {
            let score = 0;

            for (var i = 0; i < friends.score.length; i++) {
                score += Math.abs(parseInt(friend.score[i]) - parseInt(newFriend.scores[i]));
            };

            arr.push({
                name: friend.name,
                score: score,
                photo: friend.photo
            });
        })

        let match = arr.reduce((carry, next) => {
            if (carry.score < next.score)
                return carry;
            else
                return next;
        })


        friends.push(newFriend)
        res.send(match)
    });



};
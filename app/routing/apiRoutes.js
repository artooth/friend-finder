let friends = require('../data/friends')
module.exports = function (app) {


    app.get('/api/friends', (req, res) => {
        res.json(friends)
    });

    app.post("/api/new", function (req, res) {
        console.log("req body: ", req.body)


    });



};
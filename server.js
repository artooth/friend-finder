let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

let app = express();

let PORT = process.env.PORT || 8080;




app.listen(PORT, function () {
    console.log("Server listneing on: http://localhost:" + PORT);
});
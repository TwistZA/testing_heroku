// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

app.set("view engine","ejs");



app.get("/", function(req, res) {
    res.render("home");
});

app.get("/about", function(req, res) {
    res.render("about");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, process.env.IP,function() {
  console.log("Your app is listening on port " + listener.address().port);
});

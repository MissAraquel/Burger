//Import express and burger.js 
//Create the router for the app, and export the router at the end of your file.

var express = require("express");

var router = express.Router();

//Import burger model to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/index");
});

router.get("/index", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { burgers: data };
        res.render("index", hbsObject);
    });
});

router.post("/add/burger", function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect("/index");
    });
});

router.post("/burger/eat/:id", function (req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect("/index");
    });
});

// Export routes for server.js to use.
module.exports = router;
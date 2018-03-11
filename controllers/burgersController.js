var express = require('express');
var router = express.Router();
// not entirely sure what express.Router() does

// import the model (burger.js) to use its database functions
var burger = require('../models/burger.js');

// create all our routes and set up logic within those routes
router.get('/', function(req, res) {
    burger.all(function(data) {
         var hbsObject = { // handlebars object?
             burgers: data
         };
         console.log(hbsObject);
         res.render('index', hbsObject);      
    }); 
});

// everything is displayed on index page?
router.post("/test", function (req, res) {
    burger.insertOne([
        'burger_name', 'devoured'
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        // send back the ID of the new burger
        res.json({id: result.insertId})
    });
}); // unsure what insertId is

router.put("/test2", function (req, res) {
    // insert logic here to change devoured from false to true probably...
});

module.exports = router;

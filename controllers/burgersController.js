var express = require('express');
var router = express.Router();

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
         // what happens when we render hbsObject     
    }); 
});

router.post('/api/burgers/', function (req, res) {
    burger.create([
        'burger_name', 'devoured'
    ], [
        req.body.burger_name, '0'
    ], function (result) {
        // send back the ID of the new burger
        res.json({id: result.insertId}) // ask about how insertId works
    });
}); 

router.put('/api/burgers/:id', function (req, res) {
    var condition = `id = ${req.params.id}`
    burger.update(condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;

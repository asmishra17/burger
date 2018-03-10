// import the ORM to create functions that will interact with the database. 
var orm = require('../config/orm.js')

var burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        })
    }, insertOne: function (colName1, colName2, value1, value2) {
        orm.insertOne('burgers', colName1, colName2, value1, value2, function (res) {
            cb(res);
        })
    }, updateOne: function (colName1, value1, colName2, value2) {
        orm.updateOne('burgers', colName1, colName2, value1, value2, function (res) {
            cb(res);
        });
    }
};

// export the database functions for the controller
module.exports = burger;
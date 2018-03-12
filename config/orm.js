var connection = require('./connection.js');

module.exports = {
    selectAll: function(tableInput, cb) {
        var queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, function(err, result) {
            
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    insertOne: function (tableInput, cols, vals, cb) {
        var queryString = `INSERT INTO ${tableInput} (${cols.toString()}) VALUES ("${vals[0]}", "${vals[1]}")`
        connection.query(queryString, function (err, result){
            
            if (err) {
                throw err;
            }

            cb(result);
        })
    }, 
    updateOne: function (tableInput, condition, cb) {
        var queryString = `UPDATE ${tableInput} SET devoured = true WHERE ${condition};`;
        
        connection.query(queryString, function (err, result) {

            if (err) {
                throw err;
            }
            
            cb(result);
        });
    }
}
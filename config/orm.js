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
        var queryString = `INSERT INTO ${tableInput} (${cols.toString()}) VALUES ("${vals[0]}", "${vals[1]}", "${vals[2]}")`

        console.log(queryString);

        connection.query(queryString, function (err, result){
            if (err) {
                throw err;
            }
            cb(result);
        })
    }, 
    updateOne: function (tableInput, cols, vals, condition, cb) {
        var queryString = `UPDATE ${tableInput} SET ${cols} = ${vals}, WHERE ${condition};`;
        
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}
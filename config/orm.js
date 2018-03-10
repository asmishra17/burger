var connection = require('./connection.js');

module.exports = {
    selectAll: function(tableInput) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInput], function(err, result){
            if (err) {
                throw err;
            }
            console.log(result);
        });
    },
    insertOne: function (tableInput, colName1, colName2, value1, value2) {
        var queryString = 'INSERT INTO ?? (??, ??) VALUES ("?", "?")';
        connection.query(queryString, [tableInput, colName1, colName2, value1, value2], function (err, result){
            if (err) {
                throw err;
            }
            console.log(result);
        })
    }, 
    updateOne: function (tableInput, colName1, value1, colName2, value2) {
        var queryString = 'UPDATE ?? SET ?? = ?, WHERE ?? = ?;';
        connection.query(queryString, [tableInput, colName1, value1, colName2, value2], function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
        })
    }
}
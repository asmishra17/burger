var connection = require("./connection.js");

module.exports = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result){
            if (err) {
                throw err;
            }
            console.log(result);
        });
    },
}
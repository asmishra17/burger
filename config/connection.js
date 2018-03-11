var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // should be the same as server.js?

    user: 'root',
    password: '',

    database: 'burgers_db'
});

connection.connect(function(err) {
    if (err) {
        console.error(`Error connection: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
})

module.exports = connection;
module.exports = mysql.creatConnection({
    host: 'localhost',
    port: process.env.PORT || 3000,
    // should be the same as server.js?

    user: 'root',
    password: '',

    database: 'burgers'
});


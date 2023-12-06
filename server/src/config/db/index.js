const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'L@c02032003',
    database: 'QUANLYINAN'
}, function (err) {
    if (err) {
        console.log('Error while connecting to database', err);
    } else {
        console.log('Database connected successfully');
    }

});

module.exports = db


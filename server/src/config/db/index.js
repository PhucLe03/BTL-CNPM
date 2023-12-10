const mysql = require("mysql2");

const data = require('./credentials.json');

const db = mysql.createConnection(
    {
        host: "localhost",
        user: data.user || "root",
        password: data.password || "L@c02032003",
        database: "QUANLYINAN",
    },
    function (err) {
        if (err) {
            console.log("Error while connecting to database", err);
        } else {
            console.log("Database connected successfully");
        }
    }
);

module.exports = db;

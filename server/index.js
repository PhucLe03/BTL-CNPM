const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
const db = require('./src/config/db')

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.connect();
routes(app);

const PORT = 8888;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Running server on http://${HOST}:${PORT}`);
});
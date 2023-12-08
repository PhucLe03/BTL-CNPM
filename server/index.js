const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
const db = require('./src/config/db')
const paypal = require('paypal-rest-sdk');


var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.connect();
routes(app);

const PORT = 8888;
const HOST = '0.0.0.0';


paypal.configure({
    'mode': 'sandbox', 
    'client_id': 'ASaVJgY9vlZf2fHE8MqBEw116Zi07QbvwoURdjFjmHZ78GU4BKAynekX7NlfWuiFUNR_d3o0L1k_8iKT',
    'client_secret': 'EKVWTKLh65oPzF6m-L-UhNFyg2_UH6CBpQ9mEWilmLfZhoS0LLPuqqLmcIl_db_axWjGHK4bNcaQ-Nww',
});

app.listen(PORT, HOST, () => {
    console.log(`Running server on http://${HOST}:${PORT}`);
});
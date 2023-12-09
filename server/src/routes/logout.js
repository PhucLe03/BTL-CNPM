const express = require("express");
const router = express.Router()
const fs = require('fs');

router.get('/', (req, res) => {
    const fileName = './src/config/db/credentials.json'
    const data = {
        user: "",
        password: ""
    }
    fs.writeFileSync(fileName, JSON.stringify(data));
    res.status(200).send({ message: "success" })
})




// router.get('/export', DeTaiController.Export)
module.exports = router;
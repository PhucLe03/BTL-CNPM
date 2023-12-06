const express = require("express");
const router = express.Router()
const db = require('../config/db')

router.post('/', (req, res) => {
    const { username, password } = req.body
    const sql = `SELECT * FROM TAIKHOAN WHERE tendangnhap = '${username}' AND pwd = '${password}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        if (result.length > 0) {
            res.json({
                status: 200,
                message: "success",
                data: result[0]
            })
        } else {
            res.json({
                status: 400,
                message: "failed"
            })
        }
    })
})

module.exports = router;
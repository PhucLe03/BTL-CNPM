const express = require("express");
const router = express.Router()
const ThongKeController = require('../controllers/ThongKeController');

router.post('/export',ThongKeController.Export)

module.exports = router
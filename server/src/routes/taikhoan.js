const express = require("express");
const router = express.Router()
const TaiKhoanController = require('../controllers/TaiKhoanController')

router.get('/', TaiKhoanController.Index)
router.post('/store', TaiKhoanController.Store)
router.put('/update/', TaiKhoanController.Update)
router.delete('/delete/:idTaiKhoan', TaiKhoanController.Delete)
//-----------------------------------------------------



//-----------------------------------------------------


module.exports = router
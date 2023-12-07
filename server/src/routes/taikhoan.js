const express = require("express");
const router = express.Router()
const TaiKhoanController = require('../controllers/TaiKhoanController')

router.get('/', TaiKhoanController.Index)
router.post('/store', TaiKhoanController.Store)
router.put('/update/', TaiKhoanController.Update)
router.delete('/delete/:id', TaiKhoanController.Delete)
//-----------------------------------------------------
router.get('/find/:attr/:keyword', TaiKhoanController.FindByAttrByKeyword)


//-----------------------------------------------------


module.exports = router
const express = require("express");
const router = express.Router()
const TaiLieuController = require('../controllers/TaiLieuController')

router.get('/', TaiLieuController.Index)
router.post('/store', TaiLieuController.Store)
router.put('/update/', TaiLieuController.Update)
router.delete('/delete/:id', TaiLieuController.Delete)
//-----------------------------------------------------
router.get('/find/:attr/:keyword', TaiLieuController.FindByAttrByKeyword)
router.get('/findbytk/:id', TaiLieuController.FindByTaiKhoan)


//-----------------------------------------------------


module.exports = router
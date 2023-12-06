const express = require("express");
const router = express.Router()
const TaiLieuController = require('../controllers/TaiLieuController')

router.get('/', TaiLieuController.Index)
router.post('/store', TaiLieuController.Store)
router.put('/update/', TaiLieuController.Update)
router.delete('/delete/:idTaiLieu', TaiLieuController.Delete)
//-----------------------------------------------------



//-----------------------------------------------------


module.exports = router
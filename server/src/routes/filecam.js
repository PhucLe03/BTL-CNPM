const express = require("express");
const router = express.Router()
const FileCamController = require('../controllers/FileCamController');
const { route } = require("./taikhoan");

router.get('/', FileCamController.Index)
router.post('/store', FileCamController.Store)
router.put('/update/', FileCamController.Update)
router.delete('/delete/:id', FileCamController.Delete)
//-----------------------------------------------------
router.get('/find/:attr/:keyword', FileCamController.FindByAttrByKeyword)


//-----------------------------------------------------
router.get('/d4page/:page', FileCamController.D4PageUpdate)

module.exports = router
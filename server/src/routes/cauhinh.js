const express = require("express");
const router = express.Router()
const FileCamController = require('../controllers/FileCamController')

router.get('/', FileCamController.Index)
router.post('/store', FileCamController.Store)
router.put('/update/', FileCamController.Update)
router.delete('/delete/:idFileCam', FileCamController.Delete)
//-----------------------------------------------------



//-----------------------------------------------------


module.exports = router
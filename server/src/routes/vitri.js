const express = require("express");
const router = express.Router()
const ViTriController = require('../controllers/ViTriController')

router.get('/', ViTriController.Index)
router.post('/store', ViTriController.Store)
router.put('/update/', ViTriController.Update)
router.delete('/delete/:id', ViTriController.Delete)
//-----------------------------------------------------
router.get('/find/:attr/:keyword', ViTriController.FindByAttrAndKeyWord)


//-----------------------------------------------------


module.exports = router
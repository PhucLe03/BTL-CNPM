const express = require("express");
const router = express.Router()
const MayInController = require('../controllers/MayInController');
const { route } = require("./vitri");

router.get('/', MayInController.Index)
router.post('/store', MayInController.Store)
router.put('/update', MayInController.Update)
router.delete('/delete/:ID', MayInController.Delete)
//-----------------------------------------------------
router.get('/find/:attr/:keyword', MayInController.FindByAttrAndKeyWord)


//-----------------------------------------------------
router.get('/findByViTri/:id', MayInController.FindByViTri)

module.exports = router
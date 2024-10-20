const express=require('express')
const router=express.Router()
const controller=require('../adminController/adminController')
const uploades=require('../multer')

router.post('/saveData',uploades.single('image'),controller.saveData)

router.get('/getData',controller.getData)

router.get('/viewData/:id',controller.viewData)

router.delete('/deleteData/:id', controller.deleteData)

router.put('/updateData/:id',controller.updateData)

module.exports=router
const { Router } = require('express')
const router = Router()
const { userController } = require('../controllers/users.controller')

router.post('/admin/user', userController.addUser)
router.delete('/admin/user/:id', userController.deleteUser)
router.patch('/admin/blocked/user/:userid', userController.blockUser)
router.get('/admin/user', userController.getUsers)
router.patch('/user/:userid/book/:bookid', userController.rentBook)
router.patch('/user/give/:userid/book/:bookid', userController.giveTheBook)

module.exports = router
const { Router } = require('express')
const router = Router()
const { userController } = require('../controllers/users.controller')

router.post('/admin/user', userController.addUser)
router.delete('/admin/user/:id', userController.deleteUser)
// router.patch('/admin/user/:id', userController.updateUser)
router.get('/admin/user', userController.getUsers)
router.get('/admin/user', userController.rentBook)

module.exports = router
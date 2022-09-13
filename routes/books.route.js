const { Router } = require('express')
const router = Router()
const { bookController } = require('../controllers/books.controller')

router.post('/admin/book', bookController.addBook)
router.delete('/admin/book/:id', bookController.deleteBook)
router.patch('/admin/book/:id', bookController.updateBook)
router.get('/admin/book', bookController.getBooks)

module.exports = router
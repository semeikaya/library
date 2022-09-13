const { Router } = require('express')
const router = Router()
const { genreController } = require('../controllers/genres.controller')

router.post('/admin/genre', genreController.addGenre)
router.delete('/admin/genre/:id', genreController.deleteGenre)
router.patch('/admin/genre/:id', genreController.updateGenre)
router.get('/admin/genre', genreController.getGenres)

module.exports = router
const { Router } = require('express')
const router = Router()
const { reviewController } = require('../controllers/reviews.controller')

router.post('/admin/review', reviewController.addReview)
router.delete('/admin/review/:id', reviewController.deleteReview)
router.patch('/admin/review/:id', reviewController.updateReview)
router.get('/admin/review', reviewController.getReview)

module.exports = router
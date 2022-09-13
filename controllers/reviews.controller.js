const Review = require('../models/Review.model.js')
module.exports.reviewController = {
    addReview: async (req, res) => {
        const { text, userId, bookId } = req.body
        try {
            await Review.create({
                text,
                userId,
                bookId
            })
            res.json('Отзыв добавлен')
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteReview: async (req, res) => {
        try {
            await Review.findByIdAndRemove(req.params.id)
            res.json('Отзыв удален!')
        } catch (error) {
            res.json(error.message)
        }
    },
    updateReview: async (req, res) => {
        const { name, genre, userId } = req.body
        try {
            await Review.findByIdAndUpdate(req.params.id, {
                name,
                genre,
                userId
            })
            res.json('Изменения сохранены')
        } catch (error) {
            res.json(error.message)
        }
    },
    getReview: async (req, res) => {
        try {
            const review = await Review.find().populate('userId bookId')
            res.json(review)
        } catch (error) {
            res.json(error.message)
        }
    },

}
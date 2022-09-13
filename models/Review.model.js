const mongoose = require('mongoose')
const reviewSchema = mongoose.Schema({
    text: {type: String, required: true},
    userId: { type: mongoose.SchemaTypes.ObjectId, required: true },
    bookId: { type: mongoose.SchemaTypes.ObjectId, required: true },
})

const Review = mongoose.model('Review', reviewSchema)
module.exports = Review
const mongoose = require('mongoose')
const bookSchema = mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: mongoose.SchemaTypes.ObjectId, required: true },
    userId: { type: mongoose.SchemaTypes.ObjectId,}
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book
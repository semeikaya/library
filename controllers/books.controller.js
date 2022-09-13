const Book = require('../models/Book.model.js')


module.exports.bookController = {
    addBook: async (req, res) => {
        const { name, genre, userId } = req.body
        try {
            await Book.create({
                name,
                genre,
                userId
            })
            res.json('Книга добавлена')
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteBook: async (req, res) => {
        try {
            await Book.findByIdAndRemove(req.params.id)
            res.json('Книга удалена!')
        } catch (error) {
            res.json(error.message)
        }
    },
    updateBook: async (req, res) => {
        const { name, genre, userId } = req.body
        try {
            await Book.findByIdAndUpdate(req.params.id, {
                name,
                genre,
                userId
            })
            res.json('Изменения сохранены')
        } catch (error) {
            res.json(error.message)
        }
    },
    getBooks: async (req, res) => {
        try {
            const books = await Book.find().populate('genre userId')
            res.json(books)
        } catch (error) {
            res.json(error.message)
        }
    },
    getBooksByGenreId: async (req, res) => {
        try {
            const book = await Book.find({ genre: req.params.id })
            res.json(book)
        } catch (error) {
            res.json(error.message)
        }
    },
    getBookById: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id)
            res.json(book)
        } catch (error) {
            res.json(error.message)
        }
    },
}
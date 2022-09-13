const User = require('../models/User.model.js')
const Book = require('../models/Book.model.js')
module.exports.userController = {
    addUser: async (req, res) => {
        const { name, isBlocked } = req.body
        try {
            await User.create({
                name,
                isBlocked
            })
            res.json('Юзер добавлен')
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndRemove(req.params.id)
            res.json('Юзер удален')
        } catch (error) {
            res.json(error.message)
        }
    },
    getUsers: async (req, res) => {
        try {
            const users = await User.find()
            res.json(users)
        } catch (error) {
            res.json(error.message)
        }
    },
    rentBook: async (req, res) => {
        const user = await User.findById(req.params.userid)
        const book = await Book.findById(req.params.bookid)
        try {
            if (user.isBlocked === true) {
                res.json('Вы заблокированы')
            }
            else if (user.booksId.length > 2) {
                res.json('Нельзя арендовать больше 3-х книг одновременно')
            } else if (book.userId !== null) {
                res.json('Эта книга уже арендована другим пользователем')
            } else {
                await User.findByIdAndUpdate(req.params.userid, {
                    $push: { booksId: req.params.bookid }
                })
                await Book.updateOne({
                    userId: req.params.userid
                })
                res.json('Вы арендовали книгу')
            }
        } catch (error) {
            res.json(error.message)
        }
    },
    blockUser: async (req, res) => {
        await User.findByIdAndUpdate(req.params.userid, {
            booksId: [],
            isBlocked: true,
        })
        await Book.find({ userId: req.params.userid }).updateMany({ userId: null })
        res.json('Юзер заблокирован')
    },
    giveTheBook: async (req, res) => {
        const user = await User.findById(req.params.userid)
        try {
            if (!user.booksId.includes(req.params.bookid)) {
                res.json('У вас нету этой книги')
            } else {
                await User.findByIdAndUpdate(req.params.userid, {
                    $pull: { bookId: req.params.bookid }
                })
                await Book.findByIdAndUpdate(req.params.bookid,
                    { userId: null }
                )
                res.json('Вы вернули книгу')
            }
        } catch (error) {
            res.json(error.message)
        }
    }
}